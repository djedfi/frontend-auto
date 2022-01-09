<?php
    function form_add()
    {
        
        $tmpHTML = '                                
        <!-- Row -->
        <div class="row align-items-center h-100">
            <div class="col-md-12 col-xl-6 mx-auto">
                <div class="card h-100 border-primary justify-content-center">
                    <div class="card-header">
                        <h4 class="card-title">Add User</h4>
                    </div>
                    <div class="card-body">
                        <form id="id_form_new_user" class="validate-form">
                            <div class="row">
                                <div class="col-sm-6 col-md-6">                                   
                                    <div class="form-group">
                                        <label for="id_txt_fname_user" class="form-label">First Name <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_fname_user" name="txt_fname_user"  maxlength="50"  required>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6">                                   
                                    <div class="form-group">
                                        <label for="id_txt_lname_user" class="form-label">Last Name <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_lname_user" name="txt_lname_user"  maxlength="50"  required>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-6">                                   
                                    <div class="form-group">
                                        <label for="id_txt_email_user" class="form-label">E-mail <span class="text-red">*</span></label>
                                        <input type="email" class="form-control" id="id_txt_email_user" name="txt_email_user" minlength="5"  maxlength="150"  required>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6">                                   
                                    <div class="form-group">
                                        <label for="id_txt_emailconfirm_user" class="form-label">Confirm E-mail <span class="text-red">*</span></label>
                                        <input type="email" class="form-control" id="id_txt_email_user_confirmation" name="txt_email_user_confirmation" data-cmatch="id_txt_email_user" data-cmatch-msg="The emails do not match" minlength="5" maxlength="150"   required>
                                    </div>
                                </div>
                                <div class="col-12">                                   
                                    <div class="form-group">
                                        <label for="id_slc_brand_trim" class="form-label">Add options to user<span class="text-red">*</span></label>
                                        <select class="form-control select2" id="id_slc_role_usr" name="slc_role_usr" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcrole" multiple required>
                                            <option label="Choose one"></option>
                                        </select>
                                        <input type="hidden" name="hid_options_usr" id="id_hid_options_usr">
                                        <div id="id_div_msg_error_slcrole"  class="" role="alert"></div>
                                    </div>
                                </div>

                                <div class="col-12">   
                                    <div class="alert alert-danger mb-0 d-none" id="id_div_conteiner_error_newuser" role="alert">
                                        <span class="alert-inner--icon"><i class="fe fe-slash"></i></span>
                                        <span class="alert-inner--text "><strong>Danger!</strong> <span id="id_div_msg_error_newuser" class="fw-bold"></span></span>
                                    </div>  
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer" style="text-align:center">
                        <button class="btn btn-primary w-lg" id="id_btn_sbm_user" type="button">
                            <i class="fa fa-save"></i>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Row -->
        ';
    return  $tmpHTML;
    }

    function list_user()
    {
        return 'listado';
    }


    function header_tmp($hac)
    {
        $tmpHTML = '
        <!-- PAGE-HEADER -->
        <div class="page-header">
            <h1 class="page-title">
                '.($hac == 'add' ? 'Create new user' : 'List of users').'
                
            </h1>
            <div>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="./?mod=user&hac=list">Users</a></li>
                    '.($hac == 'add' ? '<li class="breadcrumb-item active" aria-current="page">New User</li>' : '<li class="breadcrumb-item active" aria-current="page">List of Users</li>').'
                </ol>
            </div>
        </div>
        <!-- PAGE-HEADER END -->
        ';

        return $tmpHTML;
    }