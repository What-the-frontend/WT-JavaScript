함수
===

자바스크립트의 함수는 일급 객체이다. 이는 함수가 변수에 담길 수 있고 런타임에 실행가능하고 매개변수로 전달가능하고 반환값으로 사용될 수 있다는 것을 의미한다.

## 함수의 선언 방법

함수의 선언 방법 또한 객체를 생성할 때와 같이 다양한 방법이 있다.

- function을 이용해서 바로 선언
<pre>
function func(){
    return "success";
}
console.log(func());
//success</pre>

- 함수 표현식
<pre>
var func = function(){
    return "sucess";
}
console.log(func());
//sucess</pre>

- 함수 생성자 이용
<pre>
var func = new Function("return hello;");
console.log(func())</pre>

생성자를 알아보자. 자바스크립트는 함수를 이용해서 생성자를 만들고 객체를 만들어 낼 수 있다.
<pre>
var cons = function(key, value){
    this.key = key;
    this.value = value;
}</pre>

## 클로저(Closure)

클로저는 함수안에 함수가 들어갈 수 있다는 개념이다. 이 때 함수는 일급 객체이기 때문에 외부 함수가 내부 함수를 가져다가 사용하는 것이 가능하고 내부 함수내에 변수를 사용할 수 있다.
<pre>
function outside(x){
    function inside(y){
        return x + y;
    }
    return inside;
}
var makeFunc = outside(5);
console.log(makeFunc(3));
// 8</pre>
Closure는 위의 예제코드에서 inside함수를 의미한다. 원래 다른 언어 같았으면 함수 내에 선언된 지역변수나 인자는 한 번 실행되면 재사용이 불가능하게 된다. 하지만 클로저는 다르다. 위의 예제 코드를 보면 ouside함수의 인수인 x가 멀쩡하게 있는 것을 알 수 있다. 이는 makeFunc안에 outside함수에 인자가 5로 들어간 상태로 참조되었기 때문이다. makeFunc는 선언 당시에 그 문법적 환경에 대한 참조를 유지하기 때문에 값이 사라지지 않는 것이다.

실질적으로 이 클로저를 사용할 때는 메소드가 하나 있는 객체를 선언할 때 사용한다. 예를 들어서 html내에 text요소의 font-size를 변경하는 함수가 있다. 이는 클로저를 이용하면 다양한 곳에서 사용이 가능해진다.

<pre>
function setSize(size){
    return function(){
        docment.body.style.fontSize = size + 'px';
    }
}

var size10 = setSize(10);
var size15 = setSize(15);</pre>

위와 같이 선언하고 size10과 size15를 특정 이벤트에 넣어주기만하면 폰트 사이즈가 적용이 되는 것이다.

## 함수 호이스팅
기존의 자바나 C와 같은 언어들은 절차적으로 실행이 되기 때문에 다음과 같은 것이 불가능하다.
<pre>
printf("%d", a);
int a = 5;</pre>
이와 같은 코드는 a변수를 찾을 수 없다는 오류를 낼 것이다. 하지만 자바스크립트는 호이스팅이라는 개념 덕분에 저것이 가능하다. 호이스팅은 스코프의 상단으로 변수와 함수가 자동으로 끌어당겨지는 동작을 말한다. 예제를 보자.
<pre>
console.log(a);
var a = 1;

//암시적으로
//var a = 1;
//console.log(a);
//와 같이 표현된다.
//1</pre>
코드를 보면 a가 호이스팅에 의해서 위로 암시적으로 선언이 되고 출력이 정상적으로 된다는 것을 알 수 있다.

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

### 위험 사항
- 이름 충돌
<pre>
function </pre>


## Function.prototype
- bind(this Arg[, arg1[, arg2[, ...]]]])

## Arrow Function
Java에서의 람다식과 비슷하게 생긴 익명 함수를 축약시킬 수 있는 방법중 하나다. 

<pre>
var name = () => {
    return "test";
}
console.log(name)
//test</pre>

예제에서 보이듯이 (매개변수) => {함수 구현부} 이렇게 나뉜다.


