Concepts
===
웹펙은 모던 JavaScript 애플리케이션을 위한 정적 모듈 번들러입니다. 당신의 애플리케이션에 webpack이 프로세스에 존재할때, webpack은 반복적으로 당신의 애플리케이션이 필요로하는 모듈을 포함하고 있는 의존성 그래프(dependency graph)를 구축하고, 하나 혹은 더 많은 번들에 저 모든 모듈들을 패키지에 담아 포함시킵니다.

webpack을 처음 시작하는데는 주요한 4가지 개념만 이해하면 됩니다.
- Entry
- Output
- Loaders
- Plugins

Entry
---
entry point는 내부 의존성 그래프에서 webpack이 먼저 빌드아웃을 해야하는 모듈을 가리킵니다. entry point에 도달한 후에 webpack은 entry point가 의존하고 있는 다른 모듈들과 라이브러리를 알아낼 것입니다.

모든 의존 관계가 만들어지고 파일로서 도출되는 것을 번들이라고 부릅니다. 당신은 entry point를 `entry` 프로퍼티를 webpack configuration안에서 구성해주는 것으로 지정할 수 있습니다.

여기 entry configuration의 예제가 있습니다.

*webpack.config.js*
```javascript
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

Output
---
output 프로퍼티는 어느곳에 번들파일을 만들어 내보낼지 그리고 이 파일들의 이름을 어떻게 지을것인지에 대해 webpack에게 말하는 것입니다. 당신은 번들과정중에 이 부분을 당신의 configuration에 명시하는 것으로 구성할 수 있습니다.

*webpack.config.js*
```javascript
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
}
```
위의 예제에서 우리는 webpack에게 우리의 번들 이름과 이 파일이 내보내지길 바라는 곳을 output.filename과 output.path를 통해서 알려줬습니다.

Loaders
---
*Loaders* 는 JavaScript파일만을 만들어내는 것을 가능하게 한다(webpack은 JavaScript만 이해할 수 있다). 그들은 webpack이 만들 수 있는 유효한 모듈들로 컨버팅하는 것으로 모든 종류의 파일들을 위한 번들링 능력에 영향력을 행사할 수 있는 힘을 줍니다.

본질적으로, webpack loader는 당신의 애플리케이션 의존성 그래프에 추가되어질 수 있도록 모든 타입의 파일들을 변형시켜서 모듈에 넣습니다(그리고 번들에 성공합니다).

높은 단계에서 **loader**는 당신의 webpack configuration에서 두 가지 목적을 가집니다.

1. `test` 프로퍼티는 변형되어야만 하는 파일 혹은 파일들을 확인합니다.
2. `use` 프로퍼티는 loader가 변형을 위해서 사용해야만하는 것을 가리킵니다.

*webpack.config.js*
```javascript
cosnt path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: paht.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [{
      test: /\.txt$/,
      use: 'raw-loader'
    }]
  }
}

module.exports = config;
```
위의 configuration은 test와 use 프로퍼티를 요구하는 싱글 모듈을 위해 rules 프로퍼티를 통해서 정의되어있습니다. 이는 webpack 컴파일러에게 다음과 같이 말하는 것과 같습니다.

> 이봐 webpack 컴파일러, require () / import문 내부의 ".txt"파일로 이어지는 경로를 발견하면 번들에 추가하기 전에 'raw-loader'를 사용해서 변환하세요.

Plugins
---
loader들이 분명한 타입의 모듈들을 해석하는동안 플러그인이 광범위한 작업범위를 수행할 수 있도록 영향력을 줍니다. 플러그인은 번들 최적화 그리고 최소화에서부터 유사한 환경 변수들을 선언하기에 이르기까지 다양합니다. plugin interface는 극도로 강력하고 광범위한 다양한 작업들에 착수하는 것이 가능합니다.

plugin을 사용하기 위해서 당신은 `require ()` 해야하고 그것을 plugins 배열에 추가해야만합니다. 대부분의 플러그인들은 옵션을 통해서 커스터마이징이 가능합니다. 당신이 config 내부에서 다른 목적들을 위해서 플러그인을 여러번 사용할 수 있을 때부터 당신은 호출을 통해서 플러그인 인스턴스를 만들기 위해서 new 연산자를 사용해야만 합니다.

*webpack.config.js*
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [{
      test: /\.txt$\,
      use: 'raw-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```
