import React, {Component} from 'react';
import '../css/Main.css';

class Main extends Component{
    render(){
        return(
            <div id="main">
                <Section
                    id="PureSection"
                    head={this.props.PureSection.head}
                    content={this.props.PureSection.content}/>
                <Section
                    id="LFSection"
                    head={this.props.LFSection.head}
                    content={this.props.LFSection.content}/>
                <Logo />
            </div>
        );
    }
}

Main.defaultProps = {
    PureSection: {
        head: 'Pure',
        content: '순수 JavaScript에 대한\n문서들과 예제가 있습니다.'
    },
    LFSection: {
        head: 'Libray\n&\nFramework',
        content: 'JavaScript로 이루어진\nFramework(Angular)와\nLibray(jQuery, React.js)에 대한\n문서들과 예제가 있습니다.'
    }
}

const Section = (props) => {
    let content = props.content;
    let head = props.head;
    return(
        <div id="section">
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
        <div id="logo"></div>
    )
}

export default Main;