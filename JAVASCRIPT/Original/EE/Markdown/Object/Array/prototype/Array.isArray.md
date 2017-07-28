# Array.isArray(obj)
매개변수로 받은 obj(객체)가 배열인지 아닌지를 판별한다. 배열이라면 true를 return하고 배열이 아니라면 false를 return한다.
<pre>
var arr = ['A', 'B'];
var arrLike = "abc";

console.log(Array.isArray(arr), Array.isArray(arrLike));
//true false</pre>