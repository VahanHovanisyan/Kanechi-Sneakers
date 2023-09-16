import CartItem from "../cartItem/CartItem"
import "./cartAside.scss"


const CartAside = () => {
  return (
    <div className="overlay">
      <aside className="cartAside">
        <div className="cartTop flex-v-center">
          <h2 className="cartAsideTitle title">
            Basket
          </h2>
          <button className="cartBtn btn-reset">
            <svg className="cartItemIcon">
              <use xlinkHref="/img/cardSprite.svg#cartIconRemove" x={""} y={""} />
            </svg>
          </button>
        </div>
        <div className="cartItemCatalog">
          <CartItem />
        </div>
        <div className="checkout">
          <div className="checkoutTextBox ">
            <span className="checkoutTotalText">Total</span>
            <span className="checkoutTotalPrice">21 498 руб.</span>
          </div>
          <div className="checkoutTextBox">
            <span className="checkoutTaxText">Tax 5%:</span>
            <span className="checkoutTaxPrice">1074 руб.</span>
          </div>
          <button className="checkoutBtn btn btn-reset">
            Checkout
            <svg className="checkoutBtnIcon btnIcon">
              <use xlinkHref="/img/cardSprite.svg#checkoutBtnArrow" />
            </svg>
          </button>
        </div>
      </aside>
    </div>
  )
}

export default CartAside