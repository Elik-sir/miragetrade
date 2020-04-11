import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  avatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '40px',
    height: '40px',
  },
  dialog: {
    background:
      'url(https://i.pinimg.com/originals/67/2b/a7/672ba7a104a72c328a30cef132ba5fd0.jpg) no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    color: '#ffffff',
  },
  textField: {
    marginBottom: '16px',
    '& >label': { color: 'white' },
    '& >div>input': { color: 'white' },
    borderBottom: '1px solid white',
  },
  dialogTitle: {
    color: '#ffffff',
  },
}));
