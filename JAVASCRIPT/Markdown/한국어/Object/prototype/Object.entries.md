Object.entries
===

entries는 인자로 넘겨받는 key, value형태로 되어있는 Object에서 key와 value로 이루어져있는 배열들이 반환되는 메소드이다.
```
let obj = {
    'a' : 1,
    'b' : 2
}

Object.entries(obj);    //[['a', 1], ['b', 2]]
```