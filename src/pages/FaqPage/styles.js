import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  //Стили для часто заваемых вопросов
  FaqPage: {
    color: 'white',
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
  wrapperGrid: {
    margin: 0,
    width: '100%',
    padding: '20px',
    paddingLeft: '0',
    paddingRight: '0',
  },
}));
