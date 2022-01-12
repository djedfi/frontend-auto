<!-- BACKGROUND-IMAGE -->
<div class="login-img">

    <!-- GLOABAL LOADER -->
    <div id="global-loader">
        <img src="<?php echo URL_AA_RIMG;?>loader.svg" class="loader-img" alt="Loader">
    </div>
    <!-- /GLOABAL LOADER -->

    <!-- PAGE -->
    <div class="page">
        <div class="">
            <!-- Theme-Layout -->

            <!-- CONTAINER OPEN -->
            <div class="col col-login mx-auto mt-7">
                <div class="text-center">
                    <img src="<?php echo URL_AA_IMG;?>car_logo.png" class="header-brand-img" style="max-width:175px;" alt="">
                </div>
            </div>

            <div class="container-login100">
                <div id="id_div_login" class="wrap-login100 p-6 d-block">
                    <form class="login100-form validate-form" id="id_form_login">
                        <span class="login100-form-title pb-5">
                            Login
                        </span>
                        <div class="panel panel-primary">
                            <div class="tab-menu-heading">
                                <div class="tabs-menu1">
                                    <!-- Tabs -->
                                    <ul class="nav panel-tabs">
                                        <li class="mx-0"><a href="#tab5" class="active" data-bs-toggle="tab">Email</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="panel-body tabs-menu-body p-0 pt-5">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tab5">
                                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                                            <a href="#" class="input-group-text bg-white text-muted">
                                                <i class="zmdi zmdi-email text-muted" aria-hidden="true"></i>
                                            </a>
                                            <input class="input100 form-control" id="id_txt_email_usr" name="txt_email_usr" type="email" placeholder="Email" data-cerror-print="id_div_msg_error_email_login" required>
                                        </div>
                                        <div id="id_div_msg_error_email_login"></div>
                                        <div class="wrap-input100 validate-input input-group" id="Password-toggle">
                                            <a href="#" class="input-group-text bg-white text-muted">
                                                <i class="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
                                            </a>
                                            <input class="input100 form-control" type="password" id="id_txt_pass_usr" name="txt_pass_usr" placeholder="Password" data-cerror-print="id_div_msg_error_pass_login" required>
                                        </div>
                                        <div id="id_div_msg_error_pass_login"></div>
                                        <div class="text-end pt-4">
                                            <p class="mb-0"><a href="javascript:void(0);" class="text-primary ms-1" id="id_a_fpass">Forgot Password?</a></p>
                                        </div>
                                        <div class="container-login100-form-btn">
                                            <a  href="javascript:void(0);" class="login100-form-btn btn-primary" id="id_btn_login">
                                                    Login
                                            </a>
                                        </div><br>
                                        <div id="id_div_msg_error_login"  class="" role="alert"></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
                <div id="id_div_reset_pass" class="wrap-login100 p-6 d-none">
                    <form class="login100-form validate-form">
                        <span class="login100-form-title pb-5">
                            Forgot Password
                        </span>
                        <p class="text-muted">Enter the email address registered on your account</p>
                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                            <a href="#" class="input-group-text bg-white text-muted">
                                <i class="zmdi zmdi-email" aria-hidden="true"></i>
                            </a>
                            <input class="input100 form-control" type="email" placeholder="Email">
                        </div>
                        <div class="submit">
                            <a class="btn btn-primary d-grid" href="index.html">Submit</a>
                        </div>
                        <div class="text-center mt-4">
                            <p class="text-dark mb-0">You remember your pass?<a href="javascript:void(0);" class="text-primary ms-1" id="id_a_flogin">Login</a></p>
                        </div>
                    </form>
                </div>

            </div>
            <!-- CONTAINER CLOSED -->
        </div>
    </div>
    <!-- End PAGE -->

</div>
<!-- BACKGROUND-IMAGE CLOSED -->