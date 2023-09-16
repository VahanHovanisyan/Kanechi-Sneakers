import "./cartItem.scss"

const CartItem = () => {
  return (
    <article className="cartItem flex-v-center">
      <a className="cartLink" href='#'></a>
      <img className="cartImg" src="/img/card1.png" alt='Мужские Кроссовки Nike Blazer Mid Suede' width={70} height={70}/>
      <div className="cartTextBox">
        <h3 className="cartTitle">Мужские Кроссовки Nike Blazer Mid Suede</h3>
        <span className="cartPriceNumber">12 999 руб</span>
      </div>
      <button className="cartItemBtn btn-reset">
          <svg className="cartItemIcon">
            <use xlinkHref="/img/cardSprite.svg#cartIconRemove" x={""} y={""}/>
          </svg>
        </button>
    </article>
  )
}

export default CartItem