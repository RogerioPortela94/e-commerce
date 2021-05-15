<?php

    require_once "../modelo/Cliente.php";
    require_once "../DAO/ClienteDAO.php";

    require_once "../modelo/Endereco.php";
    require_once "../DAO/EnderecoDAO.php";

    require_once "../modelo/Login.php";
    require_once "../DAO/LoginDAO.php";

    $retorno = "";

    if( !empty($_POST['nome']) && 
        !empty($_POST['cpf']) && 
        !empty($_POST['rg'])  && 
        !empty($_POST['nascimento'])  && 
        !empty($_POST['telefone'])  && 
        !empty($_POST['email'])  && 
        !empty($_POST['cep'])  && 
        !empty($_POST['logradouro'])  && 
        !empty($_POST['numero'])  && 
        !empty($_POST['bairro'])  && 
        !empty($_POST['cidade'])  && 
        !empty($_POST['estado'])  && 
        !empty($_POST['senha']) 
        ){

        $cliente = new Cliente();
        $endereco = new Endereco();
        $login = new Login();

        $cliente->setNome($_POST['nome']);
        $cliente->setCpf($_POST['cpf']);
        $cliente->setRg($_POST['rg']);
        $cliente->setNascimento($_POST['nascimento']);
        $cliente->setTelefone($_POST['telefone']);
        $cliente->setEmail($_POST['email']);

        $endereco->setCep($_POST['cep']);
        $endereco->setLogradouro($_POST['logradouro']);
        $endereco->setNumero($_POST['numero']);
        $endereco->setComplemento($_POST['complemento']);
        $endereco->setBairro($_POST['bairro']);
        $endereco->setCidade($_POST['cidade']);
        $endereco->setEstado($_POST['estado']);

        $login->setSenha($_POST['senha']);

        $clienteDAO = new ClienteDAO();
        $enderecoDAO = new EnderecoDAO();
        $loginDAO = new LoginDAO();

        $codigo= $clienteDAO->inserir($cliente);

        if(!empty($codigo)){
            $endereco->setClienteCodigo($codigo['cliente_codigo']);
            $login->setClienteCodigo($codigo['cliente_codigo']);

            if($enderecoDAO->inserir($endereco) && $loginDAO->inserir($login)){
                $retorno .= "ok";
            }else{
                $retorno .= "Erro interno";
            }
        }else{
            $retorno .= "Erro ao Inserir!";
        }

    }else {
        
        $retorno .= "Atenção! \n\n Existem campos vazios que precisam ser preenchidos!" ;
    }

    
    echo $retorno;
?>