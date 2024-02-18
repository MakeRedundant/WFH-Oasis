import React from 'react';
import './App.css';
import './scss/main.scss';
import Homepage from './pages/homepage/homepage';
import Header from './components/header/header';
import Footer from "./components/footer/footer";
import ProductModal from './components/product-modal/product-modal.component';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Shopping categories
import Everything from "./pages/shop/everything.component";
import Chairs from "./pages/shop/chairs.component";
import Desks from "./pages/shop/desks.component";
import Technology from "./pages/shop/technology.components";
import Lights from "./pages/shop/lights.component";
import Others from "./pages/shop/others.component";
import Checkout from "./pages/checkout/checkout.component";

//Login and Signup page
import LogIn from "./pages/Log-in/log-in.component";
import SignUp from "./pages/sign-up/sign-up.component";

// Import action to toggle modal
import { toggleModalHidden } from './redux/product-modal/product-modal.actions';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/collections" element={<Everything />} />
          <Route path="/category/chairs" element={<Chairs />} />
          <Route path="/category/lights" element={<Lights />} />
          <Route path="/category/desks" element={<Desks />} />
          <Route path="/category/technology" element={<Technology />} />
          <Route path="/category/others" element={<Others />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Homepage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {/* Render ProductModal only when showModal is true */}
        <ProductModal toggleModalHidden={toggleModalHidden} />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
