var testModule = (function() {
  //private area
  var user = {
    name: "name",
    password: "password"
  }

  return {
    //public area
    getUserName: function() {
      return user.name;
    }
  }
})();

//"name"
console.log(testModule.getUserName());
//undefined
console.log(testModule.user);