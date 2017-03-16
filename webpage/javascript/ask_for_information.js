function sign_up(){
	var user_name= prompt("Please enter your user_name");
	var password_set= prompt("please set your password.");
	var password_check= prompt("what is your password?");
	while(1){
	if(password_check==password_set){
		var welcome_message="welcome to the landing page "+user_name+"!";
		alert(welcome_message);
		break;}
	else{password_check= prompt("wrong password! please enter again:");}
	}
}

sign_up();
