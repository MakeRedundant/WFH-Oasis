import { useEffect } from "react";
import "./shop-title.styles.scss";
import arrowDOwn from "../../assets/img/arrow-down.png";

import { shopFilterAnimation } from "../../animations/animations";

const ShopTitle = ({ category }) => {
  useEffect(() => {
    shopFilterAnimation();
  });
  return (
    <div className="header-container">
      <h2 className="shop__title--sub">Collection</h2>
      <h3 className="shop__title">
        {category}
        <span className="shop__title--icon">
          <img src={arrowDOwn} alt="" />
        </span>
      </h3>
    </div>
  );
};

export default ShopTitle;
