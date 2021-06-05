<?php
    require_once "../DAO/ProdutoDAO.php";

    $produtoDAO = new ProdutoDAO();

    $produto = $produtoDAO->buscar();

    if(!empty($produto))
    {
        echo json_encode($produto);
    }
    else
    {
        echo json_encode(array("erro"));
    }


?>