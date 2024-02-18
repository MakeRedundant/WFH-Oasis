import "./footer.scss";
import logo from "../../assets/img/Logo.png";
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="footer__col">
      <div className="footer__group">
        <img src={logo} alt="logo" className="footer__logo" />
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/brian-t-webdeveloper/" className="footer__socials--link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer__socials--icon" />
          </a>
          <a href="https://github.com/MakeRedundant" className="footer__socials--link" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer__socials--icon" />
          </a>
          <a href="https://brian-trang-portfolio.netlify.app/" className="footer__socials--link" target="_blank" rel="noopener noreferrer">
            <FaGlobe className="footer__socials--icon" />
          </a>
          <div className="footer_credit">
            <p>Made by Brian Trang @ 2024</p>
          </div>
        </div>
      </div>
    </div>

    <div className="footer__col">
      <div className="footer__group align-right">
        <Link to="/category/everything" className="footer__group--title">shop</Link>
        <Link to="/category/chairs"className="footer__group--link">Chairs</Link>
        <Link to="/category/desks"className="footer__group--link">Desks</Link>
        <Link to="/category/technology"className="footer__group--link">Technology</Link>
        <Link to="/category/lights"className="footer__group--link">lights</Link>
        <Link to="/category/others"className="footer__group--link">Others</Link>
      </div>
      <div className="footer__group align-right">
        <Link to="/"className="footer__group--title">Navigate</Link>
        <Link to="/" className="footer__group--link">Home</Link>
        <Link to="/collections" className="footer__group--link">Collection</Link>
        <Link to="/" className="footer__group--link">About</Link>
        <Link to="/login" className="footer__group--link">Login</Link>
      </div>
    </div>

    <div className="footer__col">
      <div className="footer__group align-right">
        <Link className="footer__group--title">Company</Link>
        <Link className="footer__group--link">Press</Link>
        <Link className="footer__group--link">Affiliates</Link>
      </div>
      <div className="footer__group align-right">
        <Link className="footer__group--title">Help</Link>
        <Link className="footer__group--link">FAQs</Link>
        <Link className="footer__group--link">Contact us</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
