$(document).ready(function(){
	$("#agregar").click(function(){
        input= $("#inputt").val();
        $('#acomulador').append('<p><input class="with-gap" name="group3" type="radio" id="test5" checked /><label for="test5">' + input +'</label></p>' +'<a class="waves-effect waves-light btn" id="remover">remove</a>');

	});

});