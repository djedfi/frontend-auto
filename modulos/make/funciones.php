<?php
    function form_add()
    {
        
        $tmpHTML = '                                
        <!-- Row -->
        <div class="row align-items-center h-100">
            <div class="col-md-12 col-xl-6 mx-auto">
                <div class="card h-100 border-primary justify-content-center">
                    <div class="card-header">
                        <h4 class="card-title">Add make</h4>
                    </div>
                    <div class="card-body">
                        <form id="id_form_new_make" class="validate-form">
                            <div class="form-group">
                                <label for="id_txt_name_mk" class="form-label">Name <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_name_mk" name="txt_name_mk" placeholder="Enter make: e.g.: Nissan, BMW, etc." maxlength="45" autocomplete="off" required>
                            </div>
                            <div class="form-group">
                                <label for="id_txt_url_mk" class="form-label">Website <span class="text-red">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text" id="lbl_https_url">https://</span>
                                    <input type="text" class="form-control" id="id_txt_url_mk" name="txt_url_mk" aria-describedby="lbl_https_url" maxlength="150" autocomplete="off" data-cerror-print="id_div_msg_error_webnewmake" required>
                                </div>
                                <div id="id_div_msg_error_webnewmake"  class="" role="alert"></div>
                            </div>
                            
                            <div class="alert alert-danger mb-0 d-none" id="id_div_conteiner_error_newmake" role="alert">
                                <span class="alert-inner--icon"><i class="fe fe-slash"></i></span>
                                <span class="alert-inner--text "><strong>Danger!</strong> <span id="id_div_msg_error_newmake" class="fw-bold"></span></span>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer" style="text-align:center">
                        <button class="btn btn-primary w-lg" id="id_btn_sbm_make" type="button">
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

    function list_make()
    {
        return 'listado';
    }


    function header_tmp($hac)
    {
        $tmpHTML = '
        <!-- PAGE-HEADER -->
        <div class="page-header">
            <h1 class="page-title">
                '.($hac == 'add' ? 'Create new make of vehicle' : 'List of car brands').'
                
            </h1>
            <div>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="./?mod=make&hac=list">Makes</a></li>
                    '.($hac == 'add' ? '<li class="breadcrumb-item active" aria-current="page">New Make</li>' : '<li class="breadcrumb-item active" aria-current="page">List of makes</li>').'
                </ol>
            </div>
        </div>
        <!-- PAGE-HEADER END -->
        ';

        return $tmpHTML;
    }