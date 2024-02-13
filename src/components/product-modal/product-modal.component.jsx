import React, { useState } from "react";
import "./product-modal.styles.scss";
import AddtoCartModal from "../modal/added-to-cart.component";

const ProductModal = ({ product, closeModal }) => {
  const { imageUrl, name, price } = product;
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeModal();
    setCartModalOpen(true);

    // Hide the modal after 3 seconds
    setTimeout(() => {
      setCartModalOpen(false);
    }, 3000);
  };

  return (
    <div className="product-modal__container" onClick={closeModal}>
      <div className="product-modal__modal" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal__close-btn" onClick={closeModal}>
          ×
        </button>
        <img className="product-modal__img" src={imageUrl} alt="product" />
        <div className="product-modal__details">
          <p className="product-modal__product-name">{name}</p>
          <p className="product-modal__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, labore
            eum! Tenetur impedit tempora corporis inventore perferendis. Saepe
            temporibus delectus maiores nam aspernatur inventore quae tempora
            sit assumenda.
          </p>
          <div className="product-modal__actions">
            <p className="product-modal__price">{`₦${price}`}</p>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            {cartModalOpen && <AddtoCartModal />} {/* Render the AddtoCartModal when cartModalOpen is true */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
