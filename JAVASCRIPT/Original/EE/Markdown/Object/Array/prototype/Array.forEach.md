# Array.forEach(callback[, thisArg])
callback함수는 currentValue, index, array를 인자로 받는다. forEach함수는 Array의 정보를 가져와서 index만큼 실행되면서 callback함수를 실행시킨다.
<pre>
var arr = ['A', 'B'];
arr.forEach(function(element, index, array){
    console.log(element, index, array);
})
//'A', 0, ['A', 'B']    
//'B', 1, ['A', 'B']</pre>

필자는 주로 class요소들을 불러와서 모두 건들이는 작업을 할때에 사용한다.