import "./hero-section.styles.scss";
import { Link } from "react-router-dom";
import SlickSlider from "../slider/slider.component";

const Hero = () => {
  return (
    <div className="position-relative-wrap">
      <div className="hero">
        <div className="hero__container center-text">
          <h1>Work from Home (WFH)</h1>
          <p className="hero__sub">
          There&lsquo;s no Wi-Fi like home Wi-Fi.
          </p>
          <Link to="/collections" className="hero__cta">
           Look at our products
          </Link>
        </div>

        <div className="hero__slider">
          <SlickSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
