import React from 'react';
import { connect } from 'react-redux';
import { getPrice, changeCurrentItem } from '../../redux/shop/actions';
import { useStyles } from './styles';
const Item = ({
  image,
  name,
  exterior,
  color,
  getPrice,
  id,
  changeCurrentItem,
}) => {
  const onSubmitItem = (name, image, exterior, color, id) => {
    getPrice(name);
    changeCurrentItem({ image, name, exterior, color, id });
  };
  const classes = useStyles();
  return (
    <div
      className={classes.collectionItem}
      onClick={() => onSubmitItem(name, image, exterior, color, id)}
      style={{ border: `1px solid #${color}` }}
    >
      <div
        style={{
          color: `#${color}`,
          textAlign: 'center',
          fontSize: '10px',
          margin: '0',
          height: '24px',
        }}
      >
        <span>{name}</span>
      </div>
      <img className={classes.image} src={image} alt='item' />
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '10px',
          position: 'relative',
          bottom: '0',
        }}
      >
        <span>{exterior}</span>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  getPrice: (item) => dispatch(getPrice(item)),
  changeCurrentItem: (item) => dispatch(changeCurrentItem(item)),
});
export default connect(null, mapDispatchToProps)(Item);
