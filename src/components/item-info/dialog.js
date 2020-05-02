import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toggleDialog, showSnack } from '../../redux/shop/actions';
import { addItem } from '../../redux/cart/actions';
import { useStyles } from './styles';
import { Skeleton } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
};
const ItemInfoDialog = ({
  addItem,
  isLoadingPrice,
  sale_price,
  toggle,
  item,
  open,
  error,
  showSnack,
  openAlert,
}) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    showSnack(false);
  };
  return (
    <Dialog
      open={open}
      onClose={() => toggle()}
      aria-labelledby='form-dialog-title'
      classes={{ paper: classes.dialog }}
      fullScreen
    >
      <div style={{ backgroundColor: 'rgba(0,0,0,0.68)', height: '100%' }}>
        <DialogTitle id='form-dialog-title'>Подробности товара</DialogTitle>
        <DialogContent>
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
            <div className={classes.priceWrapper}>
              <div>Цена:</div>
              <div>
                <span>
                  {isLoadingPrice ? (
                    <div style={{ marginTop: '3px' }}>
                      <Skeleton
                        variant='rect'
                        width={80}
                        height={21}
                        animation='wave'
                        classes={{ root: classes.root }}
                      />
                    </div>
                  ) : !error ? (
                    ` ${sale_price}$`
                  ) : (
                    <span>Актуальная цена не получена</span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              toggle();
            }}
            color='primary'
          >
            Выйти
          </Button>
          <Button
            onClick={() => {
              addItem({ ...item, sale_price });
              showSnack(true);
            }}
            color='primary'
            disabled={isLoadingPrice ? true : false}
          >
            Добавить в корзину
          </Button>
        </DialogActions>
        <Snackbar
          open={openAlert}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          key={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity='success'>
            Товар добавлен в корзину
          </Alert>
        </Snackbar>
      </div>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  open: state.items.toggle,
  item: state.items.currentItem,
  sale_price: state.items.sale_price,
  items: state.items.items,
  isLoadingPrice: state.items.isLoadingPrice,
  isLoadingItems: state.items.isLoadingItems,
  error: state.items.errorPrice,
  OpenAlert: state.items.isopenSnack,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleDialog()),
  addItem: (item) => dispatch(addItem(item)),
  showSnack: (isOpen) => dispatch(showSnack(isOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemInfoDialog);
