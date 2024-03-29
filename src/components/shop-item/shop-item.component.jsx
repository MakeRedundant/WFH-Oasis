// import React from "react";
// import { connect } from "react-redux";
// import "./shop-item.styles.scss";

// import { addItem } from "../../redux/cart/cart.actions";
// import { toggleModalHidden } from "../../redux/product-modal/product-modal.actions";
// import { AddedToCartModal } from "../../animations/animations";
// import ProductModal from "../product-modal/product-modal.component";

// const ShopItem = ({ item, category, addItem, toggleModalHidden }) => {
//   const { imageUrl, name, price } = item;

//   const handleItemClick = (e) => {
//     e.stopPropagation();
//     console.log("Clicked item:", item);
//     toggleModalHidden(item);
//   };

//   console.log("Props in ShopItem:", item);

//   return (
//     <div className="furniture-item" onClick={handleItemClick}>
//       <div
//         className="furniture-item__img"
//         style={{
//           backgroundImage: `url(${imageUrl})`,
//         }}
//       />
//       <div className="button-container"></div>
//       <p className="furniture-item__category">{category}</p>

//       <div className="furniture-item__details">
//         <p className="furniture-item__name">{name}</p>
//         <p className="furniture-item__price">{`$${price}`}</p>
//       </div>

//       {/* Pass props to ProductModal */}
//       <ProductModal
//         item={item}
//         toggleModalHidden={toggleModalHidden}
//         addItemToCart={addItem}
//       />
//     </div>
//   );
// };

// const mapDispatchToProps = (dispatch) => ({
//   toggleModalHidden: (item) => dispatch(toggleModalHidden(item)),
//   addItem: (item) => dispatch(addItem(item)),
// });

// export default connect(null, mapDispatchToProps)(ShopItem);

import React from "react";
import { connect } from "react-redux";
import "./shop-item.styles.scss";

import { toggleModalHidden, updateProduct } from "../../redux/product-modal/product-modal.actions";
import ProductModal from "../product-modal/product-modal.component";

const ShopItem =  ({
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
        toggleModalHidden();
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
  toggleModalHidden: () => dispatch(toggleModalHidden()),
});
export default connect(null, mapDispatchToProps)(ShopItem);

