import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  collectionItem: {
    width: '130px',
    height: '130px',
    margin: '8px',
    backgroundColor: '#3b3a3ae9',
    borderRadius: '2px',
  },
  image: {
    height: '90px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));
