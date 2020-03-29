import React from "react";
import { connect } from "react-redux";
import { changeCurrentItem } from "../../redux/shop/actions";
import "./item.styles.scss";
const Item = ({ image, name, sale_price, changeItem }) => (
  <div
    className="collection-item"
    onClick={() => changeItem({ image, name, sale_price })}
  >
    <img className="image" src={image} alt="item" />
  </div>
);
const mapDispatchToProps = dispatch => ({
  changeItem: item => dispatch(changeCurrentItem(item)),
});
export default connect(null, mapDispatchToProps)(Item);
