<?php
$varCache = '?v=20220304';

define("DEBUG_MODE", true); //cambiar a false, al pasar a produccion
define("URL_AA", 'http://localhost/frontend-auto/');
//define("URL_AA", 'https://app.aamotorsla.com/');
define("PATH_AA","./");
//para poder levantar la interface
define("URL_AA_TEMPLATE", URL_AA.'assets/');
define("URL_AA_RCSS", URL_AA.'assets/css/');
define("URL_AA_RPLUGINS", URL_AA.'assets/plugins/');
define("URL_AA_RJS", URL_AA.'assets/js/');
define("URL_AA_RIMG", URL_AA.'assets/images/');

//son estilos o js personalizados
define("URL_AA_CSS", PATH_AA.'css/');
define("URL_AA_JS", PATH_AA.'js/');
define("URL_AA_IMG", URL_AA.'img/');

date_default_timezone_set('America/Los_Angeles');


$array_modulos = array
(
    "errors" => "errors",
    "login" => "login",
    "home" => "home",
    "make" => "make",
    "model" => "model",
    "body_type"  => "body_type",
    "user"  => "user",
    "car"  => "car",
    "logout"=> "logout",
    "style"=> "style",
    "customer"=> "customer",
    "reset_password" => "reset_password",
    "create_password"=> "create_password",
    "loan"=> "loan",
    "config_app"=> "config_app"
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