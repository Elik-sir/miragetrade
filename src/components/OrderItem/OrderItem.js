import React from 'react';
import { useStyles } from './styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const OrderItem = ({ order, id, createdAt, account }) => {
  const [expanded, setExpanded] = React.useState(false);
  const total = order
    .reduce((acc, item) => acc + item.quantity * item.sale_price, 0)
    .toFixed(2);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log(account);
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
          <div className={classes.title}>
            <div>
              <Typography className={classes.heading}>
                Дата заказа : {createdAt}
              </Typography>
            </div>
            <div>
              <Typography className={classes.heading}>
                Счёт списания: {account}
              </Typography>
            </div>
            <div>
              <Typography className={classes.heading}>
                Сумма : {total}$
              </Typography>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <div className={classes.header}>
            <div>Товар</div>
            <div>Название</div>
            <div style={{ textAlign: 'right' }}>Кол-во</div>
            <div style={{ textAlign: 'right' }}>Цена</div>
            <div style={{ textAlign: 'right' }}>Подытог</div>
          </div>
          {order.map((item, id) => (
            <div className={classes.wrapperItem}>
              <div>
                <img src={item.image} alt='item' className={classes.image} />
              </div>
              <div>
                <span className={classes.itemInfo}>{item.name}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className={classes.itemInfo}>{item.quantity}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className={classes.itemInfo}>${item.sale_price}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className={classes.itemInfo}>
                  ${(item.sale_price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}

          <Typography className={classes.total}>Итого :{total}$</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
export default OrderItem;
