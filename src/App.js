import "./App.css";

function ExploreButton() {
  return <button>Explore our store</button>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label class="hamburger">
          <input type="checkbox" />
          <svg viewBox="0 0 32 32">
            <path
              class="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path class="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <ul className="menu">
          <li>
            <a href="default.asp">IPHONE</a>
          </li>
          <li>
            <a href="news.asp">SAMSUNG</a>
          </li>
          <li>
            <a href="contact.asp">ETC..</a>
          </li>
        </ul>
        <img className="app-header-logo" src="/images/logoo.png" alt="Logo" />
        <li className="coll">
          <a href="contact.asp">COLLECTIONS</a>
        </li>
        <img className="profilelo" src="\images\profile.png"></img>
        <li className="sign-in">
          <a href="#">SIGN IN</a>
        </li>
        <img className="cartlo" src="/images/cart.png"></img>
      </header>

      <div className="main-content">
        <div className="text-section">
          <h1 className="te">BORING</h1>
          <h1 className="tex">PHONE?</h1>
          <h3 className="tee">Let Us HELP you fix it...</h3>
          <ExploreButton />
        </div>
        <div className="phone-image">
          <img
            className="iphone15"
            src="/images/iphone15.png"
            alt="iPhone 15"
          />
        </div>
        <div className="phone-info">
          <h2>IPHONE 15 PRO MAX</h2>
          <span className="price">$189</span>
          <button className="buy-now">BUY NOW</button>
        </div>
      </div>

      <div className="product-slider">
        <div className="product-card">
          <img src="/images/airmax.png" alt="Air Max Pegasus" />
          <h4>AIR MAX PEGASUS 37</h4>
          <span className="price">$189</span>
        </div>
        <div className="product-card">
          <img src="/images/airmaxflyease.png" alt="Air Max 90" />
          <h4>AIR MAX 90 FLYEASE</h4>
          <span className="price">$189</span>
        </div>
        <div className="product-card">
          <img src="/images/airmax270.png" alt="Air Max 270" />
          <h4>AIR MAX 270 REACT SE</h4>
          <span className="price">$189</span>
        </div>
        <div className="product-card">
          <img src="/images/nikecosmic.png" alt="Nike Cosmic" />
          <h4>NIKE COSMIC UNITY</h4>
          <span className="price">$189</span>
        </div>
      </div>
    </div>
  );
}

export default App;
