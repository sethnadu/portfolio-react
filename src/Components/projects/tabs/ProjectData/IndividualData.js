import React from 'react';

//Site Gif Imports
import AndrewGif from '../../../../Assets/Gif/andrewGif.gif'
import HarryGif from '../../../../Assets/Gif/harryvideo.gif'
import SeinfeldGif from '../../../../Assets/Gif/seinfeldGif.gif'

//Site Icon Imports
import AndrewIcon from '../../../../Assets/siteIcons/andrewicon.png'
import HarryIcon from '../../../../Assets/siteIcons/harrypottericon.jpg'
import SeinfeldIcon from '../../../../Assets/siteIcons/seinfeldicon.jpeg'

//Styled Component Imports
import { 
    Icon
} from '../ProjectStyles';

const potterapi = <a href="https://www.potterapi.com/" alt="potterapi">https://www.potterapi.com/</a>
const seinfeldapi = <a href="https://seinfeld-quotes.herokuapp.com/" alt="seinfeld-quotes-api">https://seinfeld-quotes.herokuapp.com/</a>

export const IndividualData = [
    {
        name: 'Andrew Nadu Restoration',
        subName: 'Business Website',
        gif: AndrewGif,
        site: "https://andrewnadurestoration.netlify.com/",
        siteIcon: <Icon style={{backgroundColor: 'white'}} src={AndrewIcon} alt="Andrew Nadu Restoration Favicon" />,
        github: "https://github.com/sethnadu/AndrewNaduRestoration",
        description: 'Built using only HTML, CSS and Javascript. Responsive with Re-usable Components'
    },
    {
        name: 'Harry Potter Wiki',
        subName: 'Search the Harry Potter World',
        gif: HarryGif,
        site: "https://harrypotter-search.netlify.com/",
        siteIcon: <Icon src={HarryIcon} alt="Harry Potter Fan Wiki Favicon" />,
        github: "https://github.com/sethnadu/harrypotterv2",
        description: 'Built with React and Redux, using ',
        apiLink: <a style={{color: '#feda6a', textDecoration: "none"}} href="https://www.potterapi.com/" alt="potterapi">PotterApi</a>
    },
    {
        name: 'Seinfeld Trivia of Quotes',
        subName: 'Are You Master of Your Domain?',
        gif: SeinfeldGif,
        site: "https://seinfeldquotes.sethnadu.now.sh/",
        siteIcon: <Icon src={SeinfeldIcon} alt="Seinfeld Trivia of Quotes Favicon" />,
        github: "https://github.com/sethnadu/React-Redux-App",
        description: `Built with React and Redux, using `,
        apiLink: <a style={{color: '#feda6a', textDecoration: "none"}} href="https://seinfeld-quotes.herokuapp.com/" alt="seinfeld-quotes-api">https://seinfeld-quotes.herokuapp.com/</a>
    },
]