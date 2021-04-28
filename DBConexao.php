<?php
    abstract class DBConexao{

        private static $instancia;

        const USER = "root";
        const SENHA = "";
        
        public static function  getInstancia(){
            try{
                if(self::$instancia == null){
                    $stringConexao = "mysql:host=localhost; port=3306; dbname=prova22bm";
                    self::$instancia = new PDO($stringConexao, self::USER, self::SENHA);
                    self::$instancia->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
                }
            }catch(PDOException $erro){
                //echo $erro->getMessage();

                echo "Erro na conexão";
            }

            return self::$instancia;
        }
    }
?>