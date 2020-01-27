import React from "react";
import { NavLink } from 'react-router-dom';

// Material UI Imports
import { makeStyles} from '@material-ui/core/styles';

// Material UI Icons

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
    container: {
        color: open => !open ? "#d4d4dc" : "#d4d4dc",
        width: "100%",
        display:'flex',
        flexDirection: 'column',
        height: '100%',
        fontFamily: "Open Sans"
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
        flexDirection: 'column',
        alignItems: 'center',
        width: "100px",
        height: "60px",
        margin: '10px 0 10px 0',
        cursor: 'pointer',
        padding: "0px"
    },
    iconDivLink: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "60px",
        margin: '20px 0 20px 0',
        cursor: 'pointer',
        padding: "0px"
    },
    menuButton: {
        display: 'flex',
        margin: "auto",
        fontSize: '1.4rem'
    },
    
   
});

const FullList = ({props, open, handleDrawerClose, handleDrawerOpen}) => {
    const classes = useStyles(open); 
    // console.log(handleDrawerOpen)


    
    return (
        <div className={classes.container} onClick = {handleDrawerClose}>
            <div style={{display: 'flex', flexDirection: "row", width: "100%", justifyContent: "space-evenly"}}>
                <NavLink to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                <div className={classes.iconDiv}>
                    <HomeIcon className={classes.menuButton}/>
                    <p style={{fontSize: '1.0rem', margin: 0}}>Home</p>
                </div>
                </NavLink>

                <NavLink to="/about" style={{textDecoration: 'none', color: 'inherit'}}>
                <div className={classes.iconDiv}>
                    <InfoIcon className={classes.menuButton}/>
                    <p style={{fontSize: '1.0rem', margin: 0}}>About</p>
                </div>
                </NavLink>

                <NavLink to="/projects" style={{textDecoration: 'none', color: 'inherit'}}>
                <div className={classes.iconDiv}>
                    <CodeIcon className={classes.menuButton}/>
                    <p style={{fontSize: '1.0rem', margin: 0}}>Projects</p>
                </div>
                </NavLink>

                <NavLink to="/resume" style={{textDecoration: 'none', color: 'inherit'}}>
                <div className={classes.iconDiv}>
                    <DescriptionIcon className={classes.menuButton}/>
                    <p style={{fontSize: '1.0rem', margin: 0}}>Resume</p>
                </div>
                </NavLink>
            </div>
           
        </div>
    )
}

export default FullList;