import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { makeStyles, Divider } from '@material-ui/core';
import myAvatar from '../../shared/assets/avatar_myself.jpg'
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
  return (
    <>
      <div className={classes.root}>
        <Avatar
          alt='KwangTran'
          src={myAvatar}
          sx={{ width: 56, height: 56 }}
        />
        <Typography component='h5'>Trần Văn Quang</Typography>
      </div>
      <Divider />
    </>
  );
};

export default SidebarHeader;
