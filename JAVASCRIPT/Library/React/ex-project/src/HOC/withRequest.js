import React, { Component } from 'react';
import axios from 'axios';

function withRequest(WrappedComponent, url) {
  /**
   * @param {Object} WrappedComponent React.Component to apply new logic and receive props.
   * @param {string} url request url.
   */

  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null
      }
    }

    async onRequest() {
      try {
        const response = await axios.post(url);

        this.setState({
          data: response.data
        });
      } catch (error) {
        console.log(error);
      }
    }

    render() {
      return <WrappedComponent {...this.props} data={this.state.data} />
    }
  }
}

export default withReuqest;