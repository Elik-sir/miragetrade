import React from 'react';
import { connect } from 'react-redux';
import { AddShoppingCart } from '@material-ui/icons';
import { addItem } from '../../redux/cart/actions';
import Button from '@material-ui/core/Button';
import { Skeleton } from '@material-ui/lab';
import { useStyles } from './styles';
const ItemInfo = ({
  item,
  addItem,
  isLoadingPrice,
  isLoadingItems,
  sale_price,
  items,
}) => {
  const classes = useStyles();
  return (
    <div
      className={classes.itemInfo}
      style={{ border: `1px solid #${item.color}` }}
    >
      {isLoadingItems || items.error ? (
        <div className={classes.emptyMessage}>
          <h1>Загрузка инвентаря</h1>
          <p>Если загрузка идёт больше минуты, перезагрузите страницу</p>
        </div>
      ) : item ? (
        <div>
          <img className={classes.imageInfo} src={item.image} alt='item' />
          <span>Название:</span>
          <div
            className={classes.description}
            style={{ color: `#${item.color}`, fontWeight: 'bold' }}
          >
            <span>{item.name}</span>
          </div>
          <span>Качество:</span>
          <div className={classes.description}>
            <span>{item.exterior}</span>
          </div>
          <div
            style={{
              width: '150px',
              height: '30px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '24px',
            }}
          >
            <div>Цена:</div>
            <div>
              <span>
                {isLoadingPrice ? (
                  <>
                    <Skeleton
                      variant='rect'
                      width={80}
                      height={25}
                      animation='wave'
                      classes={{ root: classes.root }}
                    />
                  </>
                ) : (
                  ` ${sale_price}$`
                )}
              </span>
            </div>
          </div>
          <br />
          <div className={classes.buttonWrapper}>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => addItem({ ...item, sale_price })}
              disabled={isLoadingPrice}
            >
              <div>
                <AddShoppingCart fontSize='large' />
              </div>
              <div>Добавить в корзину</div>
            </Button>
          </div>
        </div>
      ) : (
        <div className={classes.emptyMessage}>
          <h1>Выберете предмет</h1>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  item: state.items.currentItem,
  sale_price: state.items.sale_price,
  items: state.items.items,
  isLoadingPrice: state.items.isLoadingPrice,
  isLoadingItems: state.items.isLoadingItems,
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo);
