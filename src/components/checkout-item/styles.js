import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  checkoutItem: {
    width: '100%',
    display: 'flex',
    minHeight: '100px',
    borderBottom: '1px solid darkgrey',
    padding: '15px 0',
    fontSize: '20px',
    alignItems: 'center',
  },
  imageContainer: {
    width: '23%',
  },

  img: {
    width: ' 100%',
    height: '100%',
  },
  name: {
    width: '23%',
  },

  price: {
    width: '23%',
  },
  quantity: {
    display: 'flex',
    justifyContent: 'center',
    width: '23%',
  },
  arrow: {
    cursor: ' pointer',
  },
  value: {
    margin: '0 10px',
  },

  removeButton: {
    paddingLeft: '30px',
    cursor: 'pointer',
  },
}));
