<?php
    class Pedido
    {
        private $pedido_codigo;
        private $cliente_codigo;
        private $pedido_data;
        private $pedido_valor_final;

        function __construct()
        {
            
        }

        public function setPedidoCodigo($pedido_codigo)
        {
            $this->pedido_codigo = $pedido_codigo;
        }
        public function getPedidoCodigo()
        {
            return $this->pedido_codigo;
        }

        public function setClienteCodigo($cliente_codigo)
        {
            $this->cliente_codigo= $cliente_codigo;
        }
        public function getClienteCodigo()
        {
            return $this->cliente_codigo;
        }

        public function setPedidoData($pedido_data)
        {
            $this->pedido_data = $pedido_data;
        }
        public function getPedidoData()
        {
            return $this->pedido_data;
        }

        public function setPedidoValorFinal($pedido_valor_final)
        {
            $this->pedido_valor_final = $pedido_valor_final;
        }
        public function getPedidoValorFinal()
        {
            return $this->pedido_valor_final;
        }
        
    }
?>