import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  cartIcon: {
    width: '45px',
    height: '45px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  shoppingIcon: {
    width: '24px',
    height: '24px',
  },

  itemCount: {
    position: 'absolute',
    fontSize: '10px',
    fontWeight: 'bold',
    bottom: '12px',
  },
}));
