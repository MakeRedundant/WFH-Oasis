import React from "react";
import "./shop-item.styles.scss";
import ProductModal from "../product-modal/product-modal.component";

const ShopItem = ({ item, category }) => {
  const { imageUrl, name, price } = item;
  const [productModalOpen, setProductModalOpen] = React.useState(false);

  // Function to open the product modal
  const openProductModal = () => {
    setProductModalOpen(true);
  };

  // Function to close the product modal
  const closeProductModal = () => {
    setProductModalOpen(false);
  };

  return (
    <div className="furniture-item" onClick={openProductModal}>
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
      {productModalOpen && (
        <ProductModal
          product={item}
          closeModal={closeProductModal}
        />
      )}
    </div>
  );
};

export default ShopItem;
