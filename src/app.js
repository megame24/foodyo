import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducer from './reducers';
import Register from './components/register';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)} >
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/register" component={Register} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    ,document.querySelector('.container')
)