$(document).ready(function(){
	$('.gallery__button[filter="mount"]').click(function(){
		if($(this).attr('val') == "off"){
			$('.gallery__button[filter]').attr('val','off');
			$(this).attr('val','on');
			$('.filter > div').hide(300);
			$('.filter > div[filter="mount"]').show(300);
		}
	});

	$('.gallery__button[filter="forest"]').click(function(){
		if($(this).attr('val') == "off"){
			$('.gallery__button[filter]').attr('val', 'off');
			$(this).attr('val','on');
			$('.filter > div').hide(300);
			$('.filter > div[filter = "forest"]').show(300);
		}
	});

	$('.gallery__button[filter = "land"]').click(function(){
		if($(this).attr('val') == 'off'){
			$('.gallery__button[filter]').attr('val', 'off');
			$(this).attr('val', 'on');
			$('.filter > div').hide(300);
			$('.filter > div[filter = "land"]').show(300);
		}
	});

	$('.gallery__button[filter = "all"]').click(function(){
		if($(this).attr('val') == 'off'){
			$('.gallery__button[filter]').attr('val', 'off');
			$(this).attr('val', 'on');
			$('.filter > div').show(300);
		}
	});

});