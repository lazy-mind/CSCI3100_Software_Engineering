$(function(){
	$(".panel").hide();
	$(".panel").show(1000);
	//$(".panel").delay(1000).slideUp(1000).slideDown(1000).fadeOut(1000).slideDown(1000).fadeToggle(1000).fadeToggle(1000);
	$(".panel").css({
		color:"black",
		fontWeight:"bold"}
		);
	var fourPanel=document.getElementById("four_panel");
	var fourPanelList=fourPanel.children;
	console.log(fourPanelList);
	for(var a=0;a<4;a++){
		console.log(fourPanelList[a].children[0].children[0]);
		//console.log(fourPanelList[a].children[0].children[0].children[0]);
		$(fourPanelList[a].children[0].children[0]).on("click",hide_show);
	}

	function hide_show(){
		var get_body=(this).nextElementSibling;
		$(get_body).toggle();
	}

});

$(function(){
	$(".tabs a").on("click", go_back);

	function go_back(){
		//console.log('enter');
		$(".trypanel.active").fadeOut(0,function(){
			$(this).removeClass("active");
		})
		var what_id=(this).innerHTML;
		$('#'+what_id).fadeIn(10, function(){
			$(this).addClass("active");
		})
		console.log(what_id)
		console.log("click me");

	}
})
