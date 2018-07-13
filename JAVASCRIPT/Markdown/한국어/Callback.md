콜백 함수 (Higher-order function)
=======
일급 객체라함은 다음 4가지 조건을 충족해야한다.

일급 객체의 조건
1. 변수에 담겨야한다.
2. 파라미터(매개변수)로 전달할 수 있다.
3. 런타임에 실행될 수 있다.
4. 반환값으로 사용될 수 있다.

콜백 함수는 자바스크립트의 함수가 일급 객체이기 때문에 가능한 개념이다. 주로 함수내에서 파라미터로 함수를 전달할 때 그 함수를 콜백 함수라고 한다. 항상 대기하고 있다가 이벤트가 발생하면 처리되는 것이다.

주로 비동기 처리를 할때 사용되는 개념이다. JavaScript는 비동기로 처리되기 때문에 다음과 같은 상황에서 콜백이 사용될 수 있다.

```javascript
console.log('hello');
setTimeout(function() {
  console.log('bye');
}, 3000);
console.log('hello again');
```
원래는 다음과 같은 순서의 실행결과를 기대하지만,
1. hello
2. 3초를 기다린다.
3. bye
4. hello again

위의 코드는 이런 실행결과를 반환한다.
1. hello
2. hello again
3. 3초를 기다린다.
4. bye

JavaScript가 `setTimeout()` 에서 3초를 기다리는 행위를 기다려주지 않고 바로 밑에줄의 `console.log('hello again')` 을 실행하기 때문이다. 이를 콜백함수를 통해서 우리가 원하는 결과를 얻을 수 있도록 할 수 있다.

```javascript
console.log('hello');
sayGoodBye(function() {
  console.log('hello again');
});

function sayGoodBye(callback) {
  setTimeout(function(){
    console.log('bye');
    callback();
  }, 3000);
}
```
위의 코드는 `sayGoodBye()` 함수에 콜백으로 함수를 전달하는 형식으로 3초가 지난뒤에 원하는 이벤트를 발생시키도록한다. 이런식으로 콜백은 전달하는 함수의 특정시점에서 발생시킬 수 있다.

또한 콜백을 많이 사용하다보면, 흔히들 말하는 흡사 " 〉 " 모양의 콜백 지옥이 발생한다. 계속해서 다음 처리를 진행하다보면 흔하게 발생한다. 이를 해결하기위한 방법에는 2가지 정도가 있다.
- [Promise]()
- [async/await]()

(이 두 방법에 대해서는 각각의 마크다운에서 다루도록 하겠다.)