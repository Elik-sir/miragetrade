import React from 'react';
import { connect } from 'react-redux';
import { AddShoppingCart } from '@material-ui/icons';
import { addItem } from '../../redux/cart/actions';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
const ItemInfo = ({ item, addItem, isLoading, items }) => {
  const classes = useStyles();
  return (
    <div className={classes.itemInfo}>
      {isLoading ? (
        <div className={classes.emptyMessage}>
          <h1>Загрузка инвентаря</h1>
          <p>Если загрузка идёт больше минуты, перезагрузите страницу</p>
        </div>
      ) : item ? (
        <div>
          <img className={classes.imageInfo} src={item.image} alt='item' />
          <div className={classes.description}>
            <span>{item.name}</span>
          </div>
          <div>
            <span>{item.sale_price}$</span>
          </div>
          <br />
          <div className={classes.buttonWrapper}>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => addItem(item)}
            >
              <div>
                <AddShoppingCart fontSize='large' />
              </div>
              <div>Добавить в корзину</div>
            </Button>
          </div>
        </div>
      ) : (
        <div className={classes.emptyMessage} style={{}}>
          <h1>Выберете предмет</h1>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  item: state.items.currentItem,
  items: state.items.items,
  isLoading: state.items.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo);
