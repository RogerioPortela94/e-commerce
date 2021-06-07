$(document).ready(function(){
    
    iniciar();
    
    // Executa o evento CLICK em todos os links do menu
    $("#carregar").click(function(e){
        e.preventDefault();
        numeroItensCarrinho();
        // Faz o carregamento da página de acordo com o COD da página, que vai pegar os valores da página.
        $("main").load($(this).attr("href"));
    });

});

function iniciar(){
    session();
    listarProdutos();
    listarCarrinho();
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
            numeroItensCarrinho();
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
            numeroItensCarrinho();
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
            listarCarrinho();
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
        beforeSend: function() {}
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

function numeroItensCarrinho(){

    $.ajax({
        url: "carrinho/itensCart.php",
        datatype: "html",
        cache: false,
        beforeSend: function(){}
    }).done(function(msg) {
        if (msg == "erro") {
            $("#itensCarrinho").remove();
        }else{
            $("#itensCarrinho").remove();
            $("#numCarrinho").append("<span id=\"itensCarrinho\">"+msg+"</span>");
        }
    }).fail(function(jqXHR, textStatus, msg) {
        alert(msg);
    });
}

function endereco(){
    $("#dadosPessoais-tab").attr("class","nav-link disabled");
    $("#endereco-tab").attr("class","nav-link active");
    $("#dadosPessoais").attr("class","tab-pane fade p-3");
    $("#endereco").attr("class","tab-pane fade show active p-3");
    $("#login-tab").attr("class","nav-link disabled");
    $("#login").attr("class","tab-pane fade p-3");
}
function dadosPessoais(){
    $("#dadosPessoais-tab").attr("class","nav-link active");
    $("#dadosPessoais").attr("class","tab-pane fade show active p-3");
    $("#endereco-tab").attr("class","nav-link disabled");
    $("#endereco").attr("class","tab-pane fade  p-3");
    $("#login-tab").attr("class","nav-link disabled");
    $("#login").attr("class","tab-pane fade p-3");
}
function loginCadastro(){
    $("#dadosPessoais-tab").attr("class","nav-link disabled");
        $("#dadosPessoais").attr("class","tab-pane fade p-3");
        $("#endereco-tab").attr("class","nav-link disabled");
        $("#login-tab").attr("class","nav-link active");
        $("#endereco").attr("class","tab-pane fade p-3");
        $("#login").attr("class","tab-pane fade show active p-3");
}
function cadastrar(){
    frm_dados = $("#frm_dados").serialize();
    frm_endereco = $("#frm_endereco").serialize();
    frm_login = $("#frm_login").serialize();
    formulario = frm_dados + "&" + frm_endereco + "&" + frm_login;

    $.ajax({
        url: 'cadastro/inserir.php',
        type: 'post',
        data: formulario,
        datatype: 'html',
        cache: false,
        beforeSend: function() {}
    }).done(function(msg) {
        if (msg == "ok") {
            cadastroStatus(msg);
        } else {
            cadastroStatus(msg);
        }
    }).fail(function(jqXHR, textStatus, msg) {
        cadastroStatus(msg);
    });
    
}

function cadastroStatus(msg){
    if (msg == "ok") {
        $('#sucessoModal').modal('show');
        $('#sucessoModal').on('hidden.bs.modal', function (e) {
            iniciar();
            $('#loginModal').modal('show');
        });
    } else {
        $('#erroMsg').append(msg);
        $('#erroModal').modal('show');
    }
}

function listarCarrinho(){
    $.ajax({
        url: 'carrinho/listar.php',
        datatype: 'json',
        cache: false,
        beforeSend: function() {

        }
    }).done(function(msg){
        var data = JSON.parse(msg);
        if(data != "erro"){
            var total = 0;
            var c = 0;
            $("#listarCarrinho").remove();
            $("#itensCarrinhoLista").append("<div class=\"card-body\" id=\"listarCarrinho\">");
            for(c; c<data.length; c++){
                total += parseFloat(data[c]['produto_valor']);
                $("#listarCarrinho").append(
                    "<div  class=\"row\" id=\"item"+data[c]['produto_codigo']+"\">"+
                        "<div class=\"col col-sm-2\">"+
                            "<img class=\"img-fluid\" style=\"max-height: 200px; max-width: 100px;\" src=\"img/produtos/produto"+data[c]['produto_codigo']+"/produto"+data[c]['produto_codigo']+"Capa.jpg\" alt=\"Imagem de capa do card\">"+
                        "</div>"+
                        "<div class=\"col\">"+
                            "<h5 class=\"card-title\">"+data[c]['produto_nome']+"</h5>"+
                            "<p class=\"card-text\">"+data[c]['produto_autor']+"</p>"+    
                            "<div class=\"input-group mb-3\" style=\"padding-top: 30px; max-width: 150px;\">"+  
                                "<div class=\"input-group-prepend\">"+
                                    "<label class=\"input-group-text\" for=\"inputGroupSelect01\">Qntd: </label>"+
                                "</div>"+
                                "<select class=\"custom-select\" id=\"inputGroupSelect01\">"+
                                    "<option value=\"1\" selected>1</option>"+
                                    "<option value=\"2\">2</option>"+
                                    "<option value=\"3\">3</option>"+
                                    "<option value=\"4\">4</option>"+
                                    "<option value=\"5\">5</option>"+
                                "</select>"+
                            "</div>"+
                        "</div>"+
                        "<div class=\"col text-right\">"+
                            "<p class=\"card-text\">"+data[c]['produto_valor']+"</p>"+
                            "<div style=\"padding-top: 65px;\">"+
                                "<button class=\"btn btn-secondary\"  onclick=\"deletarItemCarrinho("+data[c]['produto_codigo']+")\" ><i class=\"fas fa-trash\" style=\"font-size:20px; color:black;\"></i></button>"+
                            "</div>"+
                        "</div>"
                );
                
                if(c<(data.length-1)){
                    $("#listarCarrinho").append("</div><hr>");
                }   
            }
            $("#listarCarrinho").append(
                "</div>"+
                "<div class=\"card-footer text-right bg-transparent\">"+
                    "<p>SUB TOTAL: R$ "+total+" </p>"+
                    "<button class=\"btn btn-primary h-25\">Finalizar Compra</button>"+
                "</div>"+
            "</div>"
            );
        }else{
            $("#listarCarrinho").remove();
            $("#itensCarrinhoLista").append(
                "<div class=\"card-body\" id=\"listarCarrinho\">"+
                    "<h1>Carrinho Vazio</h1>"+
                "</div>"
            );
        }


    }).fail(function(jqXHR, textStatus, msg) {
        alert(msg);
    });
}

function deletarItemCarrinho(produtoCodigo){
    var data =  {produto_codigo : produtoCodigo};
    if(confirm("Deseja excluir este item do carrinho?")){
        $.ajax({
            url: 'carrinho/deletar.php',
            type: 'post',
            data: data,
            datatype: 'html',
            cache: false,
            beforeSend: function() {}
        }).done(function(msg) {
            
            if (msg == "ok") {
                alert("Produto deletado do carrinho");
                //$('#carregar').trigger('click');
                //$("main").load("html/cart.html");
                listarCarrinho();
                numeroItensCarrinho();
            } else{
                alert(msg);
            }
        }).fail(function(jqXHR, textStatus, msg) {
            cadastroStatus(msg);
        });
    }
}

function detalheProduto(produto){
    $("main").load("html/detalhe.html");

    var data = {produto : produto};

    $.ajax({
        url: 'produto/detalhe.php',
        type: 'POST',
        data: data,
        datatype: 'json',
        cache: false,
        beforeSend: function() {

        }
    }).done(function(msg){
        var data = JSON.parse(msg);
        if(data != "erro"){
            $("#detalheProduto").append(
                    "<div  class=\"row\" id=\"item\">"+
                        "<div class=\"col col-sm-3 text-center\">"+
                            "<img class=\"img-fluid\" style=\"max-height: 400px; max-width: 230px;\" src=\"img/produtos/produto"+data['produto_codigo']+"/produto"+data['produto_codigo']+"Capa.jpg\" alt=\"Imagem de capa do card\">"+
                        "</div>"+
                        "<div class=\"col\">"+
                            "<div class=\"row\">"+
                                "<div class=\"col\">"+
                                    "<h2 class=\"card-title\">"+data['produto_nome']+"</h2>"+
                                "</div>"+
                                "<div class=\"col text-right\">"+
                                    "<h4 class=\"card-text\" style=\"margin-right: 10px; margin-top: 10px;\"> R$  "+data['produto_valor']+"</h4>"+
                                "</div>"+
                            "</div>"+
                            "<div class=\"row\">"+
                                "<div class=\"col\">"+
                                    "<h4 class=\"card-title\">"+data['produto_autor']+"</h4>"+
                                "</div>"+
                                "<div class=\"col text-right\">"+
                                    "<button class=\"btn btn-success\" style=\"margin-right: 10px;\">Adicionar ao Carrinho</button>"+
                                "</div>"+
                                
                            "</div>"+
                            "<div class=\"row\" style=\"padding: 15px;\">"+
                                "<p class=\"card-text\" >"+data['produto_descricao']+"</p>"+
                            "</div>"+
                                
                        "</div>"+
                    "</div>"+
                    "<hr>"+
                    "<div class=\"container-fluid\">"+
                        
                        "<h5 class=\"card-text row\">Editora: "+data['produto_editora']+"</h5>"+
                        "<h5 class=\"card-text row\">Número de Páginas: "+data['produto_paginas']+"</h5>"+
                        "<h5 class=\"card-text row\">Dimensões: "+data['produto_dimensao']+"</h5>"+
                        "<h5 class=\"card-text row\">Data de Lançamento:  "+data['produto_lancamento']+"</h5>"+
                        "<h5 class=\"card-text row\">Categoria:  "+data['categoria_descricao']+"</h5>"+
                    "</div>"
            );
        }else{
            $("#detalheProduto").append("ERRO");
        }


    }).fail(function(jqXHR, textStatus, msg) {
        alert(msg);
    });
}

function listarProdutos(){
    var pesquisa = getUrlVars()["pesquisar"];
    var categoria = getUrlVars()["categoria"];
    if(pesquisa != null && pesquisa !== undefined){
        var data = {pesquisar : pesquisa};
    }else if(categoria != null && categoria !== undefined){
        var data = {categoria : categoria};;
    }else{
        var data = {pesquisar : " "};
    }
   

    $.ajax({
        url: 'produto/pesquisar.php',
        type: 'GET',
        data: data,
        datatype: 'json',
        cache: false,
        beforeSend: function() {

        }
    }).done(function(msg){
        var data = JSON.parse(msg);
        
        if(data != "erro"){
            for(c=0; c<data.length; c++){
                $("#listarProdutos").append(
                        "<div style=\"padding: 2%\" class=\"col-sm-3\">"+
                            "<div class=\"card\">"+
                                "<div class=\"text-center\">"+
                                    "<a href=\"\" onclick=\"detalheProduto("+data[c]['produto_codigo']+"); return false;\">"+
                                        //"<a href=\"?produto="+data[c]['produto_codigo']+"\">"+
                                            //link para capa de acordo com o produto
                                            "<img class=\"card-img-top img-fluid\" style=\"max-height: 300px; max-width: 250px;\" src=\"img/produtos/produto"+data[c]['produto_codigo']+"/produto"+data[c]['produto_codigo']+"Capa.jpg\" alt=\"Imagem de capa do card\">"+
                                        //"</a>"+
                                    "</a>"+
                                "</div>"+
                                "<div class=\"card-body text-center\">"+
                                    //nome e autor
                                    "<h5 class=\"card-title\">"+data[c]['produto_nome']+"</h5>"+
                                    "<p class=\"card-text\">"+data[c]['produto_autor']+"</p></div>"+
                                "</div>"+
                                "<div class=\"card-footer\" style=\"padding: 0rem;\">"+
                                    "<div class=\"row\">"+
                                        "<div class=\"col w-100\">"+
                                            "<p class=\"card-text\">R$ "+data[c]['produto_valor']+"</p>"+
                                        "</div>"+
                                        "<div class=\"col text-right\">"+
                                            "<button class=\"btn btn-primary w-100\" onclick=\"carrinho("+data[c]['produto_codigo']+")\"><i class=\"fas fa-cart-plus\" style=\"font-size:27px; color:white;\"></i></button>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                            "</div>"+
                        "</div>"
                );
                
            }
        }else{
            $("#listarProdutos").append("<h1>Nenhum Produto Encontrado</h1>")
        }


    }).fail(function(jqXHR, textStatus, msg) {
        alert(msg);
    });
}

function carrinho(produtoCodigo){
    var data =  {produto_codigo : produtoCodigo};

    $.ajax({
        url: 'carrinho/adicionar.php',
        type: 'post',
        data: data,
        datatype: 'html',
        cache: false,
        beforeSend: function() {}
    }).done(function(msg) {
        if (msg == "ok") {
            alert("Produto adicionado ao carrinho");
            //$("#numCarrinho").trigger('click');
            numeroItensCarrinho();
        } else if(msg == "saiu"){
            alert("Faça login para adicionar itens ao carrinho!");
        } else{
            alert(msg);
        }
    }).fail(function(jqXHR, textStatus, msg) {
        cadastroStatus(msg);
    });
}

//Pega os valores da url criando um array
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function home(){
    window.location.href = "http://localhost/e-commerce/";
}

function categorias(param){
    $("main").load("html/principal.html");
    window.location = "?categoria=" + param;
}


var senha = document.getElementById("senha"), confirmar_senha = document.getElementById("confirmar_senha");

function validarSenha(){
  if(senha.value != confirmar_senha.value) {
    confirmar_senha.setCustomValidity("Senhas diferentes!");
  } else {
    confirmar_senha.setCustomValidity('');
  }
}

senha.onchange = validarSenha;
confirmar_senha.onkeyup = validarSenha;