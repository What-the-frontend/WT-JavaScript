```<Switch>```
===
location과 일치하는 첫 번째 Route 또는 Redirect 자식 요소를 렌더링합니다.

```<Route>``` 를 여러개 사용하는 것과 어떤 차이점이 있을까요?

```<Switch>``` 는 라우팅을 독점적으로 렌더링한다는 점에서 차별점이 있습니다. 이와 대조적으로, location과 일치하는 모든 ```<Route>``` 는 포괄적입니다.

```javascript
<Route path="/about" component={About}/>
<Route path="/:user" component={User}/>
<Route component={NoMatch}/>
```
위의 코드를 봅시다. 만약 URL이 /about 이라면 ```<About>```, ```<User>```, ```<NoMatch>``` 모두 다 경로와 일치하기 때문에 렌더링 될것입니다. 이것은 의도적으로 설계되었기 때문에 sidebar, breadcrumb 그리고 bootstrap tabs등과 같이 다양한 방법으로 구성할 수 있습니다.

하지만 때떄로 ```<Route>``` 하나만을 선택해서 렌더링하고 싶을것입니다. 만약 /about에 있다면 /:also또한 match시키고 싶지 않아합니다.

```javascript
import { Switch, Route } from 'react-router';

<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
```