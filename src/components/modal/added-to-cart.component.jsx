import React from "react";
import "./added-to-cart.styles.scss";

import check from "../../assets/svg/check.svg";

const Modal = () => (
  <div className="modal">
    <img src={check} alt="check" className="modal__svg" />
    <p className="modal__text">Item added to Cart</p>
  </div>
);

export default Modal;
