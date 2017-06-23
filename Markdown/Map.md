Map
===

Map은 key, value형태의 데이터 구조이다. 기존의 Object와 상당히 비슷하다.
<pre>
let mapExample = new Map();
mapExample.set("test1", "hello");
mapExample.set("test2", "world");

for(var [key, value] of mapExample){
    console.log(key.concat(value));
}
//helloworld</pre>