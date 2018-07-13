arguments
===

arugments는 모든 함수내에서 사용가능한 지역변수이다. arguments객체를 사용해서 함수의 인수를 불러오는 것이 가능하다.

```
function func(x, y) {
  console.log(arguments[0]);
  console.log(arguments[1]);
}

func(1, 3);   //1 3
```
하지만 arguments는 Array객체가 아니다. 이를 알수있는것이 Array객체에서 동작하는 prototype 메소드들이 없고 오직 length만 같기 때문이다.
Array와 같이 사용하려면 Array.prototype.from을 사용해야한다.

```
function func(x, y) {
  Array.from(arguments).forEach(ele => {
    console.log(ele);
  }); 
}

func(1, 3);   //1 3
```