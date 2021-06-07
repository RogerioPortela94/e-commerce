<?php
    require_once "../DAO/ProdutoDAO.php";

    $produtoDAO = new ProdutoDAO();

    $produto = $produtoDAO->produto($_POST['produto']);

    if(!empty($produto))
    {
        echo json_encode($produto);
    }
    else
    {
        echo json_encode(array("erro"));
    }
?>