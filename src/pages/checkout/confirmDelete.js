import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import DialogTitle from '@material-ui/core/DialogTitle';
import { toggleDialogDelete } from '../../redux/common/actions';
import { clearCart } from '../../redux/cart/actions';
//Диаологово окно отчистки корзины
const ConfirmDelete = ({ open, toggleDialogDelete, clearCart }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => toggleDialogDelete()}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          Вы уверены, что хотите убрать все товары из корзины?
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => toggleDialogDelete()} color='primary'>
            Отмена
          </Button>
          <Button
            onClick={() => {
              clearCart();
              toggleDialogDelete();
            }}
            color='primary'
          >
            Убрать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
const mapStateToProps = (state) => ({
  open: state.common.toggleDialogDelete,
});
const mapDispatchToProps = (dispatch) => ({
  toggleDialogDelete: () => dispatch(toggleDialogDelete()),
  clearCart: () => dispatch(clearCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDelete);
