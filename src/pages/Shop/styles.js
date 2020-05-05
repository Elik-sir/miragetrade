import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  //Стили для страницы Магазин
  shopPage: {
    padding: '32px',
    display: 'flex',
    textAlign: 'left',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  Items: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1045px',
  },
  wrapperSkeleton: {
    height: '360px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginBottom: '24px',
    width: '100%',
  },
  filterMenu: {
    padding: '16px',
  },
}));
