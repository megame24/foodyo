import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, browserHistory, Switch, Route } from 'react-router-dom';

import NavBar from './components/nav-bar';
import Home from './components/home';
import Register from './components/register';

render(
    <BrowserRouter history={browserHistory}>
        <div>
            <NavBar />
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    </BrowserRouter>
    , document.querySelector('#app')
)