/*
 * @Description:
 * @Author: lxp
 * @Date: 2021-09-13 14:49:01
 * @LastEditTime: 2021-09-14 18:56:47
 * @LastEditors: lxp
 */
let num:number=10.01
let str:string='hello'
let flag:boolean=true

let list:number[]=[1,2,3]

enum Color {Red,Green=100,Blue}
let c:Color=Color.Green
let colorName:string=Color[100]

let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed();


let prettySure: Object = 4;
console.log('prettySure.eat===',prettySure)


let u:null=undefined
console.log('null===',u)


class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + c+' '+colorName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);



function foo() {
    // okay to capture 'a'
    return a;
}

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();

let a;