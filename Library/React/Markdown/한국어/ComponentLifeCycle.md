React Component Life Cycle
===

참고 원문: https://reactjs.org/docs/react-component.html#constructor

React에서 Component는 몇몇의 생명주기 메소드(lifecycle method)를 갖는다. 이 생명주기 메소드는 프로세스의 특정 시점에 코드를 실행하도록 오버라이딩이 가능하다.
"Will" 을 접두사로 갖는 생명주기 메소드는 동작이 발생하기 전에 호출되고, "Did" 를 접두사로 갖는 생명주기 메소드는 동작이 발생한 후에 호출된다.

동작에는 크게 `Mounting`, `Updating`, `Unmounting`, `Error Handling` 이 있다.

## Mounting
이 동작과 관련된 메소드들은 Component 인스턴스가 생성중이거나 DOM에 부착되는중일때 호출된다.
- constructor()
- static getDerivedStateFromProps()
- componentWillMount / UNSAFE_componentWillMount
- render()
- componentDidMount()

### constructor()
```javascript
constructor(props)
```
* 호출시점: 컴포넌트가 마운트 되기전에 호출
* 사용용도
  * 상태(state) 초기화
    * `this.state` 를 사용해서 객체를 추가
  * 이벤트 핸들러(Event Handler) 바인딩(bind)
* 메소드내에서 하면 <b>안되는</b> 행위
  * `setState()` 를 사용한 상태(state) 접근
  * 사이드 이펙트(Side effect)
  * 구독(Subscription)

`constructor()` 메소드는 사용용도가 있을때만 `super(props)` 와 함께 `React.Component` 를 상속받은 class 내부에 작성한다.
```javascript
import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);   // 'this.props' 정의를 위해서 작성해야만한다.

    this.state = {
      count: 0    // 다음과 같이 'this.state' 객체 내부에 state를 초기화한다.
    }
    
    // setState({ count: 0 }), this.EventMethod = function() {...} 등의 사이드 이펙트는 사용할 수 없다.

    this.EventMethod = this.EventMethod.bind(this);   // 메소드를 클래스에 바인딩 시켜준다.
  }
  // this.state = {} 를 사용한 상태 초기화, 메소드 바인딩(bind)가 필요없다면 위의 모든 코드가 생략 가능하다.
}
```

> <b>원문해석</b>
>
>`constructor()` 메소드는 Component가 마운팅 되기전에 호출된다. 만약에 `React.Component` 의 서브 클래스(Sub Class)에서 `constructor()` 메소드를 호출한다면 다른 코드를 작성하기전에 `super(props)` 를 입력해줘야한다. 그렇지않으면 `constructor()` 내부에 `this.props` 가 정의되지 않아서 버그를 발생시킬 수 있다.
>
>`constructor()` 내부에서는 사이드 이펙트나 구독하는 행위를 피해야하고 대신, 사용하기 위해선 `componentDidMount()` 에서 사용한다.
>
>`constructor()` 는 상태(state)값을 초기화하기에 적절한 공간이다. 초기화는 `this.state` 에 객체를 추가하는 방식으로 한다; `constructor()` 내부에서 `setState()` 를 호출하면 안된다. `constructor()` 는 또한 클래스 인스턴스에 이벤트 헨들러(Event Handler)를 바인딩(bind)시킬 때 사용된다.
>
>만약 상태값을 초기화하거나 이벤트 헨들러를 바인딩시킬 필요가 없다면 굳이 `constructor()` 를 작성할 필요가 없다. 
>
>`props` 를 기반으로 `state` 를 초기화하는것도 가능하다.

### static getDerivedStateFromProps()
```javascript
static getDerivedStateFromProps(props, state)
```
* 호출시점: `render()` 메소드가 호출되기 직전, 초기 마운트 및 후속 업데이트시 호출
* 사용용도
  * `props` 를 기반으로 `state` 를 초기화 시킨다.
* 메소드내에서 하면 <b>안되는</b> 행위

