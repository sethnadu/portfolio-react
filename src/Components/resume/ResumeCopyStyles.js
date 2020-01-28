import styled from 'styled-components';

export const Container = styled.div `
    margin: 80px 20px 20px 20px;
    padding: 20px;
    background-color: white;

`

export const NameDiv = styled.div `
    height: 100px;
    width: 70%;
    border: 3px solid #feda6a; 
    display: flex;
    justify-content: center;
    margin: auto;
    position: relative;
    background-color: white;
`

export const NameH2 = styled.p `
    font-size: 4.2rem;
    margin: auto;
`

export const JobDiv = styled.div `
    width: 100%;
    height: 120px;
    background-color: #d4d4dc;
    margin: -70px auto auto auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
 
`

export const Header = styled.p `
    color: #393f4d;
    font-size: 1.2rem;
`

export const Line = styled.div `
    width: 40px;
    border: 1.5px solid #feda6a;
    margin-top: -15px;
    margin-bottom: 10px;

`

export const BodyDiv = styled.div `
    display: flex;
    flex-direction: row;
`

export const LeftDiv = styled.div `
    margin-top: 40px;
    width: 30%
    min-width: 250px;
    border-right: 1px solid #feda6a;
    display: flex;
    flex-direction: column
`

export const RightDiv = styled.div `
    margin-top: 40px;
    width: 70%
    border-left: 2px solid #feda6a;
    display: flex;
    flex-direction: column;
`

export const SideDiv = styled.div `
    display: flex;
    flex-direction: column;
    padding: 10px 20px 10px 0; 

`

export const MainDiv = styled.div `
    display: flex;
    flex-direction: column;
    padding: 10px 0 10px 20px; 
`

export const TitleLine = styled.div `
    width: 30px;
    border: 1.5px solid #feda6a;
    height: 1px;
    margin-left: 20px; 

`
export const MainTitleLine = styled.div `
    width: 50px;
    border: 1.5px solid #feda6a;
    height: 1px;
    margin-right: 20px; 

`


export const SubHeader = styled.div `
    font-size: 1.0rem;
`

export const ContactListItem = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    justify-content: flex-end;
`

export const RightListItem = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    justify-content: flex-start;

`

export const SkillListItem = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 5px;
    justify-content: center;

`

export const ATag = styled.a `
    text-decoration: none;
    color: black;
    padding-left: 10px;
    margin-right: 30px;
`

export const Sectionheader = styled.p `
    color: black;
    padding-left: 10px;
    font-weight: bolder;
    margin-bottom: -20px;
`

export const MainSectionheader = styled.p `
    color: black;
    font-weight: bolder;
    margin: 0;
`
export const ItalicText = styled.p `
    color: black;
    font-style: italic;
    margin-bottom: -10px;
`