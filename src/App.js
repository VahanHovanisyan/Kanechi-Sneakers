import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export function App() {
  const [isOpenCart, setOpenCart] = useState();
  const clickOpenCart = () => {
    setOpenCart(true);
    console.log(isOpenCart);
  }
  return (
    <>
      <Header handleClickOpenCart={clickOpenCart} />
      <Main open={isOpenCart}/>
    </>
  );
}

// export default App;