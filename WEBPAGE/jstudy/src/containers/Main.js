import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {selectPureOrLf} from '../actions'
import PropTypes from 'prop-types';
import '../css/Main.css';

class Main extends Component{
    constructor(props){
        super(props);
        this.onSectionClick = this.onSectionClick.bind(this);
    }

    onSectionClick(state){
        browserHistory.push('/post');
    }

    render(){
        const {dispatch} = this.props;
        const {store} = this.context;
        console.log(store.getState().initialSelect);
        return(
            <div id="main">
                <Section
                    id="PureSection"
                    head={this.props.PureSection.head}
                    content={this.props.PureSection.content}
                    onSectionClick={this.onSectionClick}
                    updateState={state => dispatch(selectPureOrLf(this.props.PureSection.name))}/>
                <Section
                    id="LFSection"
                    head={this.props.LFSection.head}
                    content={this.props.LFSection.content}
                    onSectionClick={this.onSectionClick}
                    updateState={state => dispatch(selectPureOrLf(this.props.LFSection.name))}/>
                <Logo />
            </div>
        );
    }
}

Main.contextTypes = {
    store: PropTypes.object
}

Main.defaultProps = {
    PureSection: {
        head: 'Pure',
        content: '순수 JavaScript에 대한\n문서들과 예제가 있습니다.',
        name: 'Pure'
    },
    LFSection: {
        head: 'Libray\n&\nFramework',
        content: 'JavaScript로 이루어진\nFramework(Angular)와\nLibray(jQuery, React.js)에 대한\n문서들과 예제가 있습니다.',
        name: 'LF'
    }
}

const Section = (props) => {
    let content = props.content;
    let head = props.head;
    return(
        <div id="section" onClick={props.onSectionClick} onMouseEnter={props.updateState}>
            <div id={props.id}>
                <div id="background"></div>
                <article>
                    <div id="head">
                        {head.split('\n').map(i => {
                            return <div>{i}</div>
                        })}
                    </div>
                    <div id="line"></div>
                    <div id="content">
                        {content.split('\n').map(i => {
                            return <div>{i}</div>
                        })}
                    </div>
                </article>
            </div>
        </div>
    )
}

const Logo = () => {
    return(
        <div id="mainLogo"></div>
    )
}

function select(state){
    return {
        initialSelect: state.initialSelect
    }
}

export default connect(select)(Main);