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
                    <form class="login100-form validate-form" id="id_form_reset">
                        <input type="hidden" name="hid_token_rst" id="id_hid_token_rst" value=""> 
                        <input type="hidden" name="hid_tipo_token_rst" id="id_hid_tipo_token_rst" value="20"> 
                        <span class="login100-form-title pb-5">
                            Welcome!
                        </span>
                        <div class="panel panel-primary">
                            <div class="tab-menu-heading">
                                <div class="tabs-menu1">
                                    <!-- Tabs -->
                                    <ul class="nav panel-tabs">
                                        <li class="mx-0"><a href="#tab5" class="active" data-bs-toggle="tab">Create Password</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="panel-body tabs-menu-body p-0 pt-5">
                            <span class="text-red">- Password must contain letters and numbers. <br>- 8 to up to 20 characters long <br>- At least one uppercase letter and one number</span>  
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tab5">
                                        <div class="wrap-input100 validate-input input-group mt-3" id="Password-toggle">
                                            <a href="#" class="input-group-text bg-white text-muted">
                                                <i class="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
                                            </a>
                                            <input class="input100 form-control" type="password" id="id_txt_pass_rst" name="txt_pass_rst" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" maxlength="20" placeholder="Enter Password" data-cerror-print="id_div_msg_error_pass1_reset" required>
                                        </div>
                                        <div id="id_div_msg_error_pass1_reset"></div>
                                        
                                        <div class="wrap-input100 validate-input input-group mt-3" id="Password-toggle">
                                            <a href="#" class="input-group-text bg-white text-muted">
                                                <i class="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
                                            </a>
                                            <input class="input100 form-control" type="password" id="id_txt_pass_rst_confirmation" name="txt_pass_rst_confirmation" data-cmatch="id_txt_pass_rst" data-cmatch-msg="The passwords you entered do not match. Please fix." maxlength="20" placeholder="Confirm Password" data-cerror-print="id_div_msg_error_pass2_reset" required>
                                        </div>
                                        <div id="id_div_msg_error_pass2_reset"></div>

                                        <div class="container-login100-form-btn">
                                            <a  href="javascript:void(0);" class="login100-form-btn btn-primary" id="id_btn_rst">
                                                    Save
                                            </a>
                                        </div>
                                        <div class="text-end pt-4">
                                            <p class="mb-0"><a href="./?mod=login" class="text-primary ms-1">You have password already?</a></p>
                                        </div>
                                        <div id="id_div_msg_error_reset"  class="" role="alert"></div>
                                        
                                    </div>
                                </div>
                            </div>
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