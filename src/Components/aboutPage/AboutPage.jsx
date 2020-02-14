import React from 'react';
import Photo from '../../Assets/me.png'

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery"
//Icons
import { FaReact} from 'react-icons/fa';
import { DiJavascript1, DiResponsive } from 'react-icons/di';


const useStyles = makeStyles({
    photoImage: {
        borderRadius: '50%',
        width: "100%",
        maxWidth: '400px',
        // border: '2px solid #feda6a'
    },
    photoImageOpen: {
        width: "100%",
        maxWidth: '400px',
        borderRadius: 15,
        // border: '2px solid #feda6a'
    },
    desktopStyle: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: "center",
        flexDirection: 'column'
    },
    paragraphDiv: {
        maxWidth: '700px',
        padding: '20px',
        paddingLeft: "30px",
        // backgroundColor: '#1d1e22',
        color: "#6B6B6B",
        borderRadius: '10px',
        // border: '2px solid #6B6B6B',
        fontFamily: "Open Sans",
        fontSize: '1rem',
        fontWeight: "bold"
    },
    titleDesktop: {
        fontSize: '2.4rem',
        color: '#6B6B6B' 
    },
    titleMobile: {
        fontSize: '2rem',
        color: '#6B6B6B'
    },
    iconDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: '40px'
    },
    mobileIconDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    bottomIcons: {
        // backgroundColor: '#d4d4dc',
        padding: "10px",
        marginBottom: '10px',
        width: '200px',
        borderRadius: '10px',
        // border: '3px solid #feda6a',
        color: "#6B6B6B",
        fontFamily: "Open Sans"    
    },
    listItem: {
        marginLeft: '10px',
        marginBottom: '10px'
    },
    characteristics: {
        fontSize: "1.6rem",
        fontWeight: "bolder",
        marginTop: '40px',
        marginBottom: '30px',
        display: "flex",
        justifyContent: 'space-evenly',
        width: '100%',
        textAlign: 'center',
        flexFlow: "wrap",
        color: '#6B6B6B'
    },
    characteristicsMobile:{
        fontSize: "1.6rem",
        fontWeight: "bolder",
        marginTop: '20px',
        marginBottom: '40px',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        textAlign: 'center',
        flexFlow: "wrap",
        color: '#6B6B6B'
    },
    characteristicOpenMobile:{
        fontSize: "1rem",
        fontWeight: "bolder",
        marginTop: '20px',
        marginBottom: '40px',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        textAlign: 'center',
        flexFlow: "wrap",
        color: '#6B6B6B'
    },
    divider: {
        borderBottom: '3px solid #6B6B6B',
        width: '50%',
        margin: 'auto'
    }
});


