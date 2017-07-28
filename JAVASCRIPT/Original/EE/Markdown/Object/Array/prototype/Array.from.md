# Array.from(arrayLike[, mapFn[, thisArg]])
arrayLike객체를 Array로 바꿔주는 함수이다. 예를 들어서 단순 문자열은 Array.prototype을 상속받지 못했기 때문에 Array의 함수들을 사용하지 못한다. 이럴 때 이 함수를 사용하면 Array로 변경되기 때문에 모든 함수가 사용가능해진다.
<pre>
var arrLike = 'ABCD';
var arr = Array.from(arrLike);
console.log(arr.forEach(alphabet, index, arr))</pre>

필자는 document.getElementsByClassName을 했을시에 forEach를 사용하기 위해서 자주 애용했다. 이는 같은 classname을 가진 모든 element들을 불러오지만 arrayLike이기 때문에 forEach사용이 불가능하기 때문이다.
<pre>
var elements = document.getElementsByClassName('classname');
Array.from(elements).forEach(function(element, index, arr){
    //Repetitive code here.
})</pre>
위의 예제는 ES6부터 도입된 Arrow function을 사용하면 좀더 가독성을 높일 수 있다.
<pre>
var elements = document.getElementsByClassName('classname');
//() => {} (Arrow function)
Array.from(elements).forEach((element, index, arr) => {
    //Repetitive code here.
})</pre>