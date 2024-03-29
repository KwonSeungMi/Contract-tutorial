/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface OriginalContractInterface extends Interface {
  getFunction(
    nameOrSignature: "data" | "getData" | "setData"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "data", values?: undefined): string;
  encodeFunctionData(functionFragment: "getData", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setData",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "data", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setData", data: BytesLike): Result;
}

export interface OriginalContract extends BaseContract {
  connect(runner?: ContractRunner | null): OriginalContract;
  waitForDeployment(): Promise<this>;

  interface: OriginalContractInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  data: TypedContractMethod<[], [bigint], "view">;

  getData: TypedContractMethod<[], [bigint], "view">;

  setData: TypedContractMethod<[_data: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "data"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getData"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setData"
  ): TypedContractMethod<[_data: BigNumberish], [void], "nonpayable">;

  filters: {};
}
