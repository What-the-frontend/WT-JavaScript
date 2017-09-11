NodeList
===
JavaScript 선택자 사용시에 NodeList를 반환하는 메소드의 목록
- document.getElementsByName
- document.querySelectorAll
- element.childNodes

경우에 따라서 NodeList는 라이브 컬렉션이며 DOM의 변경사항을 실시간으로 컬렉션에 반영한다. 예를들어서 element.childNodes에 의해 반환된 경우가 있다.
한 상황을 예를 들어서 설명하면 appendChild를 사용해서 한 element를 추가해주면 element.childNodes시에 나오는 결과는 실시간으로 반영된 결과이기 때문에
추가된 element까지 나오게된다.