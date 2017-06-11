//import = var React = require('react'); ES6
import React from 'react';
import Header from './Header';
import List from './List';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: Math.round(Math.random()*100)
        }
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(randomValue){
        this.setState({
            value: randomValue
        });
    }


    render(){

        return (
            <div>
                <Header title={this.props.headerTitle}/>
                <List/>
                <RandomNumber number={this.state.value}
                              onUpdate={this.updateValue}/>
            </div>
        );
    }
}

class RandomNumber extends React.Component {
    updateNumber(){
        let value = Math.round(Math.random()*100);
        this.props.onUpdate(value);
    }

    constructor(props){
        super(props);
        this.updateNumber = this.updateNumber.bind(this);
    }

    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button onClick={this.updateNumber}>Randomize</button>
            </div>
        );
    }
}

export default App;