> <b>원문 해석</b>
>
>`getDerivedStateFromProps()` 는 `render()` 메소드가 호출되기 바로전에 호출되기전과 초기 마운트와 뒤에 마운트가 이루어질때 호출됩니다. 상태(state)를 업데이트를 하기위해선 객체(Object)를 반환해야하고 업데이트를 하지않기 위해서는 null을 반환해야한다.
>
>이 메소드는 다른 이유에 개의치않고 렌더링시에 항상 호출된다. `UNSAFE_componentWillMount` 와 달리 부모가 리렌더링 시키거나 로컬 `setState` 의 결과 아닐 경우에 호출된다.
>
>`getDerivedStateFromProps()` 는 props에서 파생된 state를 얻는다는 의미를 갖는다. 아마 아까 `constructor()` 의 마지막 부분에서 `props` 를 기반으로 `state` 를 초기화할때 사용하는 메소드가 아닐까라는 생각이다.

### UNSAFE_componentWillMount()
```javascript
UNSAFE_componentWillMount()
```
* 호출시점: 컴포넌트가 마운트되기 이전, `render()` 전에 호출
* 사용용도
  * 서버 사이드 렌더링시에 hook으로 사용가능
  * 상태 초기화, (`constructor` 에서 초기화하는것을 지향)
* 메소드내에서 하면 <b>안되는</b> 행위
  * 사이드 이펙트(Side effect)
  * 구독(Subscription)

> <b>원문 해석 </b>
>
>`UNSAFE_componentWillMount()` 는 마운팅이 발생하기 전에 호출된다. 이 메소드는 `render()` 전에 호출되므로 `setState` 를 동기적으로 호출해도 추가적으로 렌더링을 발생시키지 않는다. 일반적으로, 상태값 초기화를 위해서 이 메소드 대신 `constructor()` 를 추천한다.
>
>이 메소드 내부에서는 사이드 이펙트나 구독하는 행위를 피해야하고 대신, 사용하기 위해선 `componentDidMount()` 에서 사용한다.
>
>이 메소드는 서버 사이드 렌더링시에 호출되는 유일한 생명주기 hook다.
>
>원래는 `componentWillMount()` 가 정상적인 이름이고 React v17에서 다시 이름이 정정된다고한다.

`UNSAFE_componentWillMount()` 에서 하던 처리를 `constructor()` 와 `componentDidMount()` 에서도 충분히 처리하는것이 가능하다.

### componentDidMount()
```javascript
componentDidMount()
```
* 호출시점: 컴포넌트가 마운트 완료된 직후 호출, 생명주기내에서 한 번만 호출된다.
* 사용용도
  * DOM 노드 초기화
  * 네트워크 요청 코드 작성
  * 사이드 이펙트(Side effect)
  * 구독(Subscription)
* 메소드내에서 하면 <b>안되는</b> 행위

```javascript
import React from 'react';
import axios from 'axios';

class Test extends React.Component {
  ∙∙∙

    componentDidMount() {
      // 생명주기내에서 한 번만 호출되기 때문에 AJAX 요청과 같은 사이드 이펙트를 적용시키기에 적절하다.
      // e.g. axios request
      axios.get('/test')
        .then(response => { 
          this.setState({
            data: response.data
          });
        })
        .catch(error => {
          console.log(error);
        })
    }

  ∙∙∙
}
```

><b>원문 해석</b>
>
>`componentDidMount()` 는 컴포넌트가 마운트 완료된 후 즉시 호출된다. DOM 노드를 초기화하는 코드는 이 안에 작성해야한다. 만약 remote endpoint에서 데이터를 로드해오고 싶을떄 네트워크 요청 코드를 작성하기에 적절하다.
>
>이 메소드는 구독설정하기에 좋다. 만약 이 메소드에서 구독을 설정한다면 `componentWillUnMount` 에서 구독을 해제해야한다.
>
>`setState()` 를 이 메소드에서 호출하는것은 추가 렌더링을 발생시키지만 브라우저가 스크린을 업데이트 하기전에 발생할것이다. 이는 사용자가 중간에 `render()` 가 두 번 호출되더라도 볼 수 없다. 이 패턴을 사용할때는 성능 이슈가 발생할 수 있기 때문에 주의해서 사용해야한다.

