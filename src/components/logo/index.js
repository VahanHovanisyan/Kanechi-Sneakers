import logoImg from "./logo.png";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <a className={styles.logo} href='/'>
      <img className={styles.icon} src={logoImg} alt='logo kanechi sneackers' width={40} height={40}/>
      <span className={styles.textLarge}>kanechi sneackers</span>
      <span className={styles.textLight}>Shop the best sneakers</span>
    </a>
  )
}

export default Logo