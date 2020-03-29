import React from "react";
import { connect } from "react-redux";
import { AddShoppingCart } from "@material-ui/icons";
import { addItem } from "../../redux/cart/actions";
import "./item-info.css";
const ItemInfo = ({ item, addItem }) => (
  <div className="itemInfo">
    <img className="image-info" src={item.image} alt="item" />
    <div className="description">
      <span>{item.name}</span>
    </div>
    <span>{item.sale_price}$</span>
    <br />
    <button className="btn-buy" onClick={() => addItem(item)}>
      <div>
        <AddShoppingCart fontSize="large" />
      </div>
      <div>Добавить в корзину</div>
    </button>
  </div>
);
const mapStateToProps = state => ({
  item: state.items.currentItem,
});
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo);
