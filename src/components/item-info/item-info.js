import React from 'react';
import { connect } from 'react-redux';
import { AddShoppingCart } from '@material-ui/icons';
import { addItem } from '../../redux/cart/actions';
import Button from '@material-ui/core/Button';
import './item-info.css';
const ItemInfo = ({ item, addItem, isLoading, items }) => (
  <div className='itemInfo'>
    {isLoading || !items.error ? (
      <div className={'emptyMessage'}>
        <h1>Загрузка инвентаря</h1>
        <p>Если загрузка идёт больше минуты, перезагрузите страницу</p>
      </div>
    ) : item ? (
      <div>
        <img className='image-info' src={item.image} alt='item' />
        <div className='description'>
          <span>{item.name}</span>
        </div>
        <span>{item.sale_price}$</span>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
      <div className={'emptyMessage'} style={{ height: '200px' }}>
        <h1>Выберете предмет</h1>
      </div>
    )}
  </div>
);
const mapStateToProps = (state) => ({
  item: state.items.currentItem,
  items: state.items.items,
  isLoading: state.items.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo);
