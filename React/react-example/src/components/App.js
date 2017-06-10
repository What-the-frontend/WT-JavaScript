//import = var React = require('react'); ES6
import React from 'react';
import Header from './Header';
import List from './List';

class App extends React.Component {
    render(){

        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default App;
