$(document).ready(function(){
    $("#btnEndereco").click(function(e){
        e.preventDefault();

        $("#dadosPessoais-tab").attr("class","nav-link disabled");
        $("#endereco-tab").attr("class","nav-link active");
        $("#dadosPessoais").attr("class","tab-pane fade p-3");
        $("#endereco").attr("class","tab-pane fade show active p-3");
        $("#login-tab").attr("class","nav-link disabled");
        $("#login").attr("class","tab-pane fade p-3");
    });
    $("#btnLogin").click(function(e){
        e.preventDefault();
        ///terminar
        $("#dadosPessoais-tab").attr("class","nav-link disabled");
        $("#dadosPessoais").attr("class","tab-pane fade p-3");
        $("#endereco-tab").attr("class","nav-link disabled");
        $("#login-tab").attr("class","nav-link active");
        $("#endereco").attr("class","tab-pane fade p-3");
        $("#login").attr("class","tab-pane fade show active p-3");
    });
    $("#btnDadosPessoais").click(function(e){
        e.preventDefault();

        $("#dadosPessoais-tab").attr("class","nav-link actived");
        $("#dadosPessoais").attr("class","tab-pane fade show active p-3");
        $("#endereco-tab").attr("class","nav-link disabled");
        $("#endereco").attr("class","tab-pane fade  p-3");
        $("#login-tab").attr("class","nav-link disabled");
        $("#login").attr("class","tab-pane fade p-3");
    });
});