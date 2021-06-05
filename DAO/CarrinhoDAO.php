<?php

    require_once  (dirname(__FILE__)."/../DBConexao.php");

    class CarrinhoDAO
    {
        private static $cnx;

        public function __construct()
        {
            self::$cnx = DBConexao::getInstancia();
        }

        public function inserir(Carrinho $carrinho)
        {
            $query = self::$cnx->prepare("INSERT INTO carrinho(cliente_codigo, produto_codigo) VALUES(?,?)");
            $query->bindValue(1,$carrinho->getClienteCodigo());
            $query->bindValue(2,$carrinho->getProdutoCodigo());
            return $query->execute();
        }

        public function delete(Carrinho $carrinho){
            $query = self::$cnx->prepare("DELETE FROM carrinho WHERE cliente_codigo = ? AND produto_codigo = ?");
            $query->bindValue(1,$carrinho->getClienteCodigo());
            $query->bindValue(2,$carrinho->getProdutoCodigo());
            return $query->execute();
        }

        public function carrinho($cliente_codigo)
        {
            $query = self::$cnx->prepare("select cliente_codigo, produto.produto_codigo as produto_codigo, produto_nome, produto_autor, produto_valor from carrinho inner join produto on carrinho.produto_codigo = produto.produto_codigo WHERE cliente_codigo = ?");
            $query->bindValue(1,$cliente_codigo);
            $query->execute();

            return $query->fetchAll();
        }
        public function itens($cliente_codigo)
        {
            $query = self::$cnx->prepare("select COUNT(produto_codigo) AS itens from carrinho WHERE cliente_codigo = ?");
            $query->bindValue(1,$cliente_codigo);
            $query->execute();

            return $query->fetch();
        }
    }
?>