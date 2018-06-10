Higher-Order Components(HOC)
===

참고 원문: 
- https://reactjs.org/docs/higher-order-components.html
- https://velopert.com/3537

HOC는 Component 로직을 재사용하는데 사용되는 패턴입니다. 컴포넌트를 전달받고 로직을 적용한 후에 새로운 컴포넌트를 반환한다.

우리는 개발을 할떄 컴포넌트를 사용해서 동일한 UI코드의 반복을 방지한다. HOC는 컴포넌트를 통해서 코드의 반복을 방지하는것처럼 함수를 사용해서 기능의 중복을 방지한다.

HOC은 기본적으로 컴포넌트를 함수의 인자로 전달받아 새로운 로직이나 props를 전달한 후에 새로운 컴포넌트를 반환하는 형식이다. HOC 함수의 네이밍은 `with${HOCName}` 형식으로 만들어진다.
```javascript
import React, { Component } from 'react';

function withRequest(WrappedComponent) {
  /**
    * @param {Object} React.Component
    */
  
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
```
위의 코드가 HOC의 기본적인 구조다. 공부하면서 필자가 생겼던 의문은 `render()` 에서 `<WrappedComponent />` 를 반환할때 props로 `{...this.props}` 를 전달하는 부분이었다. 사실 조금만 생각해보면 이는 간단하면서도 당연한 개념이다.

HOC를 적용하기 이전에 전달받은 `<WrappedComponent />` 는 하나의 `React.Component` 이다. 즉, 자신의 props, state를 가진 컴포넌트라는 의미이다. HOC에서 전개 연산자(spread operator)를 사용해서 `this.props` 를 모두 전달하는 이유는 기존에 `<WrappedComponent />` 가 가지고있던 props를 그대로 전달하기 위함이다. HOC는 기존의 컴포넌트에 반복되는 기능을 덧붙여 반환하는것이지, 완전히 새로운 컴포넌트를 생성해서 반환하는 함수가 아니기 때문이다.

```javascript
import React, { Component } from 'react';

function withRequest(WrappedComponent, url) {
  /**
    * @param {Object} React.Component
    */
  
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null
      }

      this.onRequest = this.onRequest.bind(this);
    }

    async onRequest() {
      try {
        const response = await axios.post(url);

        this.setState({
          data: response.data
        });
      } catch (error) {
        console.log(error)
      }
    }

    render() {
      return <WrappedComponent {...this.props} data={this.state.data} />
    }
  }
}
```
이 코드는 컴포넌트의 반복되는 요청코드를 줄여주는 HOC 코드이다. 실제로 컴포넌트에서 사용되는 방법은 다음과 같다.
(axios를 async/await를 사용해서 처리하는 부분은 velopert님의 코드를 보고 참고했다. 처음 봤을때 코드가 아주 깔끔해지는 모습에 놀라웠다...)

```javascript
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
          });
        }
      </div>
    );
  }
}

//  ${someUrl} is the example code. You should enter your request url here to run.
export default withRequest(PostList, '${someUrl}');
```
이 코드는 게시글 목록을 보여주는 페이지로 `<Post />` 컴포넌트에 `title` props를 전달함으로서 게시글을 보여주는 컴포넌트이다. `withRequet()` 함수가 두 번째 인자로 전달된 'someUrl' 에 요청을 한후에 props로 전달해주기 때문에 `Array.map()` 함수를 통해서 게시글 목록을 보여준다. `withRequest()` 는 이와같이 다른 사전 요청이 필요한 모든 컴포넌트에 사용이 가능해진다. 이런 형식을 필요로하는 컴포넌트가 많아질수록 우리가 작성한 HOC 함수는 진가를 발휘하는것이다.

서버에 요청을 보내는것 외에도 Redux의 값을 불러와서 전달, LifeCycle 메소드를 사용한 기능구현 등의 역할을 하는것이 가능하다. 반복되는 코드를 줄이기위해서 HOC를 애용해보도록하자.

