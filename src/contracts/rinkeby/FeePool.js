import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/rinkeby/FeePool';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function FeePool(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['ProxyFeePool'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Transaction (consumes gas, requires signer)
   * @param _feePeriodDuration {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setFeePeriodDuration = async (_feePeriodDuration, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFeePeriodDuration(_feePeriodDuration, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _feePoolState {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFeePoolState = async (_feePoolState, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFeePoolState(_feePoolState, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param period {BigNumber}
   * @returns BigNumber
   **/
  this.effectiveDebtRatioForPeriod = async (account, period) => {
    return await this.contract.effectiveDebtRatioForPeriod(account, period);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.exchangeFeeRate = async () => {
    return await this.contract.exchangeFeeRate();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes4}
   * @returns Object
   **/
  this.feesAvailable = async (account, currencyKey) => {
    return await this.contract.feesAvailable(account, currencyKey);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _owner {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.nominateNewOwner = async (_owner, txParams) => {
    txParams = txParams || {};
    return await this.contract.nominateNewOwner(_owner, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _beneficiary {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSelfDestructBeneficiary = async (_beneficiary, txParams) => {
    txParams = txParams || {};
    return await this.contract.setSelfDestructBeneficiary(_beneficiary, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.feePeriodDuration = async () => {
    return await this.contract.feePeriodDuration();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.feeAuthority = async () => {
    return await this.contract.feeAuthority();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.terminateSelfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.terminateSelfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns uint256[2][6]
   **/
  this.feesByPeriod = async account => {
    return await this.contract.feesByPeriod(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.transferFeeRate = async () => {
    return await this.contract.transferFeeRate();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.closeCurrentFeePeriod = async txParams => {
    txParams = txParams || {};
    return await this.contract.closeCurrentFeePeriod(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns Object
   **/
  this.recentFeePeriods = async uint256_1 => {
    return await this.contract.recentFeePeriods(uint256_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _exchangeFeeRate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setExchangeFeeRate = async (_exchangeFeeRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setExchangeFeeRate(_exchangeFeeRate, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes4}
   * @returns BigNumber
   **/
  this.totalFeesAvailable = async currencyKey => {
    return await this.contract.totalFeesAvailable(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.nextFeePeriodId = async () => {
    return await this.contract.nextFeePeriodId();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalRewardsAvailable = async () => {
    return await this.contract.totalRewardsAvailable();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.synthetix = async () => {
    return await this.contract.synthetix();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_TRANSFER_FEE_RATE = async () => {
    return await this.contract.MAX_TRANSFER_FEE_RATE();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    return await this.contract.acceptOwnership(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param debtRatio {BigNumber}
   * @param debtEntryIndex {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.appendAccountIssuanceRecord = async (account, debtRatio, debtEntryIndex, txParams) => {
    txParams = txParams || {};
    return await this.contract.appendAccountIssuanceRecord(
      account,
      debtRatio,
      debtEntryIndex,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _feeAuthority {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFeeAuthority = async (_feeAuthority, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFeeAuthority(_feeAuthority, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns BigNumber
   **/
  this.lastFeeWithdrawal = async address_1 => {
    return await this.contract.lastFeeWithdrawal(address_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _proxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setProxy = async (_proxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setProxy(_proxy, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.selfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.selfDestruct(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes4}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.feePaid = async (currencyKey, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.feePaid(currencyKey, amount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.rewardEscrow = async () => {
    return await this.contract.rewardEscrow();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param feePeriodIndex {BigNumber}
   * @param feePeriodId {BigNumber}
   * @param startingDebtIndex {BigNumber}
   * @param startTime {BigNumber}
   * @param feesToDistribute {BigNumber}
   * @param feesClaimed {BigNumber}
   * @param rewardsToDistribute {BigNumber}
   * @param rewardsClaimed {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.importFeePeriod = async (
    feePeriodIndex,
    feePeriodId,
    startingDebtIndex,
    startTime,
    feesToDistribute,
    feesClaimed,
    rewardsToDistribute,
    rewardsClaimed,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.importFeePeriod(
      feePeriodIndex,
      feePeriodId,
      startingDebtIndex,
      startTime,
      feesToDistribute,
      feesClaimed,
      rewardsToDistribute,
      rewardsClaimed,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.exchangedAmountToReceive = async value => {
    return await this.contract.exchangedAmountToReceive(value);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.amountReceivedFromTransfer = async value => {
    return await this.contract.amountReceivedFromTransfer(value);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param sender {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setMessageSender = async (sender, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMessageSender(sender, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.initiateSelfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.initiateSelfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _transferFeeRate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setTransferFeeRate = async (_transferFeeRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setTransferFeeRate(_transferFeeRate, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.exchangeFeeIncurred = async value => {
    return await this.contract.exchangeFeeIncurred(value);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes4}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.claimFees = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.claimFees(currencyKey, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.currentPenalty = async account => {
    return await this.contract.currentPenalty(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.FEE_PERIOD_LENGTH = async () => {
    return await this.contract.FEE_PERIOD_LENGTH();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MIN_FEE_PERIOD_DURATION = async () => {
    return await this.contract.MIN_FEE_PERIOD_DURATION();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.transferFeeIncurred = async value => {
    return await this.contract.transferFeeIncurred(value);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.synthetixState = async () => {
    return await this.contract.synthetixState();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.amountReceivedFromExchange = async value => {
    return await this.contract.amountReceivedFromExchange(value);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.feePoolState = async () => {
    return await this.contract.feePoolState();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.rewardsMinted = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.rewardsMinted(amount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.transferredAmountToReceive = async value => {
    return await this.contract.transferredAmountToReceive(value);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.FEE_ADDRESS = async () => {
    return await this.contract.FEE_ADDRESS();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.proxy = async () => {
    return await this.contract.proxy();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_FEE_PERIOD_DURATION = async () => {
    return await this.contract.MAX_FEE_PERIOD_DURATION();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_EXCHANGE_FEE_RATE = async () => {
    return await this.contract.MAX_EXCHANGE_FEE_RATE();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _synthetix {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSynthetix = async (_synthetix, txParams) => {
    txParams = txParams || {};
    return await this.contract.setSynthetix(_synthetix, txParams);
  };
}

export default FeePool;
