import React from "react";
import "./collection-preview.styles.scss";
import Item from "../Item/item";

const CollectionPreview = ({ items }) => (
  <div className="collection-preview">
    <div className="preview">
      {items.map(item => (
        <Item icon_url={item.image} name={item.name} price={item.sale_price} />
      ))}
    </div>
  </div>
);
export default CollectionPreview;
