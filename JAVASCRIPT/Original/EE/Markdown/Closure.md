클로저(Closure)
===
클로저는 함수 객체와 함수의 변수가 해석되는 유효범위를 의미한다. JavaScript에선 기술적으로 모든 함수가 클로저에 해당된다. 클로저가 어떤것을 의미하는지 코드를 통해서 알아보자.

```javascript
let scope = 'global';
function foo() {
  let scope = 'local';
  function bar() {
    return scope;
  }

  return bar();
}

foo();    // local
```
위의 코드에서 `foo()` 함수가 'local' 을 반환한다는것을 파악하기 쉽다.

```javascript
let scope = 'global';
function foo() {
  let scope = 'local';
  function bar() {
    return scope;
  }

  return bar;
}

foo()();    // local
```
위의 코드는 이해하기 쉬운가? `foo()()` 는 `foo()` 시에 반환받은 `bar()` 함수를 실행시킨다는 의미인데, 이때 `bar()` 는 'local' 을 반환한다. 우리는 JavaScript의 유효범위 체이닝을 통해서 이를 설명할 수 있다. 유효범위 체이닝은 함수 정의시에 발생하게 되는데, 이 체이닝을 객체의 프로퍼티로 생각하면 3가지 경우가 있다.

- 최상위 JavaScript 코드(전역객체)
- 중첩되지 않는 함수를 전역에 선언했을때(전역객체, 멤버)
- 중첩되는 함수를 전역에 선언했을때(전역객체, 멤버, 중첩된 함수의 멤버 ...)

()안에 있는것이 체이닝을 하는 대상이다. 이중에 3번째의 경우가 위의 코드의 경우다. `foo()` 함수 내부에 `bar()` 라는 함수가 중첩된 형태를 갖기 때문이다.

위의 코드에서 `bar()` 가 반환되는 이유는 유효범위 체이닝을 생각해보면 쉽다. 우선 `foo()` 는 전역객체와 자신의 멤버, 그리고 `bar()` 의 멤버를 체이닝을 통해서 유효범위로 지정한다. `bar()` 는 자신을 감싸고있는 `foo()` 를 유효범위로 지정한다.

JavaScript는 lexical scope를 갖기 때문에 함수의 호출이 아닌 함수의 정의시에 유효범위 체이닝을 위와같이 지정한다. 그렇다면 `bar()` 에 바인딩된 변수는 무엇인가? 바로 `foo()` 의 `scope` 인 'local' 이다. `bar()` 는 어디서 호출되어도 'local' 을 반환하게된다. 따라서 위의 코드도 전역에서 호출됐지만 'local' 을 반환하는것이다.

하나의 Counter 프로그램으로 예제를 만들면서 이해해보도록 하겠다.
```javascript
function counter() {
  let count = 0;

  function increase() {
    return count++;
  }

  return increase;
}

let c = counter();
console.log(c());   // 0
console.log(c());   // 1
```
위의 코드는 `c()` 를 호출할때마다 `count` 변수가 증가된 결과를 `return` 한다. 어떻게 count 값을 계속 증가시킬 수 있는걸까?

그래서 필자가 나름의 정의를 내려보았다. 필자는 유효범위 체이닝이 위와 같은 코드를 작성할 수 있게하는 가장 중요한 개념이라고 말했다. 그렇다면 각각 함수의 유효범위 체이닝 결과를 객체로서 표현해보도록 하겠다.
```
counter
{
  global(전역 객체),
  local(지역 멤버: count),
  inner function local(중첩 함수의 멤버)
}

increase
{
  parents function member(x),
  local
}
```
앞서말했듯이 함수의 유효범위는 정의되는 시점에 지정된다. 따라서 위와같이 표현될 수 있는것이다. `increase()` 가 부모의 멤버변수인 `x` 를 바인딩하게되는것이다. 따라서 `counter()` 를 담은 `c()` 를 호출할때마다 `increase()` 에 바인딩된 `x` 값이 지속적으로 증가하면서 저런 값을 반환하게된다.




