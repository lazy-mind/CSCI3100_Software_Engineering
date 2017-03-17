var userName= document.getElementById("user_name_login");
var password= document.getElementById("user_password_login");
var message1= document.getElementById("confirmation_message");
var message2= document.getElementById("confirmation_message2");
var message3= document.getElementById("confirmation_message3");

userName.addEventListener("input", getUserInput);
password.addEventListener("input", getUserInput);

function getUserInput(){
	var input_string=userName.value;
	var input_string2=password.value;
	message1.innerHTML="your user name is: "+input_string;
	message2.innerHTML="your password is: "+input_string2;
	//message3.innerHTML="welcome to meetfun!"+input_string;
}


//get the list hide and show
var checklist = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
console.log(items);

for (var i = 0;i<items.length;i++){
	items[i].addEventListener("click",editItem);
	items[i].children[1].addEventListener("blur",updateItem);
}

function editItem(){
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	console.log("my current value is ",input.value.length);
	input.setSelectionRange(0, input.value.length);

	console.log(this);
}

function updateItem(){
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
	console.log("we blurred!", this.value);
}