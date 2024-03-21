/* eslint-disable */
import { FaRegHeart } from "react-icons/fa";
import {fixNumber , faNum  , fixMinusNum2} from '../helpers/helpers'
import styles from './TableRow.module.css'
function TableRow({crypto}) {
  return (
    <tr>
        <td><FaRegHeart /></td>
        <td>
            <div className={styles.tdContainer}>
                <div className={styles.symbol}><img style={{width:"30px"}} src={crypto.baseAsset_svg_icon} alt="" /></div>
                <div>
                    <p>{crypto.baseAsset}</p>
                    <p>{crypto.faBaseAsset}</p>
                </div>
            </div>
        </td>
        <td><p>{fixNumber(crypto.stats.lastPrice)}</p></td>
        <td><p>{fixNumber(crypto.stats["24h_volume"])}</p></td>
        <td><p>{fixMinusNum2(faNum(+crypto.stats["7d_ch"]))}</p></td>
        
        
    </tr>
  )
}

export default TableRow