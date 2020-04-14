import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  header: (props) => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    alignItems: 'center',
    color: 'white',
    height: props.matches ? '10vh' : '6vh',
    margin: '0',
  }),
  link: (props) => ({
    color: 'white',
    textDecoration: 'none',
    fontSize: props.matches ? '16px' : '11px',
    fontWeight: 'normal',
  }),
  logout: {
    cursor: 'pointer',
  },
}));
