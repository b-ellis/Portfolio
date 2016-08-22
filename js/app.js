var hover = function(){
	$('.display-container').mouseover(function(){
		$('.link-container').show();
		$('.display-container').mouseleave(function(){
			$('.link-container').hide();
		});
	});
};

$(document).ready(function(){
	hover();
})