import React from 'react';
import { connect } from 'react-redux';
import ItemInfo from '../../components/item-info/item-info';
import Item from '../../components/Item/item';
import Sceletons from './sceleton';
import Filters from './filters';
import './shop.css';
const ShopPage = ({ items, isLoading }) => {
  return (
    <div>
      <Filters />

      <div className='shopPage'>
        <div className='Items'>
          {isLoading && items.length < 1 ? (
            <Sceletons />
          ) : (
            items.map((item) => (
              <Item
                key={item.id}
                image={item.image}
                name={item.name}
                market_name={item.market_name}
              />
            ))
          )}
        </div>
        <div style={{ height: '250px' }}>
          <ItemInfo />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  items: state.items.items,
  isLoading: state.items.isLoading,
});

export default connect(mapStateToProps)(ShopPage);
