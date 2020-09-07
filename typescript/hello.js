var Dog = /** @class */ (function () {
    function Dog() {
        this.color = "brown";
        this.name = "Betyár";
        this.age = 4;
        this.skills = [
            "eat",
            "drink",
            "sleep",
            "bark",
        ];
    }
    Dog.prototype.hello = function () {
        return "Hello, my name is " + this.name + " and I can " + this.skills[3] + "!";
    };
    return Dog;
}());
var dog1 = new Dog();
dog1.name = 'Csinike\'s dog';
console.log(dog1.hello());
