import styles from './CrtyptoStatus.module.css';
import { useCryptos } from "../context/CryptoContext"

function CrtyptoStatus() {
    const cryptos = useCryptos()
    const cryptosArr = Object.values(cryptos)
    console.log(cryptosArr)
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th></th>
            <th>نام ارز</th>
            <th>آخرین قیمت</th>
            <th>تغییرات بازار</th>
            <th>حجم معاملات</th>
            <th>تغییرات هفتگی</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}

export default CrtyptoStatus