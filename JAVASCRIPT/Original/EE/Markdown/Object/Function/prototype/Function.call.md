Function.prototype.call()
===
call메소드는 주어진 this값 및 각자에게 제공된 인수를 갖는 함수를 호출한다. 한마디로 call메소드는 다른 함수의 생성자를 상속받는다고 보면된다.
```
function Person(name, age){
    this.name = name;
    this.age = age;
}

function geni(name, age){
    Person.call(name, age);
    this.language = 'javascript';
}

let man = new geni('foo', 19);
man.hasOwnProperty('name')   //true
man.hasOwnProperty('age')   //true
```