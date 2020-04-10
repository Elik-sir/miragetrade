import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../redux/shop/actions';
import ItemInfo from '../../components/item-info/item-info';
import Item from '../../components/Item/item';
import Sceletons from './sceleton';
import Filters from './filters';
import { useStyles } from './styles';
const ShopPage = ({ items, isLoading, getItems }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);
  const classes = useStyles();
  return (
    <div>
      <Filters />

      <div className={classes.shopPage}>
        <div className={classes.Items}>
          {(isLoading && items.length < 1) || items.error ? (
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
        </div>{' '}
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
const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
