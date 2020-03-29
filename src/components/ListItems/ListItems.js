import React from "react";
import Item from "../Item/item";
import "./ListItems.styles.css";
const ListItems = ({ items }) => (
  <div className="ListItems">
    {items.map(item => (
      <Item
        icon_url={item.image}
        price={item.sale_price}
        name={
          item.name.split(" ")[0] === "Sealed"
            ? item.name.split(" ")[2] +
              item.name.split(" ")[3] +
              item.name.split(" ")[4] +
              item.name.split(" ")[5]
            : item.name
        }
        className="Item"
      />
    ))}
  </div>
);

export default ListItems;
