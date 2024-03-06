import logo from '../assets/logo.png';

import { FcLike } from "react-icons/fc";
import { TbTransformFilled } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";

import styles from './Navbar.module.css'
function Navbar() {
  return (
    <div className={styles.container}>
        <ul className={styles.navbarUl}>
          <li><img className={styles.logo} src={logo} alt="logo" /></li>
          <li>مورد علاقه ها<FcLike /></li>
          
          <li>تبدیل گر<TbTransformFilled /></li>
          <li>درباره ما<FcAbout /></li>
        </ul>
    </div>
  )
}

export default Navbar