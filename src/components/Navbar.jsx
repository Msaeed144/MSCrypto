import logo from '../assets/logo.png';

import { FcLike } from "react-icons/fc";
import { TbTransformFilled } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";

import styles from './Navbar.module.css'
function Navbar() {
  return (
    <header className={styles.container}>
        <ul className={styles.navbarUl}>
          <li><img className={styles.logo} src={logo} alt="logo" /></li>
          <li className={styles.links}><span>مورد علاقه ها</span><FcLike /></li>
          
          <li className={styles.links}><span>تبدیل گر</span><TbTransformFilled /></li>
          <li className={styles.links}><span>درباره ما</span><FcAbout /></li>
        </ul>
    </header>
  )
}

export default Navbar