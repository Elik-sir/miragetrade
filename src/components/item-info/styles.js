import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  //Стили для бокового блока подробности товара
  itemInfo: {
    color: ' white',
    border: ' 2px solid rgb(102, 99, 99);',
    marginTop: '8px',
    padding: '32px',
    width: '300px',
  },
  imageInfo: {
    width: '300px',
    height: '280px',
  },
  description: {
    margin: '8px 0',
  },
  emptyMessage: {
    width: '300px',
    textAlign: ' center',
    height: '250px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0',
  },
  root: {
    backgroundColor: '#3b3a3ae9',
    display: 'inline-block',
  },
  priceWrapper: {
    width: '150px',
    height: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '24px',
  },
  //Стили для диалогового окна
  dialog: {
    background:
      'url(https://wallpaperscave.ru/images/thumbs/category/355x200/18/06-28/games-counter-strike-global-offensive-62143.jpg) no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
    color: '#ffffff',
  },
}));
