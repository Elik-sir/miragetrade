import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  title: {
    color: '#F96464',
    marginBottom: '100px',
    marginTop: '50px',
  },

  Picture: {
    background:
      'url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/3381077/d81306d2d9581df32202e9dcc2c8451797af091a.png) no-repeat',
    backgroundSize: '100%',
    marginLeft: '0.8vw',
    width: '97vw',
    height: '65vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
  },

  FAQ: {
    height: '7%',
    display: 'flex',
    justifyContent: 'space-around',
    color: 'white',
    fontSize: '30px',
    width: '95vw',
    position: 'absolute',
    backgroundColor: 'black',
    opacity: '50%',
    bottom: '0',
  },
  ItemFAQ: {
    zIndex: '100',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: 'white',
    width: '45vw',
  },
}));
