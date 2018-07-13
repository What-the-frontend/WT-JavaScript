# Promises

JavaScript에 대한 얘기부터 하겠습니다. JavaScript는 단일 스레드이고 여러 스크립트를 동시에 실행시키는 것이 불가능합니다. 하지만 한번에 여러개의 작업을 요구할 때가 아주많죠. 이럴때 일반적으로 이벤트와 콜백을 사용해서 문제를 해결합니다. 프라미스는 이 처리들을 깔끔하게 도와줍니다.

프라미스에 사용되는 용어에는 다음과 같은 것들이 있습니다.
-  처리됨 (fulfilled): 프라미스 관련 작업이 성공했습니다.
-  거부됨 (rejected): 프라미스 관련 작업이 실패했습니다.
-  보류됨 (pending): 처리되거나 거부되지 않았습니다.
-  해결됨 (settled): 처리되거나 거부되었습니다.

Promise를 생성하는 방법은 다음과 같습니다.
```
let promise = new Promise(function(resolve, reject){
    if(/* true */){
        resolve("Promises work");
    } else {
        reject("Promises not work");
    }
});
```

위와 같이 생성한 Promise 객체는 다음과 같이 사용가능합니다.
```
promise.then(result => {
    console.log(result);    //"Promises work"
}, err => {
    console.log(err)        //"Promises not work"
})
```