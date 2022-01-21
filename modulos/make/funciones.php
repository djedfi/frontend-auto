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
                            <span class="text-red">All inputs with (*) are required</span>  
                            <div class="form-group">
                                <label for="id_txt_name_mk" class="form-label">Name <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_name_mk" name="txt_name_mk" placeholder="Enter make: e.g.: Nissan, BMW, etc." maxlength="45" autocomplete="off" required>
                            </div>
                            <div class="form-group">
                                <label for="id_txt_url_mk" class="form-label">Website <span class="text-red">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text" id="lbl_https_url">https://</span>
                                    <input type="text" class="form-control" id="id_txt_url_mk" name="txt_url_mk" aria-describedby="lbl_https_url" maxlength="150" autocomplete="off" data-cerror-print="id_div_msg_error_webnewmake" pattern="^((www.)?)(([^.]+)\.)?([a-zA-z0-9\-_]+)(.com|.net|.gov|.org|.in)(\/[^\s]*)?$" required>
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
        $tmpHTML = '        
        <div class="row align-items-center">
            <div class="col-md-8 mx-auto">
                <div class="card border-primary justify-content-center">
                    <div class="card-header justify-content-end">
                        <button type="button" class="btn btn-success fw-bold lh-lg" id="id_btn_new_make">Create a new Make</button>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="id_table_makes" class="table table-bordered  table-hover text-nowrap mb-0">
                                <thead class="border-top">
                                    <tr>
                                        <th class="bg-transparent border-bottom-0">ID</th>
                                        <th class="bg-transparent border-bottom-0 w-50">Name</th>
                                        <th class="bg-transparent border-bottom-0 w-50">Website</th>
                                        <th class="bg-transparent border-bottom-0 w-1">Options</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Row -->

        <div class="modal fade" id="modal_make_update" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fw-bold">Update Information</h5>
                        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <form id="id_form_upd_make" class="validate-form">
                            <input type="hidden" name="hid_id_mk" id="id_hid_id_mk" value="0">
                            <div class="form-group">
                                <label for="id_txt_name_mk" class="form-label">Name <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_name_mk" name="txt_name_mk" placeholder="Enter make: e.g.: Nissan, BMW, etc." maxlength="45" autocomplete="off" required>
                            </div>
                            <div class="form-group">
                                <label for="id_txt_url_mk" class="form-label">Website <span class="text-red">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text" id="lbl_https_url">https://</span>
                                    <input type="text" class="form-control" id="id_txt_url_mk" name="txt_url_mk" aria-describedby="lbl_https_url" placeholder="Enter make website" maxlength="150" autocomplete="off" pattern="^((www.)?)(([^.]+)\.)?([a-zA-z0-9\-_]+)(.com|.net|.gov|.org|.in)(\/[^\s]*)?$" data-cerror-print="id_div_msg_error_webnupdmake" required>
                                </div>
                                <div id="id_div_msg_error_webnupdmake"  class="" role="alert"></div>
                            </div>
                            <div class="alert alert-danger mb-0 d-none" id="id_div_conteiner_error_updmake" role="alert">
                                <span class="alert-inner--icon" id="id_icon_up_mk"><i class="fe fe-check"></i></span>
                                <span class="alert-inner--text "><span id="id_div_msg_error_updmake" class="fw-bold"><strong>Danger!</strong> </span></span>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button class="btn btn-primary" id="id_btn_update_mk">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
                    ';
        return  $tmpHTML;
    }


    function header_tmp($hac)
    {
        $tmpHTML = '
        <!-- PAGE-HEADER -->
        <div class="page-header">
            <h1 class="page-title">
                '.($hac == 'add' ? 'Create new make of vehicle' : 'List of Makes').'
                
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