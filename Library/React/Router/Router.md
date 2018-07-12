Router
===
모든 라우터 컴포넌트를 위한 공통 로우 레벨 인터페이스입니다. 일반적으로 앱내에서는 다음과 같은 한 단계 높은 레벨의 라우터들을 대신 사용합니다.
- BrowserRouter
- HashRouter
- MemoryRouter
- NativeRouter
- StaticRouter

로우 레벨 라우터를 사용하는 가장 흔한 사례는 Redux 또는 Mobx와 같은 상태 관리 라이브러리의 커스텀 히스토리와 동기화 시킬때 사용하는 것입니다.

history: object
---
이동할 위치를 나타내기 위해서 사용하는 객체입니다.

children: node
---
랜더링을 위해서 사용되는 단일 자식(Single child) 요소입니다.