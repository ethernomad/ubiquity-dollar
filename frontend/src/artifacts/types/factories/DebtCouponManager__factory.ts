/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { DebtCouponManager } from "../DebtCouponManager";

export class DebtCouponManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _manager: string,
    _couponLengthBlocks: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DebtCouponManager> {
    return super.deploy(
      _manager,
      _couponLengthBlocks,
      overrides || {}
    ) as Promise<DebtCouponManager>;
  }
  getDeployTransaction(
    _manager: string,
    _couponLengthBlocks: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _manager,
      _couponLengthBlocks,
      overrides || {}
    );
  }
  attach(address: string): DebtCouponManager {
    return super.attach(address) as DebtCouponManager;
  }
  connect(signer: Signer): DebtCouponManager__factory {
    return super.connect(signer) as DebtCouponManager__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DebtCouponManager {
    return new Contract(address, _abi, signerOrProvider) as DebtCouponManager;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_couponLengthBlocks",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newCouponLengthBlocks",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousCouponLengthBlocks",
        type: "uint256",
      },
    ],
    name: "CouponLengthChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousRate",
        type: "uint256",
      },
    ],
    name: "ExpiredCouponConvertionRateChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "blockHeightDebt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnAutoRedeemTokensForDollars",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnCouponsForAutoRedemption",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnExpiredCouponsForUGOV",
    outputs: [
      {
        internalType: "uint256",
        name: "uGovAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "couponLengthBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "debtCycle",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dollarsMintedThisCycle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "exchangeDollarsForDebtCoupons",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "exchangeDollarsForUAR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "expiredCouponConvertionRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getCouponsReturnedForDollars",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getUARReturnedForDollars",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "contract UbiquityAlgorithmicDollarManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintClaimableDollars",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "redeemCoupons",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_couponLengthBlocks",
        type: "uint256",
      },
    ],
    name: "setCouponLength",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "setExpiredCouponConvertionRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260026005553480156200001657600080fd5b506040516200319a3803806200319a833981016040819052620000399162000063565b600080546001600160a01b0319166001600160a01b0393909316929092179091556004556200009d565b6000806040838503121562000076578182fd5b82516001600160a01b03811681146200008d578283fd5b6020939093015192949293505050565b6130ed80620000ad6000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c8063816dbc4a116100cd578063bdd5d4b211610081578063cfc893fd11610066578063cfc893fd146102ee578063d6a9cf0814610301578063f23a6e61146103145761016c565b8063bdd5d4b2146102d2578063be30446d146102db5761016c565b806399c62889116100b257806399c6288914610277578063aac8e39a1461028a578063bc197c811461029d5761016c565b8063816dbc4a1461025b57806384800d651461026e5761016c565b80632565aa42116101245780634c5cac58116101095780634c5cac581461022c57806367a6847d146102355780636938c414146102485761016c565b80632565aa42146101f7578063481c6a75146102015761016c565b80630cb03046116101555780630cb03046146101c45780631adb4d32146101d75780631ce83f50146101ea5761016c565b806301ffc9a71461017157806302127499146101ad575b600080fd5b61019861017f366004613002565b6001600160e01b031981166301ffc9a760e01b14919050565b60405190151581526020015b60405180910390f35b6101b660055481565b6040519081526020016101a4565b6101b66101d236600461302a565b610327565b6101b66101e536600461302a565b6107bb565b6002546101989060ff1681565b6101ff610c1c565b005b600054610214906001600160a01b031681565b6040516001600160a01b0390911681526020016101a4565b6101b660035481565b6101b661024336600461302a565b6112e8565b6101b6610256366004613042565b6116e5565b6101ff61026936600461302a565b611ad1565b6101b660045481565b6101b6610285366004613042565b611c59565b6101b661029836600461302a565b611f5d565b6102b96102ab366004612e95565b600098975050505050505050565b6040516001600160e01b031990911681526020016101a4565b6101b660015481565b6101b66102e936600461302a565b612068565b6101ff6102fc36600461302a565b612115565b6101b661030f366004613042565b61229d565b6102b9610322366004612f50565b612a46565b600080610332612b84565b9050670de0b6b3a7640000811161039c5760405162461bcd60e51b8152602060048201526024808201527f5072696365206d7573742062652061626f7665203120746f206175746f2072656044820152636465656d60e01b60648201526084015b60405180910390fd5b60025460ff16156103b2576002805460ff191690555b60008060009054906101000a90046001600160a01b03166001600160a01b0316633ae3d9a46040518163ffffffff1660e01b815260040160206040518083038186803b15801561040157600080fd5b505afa158015610415573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104399190612e79565b6040516370a0823160e01b815233600482015290915084906001600160a01b038316906370a082319060240160206040518083038186803b15801561047d57600080fd5b505afa158015610491573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b59190612fea565b10156105295760405162461bcd60e51b815260206004820152603160248201527f5573657220646f65736e2774206861766520656e6f756768206175746f20726560448201527f6465656d20706f6f6c20746f6b656e732e0000000000000000000000000000006064820152608401610393565b60008060009054906101000a90046001600160a01b03166001600160a01b031663bc2ec02f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561057857600080fd5b505afa15801561058c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b09190612e79565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038316906370a082319060240160206040518083038186803b1580156105f557600080fd5b505afa158015610609573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062d9190612fea565b9050600081116106b95761063f610c1c565b6040516370a0823160e01b81523060048201526001600160a01b038316906370a082319060240160206040518083038186803b15801561067e57600080fd5b505afa158015610692573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b69190612fea565b90505b85818111156106c55750805b60405163079cc67960e41b8152336004820152602481018290526001600160a01b038516906379cc679090604401600060405180830381600087803b15801561070d57600080fd5b505af1158015610721573d6000803e3d6000fd5b505060405163a9059cbb60e01b8152336004820152602481018490526001600160a01b038616925063a9059cbb9150604401602060405180830381600087803b15801561076d57600080fd5b505af1158015610781573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a59190612fca565b506107b0818861309b565b979650505050505050565b6000806107c6612b84565b9050670de0b6b3a764000081106108295760405162461bcd60e51b815260206004820152602160248201527f5072696365206d7573742062652062656c6f77203120746f206d696e742075416044820152602960f91b6064820152608401610393565b60008060009054906101000a90046001600160a01b03166001600160a01b03166356593ea36040518163ffffffff1660e01b815260040160206040518083038186803b15801561087857600080fd5b505afa15801561088c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b09190612e79565b9050806001600160a01b031663f7ffe84a6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156108ed57600080fd5b505af1158015610901573d6000803e3d6000fd5b505060025460ff16915061092a9050576002805460ff1916600190811790915543600355600090555b60008060009054906101000a90046001600160a01b03166001600160a01b031663749cface6040518163ffffffff1660e01b815260040160206040518083038186803b15801561097957600080fd5b505afa15801561098d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b19190612e79565b600354604051633667d85960e01b81529192506000916001600160a01b03841691633667d859916109ef918a91600401918252602082015260400190565b60206040518083038186803b158015610a0757600080fd5b505afa158015610a1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3f9190612fea565b905060008054906101000a90046001600160a01b03166001600160a01b031663bc2ec02f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a8d57600080fd5b505afa158015610aa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac59190612e79565b60405163079cc67960e41b8152336004820152602481018890526001600160a01b0391909116906379cc679090604401600060405180830381600087803b158015610b0f57600080fd5b505af1158015610b23573d6000803e3d6000fd5b5050505060008060009054906101000a90046001600160a01b03166001600160a01b0316633ae3d9a46040518163ffffffff1660e01b815260040160206040518083038186803b158015610b7657600080fd5b505afa158015610b8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bae9190612e79565b6040516340c10f1960e01b8152336004820152602481018490529091506001600160a01b038216906340c10f1990604401600060405180830381600087803b158015610bf957600080fd5b505af1158015610c0d573d6000803e3d6000fd5b50939998505050505050505050565b60008060009054906101000a90046001600160a01b03166001600160a01b03166356593ea36040518163ffffffff1660e01b815260040160206040518083038186803b158015610c6b57600080fd5b505afa158015610c7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca39190612e79565b9050806001600160a01b031663f7ffe84a6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610ce057600080fd5b505af1158015610cf4573d6000803e3d6000fd5b5050505060008060009054906101000a90046001600160a01b03166001600160a01b03166359f6deac6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d4757600080fd5b505afa158015610d5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7f9190612e79565b6001600160a01b031663764263cf6040518163ffffffff1660e01b815260040160206040518083038186803b158015610db757600080fd5b505afa158015610dcb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610def9190612fea565b9050600060015482610e01919061309b565b90508160018190555060008060009054906101000a90046001600160a01b03166001600160a01b031663bc2ec02f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610e5957600080fd5b505afa158015610e6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e919190612e79565b6040516340c10f1960e01b8152306004820152602481018490529091506001600160a01b038216906340c10f1990604401600060405180830381600087803b158015610edc57600080fd5b505af1158015610ef0573d6000803e3d6000fd5b5050505060008060009054906101000a90046001600160a01b03166001600160a01b0316633ae3d9a46040518163ffffffff1660e01b815260040160206040518083038186803b158015610f4357600080fd5b505afa158015610f57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7b9190612e79565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038416906370a082319060240160206040518083038186803b158015610fc057600080fd5b505afa158015610fd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff89190612fea565b90506000826001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561103557600080fd5b505afa158015611049573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106d9190612fea565b876001600160a01b031663db87b1ff6040518163ffffffff1660e01b815260040160206040518083038186803b1580156110a657600080fd5b505afa1580156110ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110de9190612fea565b6110e89190613063565b9050808211156112df5760006110fe828461309b565b60008054604051632bbdaf8f60e21b815230600482015292935090916001600160a01b039091169063aef6be3c9060240160206040518083038186803b15801561114757600080fd5b505afa15801561115b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117f9190612e79565b600054604051632bbdaf8f60e21b81523060048201529192506001600160a01b038881169263a9059cbb92919091169063aef6be3c9060240160206040518083038186803b1580156111d057600080fd5b505afa1580156111e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112089190612e79565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101859052604401602060405180830381600087803b15801561125057600080fd5b505af1158015611264573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112889190612fca565b50806001600160a01b031663651156bc6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156112c457600080fd5b505af11580156112d8573d6000803e3d6000fd5b5050505050505b50505050505050565b6000806112f3612b84565b9050670de0b6b3a764000081106113725760405162461bcd60e51b815260206004820152602560248201527f5072696365206d7573742062652062656c6f77203120746f206d696e7420636f60448201527f75706f6e730000000000000000000000000000000000000000000000000000006064820152608401610393565b60008060009054906101000a90046001600160a01b03166001600160a01b03166356593ea36040518163ffffffff1660e01b815260040160206040518083038186803b1580156113c157600080fd5b505afa1580156113d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f99190612e79565b9050806001600160a01b031663f7ffe84a6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561143657600080fd5b505af115801561144a573d6000803e3d6000fd5b505060025460ff1691506114739050576002805460ff1916600190811790915543600355600090555b60008060009054906101000a90046001600160a01b03166001600160a01b0316633e916ced6040518163ffffffff1660e01b815260040160206040518083038186803b1580156114c257600080fd5b505afa1580156114d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114fa9190612e79565b604051639172dd2360e01b8152600481018790529091506000906001600160a01b03831690639172dd239060240160206040518083038186803b15801561154057600080fd5b505afa158015611554573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115789190612fea565b905060008054906101000a90046001600160a01b03166001600160a01b031663bc2ec02f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156115c657600080fd5b505afa1580156115da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115fe9190612e79565b60405163079cc67960e41b8152336004820152602481018890526001600160a01b0391909116906379cc679090604401600060405180830381600087803b15801561164857600080fd5b505af115801561165c573d6000803e3d6000fd5b505050506000600454436116709190613063565b60405163e71fc58f60e01b815233600482015260248101849052604481018290529091506001600160a01b0385169063e71fc58f90606401600060405180830381600087803b1580156116c257600080fd5b505af11580156116d6573d6000803e3d6000fd5b50929998505050505050505050565b60008054604080516356593ea360e01b8152905183926001600160a01b0316916356593ea3916004808301926020929190829003018186803b15801561172a57600080fd5b505afa15801561173e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117629190612e79565b90504284116117b35760405162461bcd60e51b815260206004820152601260248201527f436f75706f6e20686173206578706972656400000000000000000000000000006044820152606401610393565b604051627eeac760e11b81523360048201526024810185905283906001600160a01b0383169062fdd58e9060440160206040518083038186803b1580156117f957600080fd5b505afa15801561180d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118319190612fea565b101561187f5760405162461bcd60e51b815260206004820152601f60248201527f5573657220646f65736e74206861766520656e6f75676820636f75706f6e73006044820152606401610393565b60405163738f0cf160e01b815233600482015260248101849052604481018590526001600160a01b0382169063738f0cf190606401600060405180830381600087803b1580156118ce57600080fd5b505af11580156118e2573d6000803e3d6000fd5b5050505060008060009054906101000a90046001600160a01b03166001600160a01b0316633ae3d9a46040518163ffffffff1660e01b815260040160206040518083038186803b15801561193557600080fd5b505afa158015611949573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196d9190612e79565b6040516340c10f1960e01b8152306004820152602481018690529091506001600160a01b038216906340c10f1990604401600060405180830381600087803b1580156119b857600080fd5b505af11580156119cc573d6000803e3d6000fd5b505060405163a9059cbb60e01b8152336004820152602481018790526001600160a01b038416925063a9059cbb9150604401602060405180830381600087803b158015611a1857600080fd5b505af1158015611a2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a509190612fca565b506040516370a0823160e01b81523360048201526001600160a01b038216906370a082319060240160206040518083038186803b158015611a9057600080fd5b505afa158015611aa4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac89190612fea565b95945050505050565b6000546040805163520eeb7360e11b815290516001600160a01b03909216916391d1485491839163a41dd6e691600480820192602092909190829003018186803b158015611b1e57600080fd5b505afa158015611b32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b569190612fea565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b158015611b9357600080fd5b505afa158015611ba7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bcb9190612fca565b611c175760405162461bcd60e51b815260206004820152601e60248201527f43616c6c6572206973206e6f74206120636f75706f6e206d616e6167657200006044820152606401610393565b6004546040805183815260208101929092527f8d7edb0d3221793a3dbc5e9eb8bddfa027f936dcaac6116cc52319396a2026f9910160405180910390a1600455565b60008054604080516356593ea360e01b8152905183926001600160a01b0316916356593ea3916004808301926020929190829003018186803b158015611c9e57600080fd5b505afa158015611cb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cd69190612e79565b905043841115611d285760405162461bcd60e51b815260206004820152601660248201527f436f75706f6e20686173206e6f742065787069726564000000000000000000006044820152606401610393565b604051627eeac760e11b81523360048201526024810185905283906001600160a01b0383169062fdd58e9060440160206040518083038186803b158015611d6e57600080fd5b505afa158015611d82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611da69190612fea565b1015611df45760405162461bcd60e51b815260206004820152601f60248201527f5573657220646f65736e74206861766520656e6f75676820636f75706f6e73006044820152606401610393565b60405163738f0cf160e01b815233600482015260248101849052604481018590526001600160a01b0382169063738f0cf190606401600060405180830381600087803b158015611e4357600080fd5b505af1158015611e57573d6000803e3d6000fd5b5050505060008060009054906101000a90046001600160a01b03166001600160a01b0316636c6ae4806040518163ffffffff1660e01b815260040160206040518083038186803b158015611eaa57600080fd5b505afa158015611ebe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ee29190612e79565b905060055484611ef2919061307b565b6040516340c10f1960e01b8152336004820152602481018290529093506001600160a01b038216906340c10f1990604401600060405180830381600087803b158015611f3d57600080fd5b505af1158015611f51573d6000803e3d6000fd5b50505050505092915050565b6000805460408051633a4e7d6760e11b8152905183926001600160a01b03169163749cface916004808301926020929190829003018186803b158015611fa257600080fd5b505afa158015611fb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fda9190612e79565b600354604051633667d85960e01b81526004810186905260248101919091529091506001600160a01b03821690633667d859906044015b60206040518083038186803b15801561202957600080fd5b505afa15801561203d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120619190612fea565b9392505050565b6000805460408051633e916ced60e01b8152905183926001600160a01b031691633e916ced916004808301926020929190829003018186803b1580156120ad57600080fd5b505afa1580156120c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120e59190612e79565b604051639172dd2360e01b8152600481018590529091506001600160a01b03821690639172dd2390602401612011565b6000546040805163520eeb7360e11b815290516001600160a01b03909216916391d1485491839163a41dd6e691600480820192602092909190829003018186803b15801561216257600080fd5b505afa158015612176573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061219a9190612fea565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b1580156121d757600080fd5b505afa1580156121eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061220f9190612fca565b61225b5760405162461bcd60e51b815260206004820152601e60248201527f43616c6c6572206973206e6f74206120636f75706f6e206d616e6167657200006044820152606401610393565b6005546040805183815260208101929092527f6d4a1070b746d33746be28d0b5f40e4196cbd7ada8fcb77191f0a9209ae41a63910160405180910390a1600555565b6000806122a8612b84565b9050670de0b6b3a764000081116123275760405162461bcd60e51b815260206004820152602760248201527f5072696365206d7573742062652061626f7665203120746f2072656465656d2060448201527f636f75706f6e73000000000000000000000000000000000000000000000000006064820152608401610393565b60025460ff161561233d576002805460ff191690555b60008060009054906101000a90046001600160a01b03166001600160a01b03166356593ea36040518163ffffffff1660e01b815260040160206040518083038186803b15801561238c57600080fd5b505afa1580156123a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123c49190612e79565b90504385116124155760405162461bcd60e51b815260206004820152601260248201527f436f75706f6e20686173206578706972656400000000000000000000000000006044820152606401610393565b604051627eeac760e11b81523360048201526024810186905284906001600160a01b0383169062fdd58e9060440160206040518083038186803b15801561245b57600080fd5b505afa15801561246f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124939190612fea565b10156124e15760405162461bcd60e51b815260206004820152601f60248201527f5573657220646f65736e74206861766520656e6f75676820636f75706f6e73006044820152606401610393565b6124e9610c1c565b60008060009054906101000a90046001600160a01b03166001600160a01b031663bc2ec02f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561253857600080fd5b505afa15801561254c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125709190612e79565b905060008060009054906101000a90046001600160a01b03166001600160a01b0316633ae3d9a46040518163ffffffff1660e01b815260040160206040518083038186803b1580156125c157600080fd5b505afa1580156125d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125f99190612e79565b6040516370a0823160e01b81523060048201529091506001600160a01b038316906370a082319060240160206040518083038186803b15801561263b57600080fd5b505afa15801561264f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126739190612fea565b816001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156126ac57600080fd5b505afa1580156126c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e49190612fea565b11156127585760405162461bcd60e51b815260206004820152602b60248201527f5468657265206172656e277420656e6f7567682075414420746f20726564656560448201527f6d2063757272656e746c790000000000000000000000000000000000000000006064820152608401610393565b6000816001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561279357600080fd5b505afa1580156127a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127cb9190612fea565b6040516370a0823160e01b81523060048201526001600160a01b038516906370a082319060240160206040518083038186803b15801561280a57600080fd5b505afa15801561281e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128429190612fea565b61284c919061309b565b9050868181111561285a5750805b6040516370a0823160e01b81523060048201526000906001600160a01b038616906370a082319060240160206040518083038186803b15801561289c57600080fd5b505afa1580156128b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128d49190612fea565b116129475760405162461bcd60e51b815260206004820152602860248201527f5468657265206172656e277420616e792075414420746f2072656465656d206360448201527f757272656e746c790000000000000000000000000000000000000000000000006064820152608401610393565b60405163738f0cf160e01b815233600482015260248101829052604481018a90526001600160a01b0386169063738f0cf190606401600060405180830381600087803b15801561299657600080fd5b505af11580156129aa573d6000803e3d6000fd5b505060405163a9059cbb60e01b8152336004820152602481018490526001600160a01b038716925063a9059cbb9150604401602060405180830381600087803b1580156129f657600080fd5b505af1158015612a0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a2e9190612fca565b50612a39818961309b565b9998505050505050505050565b600080546040805163520eeb7360e11b815290516001600160a01b03909216916391d1485491839163a41dd6e691600480820192602092909190829003018186803b158015612a9457600080fd5b505afa158015612aa8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612acc9190612fea565b6040516001600160e01b031960e084901b16815260048101919091526001600160a01b038a16602482015260440160206040518083038186803b158015612b1257600080fd5b505afa158015612b26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b4a9190612fca565b15612b7657507ff23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf97612b7a565b5060005b9695505050505050565b60008060009054906101000a90046001600160a01b03166001600160a01b0316638fe636836040518163ffffffff1660e01b815260040160206040518083038186803b158015612bd357600080fd5b505afa158015612be7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c0b9190612e79565b6001600160a01b031663a2e620456040518163ffffffff1660e01b8152600401600060405180830381600087803b158015612c4557600080fd5b505af1158015612c59573d6000803e3d6000fd5b5050505060008054906101000a90046001600160a01b03166001600160a01b0316638fe636836040518163ffffffff1660e01b815260040160206040518083038186803b158015612ca957600080fd5b505afa158015612cbd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ce19190612e79565b6001600160a01b031663283583c660008054906101000a90046001600160a01b03166001600160a01b031663bc2ec02f6040518163ffffffff1660e01b815260040160206040518083038186803b158015612d3b57600080fd5b505afa158015612d4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d739190612e79565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260240160206040518083038186803b158015612db257600080fd5b505afa158015612dc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dea9190612fea565b905090565b60008083601f840112612e00578182fd5b50813567ffffffffffffffff811115612e17578182fd5b6020830191508360208260051b8501011115612e3257600080fd5b9250929050565b60008083601f840112612e4a578182fd5b50813567ffffffffffffffff811115612e61578182fd5b602083019150836020828501011115612e3257600080fd5b600060208284031215612e8a578081fd5b8151612061816130c8565b60008060008060008060008060a0898b031215612eb0578384fd5b8835612ebb816130c8565b97506020890135612ecb816130c8565b9650604089013567ffffffffffffffff80821115612ee7578586fd5b612ef38c838d01612def565b909850965060608b0135915080821115612f0b578586fd5b612f178c838d01612def565b909650945060808b0135915080821115612f2f578384fd5b50612f3c8b828c01612e39565b999c989b5096995094979396929594505050565b60008060008060008060a08789031215612f68578182fd5b8635612f73816130c8565b95506020870135612f83816130c8565b94506040870135935060608701359250608087013567ffffffffffffffff811115612fac578283fd5b612fb889828a01612e39565b979a9699509497509295939492505050565b600060208284031215612fdb578081fd5b81518015158114612061578182fd5b600060208284031215612ffb578081fd5b5051919050565b600060208284031215613013578081fd5b81356001600160e01b031981168114612061578182fd5b60006020828403121561303b578081fd5b5035919050565b60008060408385031215613054578182fd5b50508035926020909101359150565b60008219821115613076576130766130b2565b500190565b60008261309657634e487b7160e01b81526012600452602481fd5b500490565b6000828210156130ad576130ad6130b2565b500390565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146130dd57600080fd5b5056fea164736f6c6343000803000a";
