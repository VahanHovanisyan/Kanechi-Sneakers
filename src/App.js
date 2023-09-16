import Header from "./components/header/Header";
// import Main from "./components/main/Main"
import Card from "./components/card/Card"
import Search from "./components/search/Search"
import CartAside from "./components/cartAside/CartAside"

function App() {
  return (
    <div className="wrapper">
      <Header />
      {/* <Main /> */}
      <main className="main">
        <section className="hero">
          <h1 className="visually-hidden">
            online store called "Kanechi Sneakers"
            Are the best sneakers sold here
          </h1>
          <div className="heroHeader flex-v-center">
            <h2 className="heroTitle title">All sneakers</h2>
            <Search />
          </div>
          <div className="heroCatalog flex">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <CartAside />
        </section>
      </main>
    </div>
  );
}

export default App;
