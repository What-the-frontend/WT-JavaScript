# Array.forEach(callback[, thisArg])
callback함수는 currentValue, index, array를 인자로 받는다. forEach함수는 Array의 정보를 가져와서 index만큼 실행되면서 callback함수를 실행시킨다.
<pre>
var arr = ['A', 'B'];
arr.forEach(function(element, index, array){
    console.log(element, index, array);
})
//'A', 0, ['A', 'B']    
//'B', 1, ['A', 'B']</pre>