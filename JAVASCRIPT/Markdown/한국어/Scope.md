# Scope
JavaScript의 유효범위는 전역과 지역으로 나눌 수 있다. 전역변수는 말그대로 코드의 최상단에서 선언되는 변수이다. 모든 영역에서 접근이 가능하다.

지역변수는 블록내에 변수를 선언하는 경우를 말한다. JavaScript의 블록은 함수를 기준으로 지정된다. 즉 함수내에서 선언된 변수를 지역변수라고 말한다.

그럼 예제를 통해서 알아보자
```javascript
var x = 'global';   // (1)
function foo() {
  var x = 'local';  // (2)
  console.log(x);   // local
}
foo();
console.log(x);     // global
```
주석으로 (1)으로 표시한 변수 x는 전역변수이고 `foo()` 함수내에 (2)으로 표시한 변수 x는 지역변수이다. 맨마지막줄에서 알 수 있듯이, (2)은 함수내에서만 유효한 변수이다. 반면에 (1)은 전역에 존재하기 때문에 모든 하위영역에서 접근이 가능한 변수이다.

(2)의 선언이 가능했던 이유는 동일한 이름의 변수가 선언될 경우에 블록내에 존재하는 변수가 우선순위를 갖기 때문이다.

## lexical scoping
lexical scoping은 함수가 선언될때 스코프가 결정되는것을 의미한다. JavaScript는 함수가 선언되면서 가장 가까운 스코프의 변수들을 참조한다. 다음의 코드를 보자.
```javascript
var language = 'English';
function getLanguage() {
  console.log(language);
}

function foo() {
  var language = 'Korean';
  getLanguage();
}
foo();
```
`foo()` 함수가 실행됐을때, 과연 `getLanguage()` 는 English와 Korean 중에 어떤걸 출력할까? 바로 전역에 선언된 English다. 왜일까? 위에서 말했듯이 함수는 선언되면서 가장 가까운 스코프의 변수들을 참조한다. `getLanguage()` 가 선언되면서 가장 가까운 범위에 있는 변수는 바로 전역의 `var language = 'English';` 이다. `foo()` 내부에서 선언한 `language` 는 지역변수이기 때문에 `getLanguage()` 시에 영향을 미치지 못한것이다. 이를 우리는 lexical scoping이라고 부른다.

만약 Korean을 출력하고자 한다면 `language` 를 매개변수로서 전달해야한다.