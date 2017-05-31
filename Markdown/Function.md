함수
===

자바스크립트의 함수는 일급 객체이다. 이는 함수가 변수에 담길 수 있고 런타임에 실행가능하고 매개변수로 전달가능하고 반환값으로 사용될 수 있다는 것을 의미한다.

## 함수의 선언 방법

함수의 선언 방법 또한 객체를 생성할 때와 같이 다양한 방법이 있다.

- 변수에 담는 방법
<pre>
var func = function(){
    return "sucess";
}
console.log(func());
//sucess</pre>

### 위험 사항
- 이름 충돌
<pre>
function </pre>

## 클로저
클로저는 함수안에 함수가 들어갈 수 있다는 개념이다. 이 때 함수는 일급 객체이기 때문에 외부 함수가 내부 함수를 가져다가 사용하는 것이 가능하고 내부 함수내에 변수를 사용할 수 있다.
<pre>
function outside(x){
    function inside(y){
        return x + y;
    }
    return inside;
}

funcOut = outside(5);
funcIn = funcOut(3);</pre>
위의 예제 코드를 보면 outside함수내에 inside함수가 있는 것을 알 수 있다. funcOut은 outside함수를 매개변수로 5를 넘기면서 호출한 리턴값을 담는다. 따라서 funcOut = function inside(); 가 된다. 그리고 바로 밑에 줄에 funcIn은 inside(3)을 실행한 것과 같이 실행이 된다. 이 때의 funcIn의 값은 8이 된다. 이것은 클로저의 성질에 의해서 가능한 일이다. 첫 번째로 외부 함수가 호출될 때의 x값이 내부 함수가 호출될 때에 이용되었다는 것은 메모리에 담고 있는다는 것이다. 따라서 클로저는 내부 함수가 어떠한 곳에서도 호출되지 않는 이상 메모리를 담고 있는다는 것을 알 수 있다.

