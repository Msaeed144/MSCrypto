/* eslint-disable react-refresh/only-export-components */
// CryptoContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
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

interface Result {
  symbols: {
    [key: string]: SymbolObject;
  };
  message: string;
  success: boolean;
}

export interface ApiResponse {
  result: Result;
}

export const CryptosContext = createContext<ApiResponse | undefined>(undefined);

export function CryptoProvider({ children }: { children: React.ReactNode }) {
  const [cryptos, setCryptos] = useState<ApiResponse | undefined>(undefined);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await api.get("/markets");
        setCryptos(response.data);
      } catch (error) {
        console.error("Error fetching cryptos:", error);
      }
    };

    fetchCryptos();

  }, []);
  return (
    <CryptosContext.Provider value={cryptos}>
      {children}
    </CryptosContext.Provider>
  );
}

