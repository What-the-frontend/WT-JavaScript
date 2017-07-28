# Array.filter()

filter함수는 배열내의 요소들을 기준에 맞춰서 걸러낸 다음에 통과된 값들을 가지고 있는 배열을 반환해준다. 예를 들어서 설명하자면 [10, 40, 20, 25] 라는 배열이 있다고 하고 저 요소들중에서 20이상의 값들로만 포함된 배열을 만들고 싶어진 것이다. 그럴 때 이 함수가 사용되고 예제를 보자. 
<pre>
var arr = [ 10, 40, 20, 35 ];
var arr2 = arr.filter((element, index, array) => {
    return element >= 20;
});
console.log(arr2);
//[ 40, 20, 35 ]</pre>
위의 예제 코드에서 처럼 filter함수의 매개변수로는 콜백함수가 들어간다. 콜백함수의 내용은 element를 판별할 조건에 맞게 true, false로 변환해주는 코드가 들어간다. 그리고 filter의 반환 값은 true를 반환한 요소들을 가진 배열이다.