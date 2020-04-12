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
import { toggleUserProfile } from '../../redux/common/actions';

const UserProfile = ({ currentUser, toggle, open }) => {
  const classes = useStyles();
  const [photoURL, setPhotoURL] = useState('');
  const [displayName, setDisplayName] = useState('');
  return (
    <Dialog
      open={open}
      onClose={() => toggle()}
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
            {displayName ? displayName : currentUser.displayName}
          </DialogContentText>

          <TextField
            margin='dense'
            autoComplete='off'
            id='name'
            label='NickName'
            type='text'
            defaultValue={currentUser.displayName}
            onChange={(e) => {
              if (displayName.length < 20) setDisplayName(e.target.value);
              else {
                alert('NickName не может содержать больше 20 символов');
                setDisplayName(displayName.slice(0, 19));
              }
            }}
            value={displayName}
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
              toggle();
              setDisplayName('');
            }}
            color='primary'
          >
            Отмена
          </Button>
          <Button
            onClick={() => {
              toggle();
              changeAvatarandDisplayName({
                id: currentUser.id,
                displayName,
                photoURL,
              });
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
  open: state.common.toggleUserProfile,
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleUserProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
