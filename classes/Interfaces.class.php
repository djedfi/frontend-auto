<?php
final class Interfaces
{
    private $version_resources;
    private $modulo;
    private $path_template;
    private $path_rcss;
    private $path_rplugins;
    private $path_rjs;
    private $path_rimg;
    private $path_css;
    private $path_js;
    private $path_img;
    public $html_output;


    function __construct($array_config)
    {
        $this->version_resources = $array_config['vresource'];
        $this->modulo            = $array_config['modulo'];   
        $this->path_template     = $array_config['path_template'];   
        $this->path_rcss         = $array_config['path_rcss'];   
        $this->path_rplugins     = $array_config['path_rplugins'];   
        $this->path_rjs          = $array_config['path_rjs'];   
        $this->path_rimg         = $array_config['path_rimg'];   
        $this->path_css          = $array_config['path_css'];   
        $this->path_js           = $array_config['path_js']; 
        $this->path_img          = $array_config['path_img']; 
        $this->html_output       = '';
    }

    public function header()
    {
        $cssmod = $this->path_css. $this->modulo . '.css';
        
        $this->html_output = '
        <!doctype html>
        <html lang="en" dir="ltr">
        <head>
            <!-- META DATA -->
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="description" content="Admin AA Motors">
            <meta name="author" content="JC & EDFI">
            <meta name="copyright" content="Copyright &copy; 2021-' . date("Y") . '. Todos los derechos reservados." />
            <meta name="keywords" content="admin,aa motors">
            <meta name="theme-color" content="#E12626">

            <!-- FAVICON -->
            <link rel="shortcut icon" type="image/x-icon" href="'.$this->path_rimg.'brand/favicon.ico'.$this->version_resources.'" />
        
            <!-- TITLE -->
            <title>Admin AA Motors</title>
        
            <!-- BOOTSTRAP CSS -->
            <link id="style" href="'.$this->path_rplugins.'bootstrap/css/bootstrap.min.css'.$this->version_resources.'" rel="stylesheet" />
        
            <!-- STYLE CSS -->
            <link href="'.$this->path_rcss.'style.css'.$this->version_resources.'" rel="stylesheet" />
            <link href="'.$this->path_rcss.'dark-style.css'.$this->version_resources.'" rel="stylesheet" />
            <link href="'.$this->path_rcss.'transparent-style.css'.$this->version_resources.'" rel="stylesheet">
            <link href="'.$this->path_rcss.'skin-modes.css'.$this->version_resources.'" rel="stylesheet" />
            <!-- SINGLE-PAGE CSS -->
            <link href="'.$this->path_rplugins.'single-page/css/main.css'.$this->version_resources.'" rel="stylesheet" type="text/css">
            <!-- P-scroll bar css-->
            <link href="'.$this->path_rplugins.'p-scroll/perfect-scrollbar.css'.$this->version_resources.'" rel="stylesheet" />
            <!--- FONT-ICONS CSS -->
            <link href="'.$this->path_rcss.'icons.css'.$this->version_resources.'" rel="stylesheet" />
            <!-- SIDEBAR CSS -->
            <link href="'.$this->path_rplugins.'sidebar/sidebar.css'.$this->version_resources.'" rel="stylesheet">
            <!-- SELECT2 CSS -->
            <link href="'.$this->path_rplugins.'select2/select2.min.css'.$this->version_resources.'" rel="stylesheet" />
            <!-- INTERNAL Data table css -->
            <link href="'.$this->path_rplugins.'datatable/css/dataTables.bootstrap5.css'.$this->version_resources.'" rel="stylesheet" />
            <link href="'.$this->path_rplugins.'datatable/responsive.bootstrap5.css'.$this->version_resources.'" rel="stylesheet" />
            <!-- COLOR SKIN CSS -->
            <link id="theme" rel="stylesheet" type="text/css" media="all" href="'.$this->path_template.'colors/color1.css'.$this->version_resources.'" />
            ' . (file_exists($cssmod) ? '<link rel="stylesheet" type="text/css" href="' . $cssmod . $this->version_resources . '" />' : '') . '
        </head>
        <body class="app sidebar-mini ltr light-mode">';
    }


    public function return_js()
    {
        $jsmod  = $this->path_js. $this->modulo . '.js';
        $this->html_output = '<!-- JQUERY JS -->
        <script src="'.$this->path_rjs.'jquery.min.js'.$this->version_resources.'"></script>
    
        <!-- BOOTSTRAP JS -->
        <script src="'.$this->path_rplugins.'bootstrap/js/popper.min.js'.$this->version_resources.'"></script>
        <script src="'.$this->path_rplugins.'bootstrap/js/bootstrap.min.js'.$this->version_resources.'"></script>
    
        <!-- SHOW PASSWORD JS -->
        <script src="'.$this->path_rjs.'show-password.min.js'.$this->version_resources.'"></script>
    
        <!-- GENERATE OTP JS -->
        <script src="'.$this->path_rjs.'generate-otp.js'.$this->version_resources.'"></script>
    
        <!-- Perfect SCROLLBAR JS-->
        <script src="'.$this->path_rplugins.'p-scroll/perfect-scrollbar.js'.$this->version_resources.'"></script>
        
        <!-- Color Theme js -->
    <script src="'.$this->path_rjs.'themeColors.js'.$this->version_resources.'"></script>
    
        <!-- CUSTOM JS -->
        <script src="'.$this->path_rjs.'custom.js'.$this->version_resources.'"></script>
        ' . (file_exists($jsmod) ? '<script src="'.$jsmod.$this->version_resources.'"></script>' : '') . '
        </body>
        </html>';
    }
}