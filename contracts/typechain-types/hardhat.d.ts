/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1822ProxiableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1967Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967Upgradeable__factory>;
    getContractFactory(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeaconUpgradeable__factory>;
    getContractFactory(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "ERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Upgradeable__factory>;
    getContractFactory(
      name: "IERC20MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "MyTokenV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyTokenV1__factory>;
    getContractFactory(
      name: "MyTokenV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyTokenV2__factory>;
    getContractFactory(
      name: "OriginalContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OriginalContract__factory>;
    getContractFactory(
      name: "ProxyContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyContract__factory>;
    getContractFactory(
      name: "UpgradedContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradedContract__factory>;

    getContractAt(
      name: "OwnableUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IERC1822ProxiableUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    getContractAt(
      name: "IERC1967Upgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1967Upgradeable>;
    getContractAt(
      name: "IBeaconUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeaconUpgradeable>;
    getContractAt(
      name: "ERC1967UpgradeUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "ERC20Upgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Upgradeable>;
    getContractAt(
      name: "IERC20MetadataUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20MetadataUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "MyTokenV1",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MyTokenV1>;
    getContractAt(
      name: "MyTokenV2",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MyTokenV2>;
    getContractAt(
      name: "OriginalContract",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.OriginalContract>;
    getContractAt(
      name: "ProxyContract",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyContract>;
    getContractAt(
      name: "UpgradedContract",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.UpgradedContract>;

    deployContract(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OwnableUpgradeable>;
    deployContract(
      name: "IERC1822ProxiableUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    deployContract(
      name: "IERC1967Upgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1967Upgradeable>;
    deployContract(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IBeaconUpgradeable>;
    deployContract(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    deployContract(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Initializable>;
    deployContract(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UUPSUpgradeable>;
    deployContract(
      name: "ERC20Upgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Upgradeable>;
    deployContract(
      name: "IERC20MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20MetadataUpgradeable>;
    deployContract(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Upgradeable>;
    deployContract(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ContextUpgradeable>;
    deployContract(
      name: "MyTokenV1",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyTokenV1>;
    deployContract(
      name: "MyTokenV2",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyTokenV2>;
    deployContract(
      name: "OriginalContract",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OriginalContract>;
    deployContract(
      name: "ProxyContract",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ProxyContract>;
    deployContract(
      name: "UpgradedContract",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UpgradedContract>;

    deployContract(
      name: "OwnableUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OwnableUpgradeable>;
    deployContract(
      name: "IERC1822ProxiableUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    deployContract(
      name: "IERC1967Upgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1967Upgradeable>;
    deployContract(
      name: "IBeaconUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IBeaconUpgradeable>;
    deployContract(
      name: "ERC1967UpgradeUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    deployContract(
      name: "Initializable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Initializable>;
    deployContract(
      name: "UUPSUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UUPSUpgradeable>;
    deployContract(
      name: "ERC20Upgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Upgradeable>;
    deployContract(
      name: "IERC20MetadataUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20MetadataUpgradeable>;
    deployContract(
      name: "IERC20Upgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Upgradeable>;
    deployContract(
      name: "ContextUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ContextUpgradeable>;
    deployContract(
      name: "MyTokenV1",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyTokenV1>;
    deployContract(
      name: "MyTokenV2",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyTokenV2>;
    deployContract(
      name: "OriginalContract",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OriginalContract>;
    deployContract(
      name: "ProxyContract",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ProxyContract>;
    deployContract(
      name: "UpgradedContract",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UpgradedContract>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}