import { useContext, useEffect, useState } from "react";
import { ApiResponse, CryptosContext, SymbolObject } from "../context/CryptoContext";
import { Audio } from 'react-loader-spinner';
import {fixNum , replaceDigits , minusHandler} from '../helpers/functions'
import { AiFillCaretDown , AiFillCaretUp  } from "react-icons/ai";
function Table() {

    const result = useContext<ApiResponse | undefined>(CryptosContext);
    const [coins, setCoins] = useState<SymbolObject[]>([]);
    const [ cionsToman , setCoinsToman ] = useState<SymbolObject[]>([]);

    useEffect(() => {
        if (result) {
            setCoins(Object.values(result.result.symbols));
            setCoinsToman(coins.filter(coin => coin.quoteAsset ==="TMN"))
        }
    }, [result]);

    return (
        <div className="flex justify-center items-center">
            {result ? (
                <div className="flex min-h-screen justify-center">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-slate-700 shadow-md rounded-xl mt-8 rtl">
                            <thead>
                                <tr className="bg-blue-gray-100 text-white ">
                                    <th className="py-3 px-4 text-right">نام ارز</th>
                                    <th className="py-3 px-4 text-center">قیمت ارز</th>
                                    <th className="py-3 px-4 text-right">تغییرات روز اخیر</th>
                                    <th className="py-3 px-4 text-right">حجم معاملات</th>
                                    <th className="py-3 px-4 text-right">تغییرات هفتگی</th>
                                </tr>
                            </thead>
                            <tbody className="text-blue-gray-900">
                                {cionsToman.map(item => (
                                    <tr key={item.enName} className="border-b border-slate-800 text-white">
                                        <td className="flex py-3 px-1">
                                            <img className="mx-2" src={item.baseAsset_svg_icon} alt="" />
                                            <span>{item.faBaseAsset}</span>
                                        </td>
                                        <td className="py-3 px-4 text-center">{replaceDigits(fixNum(item.stats.lastPrice))}</td>
                                        <td className="flex justify-center py-3 px-4 text-center" style={item.stats["24h_ch"]<0? {color:"red"} : {color:"green"}}>
                                            {minusHandler(replaceDigits(item.stats["24h_ch"].toString()))}
                                            {
                                                item.stats["24h_ch"]> 0
                                                ?
                                                <AiFillCaretUp />
                                                :
                                                <AiFillCaretDown />
                                            }
                                            </td>
                                        <td className="py-3 px-4 text-center">{replaceDigits(fixNum(item.stats["24h_volume"]))}</td>
                                        <td style={item.stats["7d_ch"]<0? {color:"red"} : {color:"green"}} className="py-3 px-4 flex justify-center py-3 px-4 text-center">
                                            {minusHandler(replaceDigits(item.stats["7d_ch"].toString()))}
                                            {
                                                item.stats["7d_ch"]> 0
                                                ?
                                                <AiFillCaretUp />
                                                :
                                                <AiFillCaretDown />
                                            }
                                            </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="mt-12">
                    <Audio height="80" width="80" color="white" ariaLabel="loading" />
                </div>
            )}
        </div>
    );
}
export default Table;
