# Function.prototype.apply

call과의 차이: call은 함수에 전달될 여러 개의 인자를 받는 반면에 apply는 하나의 배열만을 받는다.

apply는 쉽게 말하면 다른 객체의 함수를 가져다 사용하는 것이다. 여기서 자바스크립트에서의 함수는 객체이므로 함수자체를 생성자로서 가져오는 것도 가능하다.

Example
```
let obj = {
    member: "test",
    func: function(){
        console.log(this.member);
    }
}

let obj2 = {
    member: "test2"
}

obj.func()              //test
obj.func.apply(obj2)     //test2
```

Constructor Example
```
function Person(name, age){
    this.name = name;
    this.age = age;
}

function Someone(name, age){
    Person.apply(this, [name, age]);
}

let man = new Someone("tester", 19);

// man = {
//      name: 'tester',
//      age: 19
// }
```