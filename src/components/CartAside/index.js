import CartItem from "../CartItem";
import styles from "./CartAside.module.scss";

function CartAside() {
  return (
    <div className="overlay">
      <aside className={styles.aside}>
        <div className={`${styles.top} flexVCenter`}>
          <h2 className={`${styles.asideTitle} title`}>
            Basket
          </h2>
          <button className={`${styles.btn} buttonReset`} >
            <svg className={styles.itemIcon}>
              <use xlinkHref="/img/cardSprite.svg#cartIconRemove" />
            </svg>
          </button>
        </div>
        <div className={styles.itemCatalog}>
          <CartItem />
        </div>
        <div className={styles.checkout}>
          <div className={styles.checkoutTextBox}>
            <span className={styles.checkoutTotalText}>Total</span>
            <span className={styles.checkoutTotalPrice}>21 498 руб.</span>
          </div>
          <div className={styles.checkoutTextBox}>
            <span className={styles.checkoutTaxText}>Tax 5%:</span>
            <span className={styles.checkoutTaxPrice}>1074 руб.</span>
          </div>
          <button className={`${styles.checkoutBtn} btn buttonReset`}>
            Checkout
            <svg className={`${styles.checkoutBtnIcon} btnIcon`}>
              <use xlinkHref="/img/cardSprite.svg#checkoutBtnArrow" />
            </svg>
          </button>
        </div>
      </aside>
    </div>
  )
}

export default CartAside