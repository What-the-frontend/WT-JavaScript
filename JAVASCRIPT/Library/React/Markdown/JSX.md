JSX
===
JSX는 JavaScript의 구문 확장입니다. 탬플릿 언어와 비슷하지만 JavaScript의 모든 기능을 갖추고 있습니다. JSX는 "React elements"라 불리는 순수 JavaScript 객체를 반환하는 ```React.createElement()``` 를 통해서 컴파일됩니다.

```javascript
const element = <h1>Hello, world!</h1>;
```
위와 같은 코드를 JSX라고 합니다. React를 사용할 때 UI가 다음과 같이 보이길 원한다를 설명할 때 사용하길 추천합니다.


JSX는 React "element"를 제공합니다. React는 렌더링 로직은 본질적으로 어떻게 이벤트가 핸들링 됐는지, 시간변화에 따라서 상태가 어떻게 변하는지 그리고 그 데이터가 디스플레이에 어떻게 보여질 준비를 하는지 등의 UI 로직과 연관되어 있다는 사실을 갖고 있습니다.


대신에