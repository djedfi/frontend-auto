<?php
    function form_add()
    {
        
        $tmpHTML = '                                
        <!-- Row -->
        <div class="row align-items-center h-100">
            <div class="col-md-12 col-xl-6 mx-auto">
                <div class="card h-100 border-primary justify-content-center">
                    <div class="card-header">
                        <h4 class="card-title">Add model</h4>
                    </div>
                    <div class="card-body">
                        <form id="id_form_new_model" class="validate-form">
                            <span class="text-red">All inputs with (*) are required</span>  
                            <div class="form-group">
                                <label for="id_slc_brand_md" class="form-label">Choose a Make <span class="text-red">*</span></label>
                                <select class="form-control select2-show-search form-select" id="id_slc_brand_md" name="slc_brand_md" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcmake" required>
                                    <option label="Choose one"></option>
                                </select>
                                <div id="id_div_msg_error_slcmake"  class="" role="alert"></div>
                            </div>
                            <div class="form-group">
                                <label for="txt_name_md" class="form-label">Name <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_name_md" name="txt_name_md" placeholder="Enter model: e.g.: Versa, Yaris, etc." maxlength="45" autocomplete="off" required>
                            </div>
                            
                            <div class="alert alert-danger mb-0 d-none" id="id_div_conteiner_error_newmodel" role="alert">
                                <span class="alert-inner--icon"><i class="fe fe-slash"></i></span>
                                <span class="alert-inner--text "><strong>Danger!</strong> <span id="id_div_msg_error_newmodel" class="fw-bold"></span></span>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer" style="text-align:center">
                        <button class="btn btn-primary w-lg" id="id_btn_sbm_model" type="button">
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

    function list_model()
    {
        $tmpHTML = '        
        <div class="row align-items-center">
            <div class="col-md-8 mx-auto">
                <div class="card border-primary justify-content-center">
                    <div class="card-header justify-content-end">
                        <button type="button" class="btn btn-success fw-bold lh-lg" id="id_btn_new_model">Create a new Model</button>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="id_table_models" class="table table-bordered table-hover text-nowrap mb-0">
                                <thead class="border-top">
                                    <tr>
                                        <th class="bg-transparent border-bottom-0">ID</th>
                                        <th class="bg-transparent border-bottom-0">Name Model</th>
                                        <th class="bg-transparent border-bottom-0">Name Make</th>
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
        
        <div class="modal fade" id="modal_model_update" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fw-bold">Update Information</h5>
                        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <form id="id_form_upd_model" class="validate-form">
                            <input type="hidden" name="hid_id_md_up" id="id_hid_id_md_up" value="0">
                            <div class="form-group">
                                <label for="id_slc_brand_md_up" class="form-label">Choose a Make <span class="text-red">*</span></label>
                                <select class="form-control select2 form-select" id="id_slc_brand_md_up" name="slc_brand_md_up" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcmake_up" required>
                                    <option label="Choose one"></option>
                                </select>
                                <div id="id_div_msg_error_slcmake_up"  class="" role="alert"></div>
                            </div>
                            <div class="form-group">
                                <label for="id_txt_name_md" class="form-label">Name <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_name_md_up" name="txt_name_md_up" placeholder="Enter model: e.g.: Versa, Kicks, etc." maxlength="45" autocomplete="off" required>
                            </div>
                            <div class="alert alert-danger mb-0 d-none" id="id_div_conteiner_error_updmodel" role="alert">
                                <span class="alert-inner--icon" id="id_icon_up_md"><i class="fe fe-check"></i></span>
                                <span class="alert-inner--text "><span id="id_div_msg_error_updmodel" class="fw-bold"><strong>Danger!</strong> </span></span>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button class="btn btn-primary" id="id_btn_update_md">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        ';
        return $tmpHTML;
    }


    function header_tmp($hac)
    {
        $tmpHTML = '
        <!-- PAGE-HEADER -->
        <div class="page-header">
            <h1 class="page-title">
                '.($hac == 'add' ? 'Create new model of vehicle' : 'List of car models').'
                
            </h1>
            <div>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="./?mod=model&hac=list">Models</a></li>
                    '.($hac == 'add' ? '<li class="breadcrumb-item active" aria-current="page">New Model</li>' : '<li class="breadcrumb-item active" aria-current="page">List of models</li>').'
                </ol>
            </div>
        </div>
        <!-- PAGE-HEADER END -->
        ';

        return $tmpHTML;
    }