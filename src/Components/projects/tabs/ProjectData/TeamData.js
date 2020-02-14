import React from 'react'

// Gif Imports
import DidactGif from '../../../../Assets/Gif/didactGif.gif'
import JavaGif from '../../../../Assets/Gif/javavideo.gif'

// Site Icons
import DidactIcon from '../../../../Assets/siteIcons/didacticon.png'

// React Icons
import { 
    FaJava,    
 } from 'react-icons/fa';

 //Styled Component Imports
import { 
    Icon
} from '../ProjectStyles';

 export const TeamData = [
    {
        name: 'Didact',
        subName: 'Online Course Learning Hub',
        gif: DidactGif,
        site: "https://didactlms.com/landing",
        siteIcon: <Icon style={{backgroundColor: 'white'}} src={DidactIcon} alt="Didact Favicon" />,
        github: "https://github.com/Lambda-School-Labs/didact-fe",
        description: 'Didact believes everyone is a teacher, and the strongest way to learn is as part of a community that teaches and learns together. A Lambda Labs Project that implements Node.js, Express, React, Redux, Material UI, and Passport.js as the main frameworks'
    },
    {
        name: 'Java Backend',
        subName: 'Used for Tracking Favorite Menu Items',
        gif: JavaGif,
        site: "https://sethnadu-foodie-bw.herokuapp.com/swagger-ui.html",
        siteIcon: <FaJava style={{backgroundColor: 'white', fontSize: '3rem', borderRadius: "50%", color: "#6B6B6B"}} />,
        github: "https://github.com/Build-Week-Foodie-Funz/back-end",
        description: 'Created within a week timeframe, this backend has multiple endpoints to track, record and add various restaurants along with a users favorite menu items. Created with Java, there are 72 tests tracking every endpoint, secure with OAuth2 authentication'
    },
 ]