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
import ProductModal from "../product-modal/product-modal.component";

const ShopItem = ({
  item,
  category,
  addItem,
  updateProductForModal,
  showModal,
  toggleModalHidden,
}) => {
  const { imageUrl, name, price } = item;

  const handleItemClick = () => {
    addItem(item);
    AddedToCartModal();
    updateProductForModal(item);
    toggleModalHidden();
  };

  return (
    <div className="furniture-item" onClick={handleItemClick}>
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

      {/* Render ProductModal if showModal is true */}
      {showModal && <ProductModal />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  showModal: state.productModal ? state.productModal.hidden : false,
});


const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  updateProductForModal: (item) => dispatch(updateProduct(item)),
  toggleModalHidden: () => dispatch(toggleModalHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);
