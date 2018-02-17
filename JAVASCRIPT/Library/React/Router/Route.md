Route
===
Route컴포넌트는 React Router를 이해하고 잘 사용하기 위해서 가장 중요한 컴포넌트일지도 모릅니다. 가장 큰 역할은 location이 route의 경로와 일치할 때 UI를 렌더링 해주는 것입니다.

Example
```javascript
import { BrowserRouter as Router, Route } from 'react-router-dom';

<Router>
  <div>
    <Route exact path='/' component={Home}/>
    <Route path='/news' component={NewsFeed}/>
  </div>
</Router> 
```

Route render methods
---
<Route>를 통해서 렌더링하는 방법은 3가지가 있다.
- <Route component>
- <Route render>
- <Route children>

각각은 다른 상황에서 모두 유용합니다. 당신은 주어진 <Route>안에서 저 프로퍼티들 중 한 가지만 사용해야합니다.

Route props
---
세 개의 모든 render method는 세게의 같은 router props를 전달받습니다.
- match
- location
- history

component
---
React 컴포넌트가 location에 매치가 될때 렌더링을 시켜줍니다. router props와 함께 렌더링됩니다.

React component를 사용할때 React.createElement가 새로운 React element를 생성하기 위해서 호출됩니다. 이건 컴포넌트의 prop으로 inline function을 제공하면 매 렌더링마다 새로운 컴포넌트를 생성한다는 것을 의미합니다. 이는 기존 존재하는 컴포넌트를 단순히 업데이트시키는 대신에 존재하는 컴포넌트를 언마운트하고 새로운 컴포넌트를 마운트 시킵니다. inline render를 위해서 inline function을 사용할 땐 render를 사용하거나 children prop을 사용하세요.

render: func
---
