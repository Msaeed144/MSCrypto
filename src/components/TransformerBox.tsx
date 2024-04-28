import { useEffect, useContext, useState ,ChangeEvent } from "react";
import { CryptosContext, contextType, stateI } from "../context/CryptoContext";
import { Audio } from 'react-loader-spinner';

function TransformerBox() {
  const { cryptos } = useContext<contextType>(CryptosContext);
  const [usCryptos, setUsCryptos] = useState<stateI | undefined>([]);
  const [select1, setSelect1] = useState<string>("USDT");
  const [select2, setSelect2] = useState<string>("TMN");
  const [pay , setPay] = useState<number >()
  const [ result , setResult ]= useState<number | string>("......")
  useEffect(() => {
    if (cryptos) {
      const selectedPayment = cryptos.filter((item) => item.quoteAsset === "USDT");
      if (selectedPayment) {
        setUsCryptos(selectedPayment);
      }
    }
  }, [cryptos]);
  
  const select1Handler = (event:ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelect1(value)
  }
  const select2Handler = (event:ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelect2(value)
  }
  const inputHandler = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.value!== undefined ||NaN){
        const value = parseFloat(event.target.value)
        setPay(value)
    } else {
      return
    }
  }

 
const calcHandler = () => {
  if (cryptos && pay) {
    if (select1 === "TMN" && select2 === "USDT") {
      const bitUsd = cryptos?.find((item) => item.symbol === "BTCUSDT");
      const bitUsdVal = bitUsd?.stats.bidPrice;
      const bitTmn = cryptos?.find((item) => item.symbol === "BTCTMN");
      const bitTmnVal = bitTmn?.stats.bidPrice;
      if (bitTmnVal !== undefined && bitUsdVal !== undefined ) {
        const finalVal: number = (parseFloat(bitUsdVal) / parseFloat(bitTmnVal))*pay;
        setResult(finalVal);
      }
    } else if (select1 === "USDT" && select2 === "TMN") {
      const bitUsd = cryptos?.find((item) => item.symbol === "BTCUSDT");
      const bitUsdVal = bitUsd?.stats.bidPrice;
      const bitTmn = cryptos?.find((item) => item.symbol === "BTCTMN");
      const bitTmnVal = bitTmn?.stats.bidPrice;
      if (bitTmnVal !== undefined && bitUsdVal !== undefined) {
        const finalVal: number = Math.round((parseFloat(bitTmnVal) / parseFloat(bitUsdVal))*pay);
        setResult(finalVal);
      }
    }else if(select2==="TMN" && select1!=="USDT"){
      const tmnCryptos = cryptos?.filter((item)=>item.quoteAsset ==="TMN")
      const firstCrypto = tmnCryptos?.find((item)=>item.baseAsset=== select1)
      const firstResult:string|undefined = firstCrypto?.stats.lastPrice
      if(firstResult) {
      const result = parseFloat(firstResult)
      setResult(result)
      }
    }else if(select2==="USDT" && select1!=="TMN"){
      const usdCryptos = cryptos?.filter((item)=>item.quoteAsset ==="USDT")
      const firstCrypto = usdCryptos?.find((item)=>item.baseAsset=== select1)
      const firstResult:string|undefined = firstCrypto?.stats.lastPrice
      if(firstResult) {
      const result = parseFloat(firstResult)*pay
      setResult(result)
    }
  }else if(select1!=="USDT" && select1!=="TMN " &&select2!=="USDT" && select2!=="TMN"){
    const usdCryptos = cryptos?.filter((item)=>item.quoteAsset ==="USDT")
    const crypto1 = usdCryptos?.find((item)=>item.baseAsset ===select1)
    const crypto2 = usdCryptos?.find((item)=>item.baseAsset ===select2)
    if(crypto1 && crypto2){
    const crypto1Price = parseFloat(crypto1?.stats.lastPrice)
    const crypto2Price =  parseFloat(crypto2?.stats.lastPrice)
    const firstResult = crypto1Price / crypto2Price
    const finalRsult = firstResult * pay
    setResult(finalRsult)
    }
  }else if(select1 ==="USDT" && select2 !== "TMN"){
    const usdCryptos = cryptos?.filter((item)=>item.quoteAsset ==="USDT")
    const crypto2 = usdCryptos?.find((item)=>item.baseAsset ===select2)
    if (crypto2){
    const crypto2Price =  parseFloat(crypto2?.stats.lastPrice)
    const firstResult = 1 / crypto2Price
    const finalRsult = firstResult * pay
    setResult(finalRsult)
    }
  }else if(select1 ==="TMN" && select2 !== "USDT"){
    const tmnCryptos = cryptos?.filter((item)=>item.quoteAsset ==="TMN")
    const crypto2 = tmnCryptos?.find((item)=>item.baseAsset ===select2)
    if (crypto2){
    const crypto2Price =  parseFloat(crypto2?.stats.lastPrice)
    const firstResult = 1 / crypto2Price
    const finalRsult = firstResult * pay
    setResult(finalRsult)
  }}
  }
};
const transferHandler = () =>{
  const selec1 = select1;
  const selec2 = select2;
  setSelect1(selec2)
  setSelect2(selec1)
}
  return (
    <>
    {cryptos ?(
    <div className=" items-center justify-around p-8 bg-slate-700 shadow-md rounded-xl mt-8 rtl">
      <div className="flex">
        <div className="mx-5 flex flex-col">
          <select
            onChange={select1Handler}
            name="select1"
            id="select1"
            value={select1}
            className="my-2 bg-slate-700 text-slate-300 border rounded-lg p-2 border-slate-900"
          >
            {usCryptos?.map((item) => (
              <option key={item.symbol} value={item.baseAsset}>
                {item.faBaseAsset}
              </option>
            ))}
            <option value="TMN">تومان</option>
            <option value="USDT">دلار</option>
          </select>
          <input
            value={pay}
            onChange={inputHandler}
            type="number"
            placeholder="مقدار مورد نطر را وارد کنید ..."
            className="my-2 p-2 bg-transparent border border-slate-900 rounded-lg focus:border-slate-500 focus:ring-slate-500 text-right text-slate-300"
          />
        </div>
        <div className="mx-5 flex flex-col mt-8">
          <svg onClick={transferHandler} className="cursor-pointer" fill="#ffffff" height="45px" width="45px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 502 502" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M135.751,240.508h143.032c21.987,0,39.876-17.889,39.876-39.876s-17.888-39.876-39.876-39.876H135.752l18.417-18.417 c7.531-7.532,11.679-17.546,11.679-28.197s-4.148-20.665-11.679-28.197c-15.548-15.548-40.846-15.548-56.395,0l-86.102,86.102 c-7.634,7.634-11.775,17.782-11.67,28.585c-0.105,10.803,4.036,20.951,11.67,28.585l86.102,86.102 c7.774,7.774,17.986,11.661,28.197,11.661c10.212,0,20.424-3.887,28.197-11.662c7.531-7.532,11.679-17.546,11.679-28.197 c0-10.652-4.148-20.665-11.679-28.196L135.751,240.508z M140.025,301.176c-7.749,7.75-20.36,7.75-28.109,0l-86.102-86.102 c-3.818-3.817-5.882-8.901-5.813-14.313c0.001-0.086,0.001-0.172,0-0.258c-0.069-5.412,1.995-10.495,5.813-14.313l86.102-86.102 c3.875-3.875,8.965-5.813,14.055-5.813c5.09,0,10.18,1.938,14.054,5.814c3.755,3.754,5.822,8.745,5.822,14.055 c0,5.309-2.068,10.3-5.822,14.054l-35.488,35.488c-2.859,2.86-3.715,7.162-2.167,10.898c1.548,3.736,5.195,6.173,9.239,6.173 h167.174c10.959,0,19.876,8.917,19.876,19.876s-8.916,19.876-19.876,19.876H111.61c-4.045,0-7.691,2.436-9.239,6.173 c-1.548,3.736-0.693,8.037,2.167,10.897l35.488,35.489c3.754,3.753,5.821,8.744,5.821,14.054 C145.847,292.431,143.779,297.422,140.025,301.176z"></path> <path d="M490.328,272.784l-86.102-86.102c-15.549-15.548-40.847-15.548-56.395,0c-7.531,7.532-11.679,17.546-11.679,28.197 c0,10.652,4.148,20.665,11.679,28.196l18.417,18.417H223.217c-21.987,0-39.876,17.889-39.876,39.876s17.888,39.876,39.876,39.876 h143.032l-18.417,18.417c-7.531,7.532-11.679,17.546-11.679,28.197s4.148,20.665,11.679,28.197 c7.774,7.774,17.986,11.661,28.197,11.661s20.423-3.887,28.197-11.66l86.102-86.102c7.634-7.634,11.775-17.782,11.67-28.585 C502.103,290.566,497.962,280.418,490.328,272.784z M481.998,301.497c0.069,5.412-1.995,10.495-5.813,14.313l-86.102,86.102 c-7.749,7.75-20.36,7.75-28.109,0c-3.755-3.754-5.822-8.745-5.822-14.055c0-5.309,2.068-10.3,5.822-14.054l35.488-35.488 c2.859-2.86,3.715-7.162,2.167-10.898c-1.548-3.736-5.195-6.173-9.239-6.173H223.217c-10.959,0-19.876-8.917-19.876-19.876 c0-10.959,8.916-19.876,19.876-19.876v-0.001h167.172c4.045,0,7.691-2.436,9.239-6.173c1.548-3.736,0.693-8.037-2.167-10.897 l-35.488-35.489c-3.754-3.753-5.821-8.744-5.821-14.054c0-5.309,2.068-10.3,5.822-14.054c7.749-7.75,20.36-7.75,28.109,0 l86.102,86.102c3.818,3.817,5.882,8.901,5.813,14.313C481.997,301.325,481.997,301.411,481.998,301.497z"></path> <path d="M131.591,103.93c-3.905-3.905-10.237-3.904-14.142,0l-48.833,48.833c-3.905,3.906-3.905,10.237,0,14.143 c1.953,1.953,4.511,2.929,7.071,2.929c2.559,0,5.118-0.976,7.071-2.93l48.833-48.833 C135.496,114.167,135.496,107.835,131.591,103.93z"></path> <path d="M47.542,173.837l-8.768,8.769c-3.906,3.905-3.905,10.237,0,14.142c1.953,1.953,4.512,2.929,7.071,2.929 c2.559,0,5.118-0.976,7.071-2.929l8.768-8.769c3.906-3.905,3.905-10.236,0-14.142C57.779,169.931,51.447,169.932,47.542,173.837z "></path> </g> </g> </g> </g></svg>
        </div>
        <div className="mx-5 flex flex-col">
          <select
            onChange={select2Handler}
            value={select2}
            name="select2"
            id="select2"
            className="my-2 bg-slate-700 text-slate-300 border rounded-lg p-2 border-slate-900"
          >
            {usCryptos?.map((item) => (
              <option key={item.symbol} value={item.baseAsset}>
                {item.faBaseAsset}
              </option>
            ))}
            <option value="TMN">تومان</option>
            <option value="USDT">دلار</option>
          </select>{" "}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <button onClick={calcHandler} className="w-1/2 my-3 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
          محاسبه
        </button>
        <div className="flex text-white">
          <p className="text-lg mx-3">نتیجه:</p>
          <p className="text-lg	">{result}</p>
        </div>
      </div>
    </div>
    ):(
      <Audio height="80" width="80" color="white" ariaLabel="loading" />
    )}
    </>
  );
}

export default TransformerBox;
