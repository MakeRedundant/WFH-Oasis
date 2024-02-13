import "./added-to-cart.styles.scss";

import check from "../../assets/svg/check.svg";

const AddtoCartModal = () => (
  <div className="modal">
    <img src={check} alt="check" className="modal__svg" />
    <p className="modal__text">Item added to Cart</p>
  </div>
);

export default AddtoCartModal;
