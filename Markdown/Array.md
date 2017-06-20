배열
===
## 1. 선언방법  
배열의 선언 방법에는 배열 객체(Array)를 이용해서 선언하는 방법, 배열 리터럴을 이용해서 선언하는 방법이 있다.
<pre>
var array = new Array();  //배열 객체를 이용한 선언 방법
var array1 = [];  //배열 리터럴을 이용한 선언 방법</pre>

## 2. 값 대입
배열에는 어떤 타입이더라도 값을 대입하는 것이 가능하다. 인덱스를 지정한 다음에 값을 대입한다.
<pre>
array[0] = 1;
console.log(array[0]);  //1</pre>
이 때 배열 또한 객체이기 때문에 프로퍼티를 추가해주는 것이 가능하다.
<pre>
array1.property = 'hello';
console.log(array1.property); //hello</pre>

## 3. 배열의 길이
배열의 길이는 length 프로퍼티를 활용해서 사용자가 지정해줄 수 있다.
<pre>
array.length = 5;</pre>
이 때 크기는 늘리고 인덱스 값은 지정해주지 않으면 undefined 값이 지정된다.

## 4. push(), pop(), splice()
push()와 pop()메서드는 배열 객체의 표준 메서드로 배열에 값을 추가하고 빼는 것이 가능하다.
<pre>
var array = new Array(3);
array.push('data');
console.log(array[3]);  //data</pre>
push는 array[array.length]에 ()안의 값을 넣어준다. (length 값은 가장 큰 인덱스의 +1한 값이기 때문이다.)
<pre>
array.pop(4);
console.log(array[3]);  //undefined</pre>
pop은 array[array.length] 의 값을 빼고 undefined로 재정의한다. 인덱스가 사라지지는 않는다.
<pre>
console.log(array.length) //3
array.splice(2, 1);
console.log(array.length) //2</pre>
splice는 pop과 달리 인덱스를 삭제한다. 배열의 길이가 줄어드는 것을 보면 알 수 있다. splice(start, deleteCount, item...)

# Array.prototype Methods.

## Array.forEach(callback[, thisArg])
callback함수는 currentValue, index, array를 인자로 받는다. forEach함수는 Array의 정보를 가져와서 index만큼 실행되면서 callback함수를 실행시킨다.
<pre>
var arr = ['A', 'B'];
arr.forEach(function(element, index, array){
    console.log(element, index, array);
})
//'A', 0, ['A', 'B']    
//'B', 1, ['A', 'B']</pre>

## Array.isArray(obj)
매개변수로 받은 obj(객체)가 배열인지 아닌지를 판별한다. 배열이라면 true를 return하고 배열이 아니라면 false를 return한다.
<pre>
var arr = ['A', 'B'];
var arrLike = "abc";

console.log(Array.isArray(arr), Array.isArray(arrLike));
//true false</pre>

## Array.from(arrayLike[, mapFn[, thisArg]])
arrayLike객체를 Array로 바꿔주는 함수이다. 예를 들어서 단순 문자열은 Array.prototype을 상속받지 못했기 때문에 Array의 함수들을 사용하지 못한다. 이럴 때 이 함수를 사용하면 Array로 변경되기 때문에 모든 함수가 사용가능해진다.
<pre>
var arrLike = 'ABCD';
var arr = Array.from(arrLike);
console.log(arr.forEach(alphabet, index, arr))
</pre>

## Array.of(element0[, element1[, ...[, elementN]]])
간단히 말해서 배열을 생성해주는 함수이다. 전달받은 인자값들로 구성된 배열을 return한다.
<pre>
var arr;
arr = Array.of('A', 'B', 'C');
console.log(arr);
//['A', 'B', 'C']</pre>

## Array.concat(array)
둘 이상의 배열을 병합하기 위한 메소드이다. 기존의 배열을 수정하지 않고 새로운 배열을 반환한다.
<pre>
var arr1 = ['A', 'B'];
var arr2 = ['C', 'D'];
var arr3 = arr1.concat(arr2);
console.log(arr3);
//['A', 'B', 'C', 'D']</pre>

## Array.copyWithin()

## Array.map(callback)
map은 배열의 요소 하나하나에 callback함수를 통해서 접근할 수 있도록 해주는 메소드이다. 예를 들어서 var numbers = [1, 4, 9] 라는 배열이 있고 이 안에 요소들을 전부다 2씩 곱해주고 싶을 때 사용한다.
<pre>
var numbers = [1, 4, 9];
numbers = numbers.map(function(element){
    return element * 2;
});
console.log(numbers);
//numbers = [2, 8, 18]; </pre>

## Array.filter()

filter함수는 배열내의 요소들을 기준에 맞춰서 걸러낸 다음에 통과된 값들을 가지고 있는 배열을 반환해준다. 예를 들어서 설명하자면 [10, 40, 20, 25] 라는 배열이 있다고 하고 저 요소들중에서 20이상의 값들로만 포함된 배열을 만들고 싶어진 것이다. 그럴 때 이 함수가 사용되고 예제를 보자. 
<pre>
var arr = [ 10, 40, 20, 35 ];
var arr2 = arr.filter((element, index, array) => {
    return element >= 20;
});
console.log(arr2);
//[ 40, 20, 35 ]</pre>
위의 예제 코드에서 처럼 filter함수의 매개변수로는 콜백함수가 들어간다. 콜백함수의 내용은 element를 판별할 조건에 맞게 true, false로 변환해주는 코드가 들어간다. 그리고 filter의 반환 값은 true를 반환한 요소들을 가진 배열이다.


