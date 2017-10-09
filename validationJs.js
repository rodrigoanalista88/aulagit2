document.getElementById('btnCadastrar').addEventListener('click', function(){
	var nome = document.getElementById('nome').value;
	var email = document.getElementById('email').value;

	if(!nome && !email){
		alert('Informe os dados!!!');
	}else{
		alert('Dados enviados!');
	}

});