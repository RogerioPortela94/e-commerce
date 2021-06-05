$(document).ready(function(){
    
    iniciar();
    
    // Executa o evento CLICK em todos os links do menu
    $("#carregar").click(function(e){
        e.preventDefault();
        
        // Faz o carregamento da página de acordo com o COD da página, que vai pegar os valores da página.
        $("main").load($(this).attr("href"));
    });

    //verificar sessão ao iniciar
    session();

});

function iniciar(){
    $("main").load("html/principal.html");
}

function session(){
    //verificar sessão
    $.ajax({
        url: 'login/session.php',
        datatype: 'json',
        cache: false,
        beforeSend: function() {

        }
    }).done(function(msg) {
        var data = JSON.parse(msg);
        if (data.status == "ok") {
            //limpar dropdown do usuario
            $("#entrarUsuario").remove();

            //nome do usuario
            $("#itensUsuario").append("<a class=\"dropdown-item disabled\" href=\"\" id=\"nomeUsuario\"> "+data.nome+" </a>");

            //separador
            $("#itensUsuario").append("<div class=\"dropdown-divider\" id=\"divideUsuario1\"></div>");
            //ações do usuário
            $("#itensUsuario").append("<a class=\"dropdown-item\" href=\"#\" id=\"pedidosUsuario\">Meus Pedidos</a> ");
            $("#itensUsuario").append("<a class=\"dropdown-item\" href=\"#\" id=\"configUsuario\">Configurações</a>");
            //separador
            $("#itensUsuario").append("<div class=\"dropdown-divider\" id=\"divideUsuario2\"></div>");
            //sair
            $("#itensUsuario").append("<a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#sairModal\" href=\"\" onclick=\"sair()\" id=\"sairUsuario\">Sair</a>");

        } else {
            
            //limpar dropdown do usuario
            $("#nomeUsuario").remove();
            $("#divideUsuario1").remove();
            $("#pedidosUsuario").remove();
            $("#configUsuario").remove();
            $("#divideUsuario2").remove();
            $("#sairUsuario").remove();

            $("#itensUsuario").append("<a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#loginModal\" href=\"#\" id=\"entrarUsuario\">Entrar</a>");
        }
    }).fail(function(jqXHR, textStatus, msg) {
        alert(msg);
    });
}

function login(){
    formulario = $("#frm_login").serialize();

    $.ajax({
        url: 'login/iniciar.php',
        type: 'post',
        data: formulario,
        datatype: 'html',
        cache: false,
        beforeSend: function() {

        }
    }).done(function(msg) {
        if (msg == "ok") {
            //window.location.href = "html/principal.html";
            alert("login efetuado com sucesso");
            limpar();
            session();
            $(".modal").modal("toggle");
        } else {
            alert(msg);
        }
    }).fail(function(jqXHR, textStatus, msg) {
        alert(msg);
    });
}

function sair(){
    $.ajax({
        url: 'login/sair.php',
        datatype: 'html',
        cache: false,
        beforeSend: function() {

        }
    }).done(function(msg) {
        if (msg == "ok") {
            alert("Até Logo! \n\n Volte Sempre!");
            document.location.reload(true);
            session();
        } else {
            alert(msg);
        }
    }).fail(function(jqXHR, textStatus, msg) {
        alert(msg);
    });
}

function carregar(){
    //Fecha modal
    $(".modal").modal("toggle");

    $("main").load("html/cadastro.html");
}

function limpar(){
    $('#frm_login').each (function(){
        this.reset();
      });
}


