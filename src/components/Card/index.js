import React from "react";
import styles from "./Card.module.scss"
const cardCheckedIcon = "/img/cardSprite.svg#cardChecked"
const cardUnCheckedIcon = "/img/cardSprite.svg#cardUnChecked"

function Card(props) {
  const [isAdded, setIsAdded] = React.useState();
  const handleClickPlus = () => {setIsAdded(true)};
  console.log(isAdded);
  React.useEffect(() => {
    console.log('refresh');
  },[isAdded])
  return (
    <article className={styles.card}>
      <a className={styles.link}></a>
      <button className={`${styles.btn} ${styles.btnFavorite} buttonReset`} onClick={() => props.onClickFavorite}>
        <svg className={`${styles.icon} ${styles.iconFavorite}`}>
          <use xlinkHref="/img/cardSprite.svg#cardFavorite" />
        </svg>
      </button>
      <img className={styles.img} src={props.imgUrl} alt={props.title} width={133} height={80}/>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.bottom}>
        <span className={styles.priceText}>Цена:</span>
        <span className={styles.priceNumber}>{props.price} руб</span>
        <button className={`${styles.btn} ${styles.btnChecked} buttonReset`} onClick={handleClickPlus}>
          <svg className={`${styles.icon} ${styles.iconChecked}`}>
            <use xlinkHref={isAdded ? cardCheckedIcon : cardUnCheckedIcon} />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default Card