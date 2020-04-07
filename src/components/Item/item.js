import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentItem } from '../../redux/shop/actions';
import './item.styles.scss';
const Item = ({ image, name, getItemInfo }) => {
  const onSubmitItem = item => {
    getItemInfo(item);
  };
  return (
    <div className="collection-item" onClick={() => onSubmitItem(name)}>
      <img className="image" src={image} alt="item" />
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  getItemInfo: item => dispatch(changeCurrentItem(item)),
});
export default connect(null, mapDispatchToProps)(Item);
