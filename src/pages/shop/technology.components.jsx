import { useEffect } from "react";
import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";

const Technology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ShopTile category="Technology" />
      <ItemsShowcase category="Technology" itemsToRender={4} filtered />
    </>
  );
};

export default Technology;
