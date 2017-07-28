Math
===

## Math.abs
abs는 입력받은 값의 absolute value, 즉 절대값을 반환하는 함수다.
<pre>
console.log(Math.abs(1.4));
//1
console.log(Math.abs(""));
//0
console.log(Math.abs([]));
//NaN</pre>
예제코드에서 볼 수 있듯이 정수, 실수의 경우에는 절대값이 적용된 숫자값을 반환한다. 하지만 문자열이 들어오는 경우에는 0을 반환하고 배열이 들어오는 경우에는 NaN(Not a Number)을 반환한다.