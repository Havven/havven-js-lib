import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan/DappMaintenance';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function DappMaintenance(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['DappMaintenance'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Transaction (consumes gas, requires signer)
   * @param isPaused {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setMaintenanceModeMintr = async (isPaused, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaintenanceModeMintr(isPaused, txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param isPaused {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setMaintenanceModeAll = async (isPaused, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaintenanceModeAll(isPaused, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.isPausedMintr = async () => {
    return await this.contract.isPausedMintr();
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
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    return await this.contract.acceptOwnership(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.isPausedSX = async () => {
    return await this.contract.isPausedSX();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param isPaused {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setMaintenanceModeSX = async (isPaused, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaintenanceModeSX(isPaused, txParams);
  };
}

export default DappMaintenance;
