<?php
    session_start();
    unset( $_SESSION['id'] );
    unset( $_SESSION['nome'] );
    session_destroy();
    session_unset();
    
    if(!isset($_SESSION['id'])){
        echo "ok";
    }else{
        echo "erro";
    }
?>