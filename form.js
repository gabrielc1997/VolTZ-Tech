
$('#demo').click(function () {
    $("#contactform").css("display", "block");
});

$(document).ready(function () {

    $("#fecharform").click(function () {
        $("#contactform").css("display", "none");

    });
});

$('#contactform').submit(function (e) {
    e.preventDefault();
    const nome = $('input[name="nome"]').val();
    const email = $('input[name="email"]').val();
    const telefone = $('input[name="telefone"]').val();
    const empresa = $('input[name="empresa"]').val();
    const site = $('input[name="site"]').val();
    const interesse = $('textarea[name="interesse"]').val();



    var destino = $("#destino").val();
    var data_prevista = $("#data_prevista").val();       
    var plano = $("#plano").val();


    var arrCheck = [];

    $("input:checkbox[name=servicos]:checked").each(function(){
        arrCheck.push($(this).val());
        console.log(arrCheck)
    });
    
    arrCheck.forEach(function(item) {
        console.log(item ? 'true' : 'false');
    });
    var myVar = arrCheck.toString();
    console.log(myVar)







    $.ajax({
        url: 'sendmail.php', // caminho para o script que vai processar os dados
        type: 'POST',
        data: {
            nome: nome,
            email: email,
            telefone: telefone,
            empresa: empresa,
            site: site,
            interesse: interesse,
            servicos: myVar
        },
        success: function (response) {
            $('#resp').html(response);
        },
        error: function (xhr, status, error) {
            alert(xhr.responseText);
        }
    });
    return false;
});