Externals
===
`externals` configuration 옵션은 의존관계를 번들이 내보내지는것으로부터 제외시키는 방법을 제공합니다. 대신에, 생성된 번들은 소비자(consumer) 환경에 존재하는 의존성(dependency)에 의존합니다. 이 특징은 일반적으로 라이브러리 개발자에게 가장 유용하지만 다양한 애플리케이션이 있습니다.
> 소비자(consumer)는 웹펙을 사용해서 번들링된 라이브러리를 포함한 모든 끝단 사용자 애플리케이션을 말합니다.

`externals`
---
`string` `array` `object` `function` `regex`

특정 `import`된 패키지들을 번들링하지 않고 대신에 런타임에서 외부의 의존성을 제외시킵니다. 예로 jQuery를 번들링하는것 대신에 CDN을 통해서 포함시키는것을 들겠습니다.

*index.html*
```html
<script
  src="https://code.jquery.com/jquery-3.1.0.js"
  integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
  crossorigin="anonymous">
</script>
```

*webpack.config.js*
```javascript
externals: {
  jquery: 'jQuery'
}
```
```javascript
import $ from 'jquery';

&('.my_element').animate(...);
```
외부 의존관계를 가진 번들은 CommonJS, AMD, global and ES2015 modules와 같은 다양한 모듈에서 사용이 가능합니다. 외부 라이브러리는 이 폼들을 통해서 아마 어떤것이든 사용가능합니다.
- root: 라이브러리가 글로벌 변수로서 사용가능해야합니다.
- commonjs: 라이브러리가 CommonJS 모듈로서 사용가능해야합니다.
- commonjs2: 위와 비슷하지만 export는 `module.exports.default`입니다.
- amd: `commonjs`와 유사하지만 AMD 모듈 시스템에서 사용됩니다.

string
---
```javascript
externals: {
  jquery: 'jQuery'
}
```
위의 예제를 살펴봅시다. `import $ from 'jquery'` 안에 `jquery` 모듈을 가리키는 `jquery` 라는 이름의 프로퍼티는 차단되어야만 한다.이 모듈을 바꾸기 위해서 `jQuery` 값은 글로벌 `jQuery` 값으로 정정될 것입니다. 더 상세히 설명하자면 문자열이 제공될때 그것은 `root` 로 여겨진다는 것입니다.

array
---


object
---


function
---


regex
---