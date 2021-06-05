$(document).ready(function(){
    
    //listar produtos
    listar();

});


function listar(){
    $.ajax({
        url: 'produto/listar.php',
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