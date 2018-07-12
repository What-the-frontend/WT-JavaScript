module.exports
===
Node는 앱을 실행시킬때 하나의 파일을 실행시킨다. 물론 앱의 크기가 정말 작다면 모르겠지만, 앱의 크기가 크다면, 하나의 파일에 모든 코드를 다 넣을 수 없다. 따라서 Node는 이를 모듈 시스템을 통해서 해결했다.

모듈은 쉽게 설명해서 하나의 작은 기능, 작동하는 소프트웨어라고 생각하면된다. 모듈을 생성하는 방법은 다음과 같은 방법들이 있다.
```javascript
// add.js
const add = (x, y) => x + y;
module.exports = add;
```
`module.exports` 는 대표적인 모듈생성 방법이다.(`exports` 를 통해서도 가능하다) 이렇게 생성된 모듈은 `require()` 를 통해서 받아올 수 있다.
```javascript
const add = require('./add.js');
```
`require()` 는 모듈이 존재하는 경로를 매개변수로 전달받는다. 그 후에 매개변수 경로에 있는 파일에 접근해서 `module.exports` 된 객체를 받아와서 반환한다.
