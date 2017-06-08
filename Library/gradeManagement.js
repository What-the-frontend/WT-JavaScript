(function(){
    var checkboxList = document.querySelectorAll("div.checkboxArea > input");

    var checkbox = function(){
        Array.from(checkboxList).forEach(function(element){
            if(element.classList.contains("on")){
                element.classList.remove("on");
            } else if(!element.classList.contains("on")){
            }
        })
    }
}())