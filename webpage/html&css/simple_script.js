function func1(){
	alert("this is function 1");
}

function func2(){
	alert("this is function 2");
	return func1;
}

a_function = func2();
a_function();