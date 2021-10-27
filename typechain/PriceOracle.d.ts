/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PriceOracleInterface extends ethers.utils.Interface {
  functions: {
    "getAssetPrice(address)": FunctionFragment;
    "getEthUsdPrice()": FunctionFragment;
    "setAssetPrice(address,uint256)": FunctionFragment;
    "setEthUsdPrice(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getEthUsdPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAssetPrice",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setEthUsdPrice",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEthUsdPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEthUsdPrice",
    data: BytesLike
  ): Result;

  events: {
    "AssetPriceUpdated(address,uint256,uint256)": EventFragment;
    "EthPriceUpdated(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetPriceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EthPriceUpdated"): EventFragment;
}

export type AssetPriceUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    _asset: string;
    _price: BigNumber;
    timestamp: BigNumber;
  }
>;

export type EthPriceUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber] & { _price: BigNumber; timestamp: BigNumber }
>;

export class PriceOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PriceOracleInterface;

  functions: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getEthUsdPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    setAssetPrice(
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEthUsdPrice(
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getAssetPrice(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;

  setAssetPrice(
    _asset: string,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEthUsdPrice(
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;

    setAssetPrice(
      _asset: string,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setEthUsdPrice(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AssetPriceUpdated(address,uint256,uint256)"(
      _asset?: null,
      _price?: null,
      timestamp?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _asset: string; _price: BigNumber; timestamp: BigNumber }
    >;

    AssetPriceUpdated(
      _asset?: null,
      _price?: null,
      timestamp?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _asset: string; _price: BigNumber; timestamp: BigNumber }
    >;

    "EthPriceUpdated(uint256,uint256)"(
      _price?: null,
      timestamp?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { _price: BigNumber; timestamp: BigNumber }
    >;

    EthPriceUpdated(
      _price?: null,
      timestamp?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { _price: BigNumber; timestamp: BigNumber }
    >;
  };

  estimateGas: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;

    setAssetPrice(
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEthUsdPrice(
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEthUsdPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAssetPrice(
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEthUsdPrice(
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}