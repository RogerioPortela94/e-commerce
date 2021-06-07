<?php

    require_once  (dirname(__FILE__)."/../DBConexao.php");

    class ProdutoDAO
    {
        private static $cnx;

        public function __construct()
        {
            self::$cnx = DBConexao::getInstancia();
        }

        public function inserir(Produto $produto)
        {
            $query = self::$cnx->prepare("INSERT INTO usuario(nome, email, senha) VALUES(?,?,md5(?))");
            $query->bindValue(1,$produto->getProdutoNome());
            $query->bindValue(2,$produto->getProdutoDescricao());
            $query->bindValue(3,$produto->getProdutoDimensao());
            return $query->execute();
        }

        public function buscar()
        {
            $query = self::$cnx->prepare("SELECT produto_codigo, 
                                                 produto_nome, 
                                                 categoria_codigo,
                                                 produto_valor,
                                                 produto_autor 
                                          FROM produto");
            $query->execute();

            return $query->fetchAll();
        }

        public function produto($codigo){
            $query = self::$cnx->prepare("SELECT produto_codigo, 
                                                 produto_nome,
                                                 produto_autor, 
                                                 produto_descricao,
                                                 produto_dimensao,
                                                 produto_editora,
                                                 produto_paginas,
                                                 produto_lancamento,
                                                 produto_qntd,
                                                 produto_valor,
                                                 categoria.categoria_descricao AS categoria_descricao
                                          FROM produto 
                                          INNER JOIN categoria 
                                                    on produto.categoria_codigo = categoria.categoria_codigo
                                          WHERE produto_codigo = ?");
            $query->bindValue(1,$codigo);
            $query->execute();

            return $query->fetch();
        }

        public function categoria($codigo){
            $query = self::$cnx->prepare("SELECT produto_codigo, 
                                                 produto_nome,
                                                 categoria_codigo,
                                                 produto_valor
                                          FROM produto WHERE categoria_codigo = ?");
            $query->bindValue(1,$codigo);
            $query->execute();

            return $query->fetchAll();
        }

        public function pesquisar($pesquisa){
            $query = self::$cnx->prepare("SELECT    produto_codigo, 
                                                    produto_nome, 
                                                    produto_valor, 
                                                    categoria.categoria_codigo as categoria_codigo,
                                                    produto_autor
                                                FROM produto 
                                                INNER JOIN categoria 
                                                    on produto.categoria_codigo = categoria.categoria_codigo
                                                WHERE produto_nome LIKE ? OR 
                                                    produto_editora LIKE ? OR 
                                                    produto_autor LIKE ? OR 
                                                    categoria_descricao LIKE ?
                                                ORDER BY produto_codigo");
            $query->bindValue(1,$pesquisa);
            $query->bindValue(2,$pesquisa);
            $query->bindValue(3,$pesquisa);
            $query->bindValue(4,$pesquisa);
            $query->execute();

            return $query->fetchAll();
        }
    }
?>