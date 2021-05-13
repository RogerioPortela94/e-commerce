<?php
    abstract class DBConexao{

        private static $instancia;

        const USER = "postgres";
        const SENHA = "postgres";
        
        public static function  getInstancia(){
            try{
                if(self::$instancia == null){
                    $stringConexao = "pgsql:host=localhost; port=5432; dbname=ecommerce";
                    self::$instancia = new PDO($stringConexao, self::USER, self::SENHA);
                    self::$instancia->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
                }
            }catch(PDOException $erro){
                echo $erro->getMessage();

                echo "Erro na conexão";
            }
            return self::$instancia;
        }
    }
?>