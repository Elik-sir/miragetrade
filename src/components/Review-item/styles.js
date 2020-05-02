import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  wrapperItem: {
    width: '100%',
    border: '2px solid #666363',
    borderRadius: '6px',
    padding: '16px',
    minWidth: '250px',
  },
  iconEmpty: { color: '#666363' },
  wrapperHeaderItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperComment: {
    textAlign: 'left',
    marginTop: '8px',
    width: '70%',
    marginBottom: '0',
    wordWrap: 'break-word',
  },
  wrapperDate: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '5px',
    color: '#666363',
  },
}));
