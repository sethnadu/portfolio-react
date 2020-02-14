import React from "react";
import { Link } from "react-router-dom";

//Styled Component Imports
import { LandingBackground, Cover, MiddleDiv} from './LandingPageStyles';

//Material UI imports
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
// Material Media Query



const useStyles = makeStyles({
    downArrow: {
        fontSize: '2.4rem',
        padding: "5px", 
        border: "2px solid #F5F5F5", 
        color: '#F5F5F5',
        borderRadius: '50%',
        backgroundColor: '#1d1e22',
        cursor: 'pointer',
        transform: 'rotate(180deg)',
        '&:hover': {
            backgroundColor: '#393f4d',
            color: '#F5F5F5'
            
        }, 
  },
    letterBorder: {
        fontFamily: "Open Sans"
    }
});

const LandingPage = () => {
    const classes = useStyles();

   
    return (
        <LandingBackground>
            <Cover>
                <MiddleDiv>
                    <h2 className = {classes.letterBorder} style={{color: "#F5F5F5", fontSize: '3rem', marginBottom: '-10px'}}>Seth Nadu</h2>
                    <h3 className = {classes.letterBorder} style={{color: "#F5F5F5", fontSize: '2rem'}}>Full Stack Web Developer</h3> 
                    <Link to='/projects' style={{textDecoration: "none", color: "inherit"}}><ArrowBackIcon className = {classes.downArrow} /></Link>
                </MiddleDiv> 
            </Cover>
        </LandingBackground>
    )
}

export default LandingPage;