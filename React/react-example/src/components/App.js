//import = var React = require('react'); ES6
import React from 'react';
import Header from './Header';
import List from './List';

class App extends React.Component {
    render(){

        return (
            <div>
                <Header title={this.props.headerTitle}/>
                <Content />
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        var rows = [];
        for(var i=0; i<5; i++){
            rows.push(<Row key={i}/>);
        }
        return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

class Row extends React.Component{
    render(){
        return (
             <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
                <td>D</td>
                <td>E</td>
            </tr>
        );
    }
}

export default App;
