import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
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
  emptyMessage: {
    fontSize: '28px',
    margin: '50px auto',
  },
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
  checkoutbtn: {
    padding: '10px 3px',
    fontSize: '16px',
    marginTop: 'auto',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'normal',
  },
}));
