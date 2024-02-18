import { useEffect } from "react";
import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";

const Desks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ShopTile category="Desks" />
      <ItemsShowcase category="Desks" itemsToRender={3} filtered />
    </>
  );
};

export default Desks;
