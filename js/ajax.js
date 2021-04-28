function login() {
    formulario = $("#frm_login").serialize();

    $.ajax({
        url: 'usuario/login.php',
        type: 'post',
        data: formulario,
        datatype: 'html',
        cache: false,
        beforeSend: function() {

        }
    }).done(function(msg) {
        if (msg == "ok") {
            window.location.href = "html/principal.html";
        } else {
            alert(msg);
        }
    }).fail(function(jqXHR, textStatus, msg) {
        alert(msg);
    });
}

function cadastrar() {
    formulario = $("#frm_novo").serialize();

    $.ajax({
        url: 'usuario/inserir.php',
        type: 'post',
        data: formulario,
        datatype: 'html',
        cache: false,
        beforeSend: function() {}
    }).done(function(msg) {
        if (msg == "ok") {
            alert("Cadastrado com Sucesso!");
        } else {
            alert(msg);
        }
    }).fail(function(jqXHR, textStatus, msg) {
        alert(msg);
    });
}