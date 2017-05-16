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

## Array.forEach(item, index, array)
Array의 prototype 메소드 중 하나인 forEach( )는 다른 언어에 있는 for-each 문과 같이 배열의 첫 인덱스부터 마지막 인덱스까지 모두 불러오면서 item, index를 return한다.
<pre>
var arr = ['A', 'B', 'C'];
Array.forEach(alphabet, index, arr){
    console.log(alphabet, index);
    // A 0
    // B 1
    // C 2
}</pre>

## Array.isArray(obj)

## Array.from(arrayLike[, mapFn[, thisArg]])

## Array.of(element0[, element1[, ...[, elementN]]])



