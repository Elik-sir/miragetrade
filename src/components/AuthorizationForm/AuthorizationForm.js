import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './styles';
import SigninForm from '../SigninForm/SigninForm';
import SignupForm from '../SignupForm/SignupForm';
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
const AuthorizationForm = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Paper elevation={13} classes={{ root: classes.root }}>
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          height: '100%',
        }}
      >
        <div className={classes.form}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            centered
          >
            <Tab
              label='Авторизация'
              classes={{ root: classes.tabs, wrapper: classes.wrapper }}
            />
            <Tab
              label='Регистрация'
              classes={{ root: classes.tabs, wrapper: classes.wrapper }}
            />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <SigninForm classes={classes} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <SignupForm classes={classes} />
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </Paper>
  );
};

export default AuthorizationForm;
