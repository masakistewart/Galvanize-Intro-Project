$(document).ready(function(){

$("#pictures").on('click', function(){
	$(this).hide();
	$(".text").fadeOut("slow");
	$(".title").text("Gallery");
	$(".gallery").delay(800).fadeIn("slow");
	$("#gif").delay(800).fadeIn("slow");
});

$("#gif").on("click", function(){
	$(this).hide();
	$(".title").text("Mandatory Gif");
	$(".gallery").fadeOut("slow");
	$(".gif").delay(800).fadeIn("slow");
	$("#text").delay(800).fadeIn("slow")
});

$("#text").on("click", function() {
	$(".gif").fadeOut("slow");
	$(".title").text("Welcome");
	$("#text").fadeOut("slow");
	$("#title").text("Welcome")
	$("#pictures").delay(800).fadeIn('slow');
	$(".text").delay(800).fadeIn('slow');
});



});