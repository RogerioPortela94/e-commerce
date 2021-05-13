<?php
    class Cliente
    {
        private $codigo;
        private $nome;
        private $cpf;
        private $rg;
        private $nascimento;
        private $telefone;
        private $email;

        function __construct()
        {
            
        }

        public function setCodigo($codigo)
        {
            $this->codigo = $codigo;
        }
        public function getCodigo()
        {
            return $this->codigo;
        }

        public function setNome($nome)
        {
            $this->nome = $nome;
        }
        public function getNome()
        {
            return $this->nome;
        }

        public function setCpf($cpf)
        {
            $this->cpf = $cpf;
        }
        public function getCpf()
        {
            return $this->cpf;
        }
        
        public function setRg($rg)
        {
            $this->rg= $rg;
        }
        public function getRg()
        {
            return $this->rg;
        }

        public function setNascimento($nascimento)
        {
            $this->nascimento= $nascimento;
        }
        public function getNascimento()
        {
            return $this->nascimento;
        }

        public function setTelefone($telefone)
        {
            $this->telefone= $telefone;
        }
        public function getTelefone()
        {
            return $this->telefone;
        }

        public function setEmail($email)
        {
            $this->email= $email;
        }
        public function getEmail()
        {
            return $this->email;
        }
    }
?>