var arrayTable = document.getElementById("ArrayItemsTable");
var algorithmTable = document.getElementById("AlgorithmItemsTable");
arrayTable.style.display = "none";
algorithmTable.style.display = "none";

document.getElementById("ArrayItems").addEventListener("click", function(){
  arrayTable.style.display = "table";
}, false);

document.getElementById("AlgorithmItems").addEventListener("click", function(){
  algorithmTable.style.display = "table";
}, false);

var notice_1 = function(){
    alert("Check your bowser console. \nChrome: (Window)ctrl+shift+i / (Mac)command+shift+i");
}