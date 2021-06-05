<?php
    class Categoria
    {
        private $categoria_codigo;
        private $categoria_descricao;


        function __construct()
        {
            
        }

        public function setCategoriaCodigo($categoria_codigo)
        {
            $this->categoria_codigo = $categoria_codigo;
        }
        public function getCategoriaCodigo()
        {
            return $this->categoria_codigo;
        }

        public function setCategoriaDescricao($categoria_descricao)
        {
            $this->categoria_descricao = $categoria_descricao;
        }
        public function getCategoriaDescricao()
        {
            return $this->categoria_descricao;
        }
        
    }
?>