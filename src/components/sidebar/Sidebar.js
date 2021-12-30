import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../redux/actions/config/config.action';
import SidebarHeader from './SidebarHeader';
import { log_out } from '../../redux/actions/auth/auth.action';

const SidebarCustom = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.config.isOpenSidebar);

  const toggleDrawer = () => {
    dispatch(toggleSidebar(!isOpen));
  };
const handleLogout = () => {
  dispatch(log_out())
}
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={() => toggleDrawer(true)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
          <ListItem button key='Spam'>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Spam' />
          </ListItem>
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
