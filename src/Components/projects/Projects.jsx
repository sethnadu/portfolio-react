import React from 'react';

//Tab Imports
import Skill from './tabs/Skills'
import Individual from './tabs/Individual'
import Team from './tabs/Team'

//Material UI
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//Material UI icons
import useMediaQuery from "@material-ui/core/useMediaQuery"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 auto",
  },
  appBar: {
      backgroundColor: '#393f4d',
      boxShadow: 'none',
    //   border: "2px solid #feda6a",
  },
  indicator: {
    backgroundColor: '#feda6a',
  },
  titleDesktop: {
    fontSize: '2.4rem',
    color: '#feda6a' 
},
titleMobile: {
    fontSize: '1.6rem',
    color: '#feda6a'
},
}));


 
const Projects = ({props, open}) => {
    const classes = useStyles();
    const theme = useTheme();
    const phoneSize = useMediaQuery("(max-width:700px)"); 
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };
  
    return (
        <div style = {{width: "100%", height: "100vh", padding: '60px 20px 20px 20px', textAlign: "center"}}>
           <h2 className={!phoneSize ? classes.titleDesktop : classes.titleMobile}>Projects</h2> 
          <div className={classes.root}>
            <AppBar className = {classes.appBar} position="static">
            {!open ?
            <Tabs
              value={value}
              onChange={handleChange}
              classes={{
                  indicator: classes.indicator,
                }}
              variant="fullWidth"
              aria-label="full width tabs example"
              >
              <Tab label="Skills" {...a11yProps(0)} />
              <Tab label="Individual" {...a11yProps(1)} />
              <Tab label="Team" {...a11yProps(2)} />
            </Tabs> : null }
            </AppBar>
            <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            >
            <TabPanel value={value} index={0} dir={theme.direction}>
            <Skill phoneSize = {phoneSize} open = {open}/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction} >
                <Individual phoneSize = {phoneSize} open = {open} />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <Team phoneSize = {phoneSize} open = {open} />
            </TabPanel>
            </SwipeableViews>
        </div>
        </div>
    )
}

export default Projects;