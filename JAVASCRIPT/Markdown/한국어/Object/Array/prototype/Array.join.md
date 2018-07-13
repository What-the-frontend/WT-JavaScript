# Array.join([seperator = ','])
배열 내의 요소들을 지정한 구분자로 이은 문자열을 반환하는 메소드이다.
```
var arr = ['a', 'b', 'c'];
var str1 = arr.join();    //구분자를 지정해주지 않는 경우에 디폴트는 ','
// "a,b,c"
var str2 = arr.join(', ');
// "a, b, c"
var str3 = arr.join('\n');
// "a
// b
// c"
```