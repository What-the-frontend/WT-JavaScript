React 생명주기
===

Reactjs의 각각의 컴포넌트는 생명주기를 갖는다. 


우선 컴포넌트가 실행될 때를 살펴본다. 이 때를 Mount라고 한다.

## Mount
컴포넌트 시작 시에 context, defaultProps, states를 저장한다. 그 후에 componentWillMount함수를 호출한다. 그리고 render함수가 호출되면서 컴포넌트를 DOM에 랜더링시킨다. 그리고 componentDidMount 함수가 호출된다.

여기서 주의할 점은 componentWillMount함수 내에서 props나 state값을 변경할 수 없다는 것이다. 왜냐면 render함수가 실행되기 전까지는 Mount가 종료된 것이 아니기 때문이다. 따라서 props와 state의 값 변경은 render함수나 componentDidMount함수 내부에서 해야한다.

