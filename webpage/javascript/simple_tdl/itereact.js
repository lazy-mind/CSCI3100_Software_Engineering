
var content_list=document.getElementsByClassName('web_content');
var content_list_copy=document.querySelector('web_content');


for (var a=0; a<3;a++){
	comment_component=content_list[a].children;
	var new_header="the "+(a+1)+" comment!";
	var new_content="I'm the "+(a+1)+" user comment >.<";
	comment_component[0].innerHTML=new_header;
	comment_component[1].innerHTML=new_content;
}




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