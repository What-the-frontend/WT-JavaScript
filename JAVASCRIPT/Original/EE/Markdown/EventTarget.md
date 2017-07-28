이벤트 처리
===

## EventTarget.addEventListener('click')
버튼 이벤트를 처리하는 방법에는 두 가지 정도가 있다. 첫 번째는 html 태그 내에 onclick속성을 추가하고 function의 이름을 적어주는 방법
```
<button onclick="func()">버튼</button>
```

두 번째는 addEventListener를 사용하는 방법이 있다. 이 함수를 사용하면 JavaScript 내부에서 한 번에 정의를 할 수 있다는 장점이 있다. 사용 방법은 간단하다. 첫 번째 파라미터에는 처리할 이벤트의 타입을 정의한다. 우리는 버튼으로 사용할 것이기 때문에 'click'으로 해줬다.
<pre>
//Button(html element)
Button.addEventListener('click');</pre>
이후에 이제 두 번째 파라미터에 콜백 함수를 정의해준다. click이벤트가 발생했을 시에 실행될 함수를 정의해주는 것이다.

<pre>
Button.addEventListener('click', () => {
    console.log('success');
});</pre>
이렇게 해주면 이제 Button이라는 html요소를 클릭했을 시에 console에 success를 출력하게 된다.
