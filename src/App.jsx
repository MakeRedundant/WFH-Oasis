import './App.css';
import "./scss/main.scss";
import Homepage from './pages/homepage/homepage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// import { Switch, Route, withRouter, Redirect } from "react-router-dom";
// import Header from "./components/header/header.component";
// import LogIn from "./pages/Log-in/log-in.component";
// import SignUp from "./pages/sign-up/sign-up.component";
// import Everything from "./pages/shop/everything.component";
// import Chairs from "./pages/shop/chairs.component";
// import Sofas from "./pages/shop/sofas.component";
// import Stools from "./pages/shop/stools.components";
// import Lights from "./pages/shop/lights.component";
// import Ottomans from "./pages/shop/ottomans.component";
// import Checkout from "./pages/checkout/checkout.component";
// import Footer from "./components/footer/footer.component";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Homepage />
      </Router>
    </Provider>
  );
}

export default App;
