Syntax
===

## for...of
ES6 문법으로 반복문 중에서 하나이다. for~in과 부족한 구조를 갖고 있다. 반복적인 객체와 그안의 요소 값을 계속해서 받는다. 결론은 배열이나 Map, Set, String, TypedArray를 인자로 받을 수 있고 이들의 요소를 모두 보여준다.

<pre>
let iterable = [5, 10, 15];

for(let element of iterable){
    console.log(element);
}</pre>