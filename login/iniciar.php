<?php
    session_start();

    require_once "../DAO/ClienteDAO.php";
    require_once "../DAO/LoginDAO.php";
    require_once "../modelo/Login.php";

    $retorno = "";

    
    if(!empty($_POST['usuario']) && !empty($_POST['senha']))
    {

        $clienteDAO = new ClienteDAO();
        $loginDAO = new LoginDAO();
        $login = new Login();

        $cliente = $clienteDAO->login($_POST['usuario']);
        if(!empty($cliente))
        {
            $login->setClienteCodigo($cliente['cliente_codigo']);
            $login->setSenha($_POST['senha']);

            $clienteLogin = $loginDAO->login($login);

            if(!empty($clienteLogin)){
                $_SESSION['id'] =  $cliente['cliente_codigo'];
                $_SESSION['nome'] = $cliente['cliente_nome'];
                $retorno .= "ok";
            }else{
                $retorno .= "Senha Incorreta!";
            }
        }else
        {
            $retorno .= "Usuário Não Cadastrado!";
        }

    }else
    {
        $retorno .= "Existem campos vazio. Preencha!";
    }

    echo $retorno;
?>