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

## Math.ceil
ceil은 입력받은 숫자값 이상의 정수 중 가장 작은 수를 나타내주는 함수다.
<pre>
console.log(Math.ceil(3.4));
//4
console.log(Math.ceil(-1.3));
//-1</pre>

## Math.floor
floor은 입력받은 숫자값 이하의 정수 중 가장 큰 수를 나타내주는 함수다. 이는 수학에서 가우스 기호( [ ] )로 씌우는 것과 같은 원리이다.
<pre>
console.log(Math.floor(3.4));
//3
console.log(Math.floor(-1.3));
//-2</pre>

