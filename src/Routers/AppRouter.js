import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from '../Components/Contact';
import Header from '../Components/Header';
import HomePage from '../Components/HomePage';
import Portfolio from '../Components/Portfolio';

function AppRouter(props) {
    return (
        <div>
            <BrowserRouter>
            <Header/>
            <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
            </Switch>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;