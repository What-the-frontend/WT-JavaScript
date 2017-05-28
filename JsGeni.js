var arrayTable = document.getElementById("ArrayTable");
arrayTable.style.display = "none";

document.getElementById("ArrayItems").addEventListener("click", function(){
  arrayTable.style.display = "table";
}, false);

var notice_1 = function(){
    alert("Check your bowser console. \nChrome: (Window)ctrl+shift+i / (Mac)command+shift+i");
}