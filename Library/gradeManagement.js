(function(){
    var checkboxList = document.querySelectorAll("div.checkboxArea > input");

    var checkbox = function(){
        Array.from(checkboxList).forEach(function(element){
            element.classList.contains("on");
        })
    }
}())