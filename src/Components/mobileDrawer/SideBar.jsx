import React from "react";
import { NavLink } from 'react-router-dom';

// Material UI Imports
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
// Material UI Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import DescriptionIcon from '@material-ui/icons/Description';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles({
    container: {
        paddingTop: '20px',
        color: open => !open ? "#d4d4dc" : "#d4d4dc",
        
    },
    arrowDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: "240px",
        height: "30px",
        marginBottom: "10px",
    },
    iconDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: "240px",
        height: "30px",
        margin: '20px 0',
        cursor: 'pointer',
    },
    menuButton: {
        display: 'flex',
        marginLeft: '13px',
        marginRight: '20%',
        fontSize: '1.8rem'
    },
    
   
});

const SideBar = ({props, open, handleDrawerClose, handleDrawerOpen}) => {
    const classes = useStyles(open); 
    // console.log(handleDrawerOpen)


    
    return (
        <div className={classes.container}>
         <div className={classes.arrowDiv}>
            {!open ? (
                <ArrowBackIcon style={{cursor: 'pointer', transform: 'rotate(180deg)'}} className={classes.menuButton} onClick={handleDrawerOpen}/>
            ) : (
                <ArrowBackIcon style={{cursor: 'pointer'}} className={classes.menuButton} onClick={handleDrawerClose}/>
            )}
            
        </div>
        {!open ? (<Divider style={{backgroundColor: "#393f4d", opacity: '.7', height: '2px'}}/>):(<Divider style={{backgroundColor: "#feda6a", opacity: '.7', height: '2px'}}/>)}
        <List>
            <NavLink to="/" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className={classes.iconDiv}> 
                <HomeIcon className={classes.menuButton}/>
                <p style={{fontSize: '1.2rem'}}>Home</p>
            </div>
            </NavLink>

            <NavLink to="/about" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className={classes.iconDiv}>
                <InfoIcon className={classes.menuButton}/>
                <p style={{fontSize: '1.2rem'}}>About</p>
            </div>
            </NavLink>

            <NavLink to="/projects" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className={classes.iconDiv}>
                <CodeIcon className={classes.menuButton}/>
                <p style={{fontSize: '1.2rem'}}>Projects</p>
            </div>
            </NavLink>

            <NavLink to="/resume" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className={classes.iconDiv}>
                <DescriptionIcon className={classes.menuButton}/>
                <p style={{fontSize: '1.2rem'}}>Resume</p>
            </div>
            </NavLink>
        </List>
        {!open ? (<Divider style={{backgroundColor: "#393f4d", opacity: '.7', height: '2px'}}/>):(<Divider style={{backgroundColor: "#feda6a", opacity: '.7', height: '2px'}}/>)}
        <List>
            <a href="https://github.com/sethnadu" alt="GitHub" style={{textDecoration: 'none', color: 'inherit'}} className={classes.iconDiv}>
                <GitHubIcon className={classes.menuButton}/>
                <p style={{fontSize: '1.2rem'}}>Github</p>
            </a>
            <a href="https://www.linkedin.com/in/seth-nadu-8b5983187/" alt="LinkedIn" style={{textDecoration: 'none', color: 'inherit'}} className={classes.iconDiv}>
                <LinkedInIcon className={classes.menuButton}/>
                <p style={{fontSize: '1.2rem'}}>LinkedIn</p>
            </a>
            <a href="phone:7173929717" alt="Phone" style={{textDecoration: 'none', color: 'inherit'}} className={classes.iconDiv}>
                <PhoneIcon className={classes.menuButton}/>
                <p style={{fontSize: '1.0rem'}}>(717) 392-9717</p>
            </a>
            <a href="mailto:seth.nadu@gmail.com" alt="Mail" style={{textDecoration: 'none', color: 'inherit'}} className={classes.iconDiv}>
                <MailIcon className={classes.menuButton}/>
                <p style={{fontSize: '.8rem'}}>seth.nadu@gmail.com</p>
            </a>
        </List>
        </div>
    )
}

export default SideBar;