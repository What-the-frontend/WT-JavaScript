Number
===

isNaN()
---
```isNaN()``` 은 파라미터로 전달받은 변수가 NaN(Not a Number)인지 확인해주는 메소드입니다. 만약 NaN이라면 true를 반환하고 아니라면 false를 반환합니다.

```isNaN()``` 은 원래 ```global``` 객체에 있는 메소드입니다. 하지만 ```Number.isNaN()``` 은 ```global``` 에 있는 ```isNaN()``` 에 비해서 강력합니다. ```Number.isNaN()``` 은 실제로 ```NaN``` 값인 경우에만 ```true``` 를 반환합니다.

```isNaN()``` 메소드 자체는 동등 연산자 ```==``` 과 ```===``` 을 사용해서 비교를 하면 ```false``` 를 반환하는 문제 때문에 만들어지게 됐습니다.
```javascript
// false
Number.isNaN(1);
Number.isNaN('javascript');

// true
Number.isNaN(NaN);
Number.isNaN(0 / 0);
```

parseFloat()
---
문자열 인수를 구분 분역하여서 부동 소수점 수를 반환합니다.

parseInt()
---
문자열 인수를 받아서 정수로 반환합니다.