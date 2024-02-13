import ProductDetailActionTypes from "./product-modal.types";

const INITIAL_STATE = {
  hidden: true,
  product: {},
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductDetailActionTypes.TOGGLE_MODAL_HIDDEN:
      return {
        ...state,
        hidden: action.payload,
      };

    case ProductDetailActionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
