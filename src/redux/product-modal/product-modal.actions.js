import ProductDetailActionTypes from "./product-modal.types";

export const updateProduct = (item) => {
  console.log("Updating product:", item); // Log the item being passed to the action
  return {
    type: ProductDetailActionTypes.UPDATE_PRODUCT,
    payload: item,
  };
};

export const toggleModalHidden = (item) => ({
  type: ProductDetailActionTypes.TOGGLE_MODAL_HIDDEN,
  payload: item,
});


// export const toggleModalHidden = (payload) => ({
//   type: ProductDetailActionTypes.TOGGLE_MODAL_HIDDEN,
//   payload: payload,
// });

// export const toggleModalHidden = (isHidden) => ({
//   type: ProductDetailActionTypes.TOGGLE_MODAL_HIDDEN,
//   payload: isHidden,
// });