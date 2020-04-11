import React from 'react';
import { useStyles } from './styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const FaqItem = ({ quastion, answer, id }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();
  return (
    <div>
      <ExpansionPanel
        classes={{ root: classes.expantion }}
        expanded={expanded === `panel${id}`}
        onChange={handleChange(`panel${id}`)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon color='secondary' />}
          aria-controls={`panel${id}bh-content`}
          id={`panel${id}bh-header`}
        >
          <Typography className={classes.heading}>{quastion}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.heading}>{answer}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
export default FaqItem;