## Updating
업데이트는 props 또는 state가 변경되는걸로 인해서 일어날 수 있다. 이 메소드들은 리렌더링되어질때 호출된다.

### UNSAFE_componentWillReceiveProps()
```javascript
UNSAFE_componentWillReceiveProps(nextProps)
```

### shouldComponentUpdate()
```javascript
shouldComponentUpdate(nextProps, nextState)
```

* 호출시점: 리렌더링(re-render)시에 호출된다.
* 사용용도
  * 성능 최적화를 위해서 사용된다.
  * 사용자가 정의한 특정 시점에 `render()` 수행여부를 결정할 수 있다.
* 메소드내에서 하면 <b>안되는</b> 행위
  * 깊은 동등비교(deep equality check)
  * `JSON.stringify()`

><b>원문 해석</b>
>
>`sholudComponentUpdate()` 를 사용하면 컴포넌트의 출력이 현재 state와 props의 변경에 영향을 끼치는지 알 수 있다. 기본동작은 모든 상태변경시에 리렌더링(re-render)시키고, 대다수의 경우 기본동작에 의존해야한다.
>
>`shouldComponentUpdate()` 는 새로운 props 혹은 state를 받았을때 렌더링되기 전에 호출된다. 이 메소드는 초기 렌더링이나 `forceUpdate()` 가 사용됐을때는 호출되지 않는다.
>
>만약 `shouldComponentUpdate()` 가 false를 반환할때 현재는 `UNSAFE_componentWillUpdate()`, `render()` 그리고 `componentDidUpdate()` 가 호출되지 않는다.
>
>만약 특정 컴포넌트가 프로파일링 작업 후에 느려지는 경우 `shouldComponentUpdate()` 를 implement 하여 shallow prop과 상태(state)비교를 하도록 `React.PureComponent` 를 상속받으면 된다. `React.Component` 는 `shouldComponentUpdate()` 를 impletement 할 수 없기 때문이다. 직접 구현하길 원한다면 `this.props`와 `nextProps` 를 비교하고 `this.state`와 `nextState` 를 비교하고 `false` 를 반환함으로서 React에게 업데이트는 스킵되어도된다고 알리면 된다.
>
>`shouldComponentUpdate()` 내부에서 깊은 동등비교 또는 `JSON.stringify()` 를 사용하는걸 지양한다. 이것은 매우 효율적이지 않고 성능에 해를 끼칠 수 있다. 왜냐하면 이 행위들이 `render()` 여부를 결정하는 시간이 단순히 `render()` 를 수행하는 시간보다 더 오래걸리기 때문이다.

### UNSAFE_componentWillUpdate()
```javascript
UNSAFE_componentWillUpdate(nextProps, nextState)
```
`UNSAFE_componentWillUpdate()` 는 새로운 props와 state를 받았을때 렌더링 되기전에 호출된다. 이 메소드는 update가 발생하기전에 수행준비를 하는데 사용한다. 이 메소드는 초기 렌더링시엔 호출되지 않는다.

이 메소드에서는 `this.setState()` 를 호출할 수 없다. 꼭 필요하다면 `UNSAFE_componentWillUpdate()` 가 반환하기전에 React 컴포넌트에 대한 업데이트를 실행하는 다른 작업(e.g. Redux Action 전달)을 수행해야한다.

props를 변경하는 응답요청내에서 상태(state)값을 업데이트 해야한다면 `getDerivedStateFromProps()` 를 사용한다.

### render()
```javascript
render()
```
`render()` 메소드는 호출이 필수적이다.

`render()` 가 호출되었을때, `this.props` 와 `this.state` 를 검사하고 다음 type들중에 하나를 반환해야만 한다.

