# Array.map(callback)
map은 배열의 요소 하나하나에 callback함수를 통해서 접근할 수 있도록 해주는 메소드이다. 예를 들어서 var numbers = [1, 4, 9] 라는 배열이 있고 이 안에 요소들을 전부다 2씩 곱해주고 싶을 때 사용한다.
<pre>
var numbers = [1, 4, 9];
numbers = numbers.map(function(element){
    return element * 2;
});
console.log(numbers);
//numbers = [2, 8, 18]; </pre>