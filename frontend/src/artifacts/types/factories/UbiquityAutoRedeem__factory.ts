/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { UbiquityAutoRedeem } from "../UbiquityAutoRedeem";

export class UbiquityAutoRedeem__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _manager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UbiquityAutoRedeem> {
    return super.deploy(
      _manager,
      overrides || {}
    ) as Promise<UbiquityAutoRedeem>;
  }
  getDeployTransaction(
    _manager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_manager, overrides || {});
  }
  attach(address: string): UbiquityAutoRedeem {
    return super.attach(address) as UbiquityAutoRedeem;
  }
  connect(signer: Signer): UbiquityAutoRedeem__factory {
    return super.connect(signer) as UbiquityAutoRedeem__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UbiquityAutoRedeem {
    return new Contract(address, _abi, signerOrProvider) as UbiquityAutoRedeem;
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
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_burned",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Burning",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Minting",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
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
    name: "raiseCapital",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ecb38038062001ecb833981016040819052620000349162000424565b806040518060400160405280601281526020017155626971756974794175746f52656465656d60701b815250604051806040016040528060038152602001623aa0a960e91b81525081818160039080519060200190620000969291906200037e565b508051620000ac9060049060208401906200037e565b5050600580546001600160a81b0319166101006001600160a01b03878116820292909217928390556040805163a217fddf60e01b815290519190930490911692506391d1485491839163a217fddf91600480820192602092909190829003018186803b1580156200011c57600080fd5b505afa15801562000131573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000157919062000476565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b1580156200019557600080fd5b505afa158015620001aa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001d0919062000454565b6200022d5760405162461bcd60e51b815260206004820152602360248201527f5541443a206465706c6f796572206d757374206265206d616e6167657220616460448201526236b4b760e91b606482015260840160405180910390fd5b467f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f62000259620002e4565b805160209182012060408051808201825260018152603160f81b90840152805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66060820152608081018290523060a082015260c001604051602081830303815290604052805190602001206006819055505050505050620004cc565b606060038054620002f5906200048f565b80601f016020809104026020016040519081016040528092919081815260200182805462000323906200048f565b8015620003745780601f10620003485761010080835404028352916020019162000374565b820191906000526020600020905b8154815290600101906020018083116200035657829003601f168201915b5050505050905090565b8280546200038c906200048f565b90600052602060002090601f016020900481019282620003b05760008555620003fb565b82601f10620003cb57805160ff1916838001178555620003fb565b82800160010185558215620003fb579182015b82811115620003fb578251825591602001919060010190620003de565b50620004099291506200040d565b5090565b5b808211156200040957600081556001016200040e565b60006020828403121562000436578081fd5b81516001600160a01b03811681146200044d578182fd5b9392505050565b60006020828403121562000466578081fd5b815180151581146200044d578182fd5b60006020828403121562000488578081fd5b5051919050565b600181811c90821680620004a457607f821691505b60208210811415620004c657634e487b7160e01b600052602260045260246000fd5b50919050565b6119ef80620004dc6000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c8063481c6a75116100e357806395d89b411161008c578063c621bf8a11610066578063c621bf8a14610347578063d505accf1461035a578063dd62ed3e1461036d5761018d565b806395d89b4114610319578063a457c2d714610321578063a9059cbb146103345761018d565b806379cc6790116100bd57806379cc6790146102de5780637ecebe00146102f15780638456cb59146103115761018d565b8063481c6a751461027a5780635c975abb146102aa57806370a08231146102b55761018d565b8063313ce567116101455780633f4ba83a1161011f5780633f4ba83a1461024a57806340c10f191461025457806342966c68146102675761018d565b8063313ce5671461021f5780633644e5151461022e57806339509351146102375761018d565b806318160ddd1161017657806318160ddd146101d357806323b872dd146101e557806330adf81f146101f85761018d565b806306fdde0314610192578063095ea7b3146101b0575b600080fd5b61019a6103a6565b6040516101a791906118df565b60405180910390f35b6101c36101be366004611864565b610438565b60405190151581526020016101a7565b6002545b6040519081526020016101a7565b6101c36101f33660046117af565b61044e565b6101d77f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b604051601281526020016101a7565b6101d760065481565b6101c3610245366004611864565b610519565b610252610550565b005b610252610262366004611864565b6106a4565b6102526102753660046118c7565b610883565b6005546102929061010090046001600160a01b031681565b6040516001600160a01b0390911681526020016101a7565b60055460ff166101c3565b6101d76102c3366004611738565b6001600160a01b031660009081526020819052604090205490565b6102526102ec366004611864565b61090a565b6101d76102ff366004611738565b60076020526000908152604090205481565b610252610aeb565b61019a610c3d565b6101c361032f366004611864565b610c4c565b6101c3610342366004611864565b610cff565b6102526103553660046118c7565b610d0c565b6102526103683660046117ef565b610da4565b6101d761037b366004611777565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546103b590611961565b80601f01602080910402602001604051908101604052809291908181526020018280546103e190611961565b801561042e5780601f106104035761010080835404028352916020019161042e565b820191906000526020600020905b81548152906001019060200180831161041157829003601f168201915b5050505050905090565b6000610445338484610fc3565b50600192915050565b600061045b8484846110e8565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104fa5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61050e8533610509868561194a565b610fc3565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610445918590610509908690611932565b6005546040805163e63ab1e960e01b815290516101009092046001600160a01b0316916391d1485491839163e63ab1e991600480820192602092909190829003018186803b1580156105a157600080fd5b505afa1580156105b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d991906118af565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b15801561061657600080fd5b505afa15801561062a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064e919061188f565b61069a5760405162461bcd60e51b815260206004820152601560248201527f55425120746f6b656e3a206e6f7420706175736572000000000000000000000060448201526064016104f1565b6106a261113e565b565b60055460408051632f533cb760e01b815290516101009092046001600160a01b0316916391d14854918391632f533cb791600480820192602092909190829003018186803b1580156106f557600080fd5b505afa158015610709573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072d91906118af565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b15801561076a57600080fd5b505afa15801561077e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a2919061188f565b6107ee5760405162461bcd60e51b815260206004820152601560248201527f55425120746f6b656e3a206e6f74206d696e746572000000000000000000000060448201526064016104f1565b60055460ff16156108345760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f1565b61083e82826111da565b60405181815233906001600160a01b038416907fb1233017d63154bc561d57c16f7b6a55e2e1acd7fcac94045a9f35fb31a850ca906020015b60405180910390a35050565b60055460ff16156108c95760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f1565b6108d2816112be565b60405181815233907f62626c8ae1f1f3ad3b2f42ba7b806bbc48e9a59dab06414984113eaab612fe479060200160405180910390a250565b6005546040805163f39e5a4760e01b815290516101009092046001600160a01b0316916391d1485491839163f39e5a4791600480820192602092909190829003018186803b15801561095b57600080fd5b505afa15801561096f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099391906118af565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b1580156109d057600080fd5b505afa1580156109e4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a08919061188f565b610a545760405162461bcd60e51b815260206004820152601560248201527f55425120746f6b656e3a206e6f74206275726e6572000000000000000000000060448201526064016104f1565b60055460ff1615610a9a5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f1565b610aa482826112cb565b816001600160a01b03167f62626c8ae1f1f3ad3b2f42ba7b806bbc48e9a59dab06414984113eaab612fe4782604051610adf91815260200190565b60405180910390a25050565b6005546040805163e63ab1e960e01b815290516101009092046001600160a01b0316916391d1485491839163e63ab1e991600480820192602092909190829003018186803b158015610b3c57600080fd5b505afa158015610b50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7491906118af565b6040516001600160e01b031960e084901b168152600481019190915233602482015260440160206040518083038186803b158015610bb157600080fd5b505afa158015610bc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be9919061188f565b610c355760405162461bcd60e51b815260206004820152601560248201527f55425120746f6b656e3a206e6f7420706175736572000000000000000000000060448201526064016104f1565b6106a2611426565b6060600480546103b590611961565b3360009081526001602090815260408083206001600160a01b038616845290915281205482811015610ce65760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016104f1565b610cf53385610509868561194a565b5060019392505050565b60006104453384846110e8565b6000600560019054906101000a90046001600160a01b03166001600160a01b031663c5f956af6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d5c57600080fd5b505afa158015610d70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d94919061175b565b9050610da081836106a4565b5050565b42841015610df45760405162461bcd60e51b815260206004820152600c60248201527f7541443a2045585049524544000000000000000000000000000000000000000060448201526064016104f1565b6006546001600160a01b038816600090815260076020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b919087610e478361199c565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e00160405160208183030381529060405280519060200120604051602001610ec092919061190160f01b81526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015610f2b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610f615750886001600160a01b0316816001600160a01b0316145b610fad5760405162461bcd60e51b815260206004820152601660248201527f7541443a20494e56414c49445f5349474e41545552450000000000000000000060448201526064016104f1565b610fb8898989610fc3565b505050505050505050565b6001600160a01b0383166110255760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104f1565b6001600160a01b0382166110865760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104f1565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60055460ff161561112e5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f1565b6111398383836114a1565b505050565b60055460ff166111905760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016104f1565b6005805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166112305760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104f1565b61123c600083836116b3565b806002600082825461124e9190611932565b90915550506001600160a01b0382166000908152602081905260408120805483929061127b908490611932565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610877565b6112c833826112cb565b50565b6001600160a01b03821661132b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104f1565b611337826000836116b3565b6001600160a01b038216600090815260208190526040902054818110156113ab5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104f1565b6113b5828261194a565b6001600160a01b038416600090815260208190526040812091909155600280548492906113e390849061194a565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016110db565b60055460ff161561146c5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f1565b6005805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586111bd3390565b6001600160a01b03831661151d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016104f1565b6001600160a01b03821661157f5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104f1565b61158a8383836116b3565b6001600160a01b038316600090815260208190526040902054818110156116195760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016104f1565b611623828261194a565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290611659908490611932565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516116a591815260200190565b60405180910390a350505050565b6111398383836116c560055460ff1690565b156111395760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c65207061757365640000000000000000000000000000000000000000000060648201526084016104f1565b600060208284031215611749578081fd5b8135611754816119cd565b9392505050565b60006020828403121561176c578081fd5b8151611754816119cd565b60008060408385031215611789578081fd5b8235611794816119cd565b915060208301356117a4816119cd565b809150509250929050565b6000806000606084860312156117c3578081fd5b83356117ce816119cd565b925060208401356117de816119cd565b929592945050506040919091013590565b600080600080600080600060e0888a031215611809578283fd5b8735611814816119cd565b96506020880135611824816119cd565b95506040880135945060608801359350608088013560ff81168114611847578384fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611876578182fd5b8235611881816119cd565b946020939093013593505050565b6000602082840312156118a0578081fd5b81518015158114611754578182fd5b6000602082840312156118c0578081fd5b5051919050565b6000602082840312156118d8578081fd5b5035919050565b6000602080835283518082850152825b8181101561190b578581018301518582016040015282016118ef565b8181111561191c5783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115611945576119456119b7565b500190565b60008282101561195c5761195c6119b7565b500390565b600181811c9082168061197557607f821691505b6020821081141561199657634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156119b0576119b06119b7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146112c857600080fdfea164736f6c6343000803000a";
