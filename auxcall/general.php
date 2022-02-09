<?php
session_start();
require('../config/general.cfg.php');
require('../classes/Principal.class.php');

ini_set('default_charset', 'UTF-8');
$strb = Array("'");
$strr = Array("&#39;");

if (isset($_GET) && count($_GET) > 0) {
    foreach ($_GET as $llave => $valor) {
        $valor = (!is_array($valor)) ? htmlspecialchars($valor) : $valor;
        $valor = str_replace($strb, $strr, $valor);
        $_GET[$llave] = $valor;
    }
}
if (isset($_POST) && count($_POST) > 0) {
    foreach ($_POST as $llave => $valor) {
        $valor = (!is_array($valor)) ? htmlspecialchars($valor) : $valor;
        $valor = str_replace($strb, $strr, $valor);
        $_POST[$llave] = $valor;
    }
}

$ahac = (isset($_GET['ahac']) ? $_GET['ahac'] : (isset($_POST['ahac']) ? $_POST['ahac'] : NULL));

if (isset($ahac)) 
{
    switch ($ahac) 
    {
        case 'login':
            session_destroy();
            session_start();
            $_SESSION['usuAA'] = $_POST['user_id'];
            $_SESSION['tokenAA'] = $_POST['token'];
            $_SESSION['nameusuAA'] = $_POST['name_user'];
            $_SESSION['opciones'] = $_POST['opciones_user'];
            $_SESSION['branch_id'] = $_POST['branch_id'];
            $_SESSION['timeout'] = time();
            $respuesta_json     =   json_encode
            (
                array
                (
                    'bandera'       => true
                )
            );
            echo $respuesta_json;
        break;

        case 'logout':
            session_destroy();
            
            $respuesta_json     =   json_encode
            (
                array
                (
                    'bandera'       => true
                )
            );
            echo $respuesta_json;

        break;
    }
}