const AboutPage = (props) => {
    const classes = useStyles();
    const phoneSize = useMediaQuery("(max-width:700px)"); 

    return (
    <div style = {{width: "100%", height: "100vh", padding: '60px 20px 20px 20px', textAlign: "center"}}>
        {/* <h2 className={!phoneSize ? classes.titleDesktop : classes.titleMobile}>Who I Am</h2> */}
        <div className={!phoneSize ? classes.desktopStyle : null}>
            {!phoneSize ? 
            <div className={classes.characteristics}>
                <p>Hard-Working</p>
                <p>|</p>
                <p>Determined</p>
                <p>|</p>
                <p>Creative</p>
                <p>|</p>
                <p>Persistent</p>
                <p>|</p>
                <p>Problem-Solver</p>
            </div>
            :
            <div className={!props.open ? classes.characteristicsMobile : classes.characteristicOpenMobile}>
                <p>Hard-Working</p>
                <div className = {classes.divider} />
                <p>Determined</p> 
                <div className = {classes.divider} />
                <p>Creative</p> 
                <div className = {classes.divider} />
                <p>Persistent</p>
                <div className = {classes.divider} />
                <p>Problem-Solver</p>
                <div className = {classes.divider} />
            </div>
            }
            <div>
                <img className={phoneSize ? !props.open ? classes.photoImage : classes.photoImageOpen : classes.photoImage}src={Photo} alt='Seth Nadu'></img>
            </div>
            <h2 className={!phoneSize ? classes.titleDesktop : classes.titleMobile}>My Story</h2>
            <div>
                {phoneSize ? !props.open ? (
                    <ul style={{textAlign: "left"}} className={classes.paragraphDiv}>
                    <li className={classes.listItem}>Ever since I was a child I have been fascinated with computers, networks and systems. 
                    Early exposure occurred when I interned at my school's IT department, which provided 
                    a well rounded, high-level exposure.</li> 
                    <li className={classes.listItem}>In parallel, I began focusing on hardware refurbishing 
                    and software troubleshooting for friends and family.</li>
                    <li className={classes.listItem}>Luckily, I found a role at an 
                    organization that specialized in refurbishing technology of all form-factors, and in 
                    recycling equipment for future distribution. I worked on software, but mostly on the 
                    hardware aspect of these form-factors.</li>
                    <li className={classes.listItem}>In the span of three and a half years, my interest 
                    in software and coding continued to grow, but now growth for this interest was limited 
                    in my current role.</li>
                    <li className={classes.listItem}> As I explored new opportunities to expand my knowledge base, 
                    I stumbled upon Lambda School to learn everything I can about programming!</li>
                    <li className={classes.listItem}> I'm currently exploring everything from front-end to the back-end, from HTML to Java, 
                    I am ready to launch myself into world of Tech!</li></ul>
                ) : (
                <p style={{textAlign: "center"}} className={classes.paragraphDiv}>Ever since I was a child I have been fascinated with computers...</p>
                ): (
                    <ul style={{textAlign: "left", marginleft: '10px'}} className={classes.paragraphDiv}>
                    <li className={classes.listItem}>Ever since I was a child I have been fascinated with computers, networks and systems. 
                    Early exposure occurred when I interned at my school's IT department, which provided 
                    a well rounded, high-level exposure.</li> 
                    <li className={classes.listItem}>In parallel, I began focusing on hardware refurbishing 
                    and software troubleshooting for friends and family.</li>
                    <li className={classes.listItem}>Luckily, I found a role at an 
                    organization that specialized in refurbishing technology of all form-factors, and in 
                    recycling equipment for future distribution. I worked on software, but mostly on the 
                    hardware aspect of these form-factors.</li>
                    <li className={classes.listItem}>In the span of three and a half years, my interest 
                    in software and coding continued to grow, but now growth for this interest was limited 
                    in my current role.</li>
                    <li className={classes.listItem}> As I explored new opportunities to expand my knowledge base, 
                    I stumbled upon Lambda School to learn everything I can about programming!</li>
                    <li className={classes.listItem}> I'm currently exploring everything from front-end to the back-end, from HTML to Java, 
                    I am ready to launch myself into the world of Tech!</li></ul>
                )} 
            </div>
        </div>
        <div> 
            {phoneSize ? !props.open ? (
                <div className = {classes.mobileIconDiv}>
                <div className = {classes.bottomIcons}>
                    <FaReact style = {{fontSize: '8rem'}}/>
                    <p>React</p>
                    <p>Resuable Components with React</p>
                </div>
                <div className = {classes.bottomIcons}>
                    <DiJavascript1 style = {{fontSize: '8rem',color: '#6B6B6B'}}/>
                    <p>Javascript</p>
                    <p>Strong understanding in Javascript</p>
                </div>
                <div className = {classes.bottomIcons} style = {{marginBottom: '20px'}}>
                    <DiResponsive style = {{fontSize: '8rem'}}/>
                    <p>Responsive</p>
                    <p>Designs fit all Devices</p>
                </div>
                </div>
            ) : (
                <div className = {classes.mobileIconDiv}>
                <div className = {classes.bottomIcons}>
                    <FaReact style = {{fontSize: '3rem'}}/>
                    <p>React</p>
                </div>
                <div className = {classes.bottomIcons}>
                    <DiJavascript1 style = {{fontSize: '3rem',color: '#6B6B6B'}}/>
                    <p>Javascript</p>
                </div>
                <div className = {classes.bottomIcons} style = {{marginBottom: '20px'}}>
                    <DiResponsive style = {{fontSize: '3rem'}}/>
                    <p>Responsive</p>
                </div> 
                </div>
            ): (
                <div className = {classes.iconDiv} style={{marginBottom: '40px'}}>
                <div className = {classes.bottomIcons}>
                    <FaReact style = {{fontSize: '8rem'}}/>
                    <p style = {{fontSize: '1.4rem'}}>React</p>
                    <p style = {{fontSize: '1rem'}}>Resuable Components with React</p>
                </div>
                <div className = {classes.bottomIcons}>
                    <DiJavascript1 style = {{fontSize: '8rem', color: '#6B6B6B'}}/>
                    <p style = {{fontSize: '1.4rem'}}>Javascript</p>
                    <p style = {{fontSize: '1rem'}}>Strong understanding in Javascript</p>
                </div>
                <div className = {classes.bottomIcons}>
                    <DiResponsive style = {{fontSize: '8rem'}}/>
                    <p style = {{fontSize: '1.4rem'}}>Responsive</p>
                    <p style = {{fontSize: '1rem'}}>Designs fit all Devices</p>
                </div>
                </div>
            )}
        </div>
    </div>
    )
}

export default AboutPage;