<?php
    function form_add()
    {
        
        $tmpHTML = '                                
        <!-- Row -->
        <div class="row align-items-center h-100">
            <div class="col-md-12 col-xl-6 mx-auto">
                <div class="card h-100 border-primary justify-content-center">
                    <div class="card-header">
                        <h4 class="card-title">Add Body Style</h4>
                    </div>
                    <div class="card-body">
                        <form id="id_form_new_st" class="validate-form">
                            <span class="text-red">All inputs with (*) are required</span>  
                            <div class="form-group">
                                <label for="id_txt_name_st" class="form-label">Name <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_name_st" name="txt_name_st" placeholder="Enter make: e.g.: SUV, Sedan, etc." maxlength="45" autocomplete="off" required>
                            </div>
                            
                            <div class="alert alert-danger mb-0 d-none" id="id_div_conteiner_error_newmake" role="alert">
                                <span class="alert-inner--icon"><i class="fe fe-slash"></i></span>
                                <span class="alert-inner--text "><strong>Danger!</strong> <span id="id_div_msg_error_newstyle" class="fw-bold"></span></span>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer" style="text-align:center">
                        <button class="btn btn-primary w-lg" id="id_btn_sbm_style" type="button">
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

    function list_style()
    {
        $tmpHTML ='
        <div class="row align-items-center">
            <div class="col-md-6 mx-auto">
                <div class="card border-primary justify-content-center">
                    <div class="card-header justify-content-end">
                        <button type="button" class="btn btn-success fw-bold lh-lg" id="id_btn_new_style">Create a new Style</button>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="id_table_styles" class="table table-bordered  table-hover text-nowrap mb-0">
                                <thead class="border-top">
                                    <tr>
                                        <th class="bg-transparent border-bottom-0">ID</th>
                                        <th class="bg-transparent border-bottom-0">Name</th>
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

        <div class="modal fade" id="modal_style_update" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fw-bold">Update Information</h5>
                        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <form id="id_form_upd_style" class="validate-form">
                            <input type="hidden" name="hid_id_st" id="id_hid_id_st" value="0">
                            <div class="form-group">
                                <label for="id_txt_name_mk" class="form-label">Name <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_name_st" name="txt_name_st" placeholder="Enter make: e.g.: SUV, Sentra, etc." maxlength="45" autocomplete="off" required>
                            </div>
                            <div class="alert alert-danger mb-0 d-none" id="id_div_conteiner_error_updstyle" role="alert">
                                <span class="alert-inner--icon" id="id_icon_up_st"><i class="fe fe-check"></i></span>
                                <span class="alert-inner--text "><span id="id_div_msg_error_updstyle" class="fw-bold"><strong>Danger!</strong> </span></span>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button class="btn btn-primary" id="id_btn_update_st">Save changes</button>
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
                '.($hac == 'add' ? 'Create new body style' : 'List of body style').'
                
            </h1>
            <div>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="./?mod=style&hac=list">Body Style</a></li>
                    '.($hac == 'add' ? '<li class="breadcrumb-item active" aria-current="page">New Body Style</li>' : '<li class="breadcrumb-item active" aria-current="page">List of Body Style</li>').'
                </ol>
            </div>
        </div>
        <!-- PAGE-HEADER END -->
        ';

        return $tmpHTML;
    }