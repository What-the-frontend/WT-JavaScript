# Hoisting
Hoist: 끌어올리다

단어 뜻 그대로 변수 선언이 끌어올려지는 현상을 의미한다. JavaScript의 구동 엔진은 항상 선언문 다음에 할당문을 해석한다. 예제로 보자
```javascript
function foo() {
  console.log(bar);   //undefined
  var bar = 'hello';
  console.log(bar);   //bar
}
foo();
```
원래 같다면 다음과 같은 에러가 나와야한다.
```
Uncaught ReferenceError: bar is not defined
```
하지만 저 코드는 `undefined` 즉, 변수에 값이 할당되지 않았을때 나오는 값이 나온다. 이유는 엔진이 다음과 같이 해석을 거치기 때문이다.
```javascript
function foo() {
  var bar;
  console.log(bar);
  bar = 'hello';
  console.log(bar);
}
```
코드에서 볼 수 있듯이 변수의 선언이 다음과 같이 올라가게 된다. 이렇듯 블록 최상단으로 선언이 올라가는 현상을 호이스팅 현상이라고 말한다.

호이스팅을 방지하는 방법은 ES6의 `let` 을 사용하는 방법이 있다. `let` 은 호이스팅이 적용되지 않는다.
```javascript
function foo() {
  console.log(bar);   //Uncaught ReferenceError: bar is not defined
  let bar = 'hello';
  console.log(bar);   //hello
}
```