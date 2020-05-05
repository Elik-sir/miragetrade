import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  //стили для Панели навигации
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
    '&:hover': {
      borderBottom: '2px solid white',
    },
  }),
  logout: (props) => ({
    cursor: 'pointer',
    width: props.matches ? 'auto' : '100px',
  }),
  signin: (props) => ({
    width: props.matches ? '300px' : '180px',
    display: ' flex',
    marginRight: props.matches ? '40px' : '20px',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: props.matches ? '20px' : '14px',
  }),
}));
