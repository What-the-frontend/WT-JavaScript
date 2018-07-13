Spread 연산자
===
Spread 연산자는 전개 가능한(iterable) 배열, 객체를 인자로 전달할때 용이하다. 다양한 부분에서 사용되는 Spread 연산자를 에제를 통해서 언제 사용되는 연산자인지 알아보도록한다.

```javascript
let arr = [1, 2, 3];

arr.forEach(ele => { console.log(ele); });  // 1 2 3
console.log(...arr);  // 1 2 3
```
위의 코드와 같이 배열을 출력하는것도 가능하고,

```javascript
let obj = { x: 1, y: 2 };

let copy = Object.assign({}, obj);
let copyBySpread = { ...obj };
```
위의 코드와 같이 객체를 복사하는것 또한 가능하다. 여기서 주의할점은 객체는 배열과는 달리 단순히 `console.log(...obj)` 를 했을때 객체내의 요소들이 모두 출력되지는 않는다. 객체를 대상으로한 Spread 연산자는 객체내에서만 전개 가능하다.

```javascript
let obj = { x: 1, y: 2 };

let newObj = { ...obj, y: 3 };

// Redux
const initState = { x: 1 };

function reducer(state = initState, action) {
  switch(action.type) {
    case SET_X:
      return { ...state, x: action.x };
    default: return state;
  }
}
```
위의 코드는 기존의 `obj` 객체의 내용은 가져오면서 `y` 값만 `y: 3` 으로 변경해서 새로운 객체인 `newObj` 에 저장해주는 코드이다. 실제로 이 패턴은 Redux에서 새로운 state를 dispatch하는 경우에 사용한다.

```javascript
function foo(arr) {
  arr.forEach(ele => { console.log(ele) });
}

let arr = [1, 2, 3];
foo.apply(null, arr);   // 1 2 3
foo(...arr)    // 1 2 3
```
위의 코드와 같이 Function에 배열을 전달할땐 원래는 `Function.prototype.apply()` 를 사용하지만, Spread 연산자로 전달하는것이 가능하다.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

Array.prototype.push.apply(arr1, arr2);   // 1 2 3 4 5 6
arr1.push(...arr2);   // 1 2 3 4 5 6
```
위의 코드와 같이 Array에 Array를 push할때도 용이하다.

```javascript
let _date = [2000, 4, 29];
let d = new Date(..._date);
```
위의 코드와 같이 날짜를 배열로 초기화시켜줄때도 좋다.