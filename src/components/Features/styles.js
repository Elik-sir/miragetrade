import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  //Стили для элемента
  menuItem: {
    minWidth: '30%',
    maxWidth: '100%',
    textAlign: 'center',
    height: '240px',
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    margin: '0 7.5px 15px',
    overflow: 'hidden',
  },
  //Стили для большого элемента
  large: {
    height: '190px',
    width: '99%',
  },
  //стиль для заднего фона
  backgroundImage: {
    width: '100%',
    height: '100%',
    backgroundPosition: ' center',
    backgroundSize: 'cover',
    '&:hover ': {
      transform: 'scale(1.2)',
      transition: 'transform 6s cubic-bezier(.25, .1, .25, 1 )',

      '& >content': {
        opacity: 0.9,
      },
    },
  },
  //стили для текста
  content: {
    height: '130px',
    width: '230px',
    padding: '20px 25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    backgroundColor: '#fff',
    opacity: '0.7',
    position: 'absolute',
    subtitle: {
      fontWeight: 'lighter',
      fontSize: '16px',
    },
  },
}));
