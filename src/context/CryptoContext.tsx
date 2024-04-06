import { ReactNode, createContext , useContext, useEffect, useState } from "react";
import api from "../services/config";

type CryptosProviderProps = {
    children:ReactNode
}
type CryptoItem ={
    data : any
}
const CryptosContext = createContext({})

export function useCryptoContext() {
    return useContext(CryptosContext)
}

export function CryptosProvider ({children}:CryptosProviderProps) {
    useEffect(()=>{
        const fetchCryptos = async ()=> {
            const response = await api.get("/markets")
            setCryptos(response)
        };
        fetchCryptos()
    },[])
    const [cryptos , setCryptos ] = useState<CryptoItem>([])
    return <CryptosContext.Provider value={{cryptos}}>{children}</CryptosContext.Provider>
}