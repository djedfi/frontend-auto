<?php
require('funciones.php');

$hac             = "";
$hac             = (isset($_GET['hac'])) ? $_GET['hac'] : "";

global $innerHTML;
$innerHTML = header_tmp($hac);
if($hac == 'add')
{
    $innerHTML .=form_add();
}
else 
{
    $innerHTML .=list_trim();
}
