HashRouter
===
HashRouter는 UI를 URL과 동기화된 상태로 유지하기 위해서 URL의 해쉬 영역을 사용하는 라우터입니다.

basename: string
---
모든 location을 위한 baseURL입니다. 알맞은 이름형식은 맨 앞에 슬래시가 있어야만하고 뒤에 이어지는 슬래시는 없어야합니다.

getUserConfirmation: func
---
네비게이션을 확인하기 위해서 사용되는 함수입니다. `window.confirm` 을 사용하는 것이 default설정입니다.

hashType: string
---
window.location.hash를 위한 인코딩 타입이다. 사용가능한 value들은 다음과 같습니다.
- "slash" - #/home 과 같이 해쉬를 생성합니다.
- "noslash" - #home 과 같이 해쉬를 생성합니다.
- "hashbang" - deprecated by Google

children: node
---
랜더링을 위해서 사용되는 단일 자식(Single child) 요소입니다.