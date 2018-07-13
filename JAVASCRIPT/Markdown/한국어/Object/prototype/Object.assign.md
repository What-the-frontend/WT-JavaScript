# Object.assign()
assign은 한 객체에 다른 객체를 복사해서 넣을 때 사용하는 함수이다. 같은 style을 여러 곳에서 적용시켜야할 때 주로 사용한다.

<pre>
let obj = Object.assign({}, {
    key: "value"
});
console.log(obj);
//{key: "value"}</pre>