- React elements
일반적으로 JSX를 통해서 생성된다. 요소는 native DOM으로 표현됐을수도 있고(<div />), 또는 user가 정의한 컴포넌트일수도 있다.

- String and numbers
단순히 DOM 내부의 text nodes로 전달된다.

- Portals
`ReactDOM.createPortal()` 메소드에 의해서 생성된다.

- null
아무것도 렌더링하지 않는다.

- Booleans
아무것도 렌더링하지 않는다. 이는 다음과 같이 컴포넌트의 렌더링을 결정지을때 유용하다.
```javascript
// let test = [Boolean value]
return test && <Child />
```

null과 false가 반환됐을때는 `ReactDOM.findDOMNode(this)` 가 null을 반환한다.

`render()` 함수는 순수해야한다. 순수하다는건 컴포넌트의 state를 수정할 수 없고, 호출시에 계속 같은 결과를 반환해야한다는 것이다. 그리고 브라우저와 직접적으로 상호작용해서는 안된다. 브라우저와 상호작용이 필요하다면 `componentDidMount()` 나 다른 생명주기 메소드내에서 수행해야한다.

`render()` 는 `shouldComponentUpdate()` 가 false를 반환할 경우에는 호출되지 않는다.

<b>Fragments</b>

`render()` 내에서 여러 아이템들을 반환할땐 배열을 사용한다. Fragment를 사용할땐 key 속성에 값을 넣어서 key warning을 피하도록 한다.
```javascript
render() {
  return [
    <li key="A">First item</li>
    <li key="B">Second item</li>
    <li key="C">Third item</li>
  ];
}
```

React v16,2.0 부턴 동작원리는 같지만 정적인 아이템에 key값을 필요로하지 않는 완성된 fragments를 사용한다.
```javascript
redner() {
  return (
    <React.Fragment>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </React.Fragment>
  );
}
```
필자는 이 `React.Fragment` 를 `render()` 는 하나의 요소만 반환할 수 있기 때문에 의미없이 `<div>` 태그를 사용해서 묶어야하는 상황이 생길때 사용한다.

### getSnapshotBeforeUpdate()
`getSnapshotBeforeUpdate()` 메소드는 가장 최근에 렌더링된 출력(e.g. DOM)이 커밋되기 바로전에 호출됩니다. 이 메소드는 현재의 값들을 컴포넌트가 잠재적으로 변경되기 전에 받아올 수 있도록합니다. 어떠한 값을 반환하더라도 이 생명주기는 `componentDidUpdate()` 에 인수를 전달합니다.

### componentDidUpdate()
```javascript
componentDidUpdate(prevProps, prevState, snapshot)
```
`componentDidUpdate()` 는 업데이트가 이루어진 후에 즉시 발생한다. 이 메소드는 초기 렌더링시에는 호출되지 않는다.

컴포넌트가 업데이트 됐을때 DOM에서 작업하는것이 가능하다. 또한 이전 props와 현재 props를 비교하는한 네트워크 요청을 보내기에 적절하다.(네트워크 요청은 props가 변경되지 않았다면 불필요할 수 있다.)

## Unmount
이 메소드는 컴포넌트가 DOM으로부터 삭제됐을때 호출된다.

### componentWillUnmount()
```javascript
componentWillUnMount()
```
`componentWillUnMount()` 는 컴포넌트가 언마운트 그리고 파괴되기전에 즉시 호출된다. `componentDidMount()` 를 통해서 생성된 타이머들을 무효화하고, 네트워크 요청을 취소시키거나 모든 구독을 해제하는 등의 필수적인 정리작업을 이 메소드에서 수행한다. 이 메소드에선 컴포넌트가 절대 리렌더링되지 않기 때문에 `setState()` 를 호출해서는 안된다.

## Error Handling
이 메소드는 렌더링되는동안 생명주기 메소드 또는 어떠한 자식 컴포넌트의 생성자(constructor) 내에서 오류가 발생했을시에 호출된다.

### componentDidCatch()
```javascript
componentDidCatch(error, info)
```
* 내용추가 예정