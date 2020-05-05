import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  //Стили для блока авторизации/регистрации
  root: {
    height: '472px',
    width: '350px',
    background:
      'url(https://img5.goodfon.ru/wallpaper/nbig/9/3e/cs-go-counter-strike-global-offensive-m9-bayonet-crimson-web.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  //стили для формы
  form: { height: '100%', width: '100%', paddingTop: '32px' },
  //стили для текстовых полей
  textField: {
    marginBottom: '32px',
  },
  //стили для кнопки
  btn: {
    minWidth: '150px',
    borderRadius: '18px',
    height: '60px',
  },
  //стили для табов
  tabs: {
    minWidth: '120px',
    color: 'white',
    borderBottom: '2px solid white',
  },
}));
