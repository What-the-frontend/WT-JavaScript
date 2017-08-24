bind
===
bind메소드는 함수를 새로 생성할 때 부모객체내의 this값들을 갖고 오면서 만들기 위해서 사용한다. 주로 스코프를 생각하지 못하고 코드를 작성할 때 생길 수 있는 문제를 해결해준다. 예를 들어서 문제상황을 보자.
```
this.x = 10;

let foo(){
    x: 20;
    getX: function(){
        return this.x;
    }
}

let Foo = foo.getX();
console.log(Foo)    //10
```
여기서 Foo가 20이 아닌 10을 출력하는 이유는 전역객체에 선언되어있는 this.x = 10;에 영향을 받았기 때문이다. 따라서 부모객체인 foo의 20값을 온전케 가져오고 싶다면 코드를 이렇게 작성해야한다.
```
let FooBar = Foo.bind(foo);
console.log(FooBar) //20
```
이 코드는 foo객체를 함수가 바인드 받았기 때문에 foo객체 내의 this.x값인 20이 정상 출력되는 것이다.