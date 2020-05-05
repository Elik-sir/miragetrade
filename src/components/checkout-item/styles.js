import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  //Стили Для предмета на странице Корзина
  checkoutItem: {
    width: '100%',
    display: 'flex',
    minHeight: '100px',
    borderBottom: '1px solid darkgrey',
    padding: '15px 0',
    fontSize: '16px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '16%',
  },

  img: {
    width: ' 100%',
    height: '100%',
  },
  name: {
    width: '16%',
  },

  price: {
    width: '16%',
  },
  quantity: {
    display: 'flex',
    justifyContent: 'center',
    width: '16%',
  },
  arrow: {
    cursor: ' pointer',
  },
  value: {
    margin: '0 10px',
  },

  removeButton: {
    width: '16%',
    cursor: 'pointer',
  },
}));
