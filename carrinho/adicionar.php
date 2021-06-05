<?php
    session_start();
    $retorno = "";

    if(!isset($_SESSION['id'])){
        session_unset();
        $retorno .= ("saiu");
    }else{
        require_once "../modelo/Carrinho.php";
        require_once "../DAO/CarrinhoDAO.php";

        $carrinho = new Carrinho();

        $carrinho->setProdutoCodigo($_POST['produto_codigo']);
        $carrinho->setClienteCodigo($_SESSION['id']);

        $carrinhoDAO = new CarrinhoDAO();

        if($carrinhoDAO->inserir($carrinho))
        {
            $retorno .= "ok";
        }
        else
        {
            $retorno .= "erro";
        }

    }
    
    echo $retorno;

?>