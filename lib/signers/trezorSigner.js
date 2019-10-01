import EthereumTx from 'ethereumjs-tx';

import TrezorConnect from 'trezor-connect';
import { getTransactionFields } from './txUtils';
import { utils, getDefaultProvider, Signer } from 'ethers';

TrezorConnect.manifest({
  email: 'info@synthetix.io',
  appUrl: 'https://www.synthetix.io',
});

const TREZOR_DERIVATION_PATH = "m/44'/60'/0'/0/";

class TrezorSigner extends Signer {
  constructor({ provider, chainId, addressIndex, derivationPath }) {
    super();
    this.provider = provider || getDefaultProvider();
    this.chainId = chainId || 1;
    this.addressIndex = addressIndex || 0;
    this.cachedAddresses = [];
    this.addressLoaderBusy = false;
    this.sign = this.sign.bind(this);
    this.setAddressIndex = this.setAddressIndex.bind(this);
    this.getNextAddresses = this.getNextAddresses.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.derivationPath = derivationPath || TREZOR_DERIVATION_PATH;
  }

  async sign(transaction) {
    if (transaction.value) {
      transaction.value = transaction.value.toHexString();
    }
    transaction.gasPrice = utils.hexlify(transaction.gasPrice);
    if (!transaction.chainId) {
      transaction.chainId = this.chainId;
    }
    const tx = new EthereumTx(transaction);
    const txFields = getTransactionFields(tx);
    const signature = await TrezorConnect.ethereumSignTransaction({
      transaction: txFields,
      path: this.derivationPath + this.addressIndex,
    });
    const txToSerialize = {
      ...txFields,
      ...signature.payload,
    };
    return '0x' + new EthereumTx(txToSerialize).serialize().toString('hex');
  }

  setAddressIndex(addressIndex) {
    this.addressIndex = addressIndex;
  }

  async getAddress() {
    if (this.cachedAddresses && this.addressIndex <= this.cachedAddresses.length) {
      return this.cachedAddresses[this.addressIndex];
    }
    this.cachedAddresses[this.addressIndex] = (await TrezorConnect.ethereumGetAddress({
      path: this.derivationPath + this.addressIndex,
      showOnTrezor: false,
    })).payload.address;
    return this.cachedAddresses[this.addressIndex];
  }

  async getNextAddresses(fromAddressIndex, pageSize) {
    try {
      fromAddressIndex = fromAddressIndex || 0;
      pageSize = pageSize || 5;
      const toAddressIndex = fromAddressIndex + pageSize;
      if (this.addressLoaderBusy)
        return this.cachedAddresses.slice(fromAddressIndex, toAddressIndex);
      this.addressLoaderBusy = true;
      if (this.cachedAddresses.length >= toAddressIndex) {
        return this.cachedAddresses.slice(fromAddressIndex, toAddressIndex);
      }
      const bundle = [];
      for (let i = 0; i < pageSize; i++) {
        bundle.push({
          path: this.derivationPath + (fromAddressIndex + i),
          showOnTrezor: false,
        });
      }
      const result = await TrezorConnect.ethereumGetAddress({
        bundle,
      });
      this.cachedAddresses.push(...result.payload.map(item => item.address));
      return this.cachedAddresses.slice(fromAddressIndex, toAddressIndex);
    } catch (e) {
      console.log(e);
    } finally {
      this.addressLoaderBusy = false;
    }
  }

  async sendTransaction(transaction) {
    const fromAddress = await this.getAddress();
    const populatedTransaction = await utils.populateTransaction(
      transaction,
      this.provider,
      fromAddress
    );
    const signedTransaction = await this.sign(populatedTransaction);
    return await this.provider.sendTransaction(signedTransaction);
  }
}

export default TrezorSigner;
