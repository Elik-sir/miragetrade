import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { changeAvatarandDisplayName } from '../../firebase/firebase.utils';
import { useStyles } from './styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toggleDialog, setAlert } from '../../redux/common/actions';
//Профиль пользователя
const UserProfile = ({ currentUser, toggle, open, setAlert }) => {
  const classes = useStyles();
  const [photoURL, setPhotoURL] = useState('');
  const [displayName, setDisplayName] = useState(currentUser.displayName);

  return (
    <Dialog
      open={open}
      onClose={() => toggle('UserProfile')}
      aria-labelledby='form-dialog-title'
      classes={{ paper: classes.dialog }}
    >
      <div style={{ backgroundColor: 'rgba(0,0,0,0.68)' }}>
        <DialogTitle
          id='form-dialog-title'
          classes={{ root: classes.dialogTitle }}
        >
          Редактирование профиля
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{ textAlign: 'center', color: '#ffffff', fontSize: '24px' }}
          >
            <Avatar
              src={photoURL ? photoURL : currentUser.photoURL}
              classes={{ root: classes.avatar }}
            />
            {currentUser.displayName}
          </DialogContentText>

          <TextField
            margin='dense'
            autoComplete='off'
            id='name'
            label='NickName'
            type='text'
            defaultValue={currentUser.displayName}
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
            fullWidth
            className={classes.textField}
          />
          <TextField
            margin='dense'
            autoComplete='off'
            id='name'
            label='URL фотографии'
            onChange={(e) => setPhotoURL(e.target.value)}
            type='text'
            fullWidth
            className={classes.textField}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              toggle('UserProfile');
              setDisplayName('');
            }}
            color='primary'
          >
            Отмена
          </Button>
          <Button
            onClick={() => {
              if (displayName.length < 15) {
                toggle('UserProfile');
                changeAvatarandDisplayName({
                  id: currentUser.id,
                  displayName,
                  photoURL,
                });
                setDisplayName('');
              } else {
                setAlert({
                  open: true,
                  message: 'NickName должен быть меньше 15 сиволов',
                  severity: 'error',
                });
              }
            }}
            color='primary'
          >
            Изменить
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  open: state.common.toggleDialog,
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: (typeDialog) => dispatch(toggleDialog(typeDialog)),
  setAlert: (alert) => dispatch(setAlert(alert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
