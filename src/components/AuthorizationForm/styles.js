import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    height: '472px',
    width: '350px',

    background:
      'url(https://img5.goodfon.ru/wallpaper/nbig/9/3e/cs-go-counter-strike-global-offensive-m9-bayonet-crimson-web.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  form: { height: '100%', width: '100%', paddingTop: '32px' },
  textField: {
    marginBottom: '32px',
  },
  btn: {
    minWidth: '150px',
    borderRadius: '18px',
    height: '60px',
  },
  tabs: {
    minWidth: '120px',
    color: 'white',
    borderBottom: '2px solid white',
  },
}));
