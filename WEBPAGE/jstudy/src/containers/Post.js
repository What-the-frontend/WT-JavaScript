import React, {Component} from 'react';
import {Header, Side, Content} from '../components';
import {connect} from 'react-redux';
import {selectPureOrLf} from '../actions';
import '../css/Post.css';

class Post extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {store} = this.context;
    }

    render(){
        const {initialSelect, dispatch} = this.props;
        const {store} = this.context;
        return(
            <div id="post">
                <Header now={store.getState().initialSelect.SELECT_PURE_OR_LF}/>
                <div id="wrapper">
                    <Side />
                    <Content />
                </div>
            </div>
        );
    }
}
Post.contextTypes = {
    store: React.PropTypes.object
}

function now(state){
    return {
        initialSelect: state.initialSelect
    }
}

export default connect(now)(Post);