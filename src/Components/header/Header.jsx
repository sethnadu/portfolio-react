import React from 'react';
import { NavLink } from "react-router-dom";
import FullList from './FullList'

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

// Material Icon
import ArrowBackIcon from '@material-ui/icons/ArrowBack';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "white",
    borderBottom: '2px solid #845007'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#845007',
    cursor: 'pointer'
  },
  title: {
    flexGrow: 1,
    color: 'white',
    fontWeight: 'bold'
  },
  buttonLinks: {
    border: "none",
    backgroundColor: 'inherit',
    fontSize: "1.2rem",
    margin: "auto 15px",
    outline: 'none',
    cursor: "pointer",
    fontWeight: 'bold',
    color: "#845007"
  }
}));

const Header = ({props}) => {
  const classes = useStyles();
  
    


  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <ArrowBackIcon className={classes.menuButton} />

          <Typography variant="h6" className={classes.title}>
            Seth Nadu
          </Typography>
          <NavLink to="/about" style={{textDecoration: 'none', color: 'inherit'}} activeStyle={{color: '#feda6a '}}><button className={classes.buttonLinks}>About</button></NavLink>
          <NavLink to="/" style={{textDecoration: 'none', color: 'inherit'}} activeStyle={{color: '#feda6a '}}><button className={classes.buttonLinks}>Projects</button></NavLink>
          <NavLink to="/" style={{textDecoration: 'none', color: 'inherit'}} activeStyle={{color: '#feda6a '}}><button className={classes.buttonLinks}>Contact</button></NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;