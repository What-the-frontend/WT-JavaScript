Flux 아키텍쳐
===
Flux는 Facebook에서 애플리케이션의 규모가 커지면서 수많은 상태 데이터의 흐름을 제어하기가 어려워 제안한 패턴이다.
일반적인 MVC(Model-View-Controller) 패턴에서 하나의 Model은 다수의 View와 Controller와 연결될 수 있고 이는 규모가 커지면 데이터의 흐름을 파악하는 것이 어려워진다.
데이터의 흐름을 파악하기 어려운 것은 디버깅 시에 큰 문제가 될 수 있다.

Flux는 이를 Action -> Dispatcher -> Store -> View 의 단방향 데이터 흐름으로서 해결한다. 

<b>Action</b>은 변경될 상태에 대한 정의를 담고있는 객체이다. 각각의 Action은 고유한 type을 갖게된다.

<b>Dispatcher</b>는 애플리케이션의 중앙 허브로 모든 데이터 흐름을 관리한다. Action을 전달받으면 이를 미리 연결된 스토어에 동기적으로 전달하는 역할을 한다.

<b>Store</b>는 애플리케이션의 모든 상태와 로직을 갖고있다. 스토어는 자체 setter가 없기 때문에 무조건 Dispatcher의 콜백을 통해서만 상태변경이 가능하다.

<b>View</b>는 <b>Controller View</b>가 Store에서 변경 이벤트를 전달받아 갱신(렌더링)을 요청하면 받은 상태를 기반으로 페이지를 갱신한다. 또한 View는 Action Creator를 통해서 Action을 발생시킨다.

Flux의 작동과정을 정리해보자면 우선 사용자가 View를 통해서 Action을 발생시킨다. 발생된 Action은 Dispatcher에게 전달되고 Dispatcher는 해당 type에 맞는 Action을 Store에 전달한다. 이를 또 Store가 Controller View한테 전달한다.