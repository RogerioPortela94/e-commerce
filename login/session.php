<?php
    session_start();
    
    if(!isset($_SESSION['id'])){
        session_unset();
        $retorno = array("status"=>"saiu");
        echo (json_encode($retorno));;;
    }else{
        $retorno = array(
            "id"=>$_SESSION['id'],
            "nome"=>$_SESSION['nome'],
            "status"=>"ok");
        echo (json_encode($retorno));;
    }
?>