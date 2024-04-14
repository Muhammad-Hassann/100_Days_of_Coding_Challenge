// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
var myObj = {
    name: "Hassan",
    getName: function () {
        var _this = this;
        console.log(this.name);
        var insideFunction = function () {
            console.log(_this.name);
        }; // It is accessble because arrow function, It isn't accessble with normal functions
        insideFunction();
    }
};
myObj.getName();
