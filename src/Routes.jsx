import React from 'react';
import { Route, Switch } from 'react-router-dom'

import LandingPage from './Components/landingPage/LandingPage';
import MainPage from './Components/mainPage/MainPage'

const Routes = () => {
    return (
        <Switch>
        <Route exact path = '/' component={LandingPage} ></Route>
        <Route exact path = '/about' render={routeProps =>
            (
            <MainPage {...routeProps} page={'aboutpage'}/>
            )} />
        <Route exact path = '/projects' render={routeProps =>
            (
            <MainPage {...routeProps} page={'projects'}/>
            )} />
        </Switch>
    )
}

export default Routes;