import './App.css';
import './scss/main.scss';
import Homepage from './pages/homepage/homepage';
import Header from './components/header/header';
import Footer from "./components/footer/footer";

//Modal for product
import ProductModal from './components/product-modal/product-modal.component';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Shopping categories
import Everything from "./pages/shop/everything.component";
import Chairs from "./pages/shop/chairs.component";
import Sofas from "./pages/shop/sofas.component";
import Stools from "./pages/shop/stools.components";
import Lights from "./pages/shop/lights.component";
import Ottomans from "./pages/shop/ottomans.component";
import Checkout from "./pages/checkout/checkout.component";

//Login and Signup page
import LogIn from "./pages/Log-in/log-in.component";
import SignUp from "./pages/sign-up/sign-up.component";

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
          <Route path="/category/sofas" element={<Sofas />} />
          <Route path="/category/stools" element={<Stools />} />
          <Route path="/category/ottomans" element={<Ottomans />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Homepage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
          // path={["/collections/*", "/category/*"]}
          // element={<ProductModal />}
        />
        </Routes>
        {/* <ProductModal /> */}
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
