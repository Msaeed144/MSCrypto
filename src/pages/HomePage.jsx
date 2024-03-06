import styles from './HomePage.module.css'

import Navbar from '../components/Navbar'
import CrtyptoStatus from '../components/CrtyptoStatus'
function HomePage() {
  return (
    <div className={styles.container}>
        <Navbar />
        <CrtyptoStatus />
    </div>
  )
}

export default HomePage