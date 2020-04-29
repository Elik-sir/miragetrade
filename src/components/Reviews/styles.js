import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  Reviews: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  root: {
    backgroundColor: '#414040',
    margin: '5px',
  },
  fade: {
    marginBottom: theme.spacing(2),
  },
}));
