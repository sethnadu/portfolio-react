import React from 'react';
import FullList from './FullList';
import Content from "../mainPage/Content"
import { NavLink } from 'react-router-dom';

// Material UI Imports
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

// Material UI Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "Open Sans"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:"#6B6B6B",
    fontFamily: "Open Sans",
    color: '#d4d4dc',
    boxShadow: 'none',
    // borderBottom:'2px solid #1d1e22', 
    transition: theme.transitions.create(['height', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarClose: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:"#6B6B6B",
    // borderBottom:'2px solid #feda6a', 
    color: '#d4d4dc',
    transition: theme.transitions.create(['height', 'margin'], {
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
    flexShrink: 0,
    overflowX: 'hidden',
  },
  drawerOpen: {
    width: "100%",
    backgroundColor: '#6B6B6B',
    // borderBottom: "3px solid #feda6a",
    overflowX: 'hidden',
    overflowY: 'hidden',
    height: '150px',
    transition: theme.transitions.create('height', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('height', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    overflowY: 'hidden',
    backgroundColor: "#6B6B6B",
    // borderBottom: "3px solid #feda6a", 
    width: "100%",
    height: '0'
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
    backgroundColor: "#F5F5F5",

  },
  contentOpen: {
    background: "rgba(0, 0, 0, 0.9)",
    filter: "brightness(30%)",
    zIndex: 100,
    height: "100%",
    width: '100%',
    overflowY: 'hidden',
    top: 0,
    left: 0,
  }
}));

export default function HeaderDrawer({props}) {
  const classes = useStyles();
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
        position="fixed"
        className={open ? classes.appBar : classes.appBarClose}
      >
        <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            {!open ? (
                <ArrowBackIcon style={{cursor: 'pointer', transform: 'rotate(270deg)'}} className={classes.menuButton} onClick={handleDrawerOpen}/>
            ) : (
                <ArrowBackIcon style={{cursor: 'pointer', transform: 'rotate(90deg)'}} className={classes.menuButton} onClick={handleDrawerClose}/>
            )}
            <Typography variant="h6" noWrap style={{fontWeight: 'bold', color: 'white', fontFamily: "Open Sans",}} >
                Seth Nadu
            </Typography>
            {!open ? (
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15px'}}>
                <NavLink to="/about" style={{textDecoration: 'none', color: 'white'}} activeStyle={{color: '#feda6a '}}>
                  <p style={{fontSize: '1.0rem', margin: "0 10px"}}>About</p>
                </NavLink>
                <NavLink to="/projects" style={{textDecoration: 'none', color: 'white'}} activeStyle={{color: '#feda6a '}}>
                  <p style={{fontSize: '1.0rem', margin: "0 10px"}}>Projects</p>
                </NavLink>
                <NavLink to="/resume" style={{textDecoration: 'none', color: 'white'}} activeStyle={{color: '#feda6a '}}>
                  <p style={{fontSize: '1.0rem', margin: "0 10px"}}>Resume</p>
                </NavLink>
              </div>
            ) : null}
            </div>
          <div style={{display: "flex", right: "0px"}}>
            <a href="https://github.com/sethnadu" alt="GitHub" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}} className={classes.iconDiv}>
                <GitHubIcon className={classes.menuButton}/>
            </a>
            <a href="https://www.linkedin.com/in/seth-nadu-8b5983187/" target="_blank" rel="noopener noreferrer" alt="LinkedIn" style={{textDecoration: 'none', color: 'inherit'}} className={classes.iconDiv}>
                <LinkedInIcon className={classes.menuButton}/>
            </a> 
            <a href="phone:7173929717" alt="Phone" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}} className={classes.iconDivLink}>
                <PhoneIcon className={classes.menuButton}/>
            </a>
            <a href="mailto:seth.nadu@gmail.com" target="_blank" rel="noopener noreferrer" alt="Mail" style={{textDecoration: 'none', color: 'inherit'}} className={classes.iconDivLink}>
                <MailIcon className={classes.menuButton}/>
            </a>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="top"
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
       <FullList props = {props} open = {open} toggleClose={toggleClose} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>
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
