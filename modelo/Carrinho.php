<?php
    class Carrinho
    {
        private $produto_codigo;
        private $cliente_codigo;
        private $qntd;

        function __construct()
        {
            
        }

        public function setProdutoCodigo($produto_codigo)
        {
            $this->produto_codigo = $produto_codigo;
        }
        public function getProdutoCodigo()
        {
            return $this->produto_codigo;
        }

        public function setClienteCodigo($cliente_codigo)
        {
            $this->cliente_codigo = $cliente_codigo;
        }
        public function getClienteCodigo()
        {
            return $this->cliente_codigo;
        }

        public function setQntd($qntd)
        {
            $this->qntd = $qntd;
        }
        public function getQntd()
        {
            return $this->qntd;
        }
        
    }
?>