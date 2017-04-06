var foo = function(name){
    this.name = name;
}

var hello = new foo('hello world');
console.log(hello.name);