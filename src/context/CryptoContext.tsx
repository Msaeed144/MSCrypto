/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useEffect, useState } from "react";
import api from "../services/config";

export interface SymbolStats {
  bidPrice: string;
  askPrice: string;
  '24h_ch': number;
  '7d_ch': number;
  '24h_volume': string;
  '7d_volume': string;
  '24h_quoteVolume': string;
  '24h_highPrice': string;
  '24h_lowPrice': string;
  lastPrice: string;
  lastQty: string;
  lastTradeSide: string;
  bidVolume: string;
  askVolume: string;
  bidCount: number;
  askCount: number;
  direction: {
    SELL: number;
    BUY: number;
  };
  '24h_tmnVolume': string;
}

export interface SymbolObject {
  [x: string]: any;
  symbol: string;
  baseAsset: string;
  baseAsset_png_icon: string;
  baseAsset_svg_icon: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quoteAsset_png_icon: string;
  quoteAsset_svg_icon: string;
  quotePrecision: number;
  faName: string;
  enName: string;
  faBaseAsset: string;
  enBaseAsset: string;
  faQuoteAsset: string;
  enQuoteAsset: string;
  stepSize: number;
  tickSize: number;
  minQty: number;
  minNotional: number;
  stats: SymbolStats;
  createdAt: string;
  isNew: boolean;
  isZeroFee: boolean;
}

export interface Result {
  data: {
    [key: string]: SymbolObject;
  };
  message: string;
  success: boolean;
}

export type stateI = SymbolObject[] | undefined;
export interface contextType {
  cryptos: stateI;
  payment: string;
  setPayment: React.Dispatch<React.SetStateAction<string>>;
  search:string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
export interface ContextProps {
  symbols: SymbolObject[];
}
export type ChildrenProviderProps = {
  children: ReactNode;
};



export const CryptosContext = createContext({} as contextType);

function CryptosProvider({ children }: ChildrenProviderProps) {
  const [ payment , setPayment ] = useState<string>("TMN")
  const [ search , setSearch ] = useState<string>("")
  const [cryptos, setCryptos] = useState<stateI>(undefined);
  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response: Result = await api.get("/markets");
        const data = response.data;
        const result = data.result.symbols;
        const cryptosArray = Object.entries(result).map(([key, value]) => value as SymbolObject);
        if (response) {
          setCryptos(cryptosArray);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchCryptos();
  }, []);
  const contextValue: contextType = {
    cryptos: cryptos,
    payment: payment,
    setPayment: setPayment,
    search:search,
    setSearch:setSearch
  };
  return (
<CryptosContext.Provider value={contextValue}>
      {children}
    </CryptosContext.Provider>
  );
}

export default CryptosProvider;
