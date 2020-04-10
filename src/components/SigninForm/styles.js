import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: '32px',
    '& >label': { color: 'white' },
    '& >div>input': { color: 'white' },
    borderBottom: '1px solid white',
  },
  btn: {
    minWidth: '150px',
    borderRadius: '18px',
    height: '60px',
    marginBottom: '0',
  },
}));
