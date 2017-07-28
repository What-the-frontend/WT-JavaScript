//디자인 패턴
//강제로 인스턴스 생성하기
function pattern_1(){
  function A(arg){
    if(!(this instanceof A))  //this가 A의 인스턴스인지 확인하는 분기문
      return new A(arg);
    this.value = arg ? arg : 0;
  }

  var a = new A(100);
  var b = A(10);

  console.log(a.value);
  console.log(b.value);
  console.log(global.value);
}