<?php
    function form_add()
    {
        
        $tmpHTML = '                                
        <!-- Row -->
        <div class="row align-items-center h-100">
            <div class="col-md-12 col-xl-6 mx-auto">
                <div class="card h-100 border-primary justify-content-center">
                    <div class="card-header">
                        <h4 class="card-title">Add trim</h4>
                    </div>
                    <div class="card-body">
                        <form id="id_form_new_trim" class="validate-form">
                            <div class="form-group">
                                <label for="id_slc_brand_trim" class="form-label">Choose a Brand <span class="text-red">*</span></label>
                                <select class="form-control select2-show-search form-select" id="id_slc_brand_trim" name="slc_brand_trim" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcbrand" required>
                                    <option label="Choose one"></option>
                                </select>
                                <div id="id_div_msg_error_slcbrand"  class="" role="alert"></div>
                            </div>
                            <div class="form-group">
                                <label for="id_slc_model_trim" class="form-label">Choose a Model <span class="text-red">*</span></label>
                                <select class="form-control select2-show-search form-select" id="id_slc_model_trim" name="slc_model_trim" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcmodel" required>
                                    <option label="Choose one"></option>
                                </select>
                                <div id="id_div_msg_error_slcmodel"  class="" role="alert"></div>
                            </div>
                            <div class="form-group">
                                <label for="id_txt_name_trim" class="form-label">Name <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_name_trim" name="txt_name_trim" placeholder="Enter trim: e.g.: S, SV, etc." maxlength="45" autocomplete="off" required>
                            </div>
                            
                            <div class="alert alert-danger mb-0 d-none" id="id_div_conteiner_error_newtrim" role="alert">
                                <span class="alert-inner--icon"><i class="fe fe-slash"></i></span>
                                <span class="alert-inner--text "><strong>Danger!</strong> <span id="id_div_msg_error_newtrim" class="fw-bold"></span></span>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer" style="text-align:center">
                        <button class="btn btn-primary w-lg" id="id_btn_sbm_trim" type="button">
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

    function list_trim()
    {
        return 'listado';
    }


    function header_tmp($hac)
    {
        $tmpHTML = '
        <!-- PAGE-HEADER -->
        <div class="page-header">
            <h1 class="page-title">
                '.($hac == 'add' ? 'Create new trim of vehicle' : 'List of car trims').'
                
            </h1>
            <div>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="./?mod=trim&hac=list">Trims</a></li>
                    '.($hac == 'add' ? '<li class="breadcrumb-item active" aria-current="page">New Trim</li>' : '<li class="breadcrumb-item active" aria-current="page">List of trims</li>').'
                </ol>
            </div>
        </div>
        <!-- PAGE-HEADER END -->
        ';

        return $tmpHTML;
    }