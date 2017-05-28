//Algorithm study
document.getElementById("Algorithm_pyramid_1").addEventListener("click", function(){
  for(var i = 0; i < 5; i++){
    var star = "";
    for(var j = 0; j < i+1; j++){
      star += '*';
    }
    console.log(star + '\n');
  }
}, false);
// *
// **
// ***
// ****
// *****

document.getElementById("Algorithm_pyramid_2").addEventListener("click", function(){
    var result = "";
  for(var i=0; i<5; i++){
    for(var j=i; j<4; j++){
      result += " ";
    }
    for(var j=0; j<i; j++){
      result += "**";
    }
    result += "*\n";
  }
  console.log(result);
}, false);
//     *
//    ***
//   *****
//  *******
// *********

document.getElementById("Algorithm_fibonachi").addEventListener("click", function(){
  var a=0, b=1;
  for(var i=0; i<5; i++){
    a += b;
    console.log(b);
    b += a;
    console.log(a);
  }
}, false);
//1 1 2 3 5 8 13 21 34 55
