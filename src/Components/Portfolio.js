import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ItemOne from './Portfolio/ItemOne';
import ItemTwo from './Portfolio/ItemTwo';

function Portfolio(props) {
    return (
        <div>
            <h1>PortFolio</h1>
            <p>we have different catogries down here</p>
            <BrowserRouter>
            <Header/>
            <Switch>
            <Route path="/Portfolio/ItemOn" component={ItemOne}/>
            <Route path="/Portfolio/ItemTw" component={ItemTwo}/>
            </Switch>
            </BrowserRouter>
        </div>
    );
}
const Header=()=>
{
    return(
        <div>
        <header>
        <Link to="/Portfolio/ItemOn">ItemOne</Link>
        <Link to="/Portfolio/ItemTw">ItemTow</Link>
        </header>
        </div>
    )
}

export default Portfolio;