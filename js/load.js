$(document).ready(function(){
    
    $("main").load("html/principal.html");
    
    // Executa o evento CLICK em todos os links do menu
    $("#carregar").click(function(e){
        e.preventDefault();
        
        // Faz o carregamento da página de acordo com o COD da página, que vai pegar os valores da página.
        $("main").load($(this).attr("href"));
    });

});


function carregar(){
    //Fecha modal
    $(".modal").modal("toggle");

    $("main").load("html/cadastro.html");
}
