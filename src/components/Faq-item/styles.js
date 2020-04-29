import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
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
}));
