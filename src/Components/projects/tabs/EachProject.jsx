import React from 'react';

//Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//Material UI Icon
import GitHubIcon from '@material-ui/icons/GitHub';

//Styled Component Imports
import {OpenProjectGif} from './ProjectStyles'

const useStyles = makeStyles({
  card: {
    width: phoneSize => phoneSize ? "275px" : "350px",
    backgroundColor: '#1d1e22',
    color: "#d4d4dc",
    fontFamily: "Open Sans", 
    border: '2px solid #feda6a',
    marginBottom: "20px",
    height: "100%"

  },
  media: {
    height: 200,
    objectFit: 'cover',
    borderBottom: '2px solid #feda6a',
  },
  titleDiv : {
    minHeight: '30px'
  },
  subName: {
    fontSize: '.8rem',
    marginTop: '-10px'
  },
  title: {
    fontSize: phoneSize => phoneSize ? '1.4rem' : "1.0rem", 
    margin: "0 0 10px 0",
  },
  description: {
    fontSize: "14px",
    height: '100%',
    minHeight: '50px'
  },
  gitHubIcon: {
    fontSize: '3.1rem',
    color: '#feda6a'
  },


});

export default function EachProject({el, phoneSize, open}) {
  const classes = useStyles(phoneSize);

  return (
      <>
      {phoneSize && open ? (
          <OpenProjectGif src={el.gif} alt="project gif" />
      ) : (
        <Card className={classes.card}>
            <CardMedia
            className={classes.media}
            image={el.gif}
            title={el.name}
            />
            <CardContent >
            <div className = {classes.titleDiv}>
                <h3 className = {classes.title}>{el.name}</h3>
            {el.subName ? (<p className={classes.subName}> {el.subName} </p>) : null}
            </div>
            <div className={classes.description}>
            <p>
            {el.description}
            {el.apiLink ? (<span>{el.apiLink}</span>) : null}
            </p>
            </div>   
            </CardContent>
        <CardActions>
            <button style={{backgroundColor: '#1d1e22', border: 'none'}}>
            <a href={el.site} alt='site'>{el.siteIcon}</a>
            </button>
            <button style={{backgroundColor: '#1d1e22', border: 'none'}}>
            <a href={el.github} alt="github"><GitHubIcon className={classes.gitHubIcon}/></a>
            </button>
        </CardActions>
        </Card>  
      )}
    
    </>
  );
}