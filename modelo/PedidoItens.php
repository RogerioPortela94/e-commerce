<?php
    class PedidoItens
    {
        private $pedido_codigo;
        private $produto_codigo;
        private $pedido_qntd;
        private $pedido_valor_total;

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

        public function setProdutoCodigo($produto_codigo)
        {
            $this->produto_codigo= $produto_codigo;
        }
        public function getProdutoCodigo()
        {
            return $this->produto_codigo;
        }

        public function setPedidoQntd($pedido_qntd)
        {
            $this->pedido_qntd = $pedido_qntd;
        }
        public function getPedidoQntd()
        {
            return $this->pedido_qntd;
        }

        public function setPedidoValorTotal($pedido_valor_total)
        {
            $this->pedido_valor_total = $pedido_valor_total;
        }
        public function getPedidoValorTotal()
        {
            return $this->pedido_valor_total;
        }
    }
?>