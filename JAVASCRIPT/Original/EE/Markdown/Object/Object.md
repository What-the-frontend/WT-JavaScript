객체
===
## 1. 객체란,
자바스크립트에서 객체는 단순히 key(이름) : value(값) 형태의 프로퍼티들을 저장하는 컨테이너이다. Hash와 구조가 비슷하다. 기존의 객체지향언어에서의 객체 개념과는 약간 다르다.

## 2. 객체 생성
객체를 생성하는 방법은 객체 리터럴을 사용하는 방법과 기본적으로 제공되는 Object생성자 함수를 사용하는 방법이 있다.  

우선 객체 리터럴을 사용하는 방법부터 보자.
<pre>
var obj = {};</pre>
obj라는 빈 객체가 생성된다.  

Object생성자를 사용하는 방법을 보자.
<pre>
var obj = new Object();</pre>
객체 리터럴을 사용했을 때와 동일하게 빈 객체를 생성해준다.

이 때 내용있는 객체를 생성하고 싶은 경우 'key : value' 형태의 요소를 추가해줄 수 있다. 먼저 객체 리터럴을 이용해서 내용있는 객체를 생성해보자.
<pre>
var obj = {
    name : 'tester',
    age : 17
};</pre>
obj객체내에 name, age 프로퍼티를 객체 리터럴을 이용해서 생성해줬다.  

Object객체를 이용할 때는 이렇게 한다.
<pre>
var obj = new Object();
obj.name = 'tester';
obj.age = 17;</pre>

추후에 생성된 객체안에 동적으로 .과 [ ]를 사용해서 프로퍼티 추가가 가능하다.
<pre>
obj.newProp = 1;
obj['newProp2'] = 'new Property';</pre>

## 3. 객체내에 프로퍼티 읽기/쓰기/갱신
객체를 생성한 뒤에 자바스크립트는 객체내에 프로퍼티 읽기/쓰기/갱신할 수 있는 기능을 제공한다.

우선 객체내에 프로퍼티를 읽을 때에는 프로퍼티를 동적으로 생성해줄 때에 사용했었던 .과 [ ]를 사용한다.
<pre>
var obj = { name : 'test' };
console.log(obj.name);  //test
console.log(obj[name]); //test</pre>