// good luck !

$('input').css('background',function() {
	return $(this).data('color');
});
	$('input').on('click',function() {
		var phil=$(this).data('color');
		

if (checked()){
 $(".main").css('color',phil)

}


 else {
	
		$("body").css('background-color',phil);

}


});

function checked (){

	return $("#modify-texte").is(":checked");
}

