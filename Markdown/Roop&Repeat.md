루프와 반복
===

다른 언어에서의 반복문과 큰 차이점은 없다. for문과 while문이 존재하고 더 세부적으로 나아가서 다양한 루프와 반복문이 존재한다.

## for문
- for
<pre>
for([initialExpression];[condition];[incrementExpression]){
    statement
}</pre>

for문 안에 들어가는 식엔 3가지가 있다. 초기식, 조건식, 증감식. 작동방식은 초기식의 변수를 바탕으로 하여 증감식에 따라서 증가하거나 감소하는데 조건식에 만족할 때에 동작한다.

<pre>
var count;
for(var i = 0; i < 2; i++){
    count++;
}
console.log(count);
//2</pre>
- for ~ in
- for ~ of

## 재귀 함수
