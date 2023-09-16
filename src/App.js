import Header from "./components/header/Header";
// import Main from "./components/main/Main"
import Card from "./components/card/Card"

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
          <h2 className="heroTitle title">все кроссовки</h2>
          <div className="heroCatalog flex">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
