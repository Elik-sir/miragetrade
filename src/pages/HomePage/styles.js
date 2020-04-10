import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  title: {
    color: '#e53935',
    marginBottom: '80px',
    marginTop: '80px',
  },

  Picture: {
    background:
      'url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/3381077/d81306d2d9581df32202e9dcc2c8451797af091a.png) no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    width: '100%',
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
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    bottom: '0',
  },
  wrapperFAQ: {},
  ItemFAQ: {
    marginTop: 'auto',
    marginBottom: 'auto',
    color: 'white',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '32px',
    fontWeight: 'normal',
  },
}));
