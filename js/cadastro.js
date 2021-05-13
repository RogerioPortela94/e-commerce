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
function login(){
    $("#dadosPessoais-tab").attr("class","nav-link disabled");
        $("#dadosPessoais").attr("class","tab-pane fade p-3");
        $("#endereco-tab").attr("class","nav-link disabled");
        $("#login-tab").attr("class","nav-link active");
        $("#endereco").attr("class","tab-pane fade p-3");
        $("#login").attr("class","tab-pane fade show active p-3");
}
function cadastrar(){
    alert("sem conexão com o Banco de dados");
}