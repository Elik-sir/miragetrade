import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
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
}));
