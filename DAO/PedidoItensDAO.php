<?php

    require_once  (dirname(__FILE__)."/../DBConexao.php");

    class UsuarioDAO
    {
        private static $cnx;

        public function __construct()
        {
            self::$cnx = DBConexao::getInstancia();
        }

        public function inserir(Usuario $usuario)
        {
            $query = self::$cnx->prepare("INSERT INTO usuario(nome, email, senha) VALUES(?,?,md5(?))");
            $query->bindValue(1,$usuario->getNome());
            $query->bindValue(2,$usuario->getEmail());
            $query->bindValue(3,$usuario->getSenha());
            return $query->execute();
        }




        public function buscar($email)
        {
            $query = self::$cnx->prepare("SELECT id, nome, email, senha FROM usuario WHERE email = ?");
            $query->bindValue(1,$email);
            $query->execute();

            return $query->fetch();
        }
    }
?>