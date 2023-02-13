/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../common'

export declare namespace Airdrop {
  export type InfoAirdropStruct = {
    timeClaim: PromiseOrValue<BigNumberish>
    amount: PromiseOrValue<BigNumberish>
    receiver: PromiseOrValue<string>
  }

  export type InfoAirdropStructOutput = [BigNumber, BigNumber, string] & {
    timeClaim: BigNumber
    amount: BigNumber
    receiver: string
  }
}

export interface AirdropInterface extends utils.Interface {
  functions: {
    '_tokenIds()': FunctionFragment
    'amountClaim()': FunctionFragment
    'claimAirdrop()': FunctionFragment
    'getInfoAirdrop(address)': FunctionFragment
    'indexOfAirdrops(address)': FunctionFragment
    'infoAirdrops(uint256)': FunctionFragment
    'initByOwner(bool,uint256,address)': FunctionFragment
    'initialize()': FunctionFragment
    'isClaim()': FunctionFragment
    'isRegisteredAirdrop(address)': FunctionFragment
    'listInfoAirdrop(uint256,uint256)': FunctionFragment
    'owner()': FunctionFragment
    'pause()': FunctionFragment
    'paused()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'setAirdrop(address[],uint256[])': FunctionFragment
    'setAirdropDefault(address[])': FunctionFragment
    'setAmountClaim(uint256)': FunctionFragment
    'setIBEP20(address)': FunctionFragment
    'setIsClaim(bool)': FunctionFragment
    'token()': FunctionFragment
    'transferOwnership(address)': FunctionFragment
    'unpause()': FunctionFragment
    'withdraw()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | '_tokenIds'
      | 'amountClaim'
      | 'claimAirdrop'
      | 'getInfoAirdrop'
      | 'indexOfAirdrops'
      | 'infoAirdrops'
      | 'initByOwner'
      | 'initialize'
      | 'isClaim'
      | 'isRegisteredAirdrop'
      | 'listInfoAirdrop'
      | 'owner'
      | 'pause'
      | 'paused'
      | 'renounceOwnership'
      | 'setAirdrop'
      | 'setAirdropDefault'
      | 'setAmountClaim'
      | 'setIBEP20'
      | 'setIsClaim'
      | 'token'
      | 'transferOwnership'
      | 'unpause'
      | 'withdraw',
  ): FunctionFragment

