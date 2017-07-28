var arr = ['A', 'B', 1];

document.getElementById("Array_isArray").addEventListener("click", function () {
    var arrLike = "AB";
    console.log("Array.isArray Example");
    console.log(Array.isArray(arr), Array.isArray(arrLike));
}, false);

document.getElementById("Array_of").addEventListener("click", function () {
    var arr2 = Array.of('A', 'B', 'C');
    console.log("Array.of Example");
    console.log(arr2);
}, false);

document.getElementById("Array_forEach").addEventListener("click", function () {
    console.log("Array.forEach Example");
    arr.forEach(function (element, index, arr) {
        console.log(element, index, arr);
    });
}, false);