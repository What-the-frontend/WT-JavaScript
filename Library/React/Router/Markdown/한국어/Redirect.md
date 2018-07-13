Redirect
===
(react-router v4)

react-router를 사용하다보면 특정시점에 redirect를 시키면서 경로를 변경해줘야하는 경우가 있다. `<Redirect />` 는 이를 완벽하게 지원한다.

우선 예제 코드를 보자.
```javascript
import { Route, Redirect } from 'react-router'

<Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <PublicHomePage/>
  )
)}/>
```
위의 코드를 보면 "/" 에 접근했을시에, 로그인된 상태라면 경로를 "/dashboard" 로 바꿔주고, 아닐시에는 `<PublicHomePage />` 를 렌더링 해준다는것을 알 수 있다. 상황에 따라서 새로운 경로로 리다이렉트(redirect)하는것을 결정할 수 있는것이다.

그럼 각각의 프로퍼티가 어떤 값을 전달받는지 공부해보자.

to: string
---
리다이렉트할 URL을 의미한다.

to: object
---
리다이렉트할 위치(location)을 의미한다.
예제를 보고 알아보자.
```javascript
<Redirect to={{
  pathname: '/login',
  search: '?utm=your+face',
  state: { referrer: currentLocation }
}}/>
```
위의 state 객체를 통해서 리다이렉트되는 페이지에 데이터를 전달해준다. 리다이렉트될 페이지에서는 this.props.location.state.refferrer를 통해서 접근이 가능하다.

push: bool
---
이 값이 `true` 일 경우에 새로운 엔트리(entry)를 history에 기존에것을 대신해서 푸시(push)하면서 리다이렉트를 시킨다.

from: string
---
리다이렉트되는 곳의 경로명(pathname)을 적는다. 이 프로퍼티는 Switch 내에서만 사용가능하다.