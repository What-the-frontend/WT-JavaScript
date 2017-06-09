//import = var React = require('react'); ES6
import React from 'react';
import Header from './Header';

class App extends React.Component {
    render(){

        return (
            <div>
                <Header title={this.props.headerContent}/>
            </div>
        );
    }
}

App.defaultProps = {
    headerContent : "hello"
}

export default App;
