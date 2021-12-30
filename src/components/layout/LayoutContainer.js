import React from 'react';
import {
  DialogTitle,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  makeStyles,
  Drawer,
  Hidden,
} from '@material-ui/core';
import Sidebar from '../sidebar/Sidebar'
import ResponsiveAppBar from '../appbar/ResponsiveAppBar';
const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // width: `calc(100vw - 240px)`,
    // minHeight: '100vh',
  },
  contentShift: {
    width: `calc(100vw - ${240 + theme.spacing(6)}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
  link: {
    '&:not(:first-child)': {
      paddingLeft: 15,
    },
  },
}));

const LayoutContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <>
      <ResponsiveAppBar/>
        <Sidebar />
        <div className={classes.content}>{children}</div>
      </>
    </div>
  );
};

export default LayoutContainer;
