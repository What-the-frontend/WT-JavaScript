## Stateless Functional Component
참고 원문: https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc

이 문서는 위의 참고 원문을 보고 필자가 배운것과 느낀것에 대해서 다룬다.

React 14 버전부터 소개된 컴포넌트를 더욱 쉽게 선언할 수 있는 방법으로, Stateless Functional Component라고 불린다. 이 방법은 일반적인 함수를 사용한다.
```javascript
import React from 'react';

const Stateless = () => {
  return <div>I am Stateless Functional Component!!</div>
}

export default Stateless;
```
위와 같은 형태의 함수를 의미한다. 이는 불필요한 코드 수를 엄청나게 줄여준다.

### No Class Needed
Class를 사용할 필요가 없다. 원문 작성자의 주장은 단순히 함수를 사용하는 것이 대체로 바람직하며 위의 예제에서 'extends' 와 같은 클래스와 관련된 불쾌한 문법과 생성자를 제거한 것은 큰 승리라고 한다.

JavaScript Class에 관한 문서:  https://medium.com/@housecor/in-defense-of-javascript-classes-e50bf2270a95

원문 작성자는 이 글을 읽고 공감하며 저 주장을 했다. JavaScript의 Class는 개발자들 사이에서 정말 논란이 많다는걸 이 글을 읽으면서 나도 처음 알게됐다. 어떤 개발자는 Class를 Virus라고 표현하기도 한다. 위 글에 대한 상세한 내용은 https://github.com/geni429/JavaScriptStudy/blob/master/JAVASCRIPT/Original/EE/Markdown/ES6/Class.md 에서 다루도록 한다.

### No 'this' Keyword
앞에서 봤듯이 Stateless Component는 그저 함수이다. 그러므로 JavaScript의 this 키워드를 가진 모든 성가시고 혼란스러운 단점을 피할 수 있다. 원문 작성자는 'this' 키워드가 없으면 전체 컴포넌트를 이해하기가 더 쉬워진다고 주장한다. Stateless Component는 단순히 함수이기 때문에 'bind' 를 할 필요가 없기 때문이다. 필자는 Stateless Component는 props를 통해서 상태와 메소드를 전달받는 Dumb Component에서 자주 사용되기 때문에 'this' 키워드의 의미가 없다고 생각한다. Stateless Component를 사용한다면 개발자가 'this' 키워드로 인해서 혼란을 겪을일이 없을것이다.

### Enforced Best Practice
Stateless Functional Component는 Dumb/Presentational Component의 구현에 유용하다. Presentational Component는 동작에 비해서 정적인 UI에 중점이 맞춰져있기 때문에 동적인 변경을 유도하는 state 사용을 피하는 것이 중요하다. 대신에 state는 상위 레밸(higher-level)의 Component나 Flux/Redux/etc를 통해서 관리되어야만한다. Stateless Component는 state나 Component 생명주기를 지원하지 않는다. 이 점은 성능상에서 이점을 가져다준다.

### High Signal-to-Noise Ratio
앞서봤듯이 Stateless Functional Component는 적은 타이핑 수를 필요로한다. 이는 실제 개발자가 능률적으로 일할 수 있도록 많은 도움을 준다. 단순히 MarkUp을 반환하는 함수이기 때문이다.

### Code Completion/Intellisense
Stateless Functional Component를 적용하다보면 props로 이루어진 구조들을 무너뜨리면서 점점 명확하고 단순한 함수의 인자로 변한 것을 확인할 수 있다. 이렇게 개선된 코드는 Class 기반의 코드를 작성했을때보다 더 나은 코드 완성도 및 인텔리센스를 향상시켜준다.

<s>다음의 내용들은 모두 양질의 코드 및 쉽고 명확하다는 얘기를 다루니 생략한다.</s>

### Performance
원문의 필자는 Stateless Functional Component가 성능면에서 더 우수하다고 말하지만 사실 그렇지만은 않다. 대부분 Stateless Functional Component가 자체적인 state가 없고, 메소드가 없어서 훨씬 더 나은 성능을 기대하지만 Stateless Functional Component도 결국엔 클래스 기반의 컴포넌트로 래핑(Wrapping)되기 때문이다. 간혹 Stateless Functional Component가 더 낮은 성능을 보이기도 한다고 한다. 이 부분은 필자도 상당히 궁금하기 때문에 직접 성능 테스트를 진행해보고 결과에 대해서 글을 올리도록 하겠다. 원문대로 비교적 짧아진 코드의 양이 더 적은 양을 번들링한다는 점에서 더 나은 성능을 보여줄 수는 있을 수 있다.

## 결론
이렇듯 Stateless Functional Component는 주로 Dumb/Presentaitional Component에서 사용되며 코드를 간결하고 명확하게 만드는데 큰 도움을 준다는 것을 알 수 있다. 앞으로 코드를 작성할때는 잘 활용해보도록 하자.