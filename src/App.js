import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Product from './components/Product';
import { favProduct, specialProduct } from './components/Product/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Product heading="Produk Favorit" data={favProduct} />
      <Feature/>
      <Product heading="Menu Spesial" data={specialProduct} />
      <Footer />
    </Router>
  );
}

export default App;
