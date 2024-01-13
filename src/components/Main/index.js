import Hero from "../Hero";
import styles from "./Main.module.scss";

function Main(props) {
  return (
    <main className={styles.main}>
      < Hero openCart={props.open}/>
    </main>
  )
}

export default Main