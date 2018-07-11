비구조화 할당(Destructuring Assignment)
===
destructuring-assignment(이하 DA)는 배열, 객체와 같이 구조화된 요소를 비구조화(해체)해서 반환하는 표현식이다.

예제를 통해서 설명한다.
```javascript
const arr = [1, 2, 3];
const obj = { x: 10, y: 20 };
```
기존의 방법으로 위와같이 초기화된 `arr` 배열과 `obj` 객체에서 값을 가져와서 각각의 변수에 할당하고자 해보겠다.
```javascript
const arr1 = arr[0];
const arr2 = arr[1];
const arr3 = arr[2];
const x = obj.x;
const y = obj.y;
```
이제 DA를 사용해보겠다.
```javascript
const [arr1, arr2, arr3] = arr;
const { x, y } = obj;
```
DA를 사용하면 변수할당 코드가 상당히 간결해지며, 명시적으로 변한다. 이외에도 구조화된 요소를 반환하는 모든 메소드로 사용가능하다.
```javascript
const foo = 'foo';
const [f, o, o] = foo.split('');
```
객체에 값을 할당할때는 `spread-operator` 의 사용 또한 가능하다.
```javascript
const obj = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, ...foo } = obj;
// foo: { c: 3, d: 4 };
```

배열을 다루는 부분은 딱히 실수할 부분이 없지만 객체 할당을 할때는 실수할 수 있는 부분이 있다. 바로 객체의 키값과 같은 이름의 변수명일때만 위와같이 할당이 가능하다는것이다. 그렇지않다면, 다르게 할당된다.

```javascript
const obj = { foo: 1, bar: 2 };
const { foo, bar } = obj;
const { a, b } = obj;   // a, b = undefined;
const { ...spread } = obj   // spread-operator는 문제없다.
```

할당될 값을 미리 초기화하는것도 가능하다. 이 초기화된 값은 들어갈 값이 없는경우에 초기화될 값을 의미한다.
```javascript
const arr = [1, 2];
const [foo, bar, geni=429] = arr;   // geni = 429;
```