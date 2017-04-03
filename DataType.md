데이터 타입에 대해서
===============
## 1.기본 타입
  * number  
  숫자를 나타낸다. 64비트 부동소수점 방식으로 Java의 double과 유사하다고 보면된다.
  <pre>
  var num = 1;
  console.log(typeof num) //number</pre>

  * string  
  문자열을 나타낸다.  
  <pre>
  var str = 'Hello';
  console.log(typeof str); //string</pre>

  * boolean  
  true와 false, 참과 거짓을 나타낸다.
  <pre>
  var bool = true;
  console.log(typeof bool);  //boolean</pre>

  * undefined  
  값이 정의되지 않았다는 것을 의미한다.
  <pre>
  var undef;
  console.log(typeof undef);  //undefined</pre>

  * null  
  아무 것도 없다는 것을 의미한다. undefined와는 다르다.  
  <pre>
  var Null = null;
  console.log(typeof Null); //object</pre>

## 2.참조 타입  
>하나씩 세부적으로 설명한다.

  * 객체  
    * 배열  
    * 정규 표현식  
    * 함수  
