import React from 'react';
import Header from '../header/Header';
import Content from '../mainPage/Content'
import HeaderDrawer from '../header/HeaderDrawer'


const Desktop = ({props}) => {
    console.log(props)
    return (
        <>
        <HeaderDrawer props={props}/>
        {/* <Header props = {props}/>
        <Content props={props}/> */}
        </>
    )

}

export default Desktop;