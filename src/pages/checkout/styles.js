import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  checkoutPage: {
    width: '55%',
    textAlign: 'center',
    color: 'white',
    minHeight: '90vh',
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
      width: '8%',
    },
  },
  headerBlock: {
    textTransform: 'capitalize',
    width: '23%',
  },
  total: {
    marginTop: '30px',
    marginLeft: 'auto',
    fontSize: '36px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnBay: {
    fontSize: '24px',
    width: '135px',
    marginTop: '32px',
  },
}));