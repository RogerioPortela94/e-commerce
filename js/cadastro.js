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
            $("main").load("html/principal.html");
            $('#loginModal').modal('show');
        });
    } else {
        $('#erroMsg').append(msg);
        $('#erroModal').modal('show');
    }
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