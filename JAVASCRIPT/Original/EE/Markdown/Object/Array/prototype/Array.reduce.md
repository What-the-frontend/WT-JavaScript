Array.prototype.reduce
===
reduce메소드는 배열의 모든 요소에 대해서 지정된 콜백을 호출한다. 이때 filter나 forEach와 다른 점은 콜백의 반환값이 결과에 누적되며 다음 콜백을 호출할때 사용된다는 점이다. 콜백함수의 인자로는 4개가 있다.
- previousValue
    - 이전 콜백에서 반환된 값
- currentValue
    - 배열 내 현재 처리되고 있는 요소
- currentIndex
    - 배열 내 현재 처리되고 있는 요소의 인덱스
- array
    - reduce에 호출되는 배열

```
[0, 1, 2, 3, 4].reduce((previousValue, currentValue, currentIndex, arr) => {
    console.log(previousValue)  //0, 1, 3, 6
    console.log(currentValue)   //1, 2, 3, 4
    console.log(currentIndex)   //1, 2, 3, 4
    console.log(arr)    //[0, 1, 2, 3, 4] * 4
    return previousValue + currentValue;
});
```