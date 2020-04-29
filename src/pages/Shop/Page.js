import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems, showSnack } from '../../redux/shop/actions';
import ItemInfo from '../../components/item-info/item-info';
import ItemInfoDialog from '../../components/item-info/dialog';
import Item from '../../components/Item/item';
import Sceletons from './sceleton';
import Filters from './filters';
import { useStyles } from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
};
const ShopPage = ({
  items,
  isLoading,
  getItems,
  error,
  openAlert,
  hideSnack,
}) => {
  useEffect(() => {
    getItems();
  }, [getItems]);
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    hideSnack(false);
  };
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
              <Snackbar
                open={openAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                key={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={5000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity='success'>
                  Товар добавлен в корзину
                </Alert>
              </Snackbar>
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
  openAlert: state.items.isopenSnack,
});
const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
  hideSnack: () => dispatch(showSnack()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
