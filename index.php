<?php
session_start();
require('./config/general.cfg.php');
require('./classes/Principal.class.php');
require('./classes/Interfaces.class.php');
ini_set('default_charset', 'UTF-8');

$obj_principal  =   new Principal();


if (isset($_GET) && count($_GET) > 0) 
{
    $_GET = $obj_principal->sanitizarArrayEntrada($_GET);
}
if (isset($_POST) && count($_POST) > 0) 
{
    $_POST = $obj_principal->sanitizarArrayEntrada($_POST);
}


if (isset($_SESSION['timeout'])) 
{
    $session_life = time() - $_SESSION['timeout'];
    if ($session_life > $session_inactive) 
    {
        $_SESSION = array();
        unset($_SESSION);
        session_destroy();
        header('location:index.php?mod=login');
    } 
    else 
    {
        $_SESSION['timeout'] = time();
    }
}

$mod                    =   htmlentities(isset($_GET['mod']) ? $_GET['mod'] : '');
if($mod == 'error')
{
    $mod  = 'error';
}
else if(!isset($_SESSION['usuAA']) && !isset($_SESSION['tokenAA']) && ($mod != 'reset_password') && ($mod != 'create_password'))
{
    $mod  = 'login';
}



$array_config_interface =   array(
    'vresource'=>$varCache,
    'modulo'=>$mod,
    'path_template'=>URL_AA_TEMPLATE,
    'path_rcss'=>URL_AA_RCSS,
    'path_rplugins'=>URL_AA_RPLUGINS,
    'path_rjs'=>URL_AA_RJS,
    'path_rimg'=>URL_AA_RIMG,
    'path_css'=>URL_AA_CSS,
    'path_js'=>URL_AA_JS,
    'path_img'=>URL_AA_IMG
);
$obj_interfaces         =   new Interfaces($array_config_interface);
$obj_interfaces->header();

if($mod == 'error')
{
    echo $obj_interfaces->html_output;
    $obj_interfaces->return_js_no_login();
    include("modulos/" . $array_modulos['errors'] . "/index.php");
}
else if(!isset($_SESSION['usuAA']) && isset($array_modulos[$mod]) && $mod== 'reset_password' && isset($_GET['token']) && $_GET['token'] != '')
{
    echo $obj_interfaces->html_output;
    include("modulos/" . $array_modulos['reset_password'] . "/index.php");
    $obj_interfaces->return_js_no_login();
}
else if(!isset($_SESSION['usuAA']) && isset($array_modulos[$mod]) && $mod== 'create_password' && isset($_GET['token']) && $_GET['token'] != '')
{
    echo $obj_interfaces->html_output;
    include("modulos/" . $array_modulos['create_password'] . "/index.php");
    $obj_interfaces->return_js_no_login();
}
else if(!isset($_SESSION['usuAA']))
{
    echo $obj_interfaces->html_output;
    include("modulos/" . $array_modulos['login'] . "/index.php");
    $obj_interfaces->return_js_no_login();
}
else if(isset($_SESSION['usuAA']) &&  isset($_SESSION['tokenAA']) && $mod == '')
{
    header('Location:./?mod=home');
}
else if(isset($_SESSION['usuAA']) &&  isset($_SESSION['tokenAA']) && isset($array_modulos[$mod]) && ($mod== 'login' || $mod == 'reset_password' || $mod == 'create_password')) 
{
    header('Location:./?mod=home');
}
else if(isset($_SESSION['usuAA']) &&  isset($_SESSION['tokenAA']) && isset($array_modulos[$mod]) && $mod != 'errors') 
{
    echo $obj_interfaces->html_output;
    $innerHTML = '';
    include("modulos/" . $array_modulos[$mod] . "/index.php");
    $obj_interfaces->template();
    echo $obj_interfaces->html_template;
    $obj_interfaces->return_js_login();
}
else
{
    echo $obj_interfaces->html_output;
    $obj_interfaces->return_js_no_login();
    include("modulos/" . $array_modulos['errors'] . "/index.php");
}
echo $obj_interfaces->html_output;