<?php
    require_once "../DAO/ProdutoDAO.php";
    require_once "../DAO/CategoriaDAO.php";

    $produtoDAO = new ProdutoDAO();
    
    if(isset($_GET['pesquisar']))
    {
        $produto = $produtoDAO->pesquisar("%".$_GET['pesquisar']."%");
    }
    elseif(isset($_GET['categoria']))
    {
        $categoriaDAO = new CategoriaDAO();
        $categoria = $categoriaDAO->buscar($_GET['categoria']);
        if(!empty($categoria))
        {
            $produto = $produtoDAO->categoria($categoria['categoria_codigo']);
        }
    }
    
    if(!empty($produto))
    {
        echo json_encode($produto);
    }
    else
    {
        echo json_encode(array("erro"));
    }
?>