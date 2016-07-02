// JavaScript Document
var num1=1;
let num2=1;

//num3只在立即执行函数作用域中可以使用，就算是引入js文件的html文件中也不能使用此处定义的变量，因为函数作用域是有限制的
(function(){
	var num3=1;
	})();