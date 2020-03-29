import React from "react";
import ItemInfo from "../../components/item-info/item-info";
import Item from "../../components/Item/item";
import { connect } from "react-redux";
import "./shop.css";
const ShopPage = ({ items }) => {
  return (
    <div className="shopPage">
      <div className="Items">
        {items.map((item, id) => (
          <Item
            key={id}
            image={item.image}
            name={item.name}
            sale_price={item.sale_price}
          />
        ))}
      </div>

      <ItemInfo />
    </div>
  );
};
const mapStateToProps = state => ({
  items: state.items.items,
});
export default connect(mapStateToProps)(ShopPage);
