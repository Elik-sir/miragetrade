import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: "white",
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  background: {
    height: "calc(100vh - 100px)",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
