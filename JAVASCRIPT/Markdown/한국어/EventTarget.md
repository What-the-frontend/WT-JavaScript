이벤트 등록
===

우리는 웹 페이지를 만들때, 버튼(Button), 입력란(Input) 등에 이벤트를 등록할 일이 생긴다. 이벤트란, 사용자의 행동에 맞게 발생되는 함수라고 볼 수 있다. 이벤트를 등록하는 방법에는 두 가지가 있다. HTML에 인라인(inline)으로 직접 넣는 방법과 JavaScript의 `addEventListener()` 를 사용하는 방법이다.

1. HTML 인라인
    
    가장 단순한 방법이라고 생각한다. 예제로 알아보자.
    ```html
    <button onclick="event()"></button>
    ```
    hmtl 태그에 이벤트 타입(`onclick`)을 입력하고, 문자열로 이벤트 발생시에 실행시킬 코드에 대해서 적는다. 위의 코드의 경우에는 클릭했을 경우에, `event()` 라는 함수를 실행시키는 코드이다.

2. `addEventListener()`

    `addEventListener()` 를 사용하는건, 자바스크립트 코드에 녹여내기 가장 적절한 방법이라고 생각한다. 예제로 알아보자.
    ```javascript
    // <button id="btn"></button>
    const Button = document.getElementById('btn');
    Button.addEventListener('click', event => {
        console.log('hello');
    }, false);
    ```
    위와 같이 자바스크립트 코드상에서 바로 이벤트를 붙이는것이 가능하다. `addEventListener()` 에는 총 3가지의 매개변수를 받는다.
    1. event type
    2. event function
    3. isCapture(if false, bubble)
    
    1.과 2.은 HTML 인라인 방식과 크게 다를게 없다. 하지만, 3.부분이 처음 접한다면 어려울 수 있다. JavaScript의 이벤트는 원하는 요소까지 전달되기까지 과정이 있다. 이 [다이어그램](https://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/events.html#Events-phases)을 참고하자. 간단히 설명하면 Capture, Element, Bubble의 세가지 과정을 갖는다. 3번째 파라미터는 이 이벤트가 Capture 과정에서 실행되는지, Bubble 과정에서 실행되는지 정한다.