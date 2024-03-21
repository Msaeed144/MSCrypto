import styles from './CrtyptoStatus.module.css';
import { useCryptos } from "../context/CryptoContext"
import { IoMdHeartHalf } from "react-icons/io";
import TableRow from './TableRow';

function CrtyptoStatus() {
    const cryptos = useCryptos()
    const cryptosArr = Object.values(cryptos)
    console.log(cryptosArr)
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.heartIcon}><IoMdHeartHalf /></th>
            <th className={styles.thC}>نام ارز</th>
            <th className={styles.thC}>آخرین قیمت</th>
            <th className={styles.thC}>حجم معاملات</th>
            <th className={styles.thC}>تغییرات هفتگی</th>
          </tr>
        </thead>
        <tbody>
          {cryptosArr.map(crypto => <TableRow key={crypto.symbol} crypto={crypto}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default CrtyptoStatus