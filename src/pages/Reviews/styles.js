import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  ReviewPage: {
    height: '100%',
    color: 'white',
    paddingBottom: '32px',
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
  pagination: { width: '100%' },
  ul: { '& > li > button': { color: 'white' } },
  wrapperreviewForm: {
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    postition: 'relative',
  },
}));
