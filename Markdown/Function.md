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