Class
===

class는 ECMA2015(ES6)부터 추가된 문법입니다. 기존에 함수를 사용해서 객체를 생성하고 prototype을 통해서 그 객체에 메소드를 생성하는 과정을 보다 명시적으로 표현하기 위해서 생겨난 것입니다. 새로운 객체지향 문법이 생겨난 것이 아니라 기존의 과정을 보다 명시적으로 수행하기 위해서 생겨난 것이죠.

class를 사용하는 방법은 간단합니다. 우선 선언형입니다. class키워드 뒤에 클래스명을 명시해주는 방식으로 기존 함수 선언형 선언방식과 같이 선언이 가능합니다.
```javascript
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
}
```
코드를 보면 `constructor()` 라는 메소드가 있습니다. `constructor()` 는 이 class의 생성자로 class내에 한번만 선언할 수 있으며 이 클래스가 인스턴스화 될때 호출되는 메소드입니다. 위의 코드같은 경우엔 Animal클래스를 생성하는 동시에 다리 수(legs)를 객체에 저장할 수 있도록 코드를 작성한 것입니다.

위에서도 말했듯이 class는 함수를 통해서 객체를 생성하던 것을 명시적으로 바꾼 것이기 때문에 function을 통해서 위의 코드를 구현하는 것이 가능합니다.
```javascript
function Animal(legs) {
  this.legs = legs;
}
```
이 코드는 위의 class를 사용한 방법과 똑같이 작동합니다.

<b>호이스팅(Hoisting)</b>

class는 function과는 달리 호이스팅이 발생하지 않습니다. 따라서 다음과 같은 코드는 Reference error를 발생시킵니다.
```javascript
var anim = new Animal(2);  //Reference error

class Animal() {}
```

class는 다음과 같이 표현식으로도 선언이 가능합니다.
```javascript
//익명 표현식
var Animal = class {

}

//기명 표현식
var Animal = class Dog {

}
```
표현식에는 함수와 같이 익명 표현식, 기명 표현식 이렇게 두 가지 표현 방법을 가집니다. 익명 표현식을 쓰는 것이 가장 보편적이고 기명 표현식은 local영역에서 기명한 이름대로 사용하고 싶을때 사용합니다. 위 코드에서 보면 Dog라는 이름은 해당 class블록내에서만 사용가능한 것입니다.

<b>Class method</b>

class블록내에서 메소드들을 생성하는 방법은 함수를 정의하는 방법과 유사합니다.
```javascript
class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  speak() {
    console.log("I have " + this.legs + " legs");
  }
}

var anim = new Animal(2);
anim.speak();  //"I have 2 legs"
```
위 코드는 Animal이라는 클래스에 `speak()`이라는 메소드를 생성한 코드입니다. 메소드는 정적(static)으로도 선언이 가능합니다. 정적 메소드는 클래스를 인스턴스화하지 않고도 호출이 가능하고 클래스의 인스턴스에선 호출이 불가능합니다.
```javascript
class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  speak() {
    console.log("I have " + this.legs + " legs");
  }

  static bark() {
    console.log("bark!");
  }
}

var anim = new Animal(2);
anim.bark();  //Error: anim.bark() is not a function.
Animal.bark();  //"bark!"
```

상속(inheritance)
class는 다른 class를 상속(extends)받는 것이 가능합니다. 다른 자식 클래스를 생성할 때 주로 사용됩니다.
```javascript
class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  speak() {
    console.log("I have " + this.legs + " legs");
  }

  static bark() {
    console.log("bark!");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog have " + this.legs + " legs");
  }
}

var anim = new Animal(2);
var dog = new Dog(4);
anim.speak();  //"I have 2 legs"
dog.speak();  //"I have 4 legs"
```
`class` Dog은 `class` Animal를 상속받아 `speak()`메소드의 내용을 수정해서 사용하는 예제입니다. 상속은 `constructor()`가 없는 `non-constructible` 클래스로는 할 수 없습니다.