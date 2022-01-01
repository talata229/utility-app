import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../redux/actions/config/config.action';
import SidebarHeader from './SidebarHeader';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/actions/auth/auth.action';

const SidebarCustom = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.config.isOpenSidebar);

  const toggleDrawer = () => {
    dispatch(toggleSidebar(!isOpen));
  };
  const handleLogout = () => {
     dispatch(logOut());
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={() => toggleDrawer(true)}
    >
      <List>
        <Link to='/inbox'>
          <ListItem button key='Inbox'>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Inbox' />
          </ListItem>
        </Link>
        <Link to='/drafts'>
          <ListItem button key='Drafts'>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Drafts' />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to='/firebase-test'>
          <ListItem button key='Firebase Test'>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Firebase Test' />
          </ListItem>
        </Link>
        <Link to='/drafts'>
          <ListItem button key='Drafts'>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Drafts' />
          </ListItem>
        </Link>
          <ListItem button key='Logout' onClick={handleLogout}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      <Drawer anchor='left' open={isOpen} onClose={() => toggleDrawer(false)}>
        <SidebarHeader />
        {list('left')}
      </Drawer>
    </div>
  );
};

export default SidebarCustom;
