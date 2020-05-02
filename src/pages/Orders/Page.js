import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../../firebase/firebase.utils';
import { format } from 'date-fns';
import { useStyles } from './styles';
import OrderItem from '../../components/OrderItem/OrderItem';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Grid from '@material-ui/core/Grid';

//Страница Заказов
const OrdersPage = ({ user }) => {
  const classes = useStyles();
  const [orders, setOrders] = React.useState();
  useEffect(() => {
    if (user)
      getOrders(user.id).then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, [setOrders, user]);
  return (
    <div style={{ color: 'white' }}>
      {orders && (
        <TransitionGroup {...{ appear: true, enter: true, exit: true }}>
          <Fade collapse bottom duration={2500} style={{ width: '100%' }}>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
            >
              <Grid item xs={12} sm={8} md={6} lg={6} style={{ width: '100%' }}>
                <h1>Заказы</h1>
                {orders.map((order, id) => (
                  <div className={classes.fade} key={id}>
                    <OrderItem
                      order={order.items}
                      account={order.account}
                      createdAt={format(
                        new Date(order.createdAt.seconds * 1000),
                        "dd.MM.yyyy' 'HH:mm:ss",
                      )}
                      key={id}
                    />
                  </div>
                ))}
              </Grid>
            </Grid>
          </Fade>
        </TransitionGroup>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});
export default connect(mapStateToProps)(OrdersPage);
