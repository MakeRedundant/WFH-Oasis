import React, { useState, useEffect } from "react";
import "./showcase.styles.scss";
import { Link } from "react-router-dom";

import ShopItem from "../shop-item/shop-item.component";
import SHOP_DATA from "../../pages/shop/shop.data";

import {
  shopFilterAnimation,
  ShopScrollAnimation,
} from "../../animations/animations";

const ItemsShowcase = ({ filtered, category }) => {
  const [furniture, setFurniture] = useState(SHOP_DATA);

  useEffect(() => {
    shopFilterAnimation();
    ShopScrollAnimation();
  });

  const shopCategories = Object.keys(furniture);

  return (
    <>
      <div className="filter">
        <div className="filter__hide">&#10005;</div>
        <div className="title">Browse Collections</div>
        <ul>
          <li>
            <Link to="/collections">Everything</Link>
          </li>
          {shopCategories.map((category) => (
            <li key={category}>
              <Link to={`/category/${category.toLowerCase()}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="showcase-container">
        <div className="showcase">
          {filtered
            ? furniture[category].items.map((item) => (
                <ShopItem
                  key={item.id}
                  category={category}
                  item={item}
                ></ShopItem>
              ))
            : Object.values(furniture).flatMap((category) =>
                category.items.map((item) => (
                  <ShopItem
                    key={item.id}
                    category={category.category}
                    item={item}
                  ></ShopItem>
                ))
              )}
        </div>
      </div>
    </>
  );
};

export default ItemsShowcase;
