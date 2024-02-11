import './App.css';
import './scss/main.scss';
import Homepage from './pages/homepage/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';


import Everything from "./pages/shop/everything.component";
import Chairs from "./pages/shop/chairs.component";
import Sofas from "./pages/shop/sofas.component";
import Stools from "./pages/shop/stools.components";
import Lights from "./pages/shop/lights.component";
import Ottomans from "./pages/shop/ottomans.component";
import Checkout from "./pages/checkout/checkout.component";

function App() {
  return (
    <Provider store={store}>
      <Router>
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
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
