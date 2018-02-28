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

하지만 때떄로 ```<Route>``` 하나만을 선택해서 렌더링하고 싶을것입니다. 만약 /about으로 이동해야한다면 /:also또한 매칭시키고 싶지 않을것입니다. 다음 코드는 ```<Switch>``` 를 사용한 해결 방법입니다.

```javascript
import { Switch, Route } from 'react-router';

<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
```

이젠 /about에 위치하고 있다면 일치하는 ```<Route>``` 를 찾기 시작할 것 입니다. 그러면 ```<Route path="/about">``` 가 매칭될 것이고 ```<Switch>``` 는 일치하는 경로를 찾는 것을 중단하고 About을 렌더링 시킬 것 입니다. 만약 /michael에 위치하고 있었다면 User를 렌더링 시켰겠죠.

location: object
---
location 객체는 기존의 history location을 대신해서 자식 요소들을 매칭시키기 위해서 사용됩니다.

children: node
---
```<Switch>```의 자식 요소들은 모두 ```<Route>``` 또는 ```<Redirect>``` 여야만 한다.

```<Route>``` 요소들은 path prop을 이용해서 매칭을 했고 ```<Redirect>``` 요소들은 from prop을 이용해서 매칭을 했습니다.

```<Swtich>``` 안에 ```<Redirect>``` 를 포함하고 있을 때, ```<Route>``` 의 location 매칭 props는 path, exact 그리고 strict가 있습니다. from은 단지 path의 가명입니다.

만약 ```<Switch>``` 에 location prop이 주어져있다면, 일치하는 자식 요소의 location prop을 오버라이드 할 것입니다.