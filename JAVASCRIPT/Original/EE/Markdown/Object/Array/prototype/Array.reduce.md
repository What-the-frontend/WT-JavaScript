Array.prototype.reduce
===

```javascript
arr.reduce(callback[, initialValue])
```

reduce 메소드는 배열의 각 요소마다 함수를 적용해서 하나의 값으로 줄여줍니다.

- callback (배열의 각 요소에 적용될 함수)
    - <b>accumulator:</b> 누적 계산 값
    - <b>currentValue:</b> 현재 값
    - <b>currentIndex:</b> 현재 인덱스
    - <b>array:</b> 현재 reduce가 적용된 배열
- initialValue (첫 호출에 인수로 사용하는 값)

```javascript
[1, 2, 3, 4, 5].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator * currentValue;
})
// = 120
```