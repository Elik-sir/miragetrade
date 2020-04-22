import React from 'react';
import { connect } from 'react-redux';
import {
  getPrice,
  changeCurrentItem,
  toggleDialog,
} from '../../redux/shop/actions';
import { useStyles } from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Item = ({
  image,
  name,
  exterior,
  color,
  getPrice,
  id,
  changeCurrentItem,
  toggleDialog,
}) => {
  const onSubmitItem = (name, image, exterior, color, id) => {
    getPrice(name);
    changeCurrentItem({ image, name, exterior, color, id });
  };
  const matches = useMediaQuery('(max-width:600px)');
  const classes = useStyles();
  return (
    <div
      className={classes.collectionItem}
      onClick={() => {
        onSubmitItem(name, image, exterior, color, id);
        if (matches) toggleDialog();
      }}
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
  toggleDialog: () => dispatch(toggleDialog()),
});
export default connect(null, mapDispatchToProps)(Item);
