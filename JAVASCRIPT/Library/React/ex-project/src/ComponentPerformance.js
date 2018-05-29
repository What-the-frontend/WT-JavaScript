import React, { Component, Fragment } from 'react';

class ComponentPerformance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    let current = this.state.count;

    this.setState({
      count: current + 1
    });
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.increaseCount}>Increase</button>
        <Count number={this.state.count} />
      </Fragment>
    );
  }
}

class Count extends Component {
  componentDidMount() {
    console.log("re-render-count");
  }

  render() {
    return <div>{this.props.number}</div>
  }
}

// const Count = ({number}) =>
//   <div>{number}</div>

export default ComponentPerformance;