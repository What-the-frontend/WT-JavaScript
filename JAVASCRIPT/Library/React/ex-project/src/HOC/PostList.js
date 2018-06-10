import React, { Component } from 'react';
import withRequest from './withRequest';

class PostList extends Component {
  render() {
    return (
      <div>
        <h1>Post list</h1>
        {
          this.props.data.map(element => {
            return <Post title={element.title} content={element.content} />
          })
        }
      </div>
    );
  }
}

const Post = ({ title, content }) =>
  <div>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>

const someUrl = '${someUrl} is the example code. You should enter your request url here to run.'

export default withRequest(PostList, `${someUrl}`);