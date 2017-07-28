//function
function Function(){  //함수 또한 객체이다. 일급 객체로 취급이되며 그만큼 고려할 것들이 많다.
  function declare(){ //함수 선언형을 이용한 함수 선언방법.
    return 'declareVal';
  }
  console.log(declare());

  var expression = function(){  //함수 표현식을 이용한 함수 선언방법. 함수 호이스팅 문제로 권장하는 사용방법이다.
    return 'expressionVal';
  };  //;을 안써도 되지만 디버깅 등의 문제로 ;를 붙여주는 것이 좋다.
  console.log(expression());

  console.log(De_sum(1, 0)); //선언문 형식으로 선언된 함수인 경우에 함수 호이스팅에 의해서 코드의 맨 위부터 아래까지 함수가 모두 적용된다. 따라서 값이 나온다.
  function De_sum(i, j){
    return i+j;
  }
  console.log(De_sum(1, 1)); //여기서도 함수가 적용된다.

  //console.log(Ex_sum(3, 4));  함수 표현식의 경우에는 호이스팅이 발생하지 않기 떄문에 Ex_sum()함수를 찾지 못해 오류가 발생한다.
  var Ex_sum = function(i, j){
    return i+j;
  }
  console.log(Ex_sum(2, 1));

  var mul = function sample(i, j){  //함수 표현식에서 익명함수 대신 기명함수를 사용할 수 있다. 값의 차이는 없지만 내부적으로 함수를 사용하는 경우에 쓴다. (예: 재귀함수)
    return i*j;
  }
  console.log(mul(2, 4));

  function parameter(func){ //함수는 일급 객체이기 때문에 매개 변수로 받는 것도 가능하다.
    console.log(func(1, 3));  //4
  }
  parameter(Ex_sum);  //Ex_sum함수를 매개변수로 parameter함수에 넣어준다.
}



