var hover = function(){
	$('.display-container').mouseover(function(){
		$('.link-container').show();
		$('.display-container').mouseleave(function(){
			$('.link-container').hide();
		});
	});
};

var nameHover = function(){
	$('.col-md-2').mouseover(function(){
		$('.initals').text('bradley')
		$('.e').text('ellis');
	});
}

$(document).ready(function(){
	hover();
})