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
    public $html_template;


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
            '.(!isset($_SESSION['usuAA']) ? '<link href="'.$this->path_rplugins.'single-page/css/main.css'.$this->version_resources.'" rel="stylesheet" type="text/css">': '').'
            <!-- P-scroll bar css-->
            <link href="'.$this->path_rplugins.'p-scroll/perfect-scrollbar.css'.$this->version_resources.'" rel="stylesheet" />
            <!--SWEET ALERT CSS-->
            <link href="'.$this->path_rplugins.'sweet-alert/sweetalert.css" rel="stylesheet" />
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
            <!-- VALIDATE CSS -->
            <link id="theme" rel="stylesheet" type="text/css" media="all" href="'.$this->path_css.'cvalidate.css'.$this->version_resources.'" />
            <!-- MODULE CSS -->
            ' . (file_exists($cssmod) ? '<link rel="stylesheet" type="text/css" href="' . $cssmod . $this->version_resources . '" />' : '') . '
        </head>
        <body class="app sidebar-mini ltr light-mode">';
    }


    public function return_js_no_login()
    {
        $jsmod  = $this->path_js. $this->modulo . '.js';
        
        $this->html_output = '
        <!-- JQUERY JS -->
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
        
        <!-- SWEET-ALERT JS -->
        <script src="'.$this->path_rplugins.'sweet-alert/sweetalert.min.js'.$this->version_resources.'"></script>

        <!-- Color Theme js -->
        <script src="'.$this->path_rjs.'themeColors.js'.$this->version_resources.'"></script>
    
        <!-- CUSTOM JS -->
        <script src="'.$this->path_rjs.'custom.js'.$this->version_resources.'"></script>
        
        <!-- VALIDATE FORM -->
        <script src="'.$this->path_js.'cvalidate.js'.$this->version_resources.'"></script>

        <!-- INDEX -->
        <script src="'.$this->path_js.'config.js'.$this->version_resources.'"></script>'
        .(!isset($_SESSION['usuAA']) ? '<script src="'.$this->path_js.'index.js'.$this->version_resources.'"></script>': '').'

        <!-- MODULE JS -->
        ' . (file_exists($jsmod) ? '<script src="'.$jsmod.$this->version_resources.'"></script>' : '') . '
        </body>
        </html>';
    }


    public function return_js_login()
    {
        $jsmod  = $this->path_js. $this->modulo . '.js';
        
        $this->html_output = '
        <!-- JQUERY JS -->
        <script src="'.$this->path_rjs.'jquery.min.js'.$this->version_resources.'"></script>
    
        <!-- BOOTSTRAP JS -->
        <script src="'.$this->path_rplugins.'bootstrap/js/popper.min.js'.$this->version_resources.'"></script>
        <script src="'.$this->path_rplugins.'bootstrap/js/bootstrap.min.js'.$this->version_resources.'"></script>
    
        <!-- SPARKLINE JS-->
        <script src="'.$this->path_rjs.'jquery.sparkline.min.js'.$this->version_resources.'"></script>
    
        <!-- Sticky js -->
        <script src="'.$this->path_rjs.'sticky.js'.$this->version_resources.'"></script>
    
        <!-- CHART-CIRCLE JS-->
        <script src="'.$this->path_rjs.'circle-progress.min.js'.$this->version_resources.'"></script>
    
        <!-- PIETY CHART JS-->
        <script src="'.$this->path_rplugins.'peitychart/jquery.peity.min.js'.$this->version_resources.'"></script>
        <script src="'.$this->path_rplugins.'peitychart/peitychart.init.js'.$this->version_resources.'"></script>
    
        <!-- SIDEBAR JS -->
        <script src="'.$this->path_rplugins.'sidebar/sidebar.js'.$this->version_resources.'"></script>
    
    
        <!-- INTERNAL CHARTJS CHART JS-->
        <script src="'.$this->path_rplugins.'chart/Chart.bundle.js'.$this->version_resources.'"></script>
        <script src="'.$this->path_rplugins.'chart/rounded-barchart.js'.$this->version_resources.'"></script>
        <script src="'.$this->path_rplugins.'chart/utils.js'.$this->version_resources.'"></script>
    
        <!-- INTERNAL SELECT2 JS -->
        <script src="'.$this->path_rplugins.'select2/select2.full.min.js'.$this->version_resources.'"></script>
    
        <!-- INTERNAL Data tables js-->
        <script src="'.$this->path_rplugins.'datatable/js/jquery.dataTables.min.js'.$this->version_resources.'"></script>
        <script src="'.$this->path_rplugins.'datatable/js/dataTables.bootstrap5.js'.$this->version_resources.'"></script>
        <script src="'.$this->path_rplugins.'datatable/dataTables.responsive.min.js'.$this->version_resources.'"></script>
    
        <!-- INTERNAL APEXCHART JS -->
        <script src="'.$this->path_rjs.'apexcharts.js'.$this->version_resources.'"></script>
        <script src="'.$this->path_rplugins.'apexchart/irregular-data-series.js'.$this->version_resources.'"></script>
    
        <!-- C3 CHART JS -->
        <script src="'.$this->path_rplugins.'charts-c3/d3.v5.min.js'.$this->version_resources.'"></script>
        <script src="'.$this->path_rplugins.'charts-c3/c3-chart.js'.$this->version_resources.'"></script>
    
        <!-- CHART-DONUT JS -->
        <script src="'.$this->path_rjs.'charts.js'.$this->version_resources.'"></script>
    
        <!-- INTERNAL Flot JS -->
        <script src="'.$this->path_rplugins.'flot/jquery.flot.js'.$this->version_resources.'"></script>
        <script src="'.$this->path_rplugins.'flot/jquery.flot.fillbetween.js'.$this->version_resources.'"></script>
    
        <!-- INTERNAL Vector js -->
        <script src="'.$this->path_rplugins.'jvectormap/jquery-jvectormap-2.0.2.min.js'.$this->version_resources.'"></script>
        <script src="'.$this->path_rplugins.'jvectormap/jquery-jvectormap-world-mill-en.js'.$this->version_resources.'"></script>
    
        <!-- SIDE-MENU JS-->
        <script src="'.$this->path_rplugins.'sidemenu/sidemenu.js'.$this->version_resources.'"></script>

        <!-- SWEET-ALERT JS -->
        <script src="'.$this->path_rplugins.'sweet-alert/sweetalert.min.js'.$this->version_resources.'"></script>
    
        <!-- Color Theme js -->
        <script src="'.$this->path_rjs.'themeColors.js'.$this->version_resources.'"></script>
    
        <!-- CUSTOM JS -->
        <script src="'.$this->path_rjs.'custom.js'.$this->version_resources.'"></script>   
        
        <!-- VALIDATE FORM -->
        <script src="'.$this->path_js.'cvalidate.js'.$this->version_resources.'"></script>

        <!-- INDEX -->
        <script src="'.$this->path_js.'config.js'.$this->version_resources.'"></script>
        
        <!-- MODULE JS -->
        ' . (file_exists($jsmod) ? '<script src="'.$jsmod.$this->version_resources.'"></script>' : '') . '
        </body>
        </html>';
    }

    public function template()
    {
        global $innerHTML;
        $this->html_template = '    <!-- GLOBAL-LOADER -->
        <div id="global-loader">
            <img src="'.URL_AA_RIMG.'loader.svg" class="loader-img" alt="Loader">
        </div>
        <!-- /GLOBAL-LOADER -->
    
        <!-- PAGE -->
        <div class="page">
            <div class="page-main">
    
                <!-- app-Header -->
                <div class="app-header header sticky">
                    <div class="container-fluid main-container">
                        <div class="d-flex">
                            <a aria-label="Hide Sidebar" class="app-sidebar__toggle" data-bs-toggle="sidebar" href="#"></a>
                            <!-- sidebar-toggle-->
                            <a class="logo-horizontal " href="./?mod=home">
                                <img src="'.URL_AA_RIMG.'/brand/logo.png" class="header-brand-img desktop-logo" alt="logo">
                                <img src="'.URL_AA_RIMG.'/brand/logo-3.png" class="header-brand-img light-logo1" alt="logo">
                            </a>
                            <!-- LOGO -->
                            
                            <div class="d-flex order-lg-2 ms-auto header-right-icons">
                                <button class="navbar-toggler navresponsive-toggler d-md-none ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon fe fe-more-vertical"></span>
                                </button>
                                <div class="navbar navbar-collapse responsive-navbar p-0">
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
                                        <div class="d-flex order-lg-2">
                                            <div class="dropdown  d-flex">
                                                <a class="nav-link icon theme-layout nav-link-bg layout-setting">
                                                    <span class="dark-layout"><i class="fe fe-moon"></i></span>
                                                    <span class="light-layout"><i class="fe fe-sun"></i></span>
                                                </a>
                                            </div>
                                            <!-- Theme-Layout -->
                                            <div class="dropdown d-flex">
                                                <a class="nav-link icon full-screen-link nav-link-bg">
                                                    <i class="fe fe-minimize fullscreen-button"></i>
                                                </a>
                                            </div>
                                            <!-- SIDE-MENU -->
                                            <div class="dropdown d-flex profile-1">
                                                <a href="#" data-bs-toggle="dropdown" class="nav-link pe-2 leading-none d-flex">
                                                    <img src="'.URL_AA_RIMG.'/users/21.jpg" alt="profile-user" class="avatar  profile-user brround cover-image">
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                    <div class="drop-heading">
                                                        <div class="text-center">
                                                            <h5 class="text-dark mb-0 fs-14 fw-semibold">'.$_SESSION['nameusuAA'].'</h5>
                                                            <small class="text-muted">Welcome</small>
                                                        </div>
                                                    </div>
                                                    <div class="dropdown-divider m-0"></div>
                                                    <a class="dropdown-item" href="profile.html">
                                                        <i class="dropdown-icon fe fe-user"></i> Profile
                                                    </a>
                                                    <a class="dropdown-item" href="./?mod=logout">
                                                        <i class="dropdown-icon fe fe-alert-circle"></i> Sign out
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /app-Header -->
    
                <!--APP-SIDEBAR-->
                <div class="sticky">
                    <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
                    <div class="app-sidebar">
                        <div class="side-header">
                            <a class="header-brand1" href="./?mod=home">
                                <img src="'.URL_AA_RIMG.'brand/logo.png" class="header-brand-img desktop-logo" alt="logo">
                                <img src="'.URL_AA_RIMG.'brand/logo-1.png" class="header-brand-img toggle-logo" alt="logo">
                                <img src="'.URL_AA_RIMG.'brand/logo-2.png" class="header-brand-img light-logo" alt="logo">
                                <img src="'.URL_AA_RIMG.'brand/logo-3.png" class="header-brand-img light-logo1" alt="logo">
                            </a>
                            <!-- LOGO -->
                        </div>
                        <div class="main-sidemenu">
                            <div class="slide-left disabled" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"/></svg></div>
                            '.$this->get_menu().'
                            <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"/></svg></div>
                        </div>
                    </div>
                    <!--/APP-SIDEBAR-->
                </div>
    
                <!--app-content open-->
                <div class="main-content app-content mt-0">
                    <div class="side-app">
    
                        <!-- CONTAINER -->
                        <div class="main-container container-fluid">
    
                            
                            '.$innerHTML.'
    
                        </div>
                        <!-- CONTAINER END -->
                    </div>
                </div>
                <!--app-content close-->
    
            </div>
            <!-- FOOTER -->
            <footer class="footer">
                <div class="container">
                    <div class="row align-items-center flex-row-reverse">
                        <div class="col-md-12 col-sm-12 text-center">
                            Copyright © '.date('Y').' <a href="#">AA Motors</a>. Designed with <span class="fa fa-heart text-danger"></span> by <a href="#"> EDFI </a> All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
            <!-- FOOTER END -->
        </div>
        <!-- BACK-TO-TOP -->
        <a href="#top" id="back-to-top"><i class="fa fa-angle-up"></i></a>';
    }


    protected function get_menu()
    {
        $menu  = '
        <ul class="side-menu">
            <li class="sub-category">
                <h3>Main</h3>
            </li>
            <li class="slide">
                <a class="side-menu__item" data-bs-toggle="slide" href="./?mod=home"><i class="side-menu__icon fa fa-home"></i><span class="side-menu__label">Dashboard</span></a>
            </li>
            <li class="sub-category">
                <h3>Administration</h3>
            </li>
            <li class="slide">
                <a class="side-menu__item" data-bs-toggle="slide" href="#"><i class="side-menu__icon fa fa-id-card-o"></i><span class="side-menu__label">Users</span><i class="angle fe fe-chevron-right"></i></a>
                <ul class="slide-menu">
                    <li class="side-menu-label1"><a href="#">Users</a></li>
                    <li><a href="./?mod=user&hac=add" class="slide-item">Add User</a></li>
                    <li><a href="./?mod=user&hac=list" class="slide-item">Directory</a></li>
                </ul>
            </li>
            <li class="slide">
                <a class="side-menu__item" data-bs-toggle="slide" href="#"><i class="side-menu__icon fa fa-cubes"></i><span class="side-menu__label">Brands</span><i class="angle fe fe-chevron-right"></i></a>
                <ul class="slide-menu">
                    <li class="side-menu-label1"><a href="#">Makes</a></li>
                    <li><a href="./?mod=make&hac=add" class="slide-item">Add Make</a></li>
                    <li><a href="./?mod=make&hac=list" class="slide-item">Directory</a></li>
                </ul>
            </li>
            <li class="slide">
                <a class="side-menu__item" data-bs-toggle="slide" href="#"><i class="side-menu__icon fa fa-scribd"></i><span class="side-menu__label">Models</span><i class="angle fe fe-chevron-right"></i></a>
                <ul class="slide-menu">
                    <li class="side-menu-label1"><a href="#">Models</a></li>
                    <li><a href="./?mod=model&hac=add" class="slide-item">Add Model</a></li>
                    <li><a href="./?mod=model&hac=list" class="slide-item">Directory</a></li>
                </ul>
            </li>
            <li class="slide">
                <a class="side-menu__item" data-bs-toggle="slide" href="#"><i class="side-menu__icon fa fa-cogs"></i><span class="side-menu__label">Trims</span><i class="angle fe fe-chevron-right"></i></a>
                <ul class="slide-menu">
                    <li class="side-menu-label1"><a href="#">Trims</a></li>
                    <li><a href="./?mod=trim&hac=add" class="slide-item">Add Trim</a></li>
                    <li><a href="./?mod=trim&hac=list" class="slide-item">Directory</a></li>
                </ul>
            </li>
            <li class="sub-category">
                <h3>Operations</h3>
            </li>
            <li class="slide">
                <a class="side-menu__item" data-bs-toggle="slide" href="#"><i class="side-menu__icon fa fa-car"></i><span class="side-menu__label">Cars</span><i class="angle fe fe-chevron-right"></i></a>
                <ul class="slide-menu">
                    <li class="side-menu-label1"><a href="#">Cars</a></li>
                    <li><a href="./?mod=car&hac=add" class="slide-item">Add Car</a></li>
                    <li><a href="./?mod=car" class="slide-item">Directory</a></li>
                </ul>
            </li>
            <li class="slide">
                <a class="side-menu__item" data-bs-toggle="slide" href="#"><i class="side-menu__icon fa fa-users"></i><span class="side-menu__label">Customers</span><i class="angle fe fe-chevron-right"></i></a>
                <ul class="slide-menu">
                    <li class="side-menu-label1"><a href="#">Customers</a></li>
                    <li><a href="./?mod=customer&hac=add" class="slide-item">Add Customer</a></li>
                    <li><a href="./?mod=customer" class="slide-item">Directory</a></li>
                </ul>
            </li>
            <li class="slide">
                <a class="side-menu__item" data-bs-toggle="slide" href="#"><i class="side-menu__icon fa fa-cart-plus"></i><span class="side-menu__label">Sales</span><i class="angle fe fe-chevron-right"></i></a>
                <ul class="slide-menu">
                    <li class="side-menu-label1"><a href="#">Sales</a></li>
                    <li><a href="./?mod=sales&hac=add" class="slide-item">Add Sales</a></li>
                    <li><a href="./?mod=sales" class="slide-item">Directory</a></li>
                </ul>
            </li>
        </ul>';

        return $menu;
    }
}