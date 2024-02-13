import React from "react";
import { connect } from "react-redux";
import { updateProduct, toggleModalHidden } from "../../redux/product-modal/product-modal.actions";
import "./shop-item.styles.scss";

const ShopItem = ({ item, addItem, category, updateProductForModal, toggleModalHidden }) => {
  const { imageUrl, name, price } = item;

  const handleClick = () => {
    updateProductForModal(item);
    toggleModalHidden();
  };

  return (
    <div className="furniture-item" onClick={handleClick}>
      <div
        className="furniture-item__img"
        style={{ backgroundImage: `url(${imageUrl})` }}
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
  updateProductForModal: (item) => dispatch(updateProduct(item)),
  toggleModalHidden: () => dispatch(toggleModalHidden()),
});

export default connect(null, mapDispatchToProps)(ShopItem);
