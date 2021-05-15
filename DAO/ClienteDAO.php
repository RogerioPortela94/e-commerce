<?php

    require_once  (dirname(__FILE__)."/../DBConexao.php");

    class ClienteDAO
    {
        private static $cnx;

        public function __construct()
        {
            self::$cnx = DBConexao::getInstancia();
        }

        public function inserir(Cliente $cliente)
        {
            $query = self::$cnx->prepare("INSERT INTO cliente(
                                                            cliente_nome, 
                                                            cliente_cpf, 
                                                            cliente_rg,
                                                            cliente_nascimento,
                                                            cliente_telefone,
                                                            cliente_email) 
                                                    VALUES(?,?,?,?,?,?) RETURNING cliente_codigo");
            $query->bindValue(1,$cliente->getNome());
            $query->bindValue(2,$cliente->getCpf());
            $query->bindValue(3,$cliente->getRg());
            $query->bindValue(4,$cliente->getNascimento());
            $query->bindValue(5,$cliente->getTelefone());
            $query->bindValue(6,$cliente->getEmail());

            $query->execute();

            return $query->fetch();
        }



        public function login($user)
        {
            $query = self::$cnx->prepare("SELECT cliente_codigo FROM cliente WHERE cliente_email = ? OR cliente_cpf = ? OR cliente_rg = ?");
            $query->bindValue(1,$user);
            $query->bindValue(2,$user);
            $query->bindValue(3,$user);
            $query->execute();

            return $query->fetch();
        }
    }
?>