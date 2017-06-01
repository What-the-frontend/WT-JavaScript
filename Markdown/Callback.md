콜백 함수 (Higher-order function)
=======
일급 객체라함은 다음 4가지 조건을 충족해야한다.

일급 객체의 조건
1. 변수에 담겨야한다.
2. 파라미터(매개변수)로 전달할 수 있다.
3. 런타임에 실행될 수 있다.
4. 반환값으로 사용될 수 있다.

콜백 함수는 자바스크립트의 함수가 일급 객체이기 때문에 가능한 개념이다. 주로 함수내에서 파라미터로 함수를 전달할 때 그 함수를 콜백 함수라고 한다. 항상 대기하고 있다가 이벤트가 발생하면 처리되는 것이다.

<pre>
Array.forEach(function(element, index, arr){
    console.log(element, index, arr);
})</pre>
예제 내에서 forEach안의 함수가 callback함수이다.
