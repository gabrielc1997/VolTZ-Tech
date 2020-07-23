<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>

<?php 

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$empresa = $_POST['empresa'];
$site = $_POST['site'];
$interesse = $_POST['interesse'];
$servicos = $_POST['servicos'];



?>

<?php 

$to = "contato@voltz.tech";
$subject = "$assunto";
$mensagem = "<strong>Nome:</strong> $nome<br /><br /><strong>E-mail:</strong>$email<br /><br /><strong>Telefone:</strong> $telefone<br /><br /><strong>Empresa:</strong> $empresa <br /><br /><strong>site:</strong> $site  <br /><br /><strong>interesse:</strong> $interesse <strong>servicos:</strong> $servicos";
$header = "MIME-Version: 1.0\n";
$header .= "Content-type: text/html; charset=iso-8859-1\n";
$header .= "From: $email\n";
mail($to, $subject, $mensagem,$header);
echo "Enviado!";

?>


</body>
</html>