Link
===
당신의 애플리케이션에 선언적이고 접근가능한 네비게이션을 제공합니다.

to: string
---
연결시킬 경로를 의미합니다. 예를 들어서 /home/mypage로 이동하는 것을 선언하고 싶을때 다음과 같이합니다.
```javascript
<Link to='/home/mypage?id=geni'/>
```

to: object
---
다음 프로퍼티들을 가질 수 있는 모든 오브젝트를 나타냅니다.
- pathname: 연결시킬 경로(라우터)이름
- search: 쿼리 파라미터
- hash: URL에 넣을 해쉬
- state: location을 유지할 수 있는 상태를 나타냅니다.
```javascript
<Link to={
  pathname: '/home/mypage',
  search: '?id=geni',
  hash: '#the-hash',
  state: { fromDashboard: true }
}/>
```

replace: bool
---
이 값이 true일땐 Link를 클릭하면 히스토리 스택에 새로 추가하는것 대신에 현재 시작점으로 replace시킵니다.

innerRef: function
---
Allows access to the underlying ref of the component
컴포넌트에 내재되어있는 참조에 접근할 수 있도록 해줍니다.