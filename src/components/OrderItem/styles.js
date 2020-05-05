import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  //Стили для заказов
  expantion: {
    width: '100%',
    backgroundColor: '#414040',
    border: '1px solid white',
  },
  quastion: {
    width: '70%',
    textAlign: 'left',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: 'white',
  },
  image: {
    width: '80px',
  },
  itemInfo: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
    color: 'white',
  },
  header: {
    display: 'flex',
    borderBottom: '1px solid white',
    marginBottom: '8px',
    paddingBottom: '8px',
    justifyContent: 'space-between',
    '&>div': {
      width: '20%',
      color: 'white',
    },
    '&>div:nth-child(2)': {
      width: '50%',
    },
  },
  wrapperItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    borderBottom: '1px solid white',
    '&>div': {
      width: '20%',
    },
    '&>div:nth-child(2)': {
      width: '50%',
      textAlign: 'left',
      marginLeft: '8px',
    },
  },
  total: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'white',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    '&>div': {
      width: '40%',
      textAlign: 'left',
    },
    '&>div:first-child': {
      width: '40%',
    },
    '&>div:last-child': {
      width: '20%',
    },
  },
}));
