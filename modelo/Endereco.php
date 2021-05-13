<?php
    class Endereco
    {
        private $codigo;
        private $cliente_codigo;
        private $cep;
        private $logradouro;
        private $numero;
        private $complemento;
        private $bairro;
        private $cidade;
        private $estado;

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

        public function setClienteCodigo($cliente_codigo)
        {
            $this->id = $cliente_codigo;
        }
        public function getClienteCodigo()
        {
            return $this->cliente_codigo;
        }

        public function setCep($cep)
        {
            $this->cep= $cep;
        }
        public function getCep()
        {
            return $this->cep;
        }

        public function setLogradouro($logradouro)
        {
            $this->logradouro = $logradouro;
        }
        public function getLogradouro()
        {
            return $this->logradouro;
        }

        public function setNumero($numero)
        {
            $this->numero= $numero;
        }
        public function getNumero()
        {
            return $this->numero;
        }

        public function setComplemento($complemento)
        {
            $this->complemento= $complemento;
        }
        public function getComplemento()
        {
            return $this->complemento;
        }

        public function setBairro($bairro)
        {
            $this->bairro= $bairro;
        }
        public function getBairro()
        {
            return $this->bairro;
        }

        public function setCidade($cidade)
        {
            $this->cidade= $cidade;
        }
        public function getCidade()
        {
            return $this->cidade;
        }

        public function setEstado($estado)
        {
            $this->estado= $estado;
        }
        public function getEstado()
        {
            return $this->estado;
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