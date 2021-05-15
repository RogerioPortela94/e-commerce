<?php
    class Login
    {
        private $cliente_codigo;
        private $senha;

        function __construct()
        {
            
        }

        public function setClienteCodigo($cliente_codigo)
        {
            $this->cliente_codigo = $cliente_codigo;
        }
        public function getClienteCodigo()
        {
            return $this->cliente_codigo;
        }

        public function setSenha($senha)
        {
            $this->senha = $senha;
        }
        public function getSenha()
        {
            return $this->senha;
        }
        
    }
?>