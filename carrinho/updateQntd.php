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
        $carrinho->setQntd($_POST['qntd']);

        $carrinhoDAO = new CarrinhoDAO();

        if($carrinhoDAO->updateQntd($carrinho))
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