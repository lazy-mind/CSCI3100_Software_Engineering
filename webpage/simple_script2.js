alert ('the script is running');

var birthday_message = {
	firstname : "default",
	lastname : "default",

	happy_birthday : function(){
		alert ("Hi "+lastname+" "+firstname+". Happy birthday !");
	}
}

//birthday_message.firstname="Mao";
//birthday_message.secondname="Michael";
birthday_message.happy_birthday();