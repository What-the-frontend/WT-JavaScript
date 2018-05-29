React Compoenent
===
어쩌면 컴포넌트가 React에서 가장 중요한 핵심 개념이지 않을까 생각한다. React는 컴포넌트 단위로 리렌더링 되고, 컴포넌트 단위로 페이지를 구성하기 때문이다. 우선 이 컴포넌트라는 것은 말그대로 페이지의 한 부분, 요소들을 의미한다. 우리가 퍼즐을 맞출때 몇천조각으로 분리된 그림을 합쳐서 완성하듯이 웹을 컴포넌트라는 단위로 나누어서 구성하는 것이다. 여기서 React의 가장 큰 장점이었던 Virtual DOM의 능력이 극대화된다. 상태가 변경된 컴포넌트만 리렌더링 해주는 것이기 때문이다. 따라서 React를 잘 사용한다고 하면 우선은 Component를 잘나누고 구성하는 것이 가장 핵심일 것 같다. 이 문서에서는 컴포넌트는 무엇이며 어떻게 나누는지에 대한 내용을 다룬다.

# 컴포넌트의 분리

Component는 크게 2가지로 나뉜다. Dumb Component(멍청한 컴포넌트), Smart Component(똑독한 컴포넌트). 먼저 Smart Component는 state값을 관리하며 컴포넌트내의 행동(method)들을 정의하고 있는 컴포넌트다. 쉽게 말해서 최상위 부모 컴포넌트라고 할 수 있다. 반면에 Dumb Component는 독자적인 state값도 없고 method또한 없다. 쉽게 말해서 자식 컴포넌트이다. 이 둘을 분리하는 이유는 무엇이며 왜 중요한가.

## Smart Component
Smart Component는 웹 애플리케이션 내부에서 container에 해당하는 컴포넌트를 의미한다. 어떻게 동작하는가를 정의하고 DOM 마크업 또는 스타일을 제공하지 않는다. 애플리케이션 데이터(상태, state)를 제공하고 데이터 갱신을 담당한다. 또한 Flux 패턴 사용시에 action을 call하는 역할을 한다.

## Dumb Component
Dumb Component는 단순히 어떻게 보일지를 정의하는 컴포넌트를 의미한다. 자체적인 상태와 메소드를 갖고있지 않으며 Smart Component가 props를 통해서 전달한 상태와 메소드를 사용한다. 가끔 UI상태를 표현하기 위해서 상태값을 갖기도한다.

이 둘을 분리하는 것의 가장 큰 이유는 React가 수직적 구조를 갖기 때문이다. 만약에 Smart, Dumb 구분없이 개발을 진행한다면 어떤일이 발생할지 생각해보자.

```javascript
import React, { Component } from 'react';

class AddToDoBtn extends Component {
  render() {
    return <button>할일 추가!</button>
  }
}

export default AddToDoBtn;
```
```javascript
import React, { Component, Fragment } from 'react';
import AddToDoBtn from '../component/AddToDoBtn';

class ToDo extends Component {
  render() {
    return (
      <Fragment>
        <div>TODO Application!</div>
        <AddToDoBtn />
      </Fragment>
    );
  }
}
```
간단한 ToDo 애플리케이션을 작성한다고 가정해보자. `ToDo` 컴포넌트는 container에 해당되고 `AddToDoBtn` 은 component에 해당되며 `ToDo` 의 자식 컴포넌트로 존재한다.

이 ToDo 애플리케이션은 "할일 추가!" 버튼을 클릭할 시에 할일의 개수를 추가시켜주고 사용자가 그를 확인할 수 있는 역할을 한다.

그럼 우선 `AddToDoBtn` 에 할일의 개수를 나타내는 상태와 할일의 개수를 추가시켜주는 기능을 추가해보도록 하겠다.

```javascript
import React, { Component } from 'react';

class AddToDoBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoCount: 0
    }

    this.addToDo = this.addToDo.bind(this);
  }

  addToDo() {
    this.setState({
      toDoCount: this.state.toDoCount++
    });
  }

  render() {
    return <button onClick={this.addToDo}>할일 추가!</button>
  }
}

export default AddToDoBtn;
```
이 `AddToDoBtn` 은 컴포넌트 이름에 걸맞게 할일의 개수를 증가시켜주는 역할을 한다. "문제가 없지 않나요?"

문제는 지금부터다. `ToDo` 컴포넌트를 통해서 사용자에게 "할일 추가!" 시에 사용자에게 할일의 개수가 보여져야한다! 하지만 지금 우리가 한 방법으로는 불가능하다. React는 수직적 구조, 즉 자식이 부모에게 접근하는 것이 불가능하다. 위의 예제에서 `AddToDoBtn` 은 `ToDo` 컴포넌트의 자식이기에 `ToDO` 컴포넌트가 `AddToDoBtn` 의 상태나 메소드를 받아오는것이 불가능하다.

이 문제는 다음과 같은 방법으로 해결이 가능하다.
```javascript
import React, { Component, Fragment } from 'react';
import AddToDoBtn from '../component/AddToDoBtn';

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoCount: 0
    }

    this.addToDo = this.addToDo.bind(this);
  }

  addToDo() {
    this.setState({
      toDoCount: this.state.toDoCount++
    });
  }

  render() {
    return (
      <Fragment>
        <div>TODO Application!</div>
        <div>나의 할일 개수: {this.state.toDoCount}</div>
        <AddToDoBtn event={this.addToDo} />
      </Fragment>
    );
  }
}
```
`ToDo` 로 상태와 메소드를 모두 옮기고,
```javascript
import React, { Component } from 'react';

class AddToDoBtn extends Component {
  render() {
    return <button onClick={this.props.event}>할일 추가!</button>
  }
}

export default AddToDoBtn;
```
`AddToDoBtn` 은 위와같이 props를 통해서 이벤트를 전달받아서 사용하도록 바꾸면된다.

위 예제에서 `ToDo` 는 Smart Component, `AddToDoBtn` 은 Dumb Component가 된다. 이 개념은 컴포넌트를 나누는데에 가장 중요한 개념이라고 생각한다. 실제 개발중에 컴포넌트를 잘못 분류한채로 개발하다가 후에 문제가 발생하거나 요구사항이 변경됐을시에 대처하기가 상당히 어렵기 때문이다.