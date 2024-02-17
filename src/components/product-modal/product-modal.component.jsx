import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toggleModalHidden, updateProduct } from "../../redux/product-modal/product-modal.actions";
import { addItem } from "../../redux/cart/cart.actions";
import { selectModalHidden, selectProductForModal } from "../../redux/product-modal/product-modal.selector";
import { AddedToCartModal } from "../../animations/animations";
import "./product-modal.styles.scss";

const ProductModal = ({ item, toggleModalHidden, addItemToCart, hidden, updateProduct }) => {
  console.log("Item in ProductModal:", item);
  
  useEffect(() => {
    if (item) {
      updateProduct(item);
    }
  }, [item, updateProduct]);
  
  if (hidden || !item) return null; // Return null if hidden or no item

  const { imageUrl, name, category, price } = item;

  return (
    <div className="product-modal__container" onClick={toggleModalHidden}>
      <div
        className="product-modal__modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="product-modal__close-btn"
          onClick={(e) => {
            e.stopPropagation();
            toggleModalHidden(true);
          }}
        >
          ×
        </button>
        <img className="product-modal__img" src={imageUrl} alt="product" />
        <div className="product-modal__details">
          <p className="product-modal__product-name">{`${name} ${
            category ? category.slice(0, -1) : ""
          }`}</p>
          <p className="product-modal__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, labore
            eum! Tenetur impedit tempora corporis inventore perferendis. Saepe
            temporibus delectus maiores nam aspernatur inventore quae tempora
            sit assumenda.
          </p>
          <div className="product-modal__actions">
            <p className="product-modal__price">${price}</p>
            <button
              className="add-to-cart"
              onClick={(e) => {
                e.stopPropagation();
                toggleModalHidden(item);
                AddedToCartModal(item);
                addItemToCart(item);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: selectModalHidden(state),
  item: selectProductForModal(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleModalHidden: (item) => dispatch(toggleModalHidden(item)),
  addItemToCart: (item) => dispatch(addItem(item)),
  updateProduct: (item) => dispatch(updateProduct(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
