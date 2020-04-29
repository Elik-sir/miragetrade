import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
  root: {
    width: '200',
    display: 'flex',
    alignItems: 'center',
  },
  wrapperForm: {
    width: '100%',
    border: '1px solid white',
    borderRadius: '6px',
    padding: '16px',
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
  wrapperAvatar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
