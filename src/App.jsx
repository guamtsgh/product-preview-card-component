import './App.css'

import productMobile from './assets/images/image-product-mobile.jpg'
import cart from './assets/images/icon-cart.svg'
import productDesktop from './assets/images/image-product-desktop.jpg'

function App() {
  return <div id="container">
    <img id='mobile-pic' src={productMobile} alt='perfume'/>
    <img id='desktop-pic' src={productDesktop} alt='perfume'/>

    <section id='details'>
      <div id='product'>
        <p id='type'>PERFUME</p>
        <h1 id='name'>Gabrielle Essence Eau De Parfum</h1>
        <p id='description'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
      </div>

      <div id='price'>
        <h1 id='discount'>$149.99</h1>
        <p id='original'>$169.99</p>
      </div>

      <button>
        <img src={cart} alt="cart" />
        <p>Add to Cart</p>
      </button>
    </section>
      
  </div>;
}

export default App;
