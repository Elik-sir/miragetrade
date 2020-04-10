import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    alignItems: 'center',
    color: 'white',
    height: '10vh',
    margin: '0',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'normal',
  },
  logout: {
    cursor: 'pointer',
  },
}));
