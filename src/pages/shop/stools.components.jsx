import React, { useEffect } from "react";
import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";
import { connect } from "react-redux";
import { toggleModalHidden } from "../../redux/product-modal/product-modal.actions";
const Stools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // setModalHidden(true);
  }, []);

  return (
    <>
      <ShopTile category="Stools" />
      <ItemsShowcase category="Stools" itemsToRender={4} filtered />
    </>
  );
};
// const mapDispatchToProps = (dispatch) => ({
//   setModalHidden: (item) => dispatch(toggleModalHidden(item)),
// });
// export default connect(null, mapDispatchToProps)(Stools);

export default Stools;
