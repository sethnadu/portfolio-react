import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import FolderIcon from '@material-ui/icons/Folder'

//Material UI icons
import useMediaQuery from '@material-ui/core/useMediaQuery'

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
} from 'react-icons/fa'

import { IoMdGitBranch, IoLogoJavascript } from 'react-icons/io'

import { DiDjango } from 'react-icons/di'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    minWidth: '275px'
  },
  rootLarge: {
    flexGrow: 1,
    width: '100%',
    minWidth: '275px',
    display: 'flex'
  },
  rootMobile: {
    flexGrow: 1,
    width: '100%',
    minWidth: '275px'
  },
  demo: {
    // backgroundColor: "black",
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '10px 0'
  },
  demoMobile: {
    // backgroundColor: "black",
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    margin: '10px 0',
    overflowX: 'hidden'
    // paddingLeft: '30px',
  },
  grid: {
    width: '100%',
    margin: '0 auto',
    paddingBottom: '20px',
    borderBottom: '2px solid #d4d4dc'
  },
  gridLarge: {
    width: '100%',
    margin: '0 auto',
    paddingBottom: '20px'
  },
  gridMobile: {
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
    paddingBottom: '20px',
    borderBottom: '2px solid #d4d4dc'
  },
  gridMobileSmall: {
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
    paddingBottom: '20px'
  },
  textStyle: {
    fontSize: '1.4rem'
  },
  icon: {
    color: '#1d1e22',
    backgroundColor: '#feda6a'
  },
  textIcon: {
    color: '#feda6a'
  },
  phoneSkillsChange: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '5px auto'
  },
  phoneOpenChange: {
    overflow: 'hidden',
    width: '80px'
  },
  gitHubGraphMobile: {
    width: '100%'
  },
  titleMobile: {
    fontSize: '1.4rem',
    color: '#feda6a',
    paddingTop: '20px'
  },
  titleDesktop: {
    fontSize: '2.0rem',
    color: '#feda6a',
    paddingTop: '20px'
  },
  gitHubInformation: {
    display: 'flex',
    flexDirection: 'row wrap',
    margin: '10px auto',
    justifyContent: 'space-evenly',
    maxWidth: '700px',
    width: '100%'
  }
}))

