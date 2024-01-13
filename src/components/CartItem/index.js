import styles from "./CartItem.module.scss"

function CartItem() {
  return (
    <article className={`${styles.cartItem} flexVCenter`}>
      <a className={styles.cartLink} href='#'></a>
      <img className={styles.img} src="/img/card1.png" alt='Мужские Кроссовки Nike Blazer Mid Suede' width={70} height={70}/>
      <div className={styles.textBox}>
        <h3 className={styles.title}>Мужские Кроссовки Nike Blazer Mid Suede</h3>
        <span className={styles.priceNumber}>12 999 руб</span>
      </div>
      <button className={`${styles.itemBtn} buttonReset`}>
          <svg className={styles.itemIcon}>
            <use xlinkHref="/img/cardSprite.svg#cartIconRemove" />
          </svg>
        </button>
    </article>
  )
}

export default CartItem