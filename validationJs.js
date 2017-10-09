document.getElementById('btnCadastrar').addEventListener('click', function(){
	var nome = document.getElementById('nome').text;
	var email = document.getElementById('email').text;

	if(nome == undefined && email == undefined){
		alert('Informe os dados!!!');
	}

});