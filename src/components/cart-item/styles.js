import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  cartItem: {
    width: '100%',
    display: 'flex',
    height: '80px',
    marginBottom: '15px',
  },
  img: {
    width: '30%',
  },

  itemDetails: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '10px 20px',
  },

  name: {
    fontSize: '16px',
  },
}));
