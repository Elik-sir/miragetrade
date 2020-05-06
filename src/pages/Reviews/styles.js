import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  //Стили для странцы Отзывы
  ReviewPage: {
    height: '100%',
    color: 'white',
    paddingBottom: '32px',
  },
  root: {
    backgroundColor: '#414040',
    margin: '5px',
  },
  //Стиль для заголовка страницы
  title: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  //Стиль для анимации
  fade: {
    marginBottom: theme.spacing(2),
  },
  //стили для пагинации
  pagination: { width: '100%' },
  ul: { '& > li > button': { color: 'white' } },
  wrapperreviewForm: {
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    postition: 'relative',
  },
}));
