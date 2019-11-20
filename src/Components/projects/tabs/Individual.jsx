import React from 'react';

// Individual Website Data
import {IndividualData} from './ProjectData/IndividualData';

//Styled Component Imports
import {
        Container
} from './ProjectStyles';

//Component Imports
import EachProject from "./EachProject";


const Individual = (props) => {
    console.log(IndividualData)
    return (
        <Container>
            {IndividualData.map(el => {
               return <EachProject el = {el} />
            })}

        </Container>
    )
}

export default Individual;