<?php
 function form_add()
 {
     $tmpHTML = '                        <!--Row -->
     <div class="row ">
         <div class="col-md-12">
             <div class="card">
                 <div class="card-header border-bottom-0">
                     <div class="card-title">
                        <span class="text-red">All inputs with (*) are required</span>  
                     </div>
                 </div>
                 <div class="card-body">
                     <div id="id_wizard_car">
                        
                         <h3>Main features</h3>
                         <section>
                            <form id="id_form_main" class="validate-form">
                                <input type="hidden" name="hid_validate_vin" id="id_hid_validate_vin" value="0">
                                <input type="hidden" name="hid_validate_stk" id="id_hid_validate_stk" value="0">
                                <div class="row ">
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_make_car" class="form-label">Choose a Make <span class="text-red">*</span></label>
                                        <select class="form-control select2-show-search form-select" id="id_slc_make_car" name="slc_make_car" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcmake" required>
                                            <option label="Choose one"></option>
                                        </select>
                                        <div id="id_div_msg_error_slcmake" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_model_car" class="form-label">Choose a Model <span class="text-red">*</span></label>
                                        <select class="form-control select2-show-search form-select" id="id_slc_model_car" name="slc_model_car" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcmodel" required>
                                            <option label="Choose one"></option>
                                        </select>
                                        <div id="id_div_msg_error_slcmodel" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_trim_car" class="form-label">Choose a Trim <span class="text-red">*</span></label>
                                        <select class="form-control select2-show-search form-select" id="id_slc_trim_car" name="slc_trim_car" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slctrim" required>
                                            <option label="Choose one"></option>
                                        </select>
                                        <div id="id_div_msg_error_slctrim" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_year_car" class="form-label">Year <span class="text-red">*</span></label>
                                        <input type="number" class="form-control" id="id_txt_year_car" name="txt_year_car" min="1990" max="2099" step="1" maxlength="4" pattern="^[1]{1}[9]{1}[0-9]{2}$" autocomplete="off" placeholder="YYYY" required>
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_vin_car" class="form-label">VIN <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_vin_car" name="txt_vin_car" minlength="17" maxlength="17" autocomplete="off" required>
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_stcnumber_car" class="form-label">Stock Number <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_stcnumber_car" name="txt_stcnumber_car" minlength="8" maxlength="8" autocomplete="off" required>
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_ndoors_car" class="form-label">Number of doors</label>
                                        <input type="number" class="form-control" id="id_txt_ndoors_car" name="txt_ndoors_car" min="1" max="10" autocomplete="off">
                                    </div> 
                                </div>
                            </form>
                         </section>
                         <h3>Price of vehicle</h3>
                         <section>
                            <form id="id_form_price" class="validate-form">
                                <div class="row ">
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_price_car" class="form-label">Price <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_price_car" name="txt_price_car" autocomplete="off" required>
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_branch_car" class="form-label">Choose a Branch <span class="text-red">*</span></label>
                                        <select class="form-control select2-show-search form-select" id="id_slc_branch_car" name="slc_branch_car" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcbrach" required>
                                            <option label="Choose one"></option>
                                        </select>
                                        <div id="id_div_msg_error_slcbrach"  class="" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_style_car" class="form-label">Choose a Style <span class="text-red">*</span></label>
                                        <select class="form-control select2-show-search form-select" id="id_slc_style_car" name="slc_style_car" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcstyle" required>
                                            <option label="Choose one"></option>
                                        </select>
                                        <div id="id_div_msg_error_slcstyle"  class="" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_transmi_car" class="form-label">Choose a Transmission</label>
                                        <select class="form-control select2 form-select" id="id_slc_transmi_car" name="slc_transmi_car" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slctransmi">
                                            <option label="Choose one"></option>
                                            <option value="1">Authomatic</option>
                                            <option value="2">CTV</option>
                                            <option value="3">Manual</option>                                            
                                        </select>
                                        <div id="id_div_msg_error_slctransmi"  class="" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_condicion_car" class="form-label">Choose a Condition <span class="text-red">*</span></label>
                                        <select class="form-control select2 form-select" id="id_slc_condicion_car" name="slc_condicion_car" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcondicion" required>
                                            <option label="Choose one"></option>
                                            <option value="1">Used</option>
                                            <option value="2">New</option>                                            
                                        </select>
                                        <div id="id_div_msg_error_slcondicion"  class="" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_fueltype_car" class="form-label">Choose a Fuel Type</label>
                                        <select class="form-control select2 form-select" id="id_slc_fueltype_car" name="slc_fueltype_car" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcfuelt">
                                            <option label="Choose one"></option>
                                            <option value="1">Gasoline</option>
                                            <option value="2">Diesel</option>
                                            <option value="3">Hybrid</option>
                                            <option value="4">Electric</option>
                                        </select>
                                        <div id="id_div_msg_error_slcfuelt"  class="" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_mileage_car" class="form-label">Mileage</label>
                                        <input type="text" class="form-control" id="id_txt_mileage_car" name="txt_mileage_car" autocomplete="off">
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_color_car" class="form-label">Color</label>
                                        <input type="text" class="form-control" id="id_txt_color_car" name="txt_color_car" autocomplete="off">
                                        <input type="hidden" name="hid_color_car" id="id_hid_color_car" data-cerror-print="id_div_msg_error_txtcolor">
                                        <div id="id_div_msg_error_txtcolor"  class="" role="alert"></div>
                                    </div>
                                </div>
                            </form>
                         </section>
                         <h3>Other information</h3>
                         <section>
                            <form id="id_form_otherinfo" class="validate-form">
                                <div class="row ">
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_engineinfo_car" class="form-label">Engine info </label>
                                        <input type="text" class="form-control" id="id_txt_engineinfo_car" name="txt_engineinfo_car" maxlength="45" autocomplete="off">
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_drivetrain_car" class="form-label">Drive Train </label>
                                        <input type="text" class="form-control" id="id_txt_drivetrain_car" name="txt_drivetrain_car" maxlength="45" autocomplete="off">
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_fuelecono_car" class="form-label">Fuel Economy </label>
                                        <input type="text" class="form-control" id="id_txt_fuelecono_car" name="txt_fuelecono_car"  maxlength="45" autocomplete="off">
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_wheelsize_car" class="form-label">Wheel Size </label>
                                        <input type="text" class="form-control" id="id_txt_wheelsize_car" name="txt_wheelsize_car" maxlength="45" autocomplete="off">
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_url_car" class="form-label">Website URL </label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="lbl_https_url_car">https://</span>
                                            <input type="text" class="form-control" id="id_txt_url_car" name="txt_url_car" aria-describedby="lbl_https_url_car" maxlength="150" autocomplete="off" data-cerror-print="id_div_msg_error_webnewcar">
                                        </div>
                                        <div id="id_div_msg_error_webnewcar"  class="" role="alert"></div>
                                    </div> 
                                    <div class="col-12 mt-3 alert alert-danger d-none" id="id_div_conteiner_error_newcar" role="alert">
                                        <span class="alert-inner--icon"><i class="fe fe-slash"></i></span>
                                        <span class="alert-inner--text "><strong>Danger!</strong> <span id="id_div_msg_error_newcar" class="fw-bold"></span></span>
                                    </div>
                                </div>
                            </form>
                         </section>
                     </div>
                     
                 </div>
             </div>
         </div>
     </div>
     <!--/Row-->';

     return $tmpHTML;

 }

 function list_car()
 {
     $tmpHTML = '
        <div class="row align-items-center">
            <div class="col-12 mx-auto">
                <div class="card border-primary justify-content-center">
                    <div class="card-header justify-content-end">
                        <button type="button" id="id_btn_new_car" class="btn btn-success fw-bold lh-lg">Create a new Car</button>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="id_table_cars" class="table table-bordered  table-hover text-nowrap mb-0" style="width:100%">
                                <thead class="border-top">
                                    <tr>
                                        <th class="bg-transparent border-bottom-0">ID</th>
                                        <th class="bg-transparent border-bottom-0 text-center">Make</th>
                                        <th class="bg-transparent border-bottom-0 text-center">Model</th>
                                        <th class="bg-transparent border-bottom-0 text-center">Trim</th>
                                        <th class="bg-transparent border-bottom-0 text-center">Condition</th>
                                        <th class="bg-transparent border-bottom-0 text-center">VIN</th>
                                        <th class="bg-transparent border-bottom-0 text-center">Stock Number</th>
                                        <th class="bg-transparent border-bottom-0 text-center">Price</th>
                                        <th class="bg-transparent border-bottom-0 text-center">State</th>
                                        <th class="bg-transparent border-bottom-0  text-center w-3">Options</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Row -->
     ';

     return $tmpHTML;
 }

 function form_update()
 {
    if(isset($_GET['car']))
    {
        $tmp_id = $_GET['car'];
    }
    else
    {
        $tmp_id = 0;
    }

    $tmp_loan_id            = isset($_GET['loan']) ? $_GET['loan'] : 0;

     $tmpHTML = '                        
     <!--Row -->
     <div class="row" id="id_div_car_update">
        <input type="hidden" name="hid_id_car_update" id="id_hid_id_car_update" value="'.$tmp_id.'">
        <input type="hidden" name="hid_id_loan" id="id_hid_id_loan" value="'.$tmp_loan_id.'">
         <div class="col-md-12">
             <div class="card">
                 <div class="card-header border-bottom-0">
                     <div class="card-title">
                     </div>
                 </div>
                 <div class="card-body">
                     <div id="id_wizard_car_update">
                        <span class="text-red">All inputs with (*) are required</span>  
                         <h3>Main features</h3>
                         <section>
                            <form id="id_form_main_update" class="validate-form">
                                <input type="hidden" name="hid_validate_vin_upd" id="id_hid_validate_vin_upd" value="0">
                                <input type="hidden" name="hid_validate_stk_upd" id="id_hid_validate_stk_upd" value="0">
                                <div class="row ">
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_make_car_upd" class="form-label">Choose a Make <span class="text-red">*</span></label>
                                        <select class="form-control select2-show-search form-select" id="id_slc_make_car_upd" name="slc_make_car_upd" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcmake_upd" required>
                                            <option label="Choose one"></option>
                                        </select>
                                        <div id="id_div_msg_error_slcmake_upd" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_model_car_upd" class="form-label">Choose a Model <span class="text-red">*</span></label>
                                        <select class="form-control select2-show-search form-select" id="id_slc_model_car_upd" name="slc_model_car_upd" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcmodel_upd" required>
                                            <option label="Choose one"></option>
                                        </select>
                                        <div id="id_div_msg_error_slcmodel_upd" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_trim_car_upd" class="form-label">Choose a Trim <span class="text-red">*</span></label>
                                        <select class="form-control select2-show-search form-select" id="id_slc_trim_car_upd" name="slc_trim_car_upd" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slctrim_upd" required>
                                            <option label="Choose one"></option>
                                        </select>
                                        <div id="id_div_msg_error_slctrim_upd" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_year_car_upd" class="form-label">Year <span class="text-red">*</span></label>
                                        <input type="number" class="form-control" id="id_txt_year_car_upd" name="txt_year_car_upd" min="1990" max="2099" step="1" maxlength="4" pattern="^[1]{1}[9]{1}[0-9]{2}$" autocomplete="off" placeholder="YYYY" required>
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_vin_car_upd" class="form-label">VIN <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_vin_car_upd" name="txt_vin_car_upd" minlength="17" maxlength="17" autocomplete="off" required>
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_stcnumber_car_upd" class="form-label">Stock Number <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_stcnumber_car_upd" name="txt_stcnumber_car_upd" minlength="8" maxlength="8" autocomplete="off" required>
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_ndoors_car_upd" class="form-label">Number of doors </label>
                                        <input type="number" class="form-control" id="id_txt_ndoors_car_upd" name="txt_ndoors_car_upd" min="1" max="10" autocomplete="off">
                                    </div> 
                                </div>
                            </form>
                         </section>
                         <h3>Price of vehicle</h3>
                         <section>
                            <form id="id_form_price_update" class="validate-form">
                                <div class="row ">
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_price_car_upd" class="form-label">Price <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_price_car_upd" name="txt_price_car_upd" autocomplete="off" required>
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_branch_car_upd" class="form-label">Choose a Branch <span class="text-red">*</span></label>
                                        <select class="form-control select2-show-search form-select" id="id_slc_branch_car_upd" name="slc_branch_car_upd" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcbrach_upd" required>
                                            <option label="Choose one"></option>
                                        </select>
                                        <div id="id_div_msg_error_slcbrach_upd"  class="" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_style_car_upd" class="form-label">Choose a Style <span class="text-red">*</span></label>
                                        <select class="form-control select2-show-search form-select" id="id_slc_style_car_upd" name="slc_style_car_upd" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcstyle_upd" required>
                                            <option label="Choose one"></option>
                                        </select>
                                        <div id="id_div_msg_error_slcstyle_upd"  class="" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_transmi_car_upd" class="form-label">Choose a Transmission </label>
                                        <select class="form-control select2 form-select" id="id_slc_transmi_car_upd" name="slc_transmi_car_upd" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slctransmi_upd">
                                            <option label="Choose one"></option>
                                            <option value="1">Authomatic</option>
                                            <option value="2">CTV</option>
                                            <option value="3">Manual</option>                                            
                                        </select>
                                        <div id="id_div_msg_error_slctransmi_upd"  class="" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_condicion_car_upd" class="form-label">Choose a Condition <span class="text-red">*</span></label>
                                        <select class="form-control select2 form-select" id="id_slc_condicion_car_upd" name="slc_condicion_car_upd" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcondicion_upd" required>
                                            <option label="Choose one"></option>
                                            <option value="1">Used</option>
                                            <option value="2">New</option>                                            
                                        </select>
                                        <div id="id_div_msg_error_slcondicion_upd"  class="" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_fueltype_car_upd" class="form-label">Choose a Fuel Type</label>
                                        <select class="form-control select2 form-select" id="id_slc_fueltype_car_upd" name="slc_fueltype_car_upd" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcfuelt_upd">
                                            <option label="Choose one"></option>
                                            <option value="1">Gasoline</option>
                                            <option value="2">Diesel</option>
                                            <option value="3">Hybrid</option>
                                            <option value="4">Electric</option>
                                        </select>
                                        <div id="id_div_msg_error_slcfuelt_upd"  class="" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_mileage_car_upd" class="form-label">Mileage</label>
                                        <input type="text" class="form-control" id="id_txt_mileage_car_upd" name="txt_mileage_car_upd" autocomplete="off">
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_color_car_upd" class="form-label">Color </label>
                                        <input type="text" class="form-control" id="id_txt_color_car_upd" name="txt_color_car_upd" autocomplete="off">
                                        <input type="hidden" name="hid_color_car_upd" id="id_hid_color_car_upd" data-cerror-print="id_div_msg_error_txtcolor_upd" value="#000000">
                                        <div id="id_div_msg_error_txtcolor_upd"  class="" role="alert"></div>
                                    </div>
                                </div>
                            </form>
                         </section>
                         <h3>Other information</h3>
                         <section>
                            <form id="id_form_otherinfo_update" class="validate-form">
                                <div class="row ">
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_engineinfo_car_upd" class="form-label">Engine info </label>
                                        <input type="text" class="form-control" id="id_txt_engineinfo_car_upd" name="txt_engineinfo_car_upd" maxlength="45" autocomplete="off">
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_drivetrain_car_upd" class="form-label">Drive Train </label>
                                        <input type="text" class="form-control" id="id_txt_drivetrain_car_upd" name="txt_drivetrain_car_upd" maxlength="45" autocomplete="off">
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_fuelecono_car_upd" class="form-label">Fuel Economy </label>
                                        <input type="text" class="form-control" id="id_txt_fuelecono_car_upd" name="txt_fuelecono_car_upd"  maxlength="45" autocomplete="off">
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_wheelsize_car_upd" class="form-label">Wheel Size </label>
                                        <input type="text" class="form-control" id="id_txt_wheelsize_car_upd" name="txt_wheelsize_car_upd" maxlength="45" autocomplete="off">
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_url_car_upd" class="form-label">Website URL </label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="lbl_https_url_car_upd">https://</span>
                                            <input type="text" class="form-control" id="id_txt_url_car_upd" name="txt_url_car_upd" aria-describedby="lbl_https_url_car_upd" maxlength="150" autocomplete="off" data-cerror-print="id_div_msg_error_webnewcar_upd">
                                        </div>
                                        <div id="id_div_msg_error_webnewcar_upd"  class="" role="alert"></div>
                                    </div> 
                                    <div class="col-12 mt-3 alert alert-danger d-none" id="id_div_conteiner_error_updcar" role="alert">
                                        <span class="alert-inner--icon"><i class="fe fe-slash"></i></span>
                                        <span class="alert-inner--text "><strong>Danger!</strong> <span id="id_div_msg_error_updcar" class="fw-bold"></span></span>
                                    </div>
                                </div>
                            </form>
                         </section>
                     </div>
                     
                 </div>
             </div>
         </div>
     </div>
     <!--/Row-->';

     return $tmpHTML;

 }


 function header_tmp($hac)
 {
     $tmpHTML = '
     <!-- PAGE-HEADER -->
     <div class="page-header">
         <h1 class="page-title">
             '.($hac == 'add' ? 'Create new car' : ($hac == 'update' ? 'Update Info about Car':'List of cars')).'
         </h1>
         <div>
             <ol class="breadcrumb">
                 <li class="breadcrumb-item"><a href="./?mod=car&hac=list">Cars</a></li>
                 '.($hac == 'add' ? '<li class="breadcrumb-item active" aria-current="page">New Car</li>' : ($hac == 'update' ? '<li class="breadcrumb-item active" aria-current="page">Update Car</li>':'<li class="breadcrumb-item active" aria-current="page">List of Cars</li>')).'
             </ol>
         </div>
     </div>
     <!-- PAGE-HEADER END -->
     ';

     return $tmpHTML;
 }