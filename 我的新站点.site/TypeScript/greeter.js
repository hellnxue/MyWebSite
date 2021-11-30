/*
 * @Description:
 * @Author: lxp
 * @Date: 2021-09-13 14:49:01
 * @LastEditTime: 2021-09-14 19:10:15
 * @LastEditors: lxp
 */
var num = 10.01;
var str = 'hello';
var flag = true;
var list = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[100];
var notSure = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed();
var prettySure = 4;
console.log('prettySure.eat===', prettySure);
var u = undefined;
console.log('null===', u);
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + c + ' ' + colorName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
function foo() {
    // okay to capture 'a'
    return a;
}
// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
// foo();
var a;


for(let i=0;i<6;i++){
    for(let i=0;i<2;i++){
        console.log('i=======================',i)
    }
}


for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}