  encodeFunctionData(functionFragment: '_tokenIds', values?: undefined): string
  encodeFunctionData(functionFragment: 'amountClaim', values?: undefined): string
  encodeFunctionData(functionFragment: 'claimAirdrop', values?: undefined): string
  encodeFunctionData(functionFragment: 'getInfoAirdrop', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'indexOfAirdrops', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'infoAirdrops', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(
    functionFragment: 'initByOwner',
    values: [PromiseOrValue<boolean>, PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string
  encodeFunctionData(functionFragment: 'initialize', values?: undefined): string
  encodeFunctionData(functionFragment: 'isClaim', values?: undefined): string
  encodeFunctionData(functionFragment: 'isRegisteredAirdrop', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'listInfoAirdrop',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'pause', values?: undefined): string
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'setAirdrop',
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]],
  ): string
  encodeFunctionData(functionFragment: 'setAirdropDefault', values: [PromiseOrValue<string>[]]): string
  encodeFunctionData(functionFragment: 'setAmountClaim', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'setIBEP20', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'setIsClaim', values: [PromiseOrValue<boolean>]): string
  encodeFunctionData(functionFragment: 'token', values?: undefined): string
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'unpause', values?: undefined): string
  encodeFunctionData(functionFragment: 'withdraw', values?: undefined): string

  decodeFunctionResult(functionFragment: '_tokenIds', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'amountClaim', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'claimAirdrop', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getInfoAirdrop', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'indexOfAirdrops', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'infoAirdrops', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initByOwner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isClaim', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isRegisteredAirdrop', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'listInfoAirdrop', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setAirdrop', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setAirdropDefault', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setAmountClaim', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setIBEP20', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setIsClaim', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'unpause', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result

  events: {
    'OwnershipTransferred(address,address)': EventFragment
    'Paused(address)': EventFragment
    'Unpaused(address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment
}

export interface OwnershipTransferredEventObject {
  previousOwner: string
  newOwner: string
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>

export interface PausedEventObject {
  account: string
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>

export type PausedEventFilter = TypedEventFilter<PausedEvent>

export interface UnpausedEventObject {
  account: string
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>

export interface Airdrop extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: AirdropInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    _tokenIds(overrides?: CallOverrides): Promise<[BigNumber] & { _value: BigNumber }>

    amountClaim(overrides?: CallOverrides): Promise<[BigNumber]>

    claimAirdrop(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

    getInfoAirdrop(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber] & {
        _timeClaim: BigNumber
        _amount: BigNumber
        _receiver: string
        _index: BigNumber
      }
    >

    indexOfAirdrops(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>

    infoAirdrops(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, string] & {
        timeClaim: BigNumber
        amount: BigNumber
        receiver: string
      }
    >

    initByOwner(
      _isClaim: PromiseOrValue<boolean>,
      _amountClaim: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>

    initialize(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

    isClaim(overrides?: CallOverrides): Promise<[boolean]>

    isRegisteredAirdrop(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>

    listInfoAirdrop(
      from: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[Airdrop.InfoAirdropStructOutput[]]>

    owner(overrides?: CallOverrides): Promise<[string]>

    pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

    paused(overrides?: CallOverrides): Promise<[boolean]>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

    setAirdrop(
      _recipients: PromiseOrValue<string>[],
      _amountClaims: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>

    setAirdropDefault(
      _recipients: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>

    setAmountClaim(
      _amountClaim: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>

    setIBEP20(
      _tokenBEP20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>

    setIsClaim(
      _isClaim: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>

    token(overrides?: CallOverrides): Promise<[string]>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>

    unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>
  }

  _tokenIds(overrides?: CallOverrides): Promise<BigNumber>

  amountClaim(overrides?: CallOverrides): Promise<BigNumber>

  claimAirdrop(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  getInfoAirdrop(
    sender: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, string, BigNumber] & {
      _timeClaim: BigNumber
      _amount: BigNumber
      _receiver: string
      _index: BigNumber
    }
  >

  indexOfAirdrops(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  infoAirdrops(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, string] & {
      timeClaim: BigNumber
      amount: BigNumber
      receiver: string
    }
  >

  initByOwner(
    _isClaim: PromiseOrValue<boolean>,
    _amountClaim: PromiseOrValue<BigNumberish>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>

  initialize(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  isClaim(overrides?: CallOverrides): Promise<boolean>

  isRegisteredAirdrop(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

  listInfoAirdrop(
    from: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<Airdrop.InfoAirdropStructOutput[]>

  owner(overrides?: CallOverrides): Promise<string>

  pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  paused(overrides?: CallOverrides): Promise<boolean>

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  setAirdrop(
    _recipients: PromiseOrValue<string>[],
    _amountClaims: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>

  setAirdropDefault(
    _recipients: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>

  setAmountClaim(
    _amountClaim: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>

  setIBEP20(
    _tokenBEP20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>

  setIsClaim(
    _isClaim: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>

  token(overrides?: CallOverrides): Promise<string>

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>

  unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  callStatic: {
    _tokenIds(overrides?: CallOverrides): Promise<BigNumber>

    amountClaim(overrides?: CallOverrides): Promise<BigNumber>

    claimAirdrop(overrides?: CallOverrides): Promise<void>

    getInfoAirdrop(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber] & {
        _timeClaim: BigNumber
        _amount: BigNumber
        _receiver: string
        _index: BigNumber
      }
    >

    indexOfAirdrops(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    infoAirdrops(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, string] & {
        timeClaim: BigNumber
        amount: BigNumber
        receiver: string
      }
    >

    initByOwner(
      _isClaim: PromiseOrValue<boolean>,
      _amountClaim: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>

    initialize(overrides?: CallOverrides): Promise<void>

    isClaim(overrides?: CallOverrides): Promise<boolean>

    isRegisteredAirdrop(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

    listInfoAirdrop(
      from: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<Airdrop.InfoAirdropStructOutput[]>

    owner(overrides?: CallOverrides): Promise<string>

    pause(overrides?: CallOverrides): Promise<void>

    paused(overrides?: CallOverrides): Promise<boolean>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    setAirdrop(
      _recipients: PromiseOrValue<string>[],
      _amountClaims: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<void>

    setAirdropDefault(_recipients: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>

    setAmountClaim(_amountClaim: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    setIBEP20(_tokenBEP20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    setIsClaim(_isClaim: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>

    token(overrides?: CallOverrides): Promise<string>

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    unpause(overrides?: CallOverrides): Promise<void>

    withdraw(overrides?: CallOverrides): Promise<void>
  }

  filters: {
    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter

    'Paused(address)'(account?: null): PausedEventFilter
    Paused(account?: null): PausedEventFilter

    'Unpaused(address)'(account?: null): UnpausedEventFilter
    Unpaused(account?: null): UnpausedEventFilter
  }

  estimateGas: {
    _tokenIds(overrides?: CallOverrides): Promise<BigNumber>

    amountClaim(overrides?: CallOverrides): Promise<BigNumber>

    claimAirdrop(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    getInfoAirdrop(sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    indexOfAirdrops(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    infoAirdrops(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    initByOwner(
      _isClaim: PromiseOrValue<boolean>,
      _amountClaim: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>

    initialize(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    isClaim(overrides?: CallOverrides): Promise<BigNumber>

    isRegisteredAirdrop(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    listInfoAirdrop(
      from: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    paused(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    setAirdrop(
      _recipients: PromiseOrValue<string>[],
      _amountClaims: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>

    setAirdropDefault(
      _recipients: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>

    setAmountClaim(
      _amountClaim: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>

    setIBEP20(
      _tokenBEP20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>

    setIsClaim(
      _isClaim: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>

    token(overrides?: CallOverrides): Promise<BigNumber>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>

    unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>
  }

  populateTransaction: {
    _tokenIds(overrides?: CallOverrides): Promise<PopulatedTransaction>

    amountClaim(overrides?: CallOverrides): Promise<PopulatedTransaction>

    claimAirdrop(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>

    getInfoAirdrop(sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    indexOfAirdrops(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    infoAirdrops(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    initByOwner(
      _isClaim: PromiseOrValue<boolean>,
      _amountClaim: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>

    initialize(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>

    isClaim(overrides?: CallOverrides): Promise<PopulatedTransaction>

    isRegisteredAirdrop(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    listInfoAirdrop(
      from: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>

    setAirdrop(
      _recipients: PromiseOrValue<string>[],
      _amountClaims: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>

    setAirdropDefault(
      _recipients: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>

    setAmountClaim(
      _amountClaim: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>

    setIBEP20(
      _tokenBEP20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>

    setIsClaim(
      _isClaim: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>

    unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>
  }
}