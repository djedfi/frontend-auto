<?php
 function list_car()
 {
     return 'listado';
 }

 function form_add()
 {
     $tmpHTML = '                        <!--Row -->
     <div class="row ">
         <div class="col-md-12">
             <div class="card">
                 <div class="card-header border-bottom-0">
                     <div class="card-title">
                         
                     </div>
                 </div>
                 <div class="card-body">
                     <div id="id_wizard_car">
                        <span class="text-red">All inputs with (*) are required</span>  
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
                                        <input type="text" class="form-control" id="id_txt_vin_car" name="txt_vin_car" pattern="^[A-Za-z1-9]{1}[A-Za-z0-9]{10}[0-9]{6}$" minlength="17" maxlength="17" autocomplete="off" required>
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_stcnumber_car" class="form-label">Stock Number <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_stcnumber_car" name="txt_stcnumber_car" pattern="^[A-Za-z]{2}[0-9]{6}$" minlength="8" maxlength="8" autocomplete="off" required>
                                    </div> 
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_ndoors_car" class="form-label">Number of doors <span class="text-red">*</span></label>
                                        <input type="number" class="form-control" id="id_txt_ndoors_car" name="txt_ndoors_car" min="1" max="10" autocomplete="off" required>
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
                                        <label for="id_slc_transmi_car" class="form-label">Choose a Transmission <span class="text-red">*</span></label>
                                        <select class="form-control select2 form-select" id="id_slc_transmi_car" name="slc_transmi_car" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slctransmi" required>
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
                                        <label for="id_slc_fueltype_car" class="form-label">Choose a Fuel Type <span class="text-red">*</span></label>
                                        <select class="form-control select2 form-select" id="id_slc_fueltype_car" name="slc_fueltype_car" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcfuelt" required>
                                            <option label="Choose one"></option>
                                            <option value="1">Gasoline</option>
                                            <option value="2">Diesel</option>
                                            <option value="3">Hybrid</option>
                                            <option value="4">Electric</option>
                                        </select>
                                        <div id="id_div_msg_error_slcfuelt"  class="" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_mileage_car" class="form-label">Mileage <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_mileage_car" name="txt_mileage_car" autocomplete="off" required>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_color_car" class="form-label">Color <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_color_car" name="txt_color_car" autocomplete="off">
                                        <input type="hidden" name="hid_color_car" id="id_hid_color_car" data-cerror-print="id_div_msg_error_txtcolor" required>
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

 function header_tmp($hac)
 {
     $tmpHTML = '
     <!-- PAGE-HEADER -->
     <div class="page-header">
         <h1 class="page-title">
             '.($hac == 'add' ? 'Create new car' : 'List of cars').'
             
         </h1>
         <div>
             <ol class="breadcrumb">
                 <li class="breadcrumb-item"><a href="./?mod=car&hac=list">Cars</a></li>
                 '.($hac == 'add' ? '<li class="breadcrumb-item active" aria-current="page">New Car</li>' : '<li class="breadcrumb-item active" aria-current="page">List of cars</li>').'
             </ol>
         </div>
     </div>
     <!-- PAGE-HEADER END -->
     ';

     return $tmpHTML;
 }