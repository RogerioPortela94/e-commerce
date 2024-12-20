<?php

    require_once  (dirname(__FILE__)."/../DBConexao.php");

    class LoginDAO
    {
        private static $cnx;

        public function __construct()
        {
            self::$cnx = DBConexao::getInstancia();
        }

        public function inserir(Login $login)
        {
            //$query = self::$cnx->prepare("INSERT INTO usuario(nome, email, senha) VALUES(?,?,md5(?))");
            $query = self::$cnx->prepare("INSERT INTO login(cliente_codigo, login_senha) VALUES(?,?)");
            $query->bindValue(1,$login->getClienteCodigo());
            $query->bindValue(2,$login->getSenha());
            return $query->execute();
        }

        public function login(Login $login) 
        {
            $query = self::$cnx->prepare("SELECT cliente_codigo FROM login WHERE cliente_codigo = ? AND login_senha = ?");
            $query->bindValue(1,$login->getClienteCodigo());
            $query->bindValue(2,$login->getSenha());
            
            $query->execute();

            return $query->fetch();
        }

    }
?>