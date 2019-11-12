import styled from 'styled-components';

// Image imports
import CodeBackground from '../../Assets/background/Code-gray.png';

// Styles

export const LandingBackground = styled.div `
    height: 100vh;
    width: 100%;
    background-image: url(${CodeBackground});
    position: absolute;
    font-family: 'Open Sans', sans-serif;



`
export const Cover = styled.div `
    height: 100vh;
    width: 100%;
    background-color: rgb(105,105,105, 0.8);
    position: absolute;


`

export const MiddleDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: auto 0;
    text-align: center;
    z-index: 1;
    
`

