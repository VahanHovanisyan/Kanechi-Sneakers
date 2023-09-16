import "./card.scss"
// import cardCheckedIcon from "./cardImg/cardChecked.svg"
// import cardUnCheckedIcon from "./cardImg/cardUnChecked.svg"
// import cardFavoriteIcon from "./cardImg/cardFavorite.svg"
// import cardSpriteSvg from "./cardImg/sprite.svg"

const Card = () => {
  return (
    <article className="card">
      <button className="cardBtn cardBtn_Favorite btn-reset">
        <svg className="cardIcon cardIcon_Favorite">
          <use xlinkHref="/img/cardSprite.svg#cardFavorite" />
        </svg>
      </button>
      <img className="cardImg" src="/img/card1.png" alt='Мужские Кроссовки Nike Blazer Mid Suede' width={133} height={80}/>
      <h3 className="cardTitle">Мужские Кроссовки Nike Blazer Mid Suede</h3>
      <div className="cardBottom">
        <span className="cardPriceText">Цена:</span>
        <span className="cardPriceNumber">12 999 рубю</span>
        <button className="cardBtn cardBtn_Checked btn-reset">
          <svg className="cardIcon cardIcon_Checked">
            <use xlinkHref="/img/cardSprite.svg#cardUnChecked" />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default Card