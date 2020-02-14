import React, { useEffect, useState } from "react";
import axios from "axios";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

//Material UI icons
import useMediaQuery from "@material-ui/core/useMediaQuery";

// React Icons
import {
  FaLess,
  FaHtml5,
  FaJava,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaCss3,
  FaCode,
  FaChartBar,
  FaPython
} from "react-icons/fa";

import { IoMdGitBranch, IoLogoJavascript } from "react-icons/io";

import { DiDjango } from "react-icons/di";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    minWidth: "275px"
  },
  rootLarge: {
    flexGrow: 1,
    width: "100%",
    minWidth: "275px",
    display: "flex"
  },
  rootMobile: {
    flexGrow: 1,
    width: "100%",
    minWidth: "275px"
  },
  demo: {
    // backgroundColor: "black",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    margin: "10px 0"
  },
  demoMobile: {
    // backgroundColor: "black",
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    margin: "10px 0",
    overflowX: "hidden"
    // paddingLeft: '30px',
  },
  grid: {
    width: "100%",
    margin: "0 auto",
    paddingBottom: "20px",
    borderBottom: "2px solid #6B6B6B"
  },
  gridLarge: {
    width: "100%",
    margin: "0 auto",
    paddingBottom: "20px"
  },
  gridMobile: {
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
    paddingBottom: "20px",
    borderBottom: "2px solid #6B6B6B"
  },
  gridMobileSmall: {
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
    paddingBottom: "20px"
  },
  textStyle: {
    fontSize: "1.4rem"
  },
  icon: {
    // color: "#1d1e22",
    backgroundColor: "#6B6B6B"
  },
  textIcon: {
    color: "#6B6B6B"
  },
  phoneSkillsChange: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "5px auto"
  },
  phoneOpenChange: {
    overflow: "hidden",
    width: "80px"
  },
  gitHubGraphMobile: {
    width: "90%"
  },
  titleMobile: {
    fontSize: "1.4rem",
    color: "#6B6B6B",
    paddingTop: "20px"
  },
  titleDesktop: {
    fontSize: "2.0rem",
    color: "#6B6B6B",
    paddingTop: "20px"
  },
  gitHubInformation: {
    display: "flex",
    flexDirection: "row wrap",
    margin: "10px auto",
    justifyContent: "space-evenly",
    maxWidth: "700px",
    width: "100%",
  }
}));

