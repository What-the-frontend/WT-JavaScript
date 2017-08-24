import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <div id="header">
                <div id="logo"></div>
                <div id="now">{this.props.now}</div>
            </div>
        );
    }
}

export default Header;