const Skills = ({ phoneSize, open }) => {
  const classes = useStyles()
  const [dense, setDense] = useState(false)
  const [secondary, setSecondary] = useState(false)
  const [gitHubInfo, setGitHubInfo] = useState()
  const largeDesktopSize = useMediaQuery('(min-width:1400px)')
  const betweenSize = useMediaQuery('(min-width:601px)(max-width:1390px)')

  useEffect(() => {
    axios
      .get('https://api.github.com/users/sethnadu')
      .then(data => {
        setGitHubInfo(data.data)
      })
      .catch(error => {
        console.log('There was an error pull data from github', error)
      })
  }, [])

  console.log(gitHubInfo)

  const skillsArray1 = [
    { name: 'Git', icon: <IoMdGitBranch /> },
    { name: 'Node', icon: <FaNodeJs /> },
    { name: 'LESS', icon: <FaLess /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'Redux', icon: <FaReact /> },
    { name: 'JavaScript', icon: <IoLogoJavascript /> },
    { name: 'Semantic', icon: <FaCss3 /> }
  ]
  const skillsArray2 = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'Spring', icon: <FaJava /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Django', icon: <DiDjango /> },
    { name: 'Postgres', icon: <FaCss3 /> },
    { name: 'BootStrap', icon: <FaBootstrap /> },
    { name: 'Material-UI', icon: <FaCss3 /> },
    { name: 'Async Code', icon: <FaCss3 /> }
  ]

  const skillsArrayAll = skillsArray1.concat(skillsArray2)
  skillsArrayAll.sort((a, b) => a.name.length - b.name.length)
  console.log(skillsArrayAll)
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
                )
              })}
            </List>
            <List dense={dense}>
              {skillsArray2.map(skill => {
                return (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.icon}>{skill.icon}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.textIcon}
                      primary={skill.name}
                    />
                  </ListItem>
                )
              })}
            </List>
          </div>
        ) : !open ? (
          <div className={classes.demoMobile}>
            {skillsArrayAll.map((skill, i) => {
              return (
                <div className={classes.phoneSkillsChange}>
                  <ListItemAvatar>
                    <Avatar style={{ margin: 'auto' }} className={classes.icon}>
                      {skill.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className={classes.textIcon}
                    primary={skill.name}
                  />
                </div>
              )
            })}
          </div>
        ) : (
          <div className={classes.demoMobile} style={{ width: '100px' }}>
            <ListItemAvatar>
              <Avatar style={{ margin: 'auto' }} className={classes.icon}>
                <FaCode />
              </Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.textIcon} primary='Skills' />
          </div>
        )}
      </Grid>
      {!phoneSize ? (
        <div>
          <h2 className={classes.titleDesktop}>GitHub Contribution Graph</h2>
          <div className={classes.gitHubInformation}>
            <p style={{ color: '#feda6a' }}>{gitHubInfo && gitHubInfo.login}</p>
            <p style={{ color: '#d4d4dc' }}>
              Repos:{' '}
              <span style={{ color: '#feda6a' }}>
                {gitHubInfo && gitHubInfo.public_repos}
              </span>
            </p>
            <p style={{ color: '#d4d4dc' }}>
              Followers:{' '}
              <span style={{ color: '#feda6a' }}>
                {gitHubInfo && gitHubInfo.followers}
              </span>
            </p>
            <p style={{ color: '#d4d4dc' }}>
              Following:{' '}
              <span style={{ color: '#feda6a' }}>
                {gitHubInfo && gitHubInfo.following}
              </span>
            </p>
          </div>
          <img src='http://ghchart.rshah.org/sethnadu' />
        </div>
      ) : !open ? (
        <div>
          <h2 className={classes.titleMobile}>GitHub Contribution Graph</h2>
          <div>
            <p style={{ color: '#feda6a' }}>{gitHubInfo && gitHubInfo.login}</p>
            <p style={{ color: '#d4d4dc' }}>
              Repos:{' '}
              <span style={{ color: '#feda6a' }}>
                {gitHubInfo && gitHubInfo.public_repos}
              </span>
            </p>
            <p style={{ color: '#d4d4dc' }}>
              Followers:{' '}
              <span style={{ color: '#feda6a' }}>
                {gitHubInfo && gitHubInfo.followers}
              </span>
            </p>
            <p style={{ color: '#d4d4dc' }}>
              Following:{' '}
              <span style={{ color: '#feda6a' }}>
                {gitHubInfo && gitHubInfo.following}
              </span>
            </p>
          </div>
          <img
            className={classes.gitHubGraphMobile}
            src='http://ghchart.rshah.org/sethnadu'
          />
        </div>
      ) : (
        <div style={{ width: '100px', textAlign: 'left' }}>
          <div style={{ textAlign: 'left' }}>
            <p style={{ color: '#feda6a' }}>{gitHubInfo && gitHubInfo.login}</p>
            <p style={{ color: '#d4d4dc' }}>
              Repos:{' '}
              <span style={{ color: '#feda6a' }}>
                {gitHubInfo && gitHubInfo.public_repos}
              </span>
            </p>
            <p style={{ color: '#d4d4dc' }}>
              Followers:{' '}
              <span style={{ color: '#feda6a' }}>
                {gitHubInfo && gitHubInfo.followers}
              </span>
            </p>
            <p style={{ color: '#d4d4dc' }}>
              Following:{' '}
              <span style={{ color: '#feda6a' }}>
                {gitHubInfo && gitHubInfo.following}
              </span>
            </p>
          </div>
          <FaChartBar style={{ fontSize: '1.8rem', color: '#d4d4dc' }} />
        </div>
      )}
    </div>
  )
}

export default Skills
