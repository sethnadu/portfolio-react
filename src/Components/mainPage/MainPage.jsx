import React from 'react';
import Desktop from '../desktop/Desktop';
import MobileDrawer from '../mobileDrawer/MobileDrawer'

// Material Media Query
import useMediaQuery from "@material-ui/core/useMediaQuery"
  

const MainPage = (props) => {
    const phoneSize = useMediaQuery("(max-width:700px)");  
    return (
        <>
        {!phoneSize ? (
        <Desktop props ={props}/>
        ) : (
        <MobileDrawer props = {props}/>
        )}

        </>
    )

}

export default MainPage;