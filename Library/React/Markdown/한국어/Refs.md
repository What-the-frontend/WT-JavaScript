Refs
===
보통 DOM에 접근할때는 함수에서 인자로 `event` 객체를 받아온다음 `event.target` 을 사용하는 경우가 많다. 하지만 React에서는 `Refs` 라는 프로퍼티를 통해서 이를 가능하게한다.

Refs의 용도는 다음과 같다.
- `input` / `textarea` 같은 요소에 `focus` 이벤트를 적용할때
- 애니메이션을 발생시킬때
- third-party DOM 라이브러리를 사용할떄

필자가 이해하기로는 React에서 DOM을 조작하는 작업을 할때, 주로 사용한다는 의미인것 같다. 이제 Refs를 사용하는 방법에 대해서 알아보도록하자.

Refs 생성
```javascript
import React, { Component, createRef } from 'react';

class Modal extends Component {
  myRef = createRef();
  // under v16.3, myRef = null;

  render() {
    return 
      <div ref={this.myRef} />
      // under v16.3, <div ref={ref => {this.myRef = ref}} />
  }
}
```
`React.createRef()` 를 사용해서 Refs를 생성하고, `ref` 라는 이름의 `props` 로 전달하는 방식이다. 그럼 이 Refs에 접근하고, 사용하는 방법에 대해서 알아보자.

Refs 접근, 사용
```javascript
const myElement = this.myRef;
```
`myRef` 는 해당 태그를 가리키기 때문에 다음과 같이 접근해서 사용한다.