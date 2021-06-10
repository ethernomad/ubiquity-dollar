import { BigNumber, ethers } from "ethers";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import {
  Bonding,
  BondingShare,
  DebtCouponManager,
  MasterChef,
  UbiquityAlgorithmicDollar,
  UbiquityAlgorithmicDollar__factory,
  UbiquityAutoRedeem,
  UbiquityGovernance,
} from "../../src/types";
import { IMetaPool } from "../../src/types/IMetaPool";
import { UbiquityAlgorithmicDollarManager } from "../../src/types/UbiquityAlgorithmicDollarManager";
import { EthAccount } from "../../utils/types";

export interface Balances {
  uad: BigNumber;
  crv: BigNumber;
  uad3crv: BigNumber;
  uar: BigNumber;
  ubq: BigNumber;
  bondingShares: BigNumber;
  // window: Window & typeof globalThis;
}

export interface IConnectedContext {
  manager: UbiquityAlgorithmicDollarManager | undefined;
  provider: ethers.providers.Web3Provider | undefined;
  account: EthAccount | undefined;
  metapool: IMetaPool | undefined;
  bonding: Bonding | undefined;
  bondingShare: BondingShare | undefined;
  masterChef: MasterChef | undefined;
  uAR: UbiquityAutoRedeem | undefined;
  uGov: UbiquityGovernance | undefined;
  uAD: UbiquityAlgorithmicDollar | undefined;
  balances: Balances | undefined;
  debtCouponMgr: DebtCouponManager | undefined;
  setAccount: Dispatch<SetStateAction<EthAccount | undefined>>;
  setProvider: Dispatch<
    SetStateAction<ethers.providers.Web3Provider | undefined>
  >;
  setManager: Dispatch<
    SetStateAction<UbiquityAlgorithmicDollarManager | undefined>
  >;
  setMetapool: Dispatch<SetStateAction<IMetaPool | undefined>>;
  setBonding: Dispatch<SetStateAction<Bonding | undefined>>;
  setBondingShare: Dispatch<SetStateAction<BondingShare | undefined>>;
  setMasterChef: Dispatch<SetStateAction<MasterChef | undefined>>;
  setUAR: Dispatch<SetStateAction<UbiquityAutoRedeem | undefined>>;
  setUGOV: Dispatch<SetStateAction<UbiquityGovernance | undefined>>;
  setUAD: Dispatch<SetStateAction<UbiquityAlgorithmicDollar | undefined>>;
  setBalances: Dispatch<SetStateAction<Balances | undefined>>;
  setDebtCouponMgr: Dispatch<SetStateAction<DebtCouponManager | undefined>>;
}
export const CONNECTED_CONTEXT_DEFAULT_VALUE = {
  manager: undefined,
  provider: undefined,
  account: undefined,
  metapool: undefined,
  bonding: undefined,
  bondingShare: undefined,
  setProvider: () => {},
  setAccount: () => {},
  setManager: () => {},
  setMetapool: () => {},
  setBonding: () => {},
  setBondingShare: () => {},
  masterChef: undefined,
  setMasterChef: () => {},
  uAR: undefined,
  setUAR: () => {},
  uGov: undefined,
  setUGOV: () => {},
  uAD: undefined,
  setUAD: () => {},
  balances: {
    uad: BigNumber.from(0),
    crv: BigNumber.from(0),
    uad3crv: BigNumber.from(0),
    uar: BigNumber.from(0),
    ubq: BigNumber.from(0),
    bondingShares: BigNumber.from(0),
  },
  setBalances: () => {},
  debtCouponMgr: undefined,
  setDebtCouponMgr: () => {},
};
const ConnectedContext = createContext<IConnectedContext>(
  CONNECTED_CONTEXT_DEFAULT_VALUE
);
interface Props {
  children: React.ReactNode;
  // window: Window & typeof globalThis;
}

export const ConnectedNetwork = (props: Props) => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [manager, setManager] = useState<UbiquityAlgorithmicDollarManager>();
  const [account, setAccount] = useState<EthAccount>();
  const [metapool, setMetapool] = useState<IMetaPool>();
  const [bonding, setBonding] = useState<Bonding>();
  const [bondingShare, setBondingShare] = useState<BondingShare>();
  const [masterChef, setMasterChef] = useState<MasterChef>();
  const [uAR, setUAR] = useState<UbiquityAutoRedeem>();
  const [uGov, setUGOV] = useState<UbiquityGovernance>();
  const [uAD, setUAD] = useState<UbiquityAlgorithmicDollar>();
  const [debtCouponMgr, setDebtCouponMgr] = useState<DebtCouponManager>();
  const [balances, setBalances] = useState<Balances>();

  const value = {
    provider,
    manager,
    setManager,
    account,
    setAccount,
    setProvider,
    metapool,
    setMetapool,
    bonding,
    setBonding,
    bondingShare,
    setBondingShare,
    masterChef,
    setMasterChef,
    uAR,
    setUAR,
    uGov,
    setUGOV,
    uAD,
    setUAD,
    balances,
    setBalances,
    debtCouponMgr,
    setDebtCouponMgr,
  };

  return (
    <ConnectedContext.Provider value={value}>
      {props.children}
    </ConnectedContext.Provider>
  );
};

export const useConnectedContext = (): IConnectedContext =>
  useContext(ConnectedContext);
