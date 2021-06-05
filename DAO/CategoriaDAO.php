<?php

    require_once  (dirname(__FILE__)."/../DBConexao.php");

    class CategoriaDAO
    {
        private static $cnx;

        public function __construct()
        {
            self::$cnx = DBConexao::getInstancia();
        }


        public function buscar($categoria)
        {
            $query = self::$cnx->prepare("SELECT categoria_codigo
                                          FROM categoria WHERE categoria_descricao = ?");
            $query->bindValue(1,$categoria);
            $query->execute();

            return $query->fetch();
        }

    }
?>