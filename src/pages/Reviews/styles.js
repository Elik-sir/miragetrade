import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  ReviewPage: {
    minHeight: '100vh',
    height: '100%',
    color: 'white',
  },
  root: {
    backgroundColor: '#414040',
    margin: '5px',
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
  ul: { '& > li > button': { color: 'white' } },
}));
