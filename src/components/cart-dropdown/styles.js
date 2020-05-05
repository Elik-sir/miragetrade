import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  //Стили для выпадающей корзины
  cartDropdown: {
    position: 'absolute',
    width: '220px',
    height: '340px',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    border: '1px solid white',
    backgroundColor: 'black',
    top: '90px',
    right: '40px',
    zIndex: '5',
    textAlign: 'center',
  },
  //Стили для сообщения о пустой корзины
  emptyMessage: {
    fontSize: '28px',
    margin: '50px auto',
  },
  //стили для предметов в корзине
  cartItems: {
    height: '270px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: 6,
      backgroundColor: '#414040',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '20px',
      backgroundColor: theme.palette.primary.main,
    },
  },
  //Стили для кнопки
  checkoutbtn: {
    padding: '10px 3px',
    fontSize: '16px',
    marginTop: 'auto',
  },
  //Стили для ссылки
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'normal',
  },
}));
