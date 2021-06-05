$(document).ready(function(){
    
    //listar itens do carrinho
    listar();

});

function listar(){
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
                                "<button class=\"btn btn-secondary\"  onclick=\"deletar("+data[c]['produto_codigo']+")\" ><i class=\"fas fa-trash\" style=\"font-size:20px; color:black;\"></i></button>"+
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
                "</div>"
            );
        }else{
            $("#listarCarrinho").append("<h1>Carrinho Vazio</h1>");
        }


    }).fail(function(jqXHR, textStatus, msg) {
        alert(msg);
    });
}

function deletar(produtoCodigo){
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
                $("main").load("html/cart.html");
            } else{
                alert(msg);
            }
        }).fail(function(jqXHR, textStatus, msg) {
            cadastroStatus(msg);
        });
    }
}