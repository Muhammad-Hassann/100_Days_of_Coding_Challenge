// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
var _this = this;
var obj = {
    name: "Hassan",
    traditionalFunction: function () {
        console.log("Traditional Function: ".concat(this.name));
    },
    arrowFunction: function () {
        console.log("Arrow Function: ".concat(_this.name)); // Give error "Object is possibly 'undefined'"
    }
};
obj.traditionalFunction();
obj.arrowFunction();
