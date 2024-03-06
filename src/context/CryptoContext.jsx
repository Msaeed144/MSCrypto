/* eslint-disable */
import { createContext, useContext, useEffect, useState } from "react"
import api from "../services/config";

const CryptoContext = createContext();

function CryptoProvider({children}) {
    const [cryptos , setCryptos] = useState([])

    useEffect(()=>{
        const fetchCryptos = async()=>{
            try{
                setCryptos(await api.get("markets"))


            }catch(error){
                console.log(error.message)

            }
    
        }
    
        fetchCryptos()
    },[])
  return (
        <CryptoContext.Provider value={cryptos}>
            {children}
        </CryptoContext.Provider>
    )
}

const useCryptos = () =>{
    const cryptos = useContext(CryptoContext)
    return cryptos
}

export default CryptoProvider
export {useCryptos}