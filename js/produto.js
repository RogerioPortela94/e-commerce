$(document).ready(function(){
    
    //listar produtos
    listar();

});

function pesquisa(){
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
                                    //link para capa de acordo com o produto
                                    "<img class=\"card-img-top img-fluid\" style=\"max-height: 300px; max-width: 250px;\" src=\"img/produtos/produto"+data[c]['produto_codigo']+"/produto"+data[c]['produto_codigo']+"Capa.jpg\" alt=\"Imagem de capa do card\">"+
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

function listar(){
    pesquisa();
}

function categoria(){
    alert("teste");
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