const Skills = ({ phoneSize, open }) => {
  const classes = useStyles();
  const dense = false;
  const [gitHubInfo, setGitHubInfo] = useState();
  const largeDesktopSize = useMediaQuery("(min-width:1400px)");
  const betweenSize = useMediaQuery("(min-width:601px)(max-width:1390px)");

  useEffect(() => {
    axios
      .get("https://api.github.com/users/sethnadu")
      .then(data => {
        setGitHubInfo(data.data);
      })
      .catch(error => {
        console.log("There was an error pull data from github", error);
      });
  }, []);


  const skillsArray1 = [
    { name: "Git", icon: <IoMdGitBranch /> },
    { name: "Node", icon: <FaNodeJs /> },
    { name: "LESS", icon: <FaLess /> },
    { name: "Python", icon: <FaPython /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "Redux", icon: <FaReact /> },
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "Semantic", icon: <FaCss3 /> }
  ];
  const skillsArray2 = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring", icon: <FaJava /> },
    { name: "React", icon: <FaReact /> },
    { name: "Django", icon: <DiDjango /> },
    { name: "Postgres", icon: <FaCss3 /> },
    { name: "BootStrap", icon: <FaBootstrap /> },
    { name: "Material-UI", icon: <FaCss3 /> },
    { name: "Async Code", icon: <FaCss3 /> }
  ];

  const skillsArrayAll = skillsArray1.concat(skillsArray2);
  skillsArrayAll.sort((a, b) => a.name.length - b.name.length);
  return (
    <div
      className={
        phoneSize
          ? classes.rootMobile
          : betweenSize
          ? classes.root
          : largeDesktopSize
          ? classes.rootLarge
          : classes.root
      }
    >
      <Grid
        item
        xs={12}
        md={6}
        className={
          largeDesktopSize
            ? classes.gridLarge
            : !phoneSize
            ? classes.grid
            : !open
            ? classes.gridMobile
            : classes.gridMobileSmall
        }
      >
        {!phoneSize ? (
          <div className={classes.demo}>
            <List dense={dense}>
              {skillsArray1.map(skill => {
                return (
                  <ListItem key={skill.name}>
                    <ListItemAvatar>
                      <Avatar className={classes.icon}>{skill.icon}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.textIcon}
                      primary={skill.name}
                    />
                  </ListItem>
                );
              })}
            </List>
            <List dense={dense}>
              {skillsArray2.map(skill => {
                return (
                  <ListItem key={skill.name}>
                    <ListItemAvatar>
                      <Avatar className={classes.icon}>{skill.icon}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.textIcon}
                      primary={skill.name}
                    />
                  </ListItem>
                );
              })}
            </List>
          </div>
        ) : !open ? (
          <div className={classes.demoMobile}>
            {skillsArrayAll.map((skill, i) => {
              return (
                <div className={classes.phoneSkillsChange}>
                  <ListItemAvatar key={skill.name}>
                    <Avatar style={{ margin: "auto" }} className={classes.icon}>
                      {skill.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className={classes.textIcon}
                    primary={skill.name}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className={classes.demoMobile} style={{ width: "100px" }}>
            <ListItemAvatar>
              <Avatar style={{ margin: "auto" }} className={classes.icon}>
                <FaCode />
              </Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.textIcon} primary="Skills" />
          </div>
        )}
      </Grid>
      {!phoneSize ? (
        <div>
          <h2 className={classes.titleDesktop}>GitHub Contribution Graph</h2>
          <div className={classes.gitHubInformation}>
            <a style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"  href="https://github.com/sethnadu" alt="github"><p style={{ color: "black", borderBottom: "2px solid #feda6a ", width: '90px', textAlign: "center", margin: '15px auto auto auto' }}>{gitHubInfo && gitHubInfo.login}</p></a>
            <p style={{ color: "#6B6B6B" }}>
              Repos:{" "}
              <span style={{ color: "black" }}>
                {gitHubInfo && gitHubInfo.public_repos}
              </span>
            </p>
            <p style={{ color: "#6B6B6B" }}>
              Followers:{" "}
              <span style={{ color: "black" }}>
                {gitHubInfo && gitHubInfo.followers}
              </span>
            </p>
            <p style={{ color: "#6B6B6B" }}>
              Following:{" "}
              <span style={{ color: "black" }}>
                {gitHubInfo && gitHubInfo.following}
              </span>
            </p>
          </div>
          <img alt="Github Graph" src="http://ghchart.rshah.org/sethnadu" style={{"backgroundColor":"#6B6B6B", "padding": "10px", "borderRadius": "10px"}}/>
        </div>
      ) : !open ? (
        <div>
          <h2 className={classes.titleMobile}>GitHub Contribution Graph</h2>
          <div>
          <a style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"  href="https://github.com/sethnadu" alt="github"><p style={{ color: "black", borderBottom: "2px solid #feda6a ", width: '90px', textAlign: "center", margin: 'auto'}}>{gitHubInfo && gitHubInfo.login}</p></a>
            <p style={{ color: "#6B6B6B" }}>
              Repos:{" "}
              <span style={{ color: "black" }}>
                {gitHubInfo && gitHubInfo.public_repos}
              </span>
            </p>
            <p style={{ color: "#6B6B6B" }}>
              Followers:{" "}
              <span style={{ color: "black" }}>
                {gitHubInfo && gitHubInfo.followers}
              </span>
            </p>
            <p style={{ color: "#6B6B6B" }}>
              Following:{" "}
              <span style={{ color: "black" }}>
                {gitHubInfo && gitHubInfo.following}
              </span>
            </p>
          </div>
          <img
            className={classes.gitHubGraphMobile}
            alt="Github Graph"
            src="http://ghchart.rshah.org/sethnadu"
            style={{"backgroundColor":"#6B6B6B", "padding": "10px", "borderRadius": "10px"}}
          />
        </div>
      ) : (
        <div style={{ width: "100px", textAlign: "left" }}>
          <div style={{ textAlign: "left" }}>
            <p style={{ color: "black" }}>{gitHubInfo && gitHubInfo.login}</p>
            <p style={{ color: "#6B6B6B" }}>
              Repos:{" "}
              <span style={{ color: "black" }}>
                {gitHubInfo && gitHubInfo.public_repos}
              </span>
            </p>
            <p style={{ color: "#6B6B6B" }}>
              Followers:{" "}
              <span style={{ color: "black" }}>
                {gitHubInfo && gitHubInfo.followers}
              </span>
            </p>
            <p style={{ color: "#6B6B6B" }}>
              Following:{" "}
              <span style={{ color: "black" }}>
                {gitHubInfo && gitHubInfo.following}
              </span>
            </p>
          </div>
          <FaChartBar style={{ fontSize: "1.8rem", color: "#6B6B6B" }} />
        </div>
      )}
    </div> 
  );
};

export default Skills;
