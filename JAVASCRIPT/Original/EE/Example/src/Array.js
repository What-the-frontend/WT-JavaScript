//Array & Object
function ArrayAndObject(){
  var arr = []; //배열 선언
  var arr1 = new Array(3);  //배열을 Array객체를 사용해서 선언할 수 있다.
  arr[0] = 0; //배열에 값 대입
  arr[2] = 3; //배열은 가장 큰 인덱스값만큼 배열의 크기를 설정한다. 이 때 값이 초기화되지 않은 인덱스는 undefined로 정의된다.
  console.log('arr.length: ' + arr.length);  //length는 배열 객체의 _proto_에 있는 메소드로 배열의 인덱스값의 +1된 값을 갖는다.

  arr.property = 'new property'; //배열 객체내에 동적으로 프로퍼티를 생성해줄 수 있다. length에는 영향을 주지 않는다.
  for(var key in arr){
    console.log('Array_property(for in): ' + key); //배열 또한 객체이기에 key : value 형식으로 저장된다. 따라서 for in 사용시에는 모든 프로퍼티를 받아온다.
  }
  for(var i=0; i<arr.length; i++){
    console.log('Array_property(for): ' + arr[i]);  //배열 내에 인덱스 값만을 사용해서 값을 불러오는 것이기 때문에 인덱스 값을 key로 가진 프로퍼티만 출력한다.
  }

  arr.push(4);  //push는 배열 객체의 _proto_안에 있는 표준 메서드로 arr[arr.length]에 ()안에 값을 넣어준다. 가장 끝에 인덱스가 생성되며 값이 대입되는 것이다.
  console.log('arr[3]: ' + arr[3]);  //arr[3] = 4;

  arr.length = 5; //배열의 length값은 명시적으로 변경할 수 있다. 배열의 크기가 변경되고 새로 생성된 인덱스의 값은 undefined로 정의된다.
  console.log('Array_length: ' + arr.length); //undefined

  var obj = { //객체 생성
    Obj_property_1 : 'value1',  //key : value 형태로 값을 저장한다. 여러 개인 경우에 ,로 구분한다.
    Obj_property_2 : 'value2'   //Obj_property_1,2 = key, value1,2 = value
  };

  var obj1 = new Object();  //객체를 Object객체를 사용해서 선얼할 수 있다.
  obj1.Obj1_property_1 = 'value1'; //obj1방식의 경우 값은 이런식으로 대입한다.
  console.log('new Object(), propertyVal: ' + obj1.Obj1_property_1); //value1

  obj.propertyNew = 'new property(.)'; //객체 내에 동적으로 프로퍼티를 추가할 수 있다.
  obj['propertyNew2'] = 'new property([])'; //대괄호를 사용해서 프로퍼티를 추가할 수도 있다.
  obj[1] = 'one'; //대괄호내에는 문자열('') 값만 올 수 있다. 숫자의 경우에는 엔진에 의해서 ''가 자동으로 씌워지기 때문에 ''없이 사용가능하다.
  console.log('Object_length: ' + obj.length);  //Object객체는 배열 객체와 달리 다른 _proto_를 가리키기 때문에 length프로퍼티가 없으므로 undefined를 출력한다.

  for(var key in obj){  //obj내에 모든 프로퍼티 출력
    console.log(key, obj[key]); //,를 이용해서 두 문자열을 병합할 수 있다. 이 때 +와의 차이점은 자동으로 한 칸의 공백이 생긴다는 점이다.
  }

  obj1 = obj; //obji은 obj가 참조하는 곳을 참조하게 된다. 따라서 obj의 프로퍼티에 obj1을 이용해서 접근할 수 있다.
  console.log(obj1.Obj_property_2); //value2

  for(var key in obj1){ //기존의 obj1프로퍼티인 Obj1_property_1은 사라지게 된다.
    console.log(key, obj1[key]);
  }
}