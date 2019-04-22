'use strict'

$('document').ready(function(){
	console.log(screen.width + ' '  + screen.height );
	var theme = $('#theme');
	if(screen.width<screen.height){
		theme.attr("href","css/stylePhone.css");
	}
	else{
		theme.attr("href","css/stylePc.css");
	}
});


