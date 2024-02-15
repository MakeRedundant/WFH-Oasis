import React from "react";
import { connect } from "react-redux";
import { toggleModalHidden } from "../../redux/product-modal/product-modal.actions";
import { addItem } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { selectProductForModal } from "../../redux/product-modal/product-modal.selector";
import { AddedToCartModal } from "../../animations/animations";
import "./product-modal.styles.scss";

const ProductModal = ({ item, toggleModalHidden, addItemToCart, hidden }) => {
  if (hidden || !item) return null; // Return null if hidden or no item

  const { imageUrl, name, category, price } = item;

  return (
    <div className="product-modal__container" onClick={toggleModalHidden}>
      <div className="product-modal__modal" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal__close-btn" onClick={toggleModalHidden}>
          ×
        </button>
        <img className="product-modal__img" src={imageUrl} alt="product" />
        <div className="product-modal__details">
          <p className="product-modal__product-name">{`${name} ${category ? category.slice(0, -1) : ""}`}</p>
          <p className="product-modal__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, labore eum! Tenetur impedit tempora corporis inventore perferendis. Saepe temporibus delectus maiores nam aspernatur inventore quae tempora sit assumenda.
          </p>
          <div className="product-modal__actions">
            <p className="product-modal__price">₦{price}</p>
            <button className="add-to-cart" onClick={() => {
              addItemToCart(product);
              toggleModalHidden();
              AddedToCartModal();
            }}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.productForModal.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModalHidden: () => dispatch(toggleModalHidden()),
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
