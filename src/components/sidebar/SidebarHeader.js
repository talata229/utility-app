import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { makeStyles, Divider } from '@material-ui/core';
import myAvatar from '../../shared/assets/avatar_myself.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/selectors/AuthSelector';
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
}));
const SidebarHeader = () => {
  const classes = useStyles();
  const currentUser = useSelector((state) => state?.auth?.currentUser)
  return (
    <>
      <div className={classes.root}>
        <Link to='/'>
          <Avatar
            alt='KwangTran'
            src={currentUser.photoURL || myAvatar }
            sx={{ width: 56, height: 56 }}
          />
        </Link>
        <Typography component='h5'>Trần Văn Quang</Typography>
      </div>
      <Divider />
    </>
  );
};

export default SidebarHeader;
