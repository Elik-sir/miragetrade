import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../redux/shop/actions';

import ItemInfo from '../../components/item-info/item-info';
import ItemInfoDialog from '../../components/item-info/dialog';
import Item from '../../components/Item/item';
import Sceletons from './sceleton';
import Filters from './filters';
import { useStyles } from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Страница Магазин
const ShopPage = ({ items, isLoading, getItems, error, setAlert }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <div>
      {!error ? (
        <div className={classes.shopPage}>
          <Filters />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
            }}
          >
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
              {matches ? <ItemInfoDialog /> : <ItemInfo />}
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ color: 'white' }}>
          Упсс... <br /> Инвентарь не доступен
        </h1>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  items: state.items.filter
    ? state.items.items.filter((item) => item.type === state.items.filter)
    : state.items.items,
  isLoading: state.items.isLoadingItems,
  error: state.items.error,
});
const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
