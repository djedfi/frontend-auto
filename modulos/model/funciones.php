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
                                <label for="id_slc_brand_md" class="form-label">Choose a Brand <span class="text-red">*</span></label>
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
        return 'listado';
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