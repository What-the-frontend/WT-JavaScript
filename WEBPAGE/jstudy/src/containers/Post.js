import React, {Component} from 'react';
import {Header, Side, Content} from '../components';
import '../css/Post.css';

class Post extends Component{
    render(){
        return(
            <div id="post">
                <Header now="Pure"/>
                <div id="wrapper">
                    <Side />
                    <Content />
                </div>
            </div>
        );
    }
}

export default Post;