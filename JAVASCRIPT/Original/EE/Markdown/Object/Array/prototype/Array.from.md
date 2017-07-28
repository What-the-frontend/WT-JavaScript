# Array.from(arrayLike[, mapFn[, thisArg]])
arrayLike객체를 Array로 바꿔주는 함수이다. 예를 들어서 단순 문자열은 Array.prototype을 상속받지 못했기 때문에 Array의 함수들을 사용하지 못한다. 이럴 때 이 함수를 사용하면 Array로 변경되기 때문에 모든 함수가 사용가능해진다.
<pre>
var arrLike = 'ABCD';
var arr = Array.from(arrLike);
console.log(arr.forEach(alphabet, index, arr))</pre>