<?php
$varCache = '?v=20220101';

define("DEBUG_MODE", true); //cambiar a false, al pasar a produccion
define("URL_AA", 'http://localhost/frontend-auto/');
//para poder levantar la interface
define("URL_AA_TEMPLATE", URL_AA.'assets/');
define("URL_AA_RCSS", URL_AA.'assets/css/');
define("URL_AA_RPLUGINS", URL_AA.'assets/plugins/');
define("URL_AA_RJS", URL_AA.'assets/js/');
define("URL_AA_RIMG", URL_AA.'assets/images/');

//son estilos o js personalizados
define("URL_AA_CSS", URL_AA.'css/');
define("URL_AA_JS", URL_AA.'js/');
define("URL_AA_IMG", URL_AA.'img/');


$array_modulos = array
(
    "errors" => "errors",
    "login" => "login"
);

if(DEBUG_MODE)
{
    $session_inactive = 9000; //Define el tiempo maximo para una sesion inactiva. Por defecto 900s = 15 min
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
}
else
{
    $session_inactive = 900; //Define el tiempo maximo para una sesion inactiva. Por defecto 900 = 15 min
}