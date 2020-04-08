import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  FaqPage: {
    height: '90vh',
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
