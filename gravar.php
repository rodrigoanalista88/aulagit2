<?php
	$nome = $_POST["nome"];
	$email = $_POST["email"];

	$arq = fopen('teste.txt', 'a+');
	fwrite($arq, $nome . " - " . $email);
	fwrite($arq, "\n");

	fclose($arq);
	echo "Gravado com sucesso!";
	echo "<br><br><a href='index.html'>Voltar</a>";
