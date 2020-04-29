import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  FaqPage: {
    color: 'white',
  },
  title: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  fade: {
    marginBottom: theme.spacing(2),
  },
}));
