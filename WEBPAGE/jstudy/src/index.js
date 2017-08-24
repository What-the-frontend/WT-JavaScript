import ReactDOM from 'react-dom';
import React from 'react';
import {Main, Post} from './containers';

import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}/>
        <Route path="/post" component={Post}/>
    </Router>
, rootElement);