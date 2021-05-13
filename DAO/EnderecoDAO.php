<?php

    require_once  (dirname(__FILE__)."/../DBConexao.php");

    class EnderecoDAO
    {
        private static $cnx;

        public function __construct()
        {
            self::$cnx = DBConexao::getInstancia();
        }

        public function inserir(Endereco $endereco)
        {
            $query = self::$cnx->prepare("INSERT INTO endereco(
                                                                cliente_codigo,
                                                                endereco_cep,
                                                                endereco_logradouro, 
                                                                endereco_numero,
                                                                endereco_complemento,
                                                                endereco_bairro,
                                                                endereco_cidade,
                                                                endereco_estado) 
                                                        VALUES(?,?,?,?,?,?,?,?)");
            $query->bindValue(1,$endereco->getClienteCodigo());
            $query->bindValue(2,$endereco->getCep());
            $query->bindValue(3,$endereco->getLogradouro());
            $query->bindValue(4,$endereco->getNumero());
            $query->bindValue(5,$endereco->getComplemento());
            $query->bindValue(6,$endereco->getBairro());
            $query->bindValue(7,$endereco->getCidade());
            $query->bindValue(8,$endereco->getEstado());
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