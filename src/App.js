function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png"/>
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <svg/>
            <span>1205 руб.</span>
          </li>
          <li>
            <svg/>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
      </div>
    </div>
  );
}
export default App;
