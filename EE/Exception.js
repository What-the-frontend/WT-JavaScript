document.getElementById("Exception").addEventListener("click", function () {
    function UserException(message) {
        this.message = message;
        this.name = "UserException"
    }
    UserException.prototype.toString = function () {
        return this.name + ": " + this.message + '"';
    }
    throw new UserException('Occure Exception!');
}, false);