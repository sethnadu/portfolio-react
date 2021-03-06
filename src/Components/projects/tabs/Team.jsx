import React from 'react';

// Team Website Data
import {TeamData} from './ProjectData/TeamData';

//Styled Component Imports
import {
        Container
} from './ProjectStyles';

//Component Imports
import EachProject from "./EachProject";


const Team = (props) => {
    return (
        <Container>
            {TeamData.map(el => {
               return <EachProject key={el.name} el = {el} phoneSize = {props.phoneSize} open = {props.open}/>
            })}

        </Container>
    )
}

export default Team;