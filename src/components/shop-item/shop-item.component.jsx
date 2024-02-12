import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./shop-item.styles.scss";

import { addItem } from "../../redux/cart/cart.actions";
import {
  updateProduct,
  toggleModalHidden,
} from "../../redux/product-modal/product-modal.actions";
import { AddedToCartModal } from "../../animations/animations";

// import productModalComponent from "../product-modal/product-modal.component";

const ShopItem = ({
  item,
  addItem,
  category,
  updateProductForModal,
  toggleModalHidden,
}) => {
  const { imageUrl, name, price } = item;

  return (
    <div
      className="furniture-item"
      onClick={() => {
        // addItem(item);
        // AddedToCartModal();
        updateProductForModal(item);
        toggleModalHidden(true);
      }}
    >
      <div
        className="furniture-item__img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="button-container"></div>
      <p className="furniture-item__category">{category}</p>

      <div className="furniture-item__details">
        <p className="furniture-item__name">{name}</p>
        <p className="furniture-item__price">{`$${price}`}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  updateProductForModal: (item) => dispatch(updateProduct(item)),
  toggleModalHidden: (payload) => dispatch(toggleModalHidden(payload)),
});
export default connect(null, mapDispatchToProps)(ShopItem);
