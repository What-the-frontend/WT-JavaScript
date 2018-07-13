JavaScript Function Scope
===
자바스크립트의 함수 스코프는 지역 스코프(Local Scope), 전역 스코프(Global Scope)로 나뉜다.
지역 스코프는 함수 내의 멤버를 의미한다. 전역 객체에 같은 이름의 멤버값이 있더라도 함수 내의 멤버값은 독립적인 값을 갖는다.

```
var Variable = "Hello World";
//Variable in GlobalScope

function scopeTest(){
    var Variable = "hello world";
    //Variable in LocalScope

    console.log(Variable);
    // = 'hello world'
}
console.log(Variable);
// = 'Hello World'
```
위의 예제와 같이 전역변수와 지역변수는 서로 값을 공유하지 않고 각각 독립적인 값을 갖게됨을 알 수 있다.

전역 스코프는 선언하면 말그대로 작업하고있는 전역객체의 모든 곳에서 사용가능하다.
