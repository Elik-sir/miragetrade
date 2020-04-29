import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: '16px',
    '& >label': { color: 'white' },
    '& >div>input': { color: 'white' },
    borderBottom: '1px solid white',
  },
  btn: {
    borderRadius: '18px',
    marginBottom: '0',
    fontSize: '16px',
  },
}));
