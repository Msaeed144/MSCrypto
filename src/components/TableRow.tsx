import { SymbolObject } from "../context/CryptoContext"; 
import { fixNum , replaceDigits , minusHandler } from '../helpers/functions';
import { AiFillCaretDown , AiFillCaretUp } from "react-icons/ai";

interface Props {
    cryptos: SymbolObject;
  }
  
  const TableRow: React.FC<Props> = ({ cryptos }) => {
    return (
          <tr key={cryptos.enName} className="border-b border-slate-800 text-white">
                    <td className="flex py-3 px-1">
                      <img className="mx-2" src={cryptos.baseAsset_svg_icon} alt="" />
                      <span>{cryptos.faBaseAsset}</span>
                    </td>
                    <td className="py-3 px-4 text-center">{replaceDigits(fixNum(cryptos.stats.lastPrice))}</td>
                    <td className="flex justify-center py-3 px-4 text-center" style={cryptos.stats["24h_ch"] < 0 ? { color: "red" } : { color: "green" }}>
                      {minusHandler(replaceDigits(cryptos.stats["24h_ch"].toString()))}
                      {cryptos.stats["24h_ch"] > 0 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </td>
                    <td className="py-3 px-4 text-center">{replaceDigits(fixNum(cryptos.stats["24h_volume"]))}</td>
                    <td style={cryptos.stats["7d_ch"] < 0 ? { color: "red" } : { color: "green" }} className="py-3 px-4 flex justify-center py-3 px-4 text-center">
                      {minusHandler(replaceDigits(cryptos.stats["7d_ch"].toString()))}
                      {cryptos.stats["7d_ch"] > 0 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </td>
             </tr>
    );
  };
  
  
export default TableRow