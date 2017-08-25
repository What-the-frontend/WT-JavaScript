import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from './components';
import {Main, Post} from './containers';
import {createStore} from 'redux';
import reducer from './reducers';

import {
    Router,
    Route,
    browserHistory
} from 'react-router';

const store = createStore(reducer);
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}/>
            <Route path="/post" component={Post}/>
        </Router>
    </Provider>
, rootElement);