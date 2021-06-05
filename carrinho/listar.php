<?php
    session_start();
    if(!isset($_SESSION['id']))
    {
         session_unset();
         echo (json_encode(array("erro")));
    }else
    {
        require_once "../DAO/CarrinhoDAO.php";
    
        $carrinhoDAO = new CarrinhoDAO();
    
        $carrinho = $carrinhoDAO->carrinho($_SESSION['id']);
    
        if(!empty($carrinho))
        {
            echo json_encode($carrinho);
        }
        else
        {
            echo json_encode(array("erro"));
        }
    }
    
?>