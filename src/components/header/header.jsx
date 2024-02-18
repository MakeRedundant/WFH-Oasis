import { useEffect } from "react";
import "./header.styles.scss";
import {
  InitHamburgerAnimation,
  menuAnimation,
  menuLinkAnimation,
} from "../../animations/animations";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import CartIcon from "../cart-icon/cart-icon.component";
import CartPreview from "../cart-preview/cart-preview.component";
import logos from "../../assets/img/Logo.png";

import menu1 from "../../assets/img/menu-1.jpg";
import menu2 from "../../assets/img/menu-2.jpg"
import menu3 from "../../assets/img/menu-3.jpg"
import menu4 from "../../assets/img/menu-4.jpg"

import Modal from "../modal/added-to-cart.component";

const Header = ({ hidden }) => {
  useEffect(() => {
    InitHamburgerAnimation();
    menuAnimation();
    menuLinkAnimation();
  }, []);

  return (
    <div className="header">
      <Link to="/#" className="anim__hide">
        {" "}
        <img src={logos} alt="logo" className="header__logo "/>
      </Link>
      <div className="header__right">
        <Link to="/#" className="header__item anim__hide ">
          Home
        </Link>
        <Link to="/collections" className="header__item anim__hide">
          Shopping
        </Link>
        <Link to="/#" className="header__item anim__hide">
          About
        </Link>
        <Link to="/login" className="header__item anim__hide">
          Login
        </Link>
        <CartIcon />
        <Modal />
        <div className="hamburger" id="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      {hidden ? null : <CartPreview />}
      <nav className="menu-nav">
        <div className="menu-nav__left">
          <div className="menu-nav__left--imgs">
            <img src={menu1} alt="" id="1" className="menu-nav__left--img" />
            <img src={menu2} alt="" id="2" className="menu-nav__left--img" />
            <img src={menu3} alt="" id="3" className="menu-nav__left--img" />
            <img src={menu4} alt="" id="4" className="menu-nav__left--img" />
          </div>
        </div>

        <div className="menu-nav__right">
          <header className="menu-nav__head">
            <img src={logos} alt="logo" className="menu-logo" />
          </header>

          <div className="menu-nav__main">
            <Link to="/#" className="menu-link">
              <h2 id="1" className="menu-nav__link"
              style={ {
                paddingTop: "20%"
              }}>
                Home
              </h2>
            </Link>
            <Link to="/collections" className="menu-link">
              <h2
                id="2"
                className="menu-nav__link"
                onClick={menuAnimation.toggleMenu}
              >
                Collection
              </h2>
            </Link>
            <Link to="/#" className="menu-link">
              <h2 id="3" className="menu-nav__link">
                About
              </h2>
            </Link>
            <Link to="/login" className="menu-link">
              <h2 id="4" className="menu-nav__link">
                Login
              </h2>{" "}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
