$(".sub-menu").click(function(){
	$(this).children("ul").slideToggle();
});

$("ul").click(function(e){
	e.stopPropagation();
});

jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});