import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  //Стили для кнопки и текстового поля
  textField: {
    marginBottom: '32px',
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
