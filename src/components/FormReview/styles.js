import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
  root: {
    width: '200',
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    width: '100%',
    backgroundColor: '#414040',
    '& >div>textarea': { color: 'white' },
    '& > label': {
      color: 'white',
    },
  },
  input: {
    borderColor: '#80deea',
  },
  iconEmpty: { color: '#414040' },
});
