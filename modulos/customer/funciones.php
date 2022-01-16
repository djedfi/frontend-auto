<?php
 function list_customer()
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
                     <div id="id_wizard_customer">
                         <span class="text-red">All inputs with (*) are required</span>
                         <h3>Primary Applicant Info</h3>
                         <section>
                            <form id="id_form_primary_info" class="validate-form">
                                <input type="hidden" name="hid_validate_driverl" id="id_hid_validate_driverl" value="0">
                                <input type="hidden" name="hid_validate_ssn" id="id_hid_validate_ssn" value="0">
                                <input type="hidden" name="hid_validate_email" id="id_hid_validate_email" value="0">
                                <input type="hidden" name="hid_validate_bday" id="id_hid_validate_bday" value="0">
                                <div class="row ">
                                    <div class="col-sm-4 col-md-6 col-lg-5">
                                        <label for="id_txt_fname_cus" class="form-label">First name <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_fname_cus" name="txt_fname_cus" maxlength="250" pattern="^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{2,250}$" required>
                                    </div>
                                    <div class="col-sm-2 col-md-6 col-lg-2">
                                        <label for="id_txt_init_cus" class="form-label">Initial</label>
                                        <input type="text" class="form-control" id="id_txt_init_cus" name="txt_init_cus" maxlength="4" pattern="^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{1,4}$">
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-5">
                                        <label for="id_txt_lname_cus" class="form-label">Last name <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_lname_cus" name="txt_lname_cus" maxlength="250" pattern="^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{2,250}$" required>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_mobile_cus" class="form-label">Mobile number <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_mobile_cus" name="txt_mobile_cus" maxlength="14"  placeholder="(999) 999-9999" required>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_email_cus" class="form-label">E-mail <span class="text-red">*</span></label>
                                        <input type="email" class="form-control" id="id_txt_email_cus" name="txt_email_cus" maxlength="150" required>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_dlicense_cus" class="form-label">Drivers License Number <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_dlicense_cus" name="txt_dlicense_cus" maxlength="15" required>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_statelic_cus" class="form-label">State Issued <span class="text-red">*</span></label>
                                        <select class="form-control select2-show-search form-select" id="id_slc_statelic_cus" name="slc_statelic_cus" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcstatelic" required>
                                            <option label="Choose one"></option>
                                        </select>
                                        <div id="id_div_msg_error_slcstatelic" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_bday_cus" class="form-label">Birthday <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_bday_cus" name="txt_bday_cus" maxlength="10" placeholder="MM/DD/YYYY" required>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_ssn_cus" class="form-label">Social Security Number <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_ssn_cus" name="txt_ssn_cus" maxlength="11" placeholder="999-99-9999" required>
                                    </div>
                                </div>
                            </form>
                         </section>
                         <h3>Primary Applicant Housing Info</h3>   
                         <section>
                            <form id="id_form_housing_info" class="validate-form">
                                <span class="text-red">All inputs with (*) are required</span>
                                <div class="row">
                                    <div class="col-12">
                                        <label for="id_txt_paddress_cus" class="form-label">Primary Address <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_paddress_cus" name="txt_paddress_cus" maxlength="250" required>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_saddress_cus" class="form-label">Secondary Address <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_saddress_cus" name="txt_saddress_cus" maxlength="150" required>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_city_cus" class="form-label">City <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_city_cus" name="txt_city_cus" maxlength="100" required>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_slc_state_cus" class="form-label">State <span class="text-red">*</span></label>
                                        <select class="form-control select2-show-search form-select" id="id_slc_state_cus" name="slc_state_cus" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcstate" required>
                                            <option label="Choose one"></option>
                                        </select>
                                        <div id="id_div_msg_error_slcstate" role="alert"></div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_zip_cus" class="form-label">Zipcode <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" id="id_txt_zip_cus" name="txt_zip_cus" maxlength="5" placeholder="99999" pattern="^[0-9]{5}$" required>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_resphone_cus" class="form-label">Residential phone </label>
                                        <input type="text" class="form-control" id="id_txt_resphone_cus" name="txt_resphone_cus" maxlength="14" placeholder="(999) 999-9999">
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <label for="id_txt_business_cus" class="form-label">Business phone </label>
                                        <input type="text" class="form-control" id="id_txt_business_cus" name="txt_business_cus" maxlength="20" placeholder="(999) 999-9999 Ext 999">
                                    </div>
                                    <div class="col-12 mt-3 alert alert-danger d-none" id="id_div_conteiner_error_newcus" role="alert">
                                        <span class="alert-inner--icon"><i class="fe fe-slash"></i></span>
                                        <span class="alert-inner--text "><strong>Danger!</strong> <span id="id_div_msg_error_newcus" class="fw-bold"></span></span>
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
             '.($hac == 'add' ? 'Create new customer' : 'List of customers').'
             
         </h1>
         <div>
             <ol class="breadcrumb">
                 <li class="breadcrumb-item"><a href="./?mod=customer&hac=list">Customers</a></li>
                 '.($hac == 'add' ? '<li class="breadcrumb-item active" aria-current="page">New Customer</li>' : '<li class="breadcrumb-item active" aria-current="page">List of customers</li>').'
             </ol>
         </div>
     </div>
     <!-- PAGE-HEADER END -->
     ';

     return $tmpHTML;
 }