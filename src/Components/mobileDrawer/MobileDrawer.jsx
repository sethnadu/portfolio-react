import React from 'react';
import SideBar from './SideBar';
import Content from '../mainPage/Content';

//Material UI Imports
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// Material UI Icons
import MenuIcon from '@material-ui/icons/Menu';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    fontFamily: "Open Sans"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:"#1d1e22",
    borderBottom:'2px solid #feda6a', 
    color: '#d4d4dc',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarClose: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:"#1d1e22",
    borderBottom:'2px solid #feda6a', 
    color: '#d4d4dc',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    overflowX: 'hidden'
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: '#393f4d',
    borderRight: "3px solid #feda6a",
    overflowX: 'hidden',
    overflowY: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: "#1d1e22",
    borderRight: "3px solid #feda6a",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    width: "100%",
    height: '100%',
    backgroundColor: "#393f4d"
  },
  contentOpen: {
    background: "rgba(0, 0, 0, 0.9)",
    filter: "brightness(30%)",
    zIndex: 100,
    height: "100vh",
    width: '100vw',
    overflowY: "hidden",
    top: 0,
    left: 0,
  }
}));

export default function MobileDrawer({props}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleClose = () => {
    setOpen(!open);
  };

  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        onClick={handleDrawerClose}
        position="fixed"
        className={open ? classes.appBar : classes.appBarClose}
      >
        <Toolbar>
          <Typography variant="h6" noWrap style={{fontWeight: 'bold', fontFamily: "Open Sans"}}>
            Seth Nadu
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
      
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
        </div>
       <SideBar props = {props} open = {open} toggleClose={toggleClose} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>
      </Drawer>
      {open ? (
        <main className={classes.contentOpen} onClick={handleDrawerClose}>
          <Content props = {props} open={open}/>
        </main>
      ) : (
        <main className={classes.content} onClick={handleDrawerClose}>
            <Content props = {props} open={open}/>
        </main>
      )}
    </div>
    </>
  );
}