<?php
    class Produto
    {
        private $produto_codigo;
        private $produto_nome;
        private $produto_descricao;
        private $produto_dimensao;
        private $produto_editora;
        private $produto_paginas;
        private $produto_lancamento;
        private $produto_valor;
        private $produto_qntd;
        private $produto_autor;
        private $categoria_codigo;

        function __construct()
        {
            
        }

        public function setProdutoCodigo($produto_codigo)
        {
            $this->produto_codigo= $produto_codigo;
        }
        public function getProdutoCodigo()
        {
            return $this->produto_codigo;
        }

        public function setProdutoNome($produto_nome)
        {
            $this->produto_nome = $produto_nome;
        }
        public function getProdutoNome()
        {
            return $this->produto_nome;
        }

        public function setProdutoDescricao($produto_descricao)
        {
            $this->produto_descricao = $produto_descricao;
        }
        public function getProdutoDescricao()
        {
            return $this->produto_descricao;
        }

        public function setProdutoDimensao($produto_dimensao)
        {
            $this->produto_dimensao = $produto_dimensao;
        }
        public function getProdutoDimensao()
        {
            return $this->produto_dimensao;
        }

        public function setProdutoEditora($produto_editora)
        {
            $this->produto_editora= $produto_editora;
        }
        public function getProdutoEdiora()
        {
            return $this->produto_editora;
        }

        public function setProdutoPaginas($produto_paginas)
        {
            $this->produto_paginas = $produto_paginas;
        }
        public function getProdutoPaginas()
        {
            return $this->produto_paginas;
        }

        public function setProdutoLancamento($produto_lancamento)
        {
            $this->produto_lancamento = $produto_lancamento;
        }
        public function getProdutoLancamento()
        {
            return $this->produto_lancamento;
        }

        public function setProdutoValor($produto_valor)
        {
            $this->produto_valor = $produto_valor;
        }
        public function getProdutoValor()
        {
            return $this->produto_valor;
        }

        public function setProdutoQntd($produto_qntd)
        {
            $this->produto_qntd = $produto_qntd;
        }
        public function getProdutoQntd()
        {
            return $this->produto_qntd;
        }

        public function setProdutoAutor($produto_autor)
        {
            $this->produto_autor = $produto_autor;
        }
        public function getProdutoAutor()
        {
            return $this->produto_autor;
        }

        public function setCategoriaCodigo($categoria_codigo)
        {
            $this->categoria_codigo = $categoria_codigo;
        }
        public function getCategoria()
        {
            return $this->categoria_codigo;
        }
        
    }
?>