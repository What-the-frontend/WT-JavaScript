XMLHttpRequest
===

서버와 HTTP 프로토콜 통신을 할 때 사용되는 객체다.

### 사용법
우선 XMLHttpRequest객체를 생성한다.
<pre>
var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "localhost:3000";</pre>

그 다음 객체를 open시켜준다.
<pre>
xhr.open(method, url, true);</pre>
