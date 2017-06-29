$(document).ready(function(){
	$("#agregar").click(function(e){
		e.preventDefault();
		input= $("#inputt").val();
		//check= $('input[type=checkbox]').click();
		$('#acomulador').append('<p><input class="with-gap" name="group3" type="radio" id="test5" checked /><label for="test5">' + input +'</label></p>' +'<button class="waves-effect waves-light btn" id="remover" class="rem">X</button>');
       // $('#acomulador').append(check + input + '<br>');
        //$('#acomulador').append('<input type="checkbox">'+ input +'<button class="rem">x</button>' +'<br>');
       $('.rem').on('click' , '.delete' , function(){
       	$(this).parent().remove();
       });
   });
});