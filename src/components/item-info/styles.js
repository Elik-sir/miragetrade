import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  itemInfo: {
    color: ' white',
    border: ' white 3px solid',
    backgroundColor: 'rgba(49, 48, 48, 0.719)',
    padding: '32px',
    width: '300px',
  },
  imageInfo: {
    width: '300px',
    height: '280px',
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
}));
