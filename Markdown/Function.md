함수
===

자바스크립트의 함수는 일급 객체이다. 이는 함수가 변수에 담길 수 있고 런타임에 실행가능하고 매개변수로 전달가능하고 반환값으로 사용될 수 있다는 것을 의미한다.

## 함수의 선언 방법

함수의 선언 방법 또한 객체를 생성할 때와 같이 다양한 방법이 있다.

- Function 객체를 이용한 방법
<pre>
var func = new Function()</pre>
-내용 추가 필요(공부 더 필요)-

- 변수에 담는 방법
<pre>
var func = function(){
    return "sucess";
}
console.log(func());
//sucess</pre>

## 익명 함수
자바스크립트의 함수는 이름이 기명되지 않아도 사용이 가능하다. 앞서 선언방식 중에 변수에 담는 방법 또한 익명 함수를 사용한 것이다.
<pre>
var func = function(){return 0;}</pre>

- 즉시 실행 함수
  
  앞서 말했던 함수는 호출 시에 실행이 되는 구조였지만 즉시 실행 함수는 웹페이지가 동작하자마자 실행이 되는 함수다. 기존의 function에 괄호를 씌우면 된다.
  <pre>
  (function(){
      console.log("hello");
  })()
  
  (function(){
      console.log("world");
  })()</pre>