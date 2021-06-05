<?php
    session_start();
    $retorno = "";
    if(!isset($_SESSION['id']))
    {
         session_unset();
         $retorno .= "erro";
    }else
    {
        require_once "../DAO/CarrinhoDAO.php";
    
        $carrinhoDAO = new CarrinhoDAO();
    
        $carrinho = $carrinhoDAO->itens($_SESSION['id']);
    
        if(!empty($carrinho))
        {
            $retorno .= $carrinho['itens'];
        }
        else
        {
            $retorno .= "erro";
        }
    }

    echo $retorno;
?>