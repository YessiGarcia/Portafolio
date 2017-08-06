$(".sub-menu").click(function(){
	$(this).children("ul").slideToggle();
});

$("ul").click(function(e){
	e.stopPropagation();
});