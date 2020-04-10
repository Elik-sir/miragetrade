import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import './CheckoutPage.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Предмет</span>
      </div>
      <div className='header-block'>
        <span>Название</span>
      </div>
      <div className='header-block'>
        <span>Количество</span>
      </div>
      <div className='header-block'>
        <span>Цена</span>
      </div>
      <div className='header-block'>
        <span>Подытог</span>
      </div>
      <div className='header-block'>
        <span>Удалить</span>
      </div>
    </div>
    {cartItems.map((cartItem, id) => (
      <CheckoutItem key={id} cartItem={cartItem} />
    ))}
    <div className='total'>
      <span>ИТОГО: ${total.toFixed(2)}</span>
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
