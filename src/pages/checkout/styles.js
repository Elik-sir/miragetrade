import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  //Стили для страницы Корзины
  checkoutPage: {
    width: '55%',
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px auto 0',
    paddingBottom: '64px',
  },
  checkoutHeader: {
    width: '100%',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid darkgrey',
    '&:last-child': {
      width: '13%',
      textAlign: 'right',
    },
  },
  headerBlock: {
    textTransform: 'capitalize',
    width: '16%',
    textAlign: 'center',
  },
  total: {
    marginTop: '30px',
    fontSize: '36px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnBay: {
    fontSize: '24px',
    width: '135px',
    marginTop: '32px',
  },
}));
