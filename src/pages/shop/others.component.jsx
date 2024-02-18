import { useEffect } from "react";
import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";


const Others = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ShopTile category="Others" />
      <ItemsShowcase category="Others" itemsToRender={5} filtered />
    </>
  );
};

export default Others;
