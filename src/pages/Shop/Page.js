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
      <div className={classes.shopPage}>
        <Filters />

        <div className={classes.Items}>
          {isLoading || items.error ? (
            <Sceletons />
          ) : (
            items.map((item) => (
              <Item
                key={item.id}
                image={item.image}
                name={item.name}
                exterior={item.exterior}
                color={item.raw.name_color}
                id={item.id}
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
  items: state.items.filter
    ? state.items.items.filter((item) => item.type === state.items.filter)
    : state.items.items,
  isLoading: state.items.isLoadingItems,
});
const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
