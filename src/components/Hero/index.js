import React, { useEffect,useContext } from "react";
import Card from "../Card";
import Search from "../Search";
import CartAside from "../CartAside";
import styles from "./Hero.module.scss";
import axios from "axios";




function Hero(props) {
  const [cards, setCards] = React.useState([]);
  useEffect(() => {
    axios
      .get('https://650b4981dfd73d1fab09dc22.mockapi.io/items')
      .then((response) => {
        const result = response.data;
        setCards(result);
      })
  }, [])

  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className="visuallyHidden">
          online store called "Kanechi Sneakers"
          Are the best sneakers sold here
        </h1>
        <div className={`${styles.header} flexVCenter`}>
          <h2 className={`${styles.title} title`}>All sneakers</h2>
          <Search />
        </div>
        <div className={styles.catalog}>
          {cards.map(card => (
            <Card
              title={card.title}
              price={card.price}
              imgUrl={card.imgUrl}
            />
          ))}
        </div>
          {props.openCart ? <CartAside /> : null}
      </div>
    </section>
  )
}

export default Hero