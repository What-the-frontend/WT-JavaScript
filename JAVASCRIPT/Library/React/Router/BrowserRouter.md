BrowserRouter
===
UI를 URL과 동기화된 상태를 유지하기 위해서 HTML5 history API(pushState, replaceState)를 사용하는 `<Router>` 입니다.

basename: string
---
모든 location을 위한 baseURL입니다. 만약 당신의 앱이 서버의 서브 디렉토리에서 동작하고 있다면, 아마 서브 디렉토리에 이것을 세팅하고 싶을것입니다. 알맞은 이름형식은 맨 앞에 슬래시가 있어야만하고 뒤에 이어지는 슬래시는 없어야합니다.

getUserConfirmation: func
---
네비게이션을 확인하기 위해서 사용되는 함수입니다. `window.confirm` 을 사용하는 것이 default설정입니다.

forceRefresh: bool
---
만약 값이 true라면 라우터는 가리키고 있는 페이지를 전부 refresh시킵니다. 아마 이 함수는 브라우저가 HTML5 history API를 지원하지 않을때만 사용할것입니다.

kyeLength: number
---
location의 길이값이다. Default값은 6.

children: node
---
렌더(render)를 위한 하나의 자식 엘리먼트(element)입니다.