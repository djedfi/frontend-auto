<?php
function form_add()
{
    $tmp_car_id         = isset($_GET['car']) ? $_GET['car'] : 0;
    $tmp_customer_id    = isset($_GET['customer']) ? $_GET['customer'] : 0;

    $tmpHTML = '                        
    <!--Row -->
    <div class="row mt-5">
        <div class="col-md-12 col-xl-6">
            <div class="card css_card_info_car" id="id_card_info_car">
                <div class="card-header justify-content-end">
                    <button type="button" id="id_btn_new_car" class="btn btn-warning fw-bold lh-lg '.($tmp_car_id > 0 ? 'invisible' : 'visible').'" data-bs-toggle="modal" data-bs-target="#id_modal_find_car"><i class="fa fa-automobile"></i> Add a Car</button>
                </div>
                <div class="card-body" id="id_div_body_info_car_loan">
                    <form id="id_form_car_loan" class="validate-form">
                        <input type="hidden" name="hid_id_car_loan" id="id_hid_id_car_loan" value="'.$tmp_car_id.'">
                        <div class="row">
                            <div class="col-sm-12 col-lg-4">                                   
                                <label for="id_txt_make_car_loan" class="form-label">Make</label>
                                <input type="text" class="form-control" id="id_txt_make_car_loan" name="txt_make_car_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-4">                                   
                                <label for="id_txt_model_car_loan" class="form-label">Model</label>
                                <input type="text" class="form-control" id="id_txt_model_car_loan" name="txt_model_car_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-4">                                   
                                <label for="id_txt_trim_car_loan" class="form-label">Trim</label>
                                <input type="text" class="form-control" id="id_txt_trim_car_loan" name="txt_trim_car_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-6">
                                <label for="id_txt_vin_car_loan" class="form-label">VIN</label>
                                <input type="text" class="form-control" id="id_txt_vin_car_loan" name="txt_vin_car_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-3">
                                <label for="id_txt_scknumber_car_loan" class="form-label">Stock Number</label>
                                <input type="text" class="form-control" id="id_txt_scknumber_car_loan" name="txt_scknumber_car_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-3">
                                <label for="id_txt_year_car_loan" class="form-label">Year</label>
                                <input type="text" class="form-control" id="id_txt_year_car_loan" name="txt_year_car_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-4">
                                <label for="id_txt_mileage_car_loan" class="form-label">Mileage</label>
                                <input type="text" class="form-control" id="id_txt_mileage_car_loan" name="txt_mileage_car_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-4">
                                <label for="id_txt_transmi_car_loan" class="form-label">Transmission</label>
                                <input type="text" class="form-control" id="id_txt_transmi_car_loan" name="txt_transmi_car_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-4">
                                <label for="id_txt_fuelt_car_loan" class="form-label">Fuel Type</label>
                                <input type="text" class="form-control" id="id_txt_fuelt_car_loan" name="txt_fuelt_car_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-6">
                                <label for="id_txt_style_car_loan" class="form-label">Style</label>
                                <input type="text" class="form-control" id="id_txt_style_car_loan" name="txt_style_car_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-6">
                                <label for="id_txt_condition_car_loan" class="form-label">Condition</label>
                                <input type="text" class="form-control" id="id_txt_condition_car_loan" name="txt_condition_car_loan" autocomplete="off" readonly>
                            </div>

                        </div>
                    </form>
                </div>
                <div class="card-footer d-none"  id="id_div_conteiner_error_info_car_loan">
                    <div class="alert alert-danger mb-0" role="alert">
                        <span class="alert-inner--icon"><i class="fe fe-slash"></i></span>
                        <span class="alert-inner--text "><strong>Danger!</strong> <span id="id_div_msg_error_info_car_loan" class="fw-bold">You have to select a Car</span></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 col-xl-6">
            <div class="card css_card_info_customer" id="id_card_info_customer">
                <div class="card-header justify-content-end">
                    <button type="button" id="id_btn_new_car" class="btn btn-secondary fw-bold lh-lg '.($tmp_customer_id > 0 ? 'invisible' : 'visible').'" data-bs-toggle="modal" data-bs-target="#id_modal_find_customer"><i class="fa fa-user-plus"></i> Add a Customer</button>
                </div>
                <div class="card-body" id="id_div_body_info_customer_loan">
                    <form id="id_form_customer_loan" class="validate-form">
                        <input type="hidden" name="hid_id_cust_loan" id="id_hid_id_cust_loan" value="'.$tmp_customer_id.'">
                        <div class="row">
                            <div class="col-sm-12 col-lg-4">                                   
                                <label for="id_txt_fname_cust_loan" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="id_txt_fname_cust_loan" name="txt_fname_cust_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-4">                                   
                                <label for="id_txt_lname_cust_loan" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="id_txt_lname_cust_loan" name="txt_lname_cust_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-4">                                   
                                <label for="id_txt_bday_cust_loan" class="form-label">Birthday (MM/DD/YYYY)</label>
                                <input type="text" class="form-control" id="id_txt_bday_cust_loan" name="txt_bday_cust_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-4">
                                <label for="id_txt_cphone_cust_loan" class="form-label">Mobile Number</label>
                                <input type="text" class="form-control" id="id_txt_cphone_cust_loan" name="txt_cphone_cust_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-4">
                                <label for="id_txt_email_cust_loan" class="form-label">E-Mail</label>
                                <input type="text" class="form-control" id="id_txt_email_cust_loan" name="txt_email_cust_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-4">
                                <label for="id_txt_dlic_cust_loan" class="form-label">Drivers License</label>
                                <input type="text" class="form-control" id="id_txt_dlic_cust_loan" name="txt_dlic_cust_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-7">
                                <label for="id_txt_paddress_cust_loan" class="form-label">Primary Address</label>
                                <input type="text" class="form-control" id="id_txt_paddress_cust_loan" name="txt_paddress_cust_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-5">
                                <label for="id_txt_saddress_cust_loan" class="form-label">Secundary Address</label>
                                <input type="text" class="form-control" id="id_txt_saddress_cust_loan" name="txt_saddress_cust_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-4">
                                <label for="id_txt_state_cust_loan" class="form-label">State</label>
                                <input type="text" class="form-control" id="id_txt_state_cust_loan" name="txt_state_cust_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-4">
                                <label for="id_txt_city_cust_loan" class="form-label">City</label>
                                <input type="text" class="form-control" id="id_txt_city_cust_loan" name="txt_city_cust_loan" autocomplete="off" readonly>
                            </div>
                            <div class="col-sm-12 col-lg-4">
                                <label for="id_txt_zip_cust_loan" class="form-label">ZIP</label>
                                <input type="text" class="form-control" id="id_txt_zip_cust_loan" name="txt_zip_cust_loan" autocomplete="off" readonly>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer d-none" id="id_div_conteiner_error_info_customer_loan">
                    <div class="alert alert-danger mb-0" role="alert">
                        <span class="alert-inner--icon"><i class="fe fe-slash"></i></span>
                        <span class="alert-inner--text "><strong>Danger!</strong> <span id="id_div_msg_error_info_customer_loan" class="fw-bold">You have to select a Customer</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row ">
        <div class="col-12">
            <div class="expanel expanel-primary">
                <div class="expanel-heading">
                    <h3 class="expanel-title fw-bold"><i class="fa fa-university me-1"></i>Car Loan Information</h3>
                </div>
                <div class="expanel-body">
                    <form id="id_form_loan" class="validate-form">
                        <input type="hidden" name="hid_car_id_loan" id="id_hid_car_id_loan" value="">
                        <input type="hidden" name="hid_customer_id_loan" id="id_hid_customer_id_loan" value="">
                        <input type="hidden" name="hid_id_user_loan" id="id_hid_id_user_loan" value="'.$_SESSION['usuAA'].'">
                        <input type="hidden" name="hid_branch_id_loan" id="id_hid_branch_id_loan" value="'.$_SESSION['branch_id'].'">
                        <input type="hidden" name="hid_validate_dopen" id="id_hid_validate_dopen" value="0">
                        <input type="hidden" name="hid_validate_dstart" id="id_hid_validate_dstart" value="0">
                        <div class="row">
                            <div class="col-12">                                   
                                <span class="text-red">All inputs with (*) are required</span>
                            </div>
                            <div class="col-sm-12 col-lg-3">                                   
                                <label for="id_txt_fname_cust_loan" class="form-label">Vehicle Price (US$)</label>
                                <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_price_car_loan" name="txt_price_car_loan" placeholder="0.00" required readonly>
                            </div>
                            <div class="col-sm-12 col-lg-3">
                                <label for="id_txt_ttfinance_loan" class="form-label">Total to Finance (US$) <span class="text-red">*</span></label>
                                <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_ttfinance_loan" name="txt_ttfinance_loan" placeholder="0.00"  value="" autocomplete="off" required disabled>
                            </div>
                            <div class="col-sm-12 col-lg-3">                                   
                                <label for="id_txt_dpayment_loan" class="form-label">Down Payment (US$) <span class="text-red">*</span></label>
                                <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_dpayment_loan" name="txt_dpayment_loan" placeholder="0.00" autocomplete="off" required disabled>
                            </div>
                            <div class="col-sm-12 col-lg-3">
                                <label for="id_txt_mpayment_loan" class="form-label">Minimun payment (US$) <span class="text-red">*</span></label>
                                <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_mpayment_loan" name="txt_mpayment_loan"  placeholder="0.00" autocomplete="off"  required disabled>
                            </div>                            

                            <div class="col-sm-12 col-lg-4">    
                                <label for="id_txt_long_term_loan" class="form-label">Long Term in months <span class="text-red">*</span></label>                               
                                <input type="number" class="form-control" id="id_txt_long_term_loan" placeholder="" name="txt_long_term_loan" value="" autocomplete="off" disabled required>
                            </div>
                            <div class="col-md-12 col-lg-4">
                                <label for="id_date_open_loan" class="form-label">Date Loan <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_date_open_loan" name="date_open_loan" placeholder="MM/DD/YYYY" autocomplete="off" required disabled>
                            </div>
                            <div class="col-md-12 col-lg-4">
                                <label for="id_date_startpay_loan" class="form-label">Starting on <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_date_startpay_loan" name="date_startpay_loan" placeholder="MM/DD/YYYY" autocomplete="off" required disabled>
                            </div>

                            <div class="col-sm-12 col-lg-3">
                                <label for="id_txt_interest_loan" class="form-label">Late Days <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_late_days_loan" name="txt_late_days_loan" autocomplete="off" required disabled>
                            </div>
                            <div class="col-sm-12 col-lg-3">
                                <label for="id_txt_taxes_loan" class="form-label">Late Days Fee (US$) <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_late_days_fee_loan" name="txt_late_days_fee_loan" placeholder="0.00" autocomplete="off" required disabled>
                            </div>
                            <div class="col-sm-12 col-lg-3">
                                <label for="id_txt_interest_loan" class="form-label">Interest rate (%) </label>
                                <input type="text" class="form-control" id="id_txt_interest_loan" name="txt_interest_loan" placeholder="0.00" autocomplete="off"  disabled>
                            </div>
                            <div class="col-sm-12 col-lg-3">
                                <label for="id_txt_taxes_loan" class="form-label">Taxes rate (%) </label>
                                <input type="text" class="form-control" id="id_txt_taxes_loan" name="txt_taxes_loan" placeholder="0.00" autocomplete="off" disabled>
                            </div>
                            <div class="col-md-12 col-lg-3 mt-5">
                                <label class="custom-control custom-checkbox" for="id_chk_auto_payment_loan">
                                    <input type="checkbox" class="custom-control-input" name="chk_auto_payment_loan" id="id_chk_auto_payment_loan" value="0" disabled>
                                    <span class="custom-control-label">Automatic payment?</span>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="expanel-footer">
                    <div class="row">
                        <div class="col-6 text-start">
                            <div class="alert alert-danger mb-0 d-none" role="alert" id="id_div_div_error_form_loan">
                                <span class="alert-inner--icon"><i class="fe fe-slash"></i></span>
                                <span class="alert-inner--text "><strong>Danger!</strong> <span id="id_div_msg_error_form_loan" class="fw-bold"></span></span>
                            </div>
                        </div>
                        <div class="col-6 text-end">
                            <button class="btn btn-primary w-lg" id="id_btn_sbm_loan" type="button" disabled>
                                <i class="fa fa-save"></i>&nbsp;Submit Car Loan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="id_modal_find_car" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-xl " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Find Car</h5>
                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
                </div>
                <div class="modal-body">
                    <div class="table-responsive">
                        <table id="id_table_car_loan" class="table table-sm table-bordered table-hover text-nowrap mb-0" style="width:100%">
                            <thead class="border-top table-primary">
                                <tr>
                                    <th class="bg-transparent border-bottom-0">ID</th>
                                    <th class="bg-transparent border-bottom-0 text-center">Stock Number</th>
                                    <th class="bg-transparent border-bottom-0 text-center">Make</th>
                                    <th class="bg-transparent border-bottom-0 text-center">Model</th>
                                    <th class="bg-transparent border-bottom-0 text-center">Trim</th>
                                    <th class="bg-transparent border-bottom-0 text-center">VIN</th>
                                    <th class="bg-transparent border-bottom-0 text-center">Price</th>
                                    <th class="bg-transparent border-bottom-0 text-center w-1"></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="id_modal_find_customer" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Find Customer</h5>
                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
                </div>
                <div class="modal-body">
                    <div class="table-responsive">
                        <table id="id_table_customer_loan" class="table table-bordered  table-hover text-nowrap mb-0" style="width:100%">
                            <thead class="border-top table-primary">
                                <tr>
                                    <th class="bg-transparent border-bottom-0">ID</th>
                                    <th class="bg-transparent border-bottom-0 text-center">First Name</th>
                                    <th class="bg-transparent border-bottom-0 text-center">Last Name</th>
                                    <th class="bg-transparent border-bottom-0 text-center">Birthday<br><span class="text-muted font-10">Format (MM/DD/YYYY)</span></th>
                                    <th class="bg-transparent border-bottom-0 text-center">Mobile Number</th>
                                    <th class="bg-transparent border-bottom-0 text-center">E - Mail</th>
                                    <th class="bg-transparent border-bottom-0 text-center">Driver License</th>
                                    <th class="bg-transparent border-bottom-0  text-center w-1"></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ';

    return $tmpHTML;
}


function form_update()
{
    $tmp_loan_id            = isset($_GET['loan']) ? $_GET['loan'] : 0;
    $tmp_opc                = isset($_GET['opc']) ? $_GET['opc'] : 0;
    $opc1_active = '';
    $opc2_active = '';
    $opc3_active = '';

    switch($tmp_opc)
    {
        case 1:
            $opc1_active  = 'active';
        break;
        
        case 2:
            $opc2_active = 'active';
        break;
        
        case 3:
            $opc3_active = 'active';
        break;

        default:
            $opc1_active = 'active';
        break;
    }

    $tmpHTML = '                        
    <!--Row -->
    <div class="row mt-5" >
        <div class="card">
            <div class="card-header text-wrap d-none" id="id_div_setup_pago_automatico">
                <div class="alert alert-warning text-white bg-warning">
                    <span class=""><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24"><path fill="#fad383" d="M15.728,22H8.272a1.00014,1.00014,0,0,1-.707-.293l-5.272-5.272A1.00014,1.00014,0,0,1,2,15.728V8.272a1.00014,1.00014,0,0,1,.293-.707l5.272-5.272A1.00014,1.00014,0,0,1,8.272,2H15.728a1.00014,1.00014,0,0,1,.707.293l5.272,5.272A1.00014,1.00014,0,0,1,22,8.272V15.728a1.00014,1.00014,0,0,1-.293.707l-5.272,5.272A1.00014,1.00014,0,0,1,15.728,22Z"/><circle cx="12" cy="16" r="1" fill="#f7b731"/><path fill="#f7b731" d="M12,13a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v4A1,1,0,0,1,12,13Z"/></svg></span>
                    <span class="fs-6"><strong>This Car Loan is step up with Automatic payments</strong></span>
                </div>
            </div>
            <div class="card-body">
                <div class="panel panel-primary" id="id_div_panel_tab_loan">
                    <div class="tab-menu-heading">
                        <div class="tabs-menu">
                            <!-- Tabs -->
                            <ul class="nav panel-tabs panel-info">
                                <li><a href="#id_div_panel_tab_option_loan" class="'.$opc1_active.'" data-bs-toggle="tab"><span><i class="fa fa-university me-1"></i></span>Car Loan Information</a></li>
                                <li><a href="#id_div_panel_tab_option_car" class="'.$opc2_active.'" data-bs-toggle="tab"><span><i class="fa fa-car me-1"></i></span>Car Information</a></li>
                                <li><a href="#id_div_panel_tab_option_customer" class="'.$opc3_active.'"  data-bs-toggle="tab"><span><i class="fa fa-users me-1"></i></span>Customer Information</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="panel-body tabs-menu-body">
                        <div class="tab-content">
                            <div class="tab-pane '.$opc1_active.'" id="id_div_panel_tab_option_loan">
                                <form id="id_form_tab_loan" class="validate-form">
                                    <input type="hidden" name="hid_loan_id_tab_loan" id="id_hid_loan_id_tab_loan" value="'.$tmp_loan_id.'">
                                    <input type="hidden" name="hid_late_fee_tab_loan" id="id_hid_late_fee_tab_loan" value="">
                                    <div class="row">
                                        <div class="col-sm-12 col-lg-3">                                   
                                            <label for="id_txt_price_car_tab_loan" class="form-label">Vehicle Price (US$)</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_price_car_tab_loan" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-3">
                                            <label for="id_txt_ttfinance_tab_loan" class="form-label">Total to Finance (US$)</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_ttfinance_tab_loan" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-3">                                   
                                            <label for="id_txt_dpayment_tab_loan" class="form-label">Down Payment (US$)</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_dpayment_tab_loan" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-3">
                                            <label for="id_txt_mpayment_tab_loan" class="form-label">Minimun payment (US$)</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_mpayment_tab_loan" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">    
                                            <label for="id_txt_long_term_tab_loan" class="form-label">Long Term in months</label>                               
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_long_term_tab_loan" readonly>
                                        </div>
                                        <div class="col-md-12 col-lg-4">
                                            <label for="id_date_open_tab_loan" class="form-label">Date Loan</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_date_open_tab_loan" readonly>
                                        </div>
                                        <div class="col-md-12 col-lg-4">
                                            <label for="id_date_startpay_tab_loan" class="form-label">Start payment</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_date_startpay_tab_loan" readonly>
                                        </div>
                                        <div class="col-md-12 col-lg-3">
                                            <label for="id_txt_days_late_tab_loan" class="form-label">Late Days <span class="text-red">*</span></label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_days_late_tab_loan" name="txt_days_late_tab_loan" readonly>
                                        </div>                                        
                                        <div class="col-md-12 col-lg-3">
                                            <label for="id_txt_fee_late_tab_loan" class="form-label">Late Fee (US$)<span class="text-red">*</span></label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_fee_late_tab_loan" name="txt_fee_late_tab_loan" required disabled>
                                        </div>
                                        <div class="col-sm-12 col-lg-3">
                                            <label for="id_txt_interest_tab_loan" class="form-label">Interest rate (%)</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_interest_tab_loan" name="txt_interest_tab_loan" disabled>
                                        </div>
                                        <div class="col-sm-12 col-lg-3">
                                            <label for="id_txt_taxes_tab_loan" class="form-label">Taxes rate (%)</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_taxes_tab_loan" name="txt_taxes_tab_loan" disabled>
                                        </div>
                                        <div class="col-md-12 col-lg-6 mt-5">
                                            <label class="custom-control custom-checkbox" for="id_chk_auto_payment_tab_loan">
                                                <input type="checkbox" class="custom-control-input" name="chk_auto_payment_tab_loan" id="id_chk_auto_payment_tab_loan" value="0" disabled>
                                                <span class="custom-control-label">Automatic payment?</span>
                                            </label>
                                        </div>
                                        <div class="col-md-12 col-lg-6">
                                            <label for="id_txt_balance_now_tab_loan" class="form-label">Balance</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold bg-warning text-dark" id="id_txt_balance_now_tab_loan" readonly>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-12 col-lg-6" id="id_div_alerta_tab_loan" role="alert">

                                        </div>
                                        <div class="col-md-12 col-lg-6 text-end">
                                            <button type="button" id="id_btn_save_tab_loan" class="btn btn-info fw-bold lh-lg" disabled><i class="fe fe-refresh-ccw"></i> Update Info</button>
                                        </div>
                                    </div>
                                </form>                                
                            </div>
                            <div class="tab-pane '.$opc2_active.'" id="id_div_panel_tab_option_car">
                                <form id="id_form_tab_car" class="validate-form">
                                    <input type="hidden" name="hid_id_car_tab_car" id="id_hid_id_car_tab_car" value="">
                                    <div class="row">
                                        <div class="col-sm-12 col-lg-4">                                   
                                            <label for="id_txt_make_tab_car" class="form-label">Make</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_make_tab_car" name="txt_make_tab_car" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">                                   
                                            <label for="id_txt_model_tab_car" class="form-label">Model</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_model_tab_car" name="txt_model_tab_car" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">                                   
                                            <label for="id_txt_trim_tab_car" class="form-label">Trim</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_trim_tab_car" name="txt_trim_tab_car" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-6">
                                            <label for="id_txt_vin_tab_car" class="form-label">VIN</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_vin_tab_car" name="txt_vin_tab_car" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-3">
                                            <label for="id_txt_scknumber_tab_car" class="form-label">Stock Number</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_scknumber_tab_car" name="txt_scknumber_tab_car" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-3">
                                            <label for="id_txt_year_tab_car" class="form-label">Year</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_year_tab_car" name="txt_year_tab_car" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">
                                            <label for="id_txt_mileage_tab_car" class="form-label">Mileage</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_mileage_tab_car" name="txt_mileage_tab_car" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">
                                            <label for="id_txt_transmi_tab_car" class="form-label">Transmission</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_transmi_tab_car" name="txt_transmi_tab_car" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">
                                            <label for="id_txt_fuelt_tab_car" class="form-label">Fuel Type</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_fuelt_tab_car" name="txt_fuelt_tab_car" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-6">
                                            <label for="id_txt_style_tab_car" class="form-label">Style</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_style_tab_car" name="txt_style_tab_car" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-6">
                                            <label for="id_txt_condition_tab_car" class="form-label">Condition</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_condition_tab_car" name="txt_condition_car_loan" autocomplete="off" readonly>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12 text-end">
                                            <button type="button" id="id_btn_update_tab_car" class="btn btn-info fw-bold lh-lg" disabled><i class="fe fe-log-out"></i> Go to Car Information</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane '.$opc3_active.'" id="id_div_panel_tab_option_customer">
                                <form id="id_form_tab_customer" class="validate-form">
                                    <input type="hidden" name="hid_id_cust_tab_customer" id="id_hid_id_cust_tab_customer" value="">
                                    <div class="row">
                                        <div class="col-sm-12 col-lg-4">                                   
                                            <label for="id_txt_fname_tab_customer" class="form-label">First Name</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_fname_tab_customer" name="txt_fname_tab_customer" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">                                   
                                            <label for="id_txt_lname_tab_customer" class="form-label">Last Name</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_lname_tab_customer" name="txt_lname_tab_customer" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">                                   
                                            <label for="id_txt_bday_tab_customer" class="form-label">Birthday (MM/DD/YYYY)</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_bday_tab_customer" name="txt_bday_tab_customer" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">
                                            <label for="id_txt_cphone_tab_customer" class="form-label">Mobile Number</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_cphone_tab_customer" name="txt_cphone_tab_customer" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">
                                            <label for="id_txt_email_tab_customer" class="form-label">E-Mail</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_email_tab_customer" name="txt_email_tab_customer" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">
                                            <label for="id_txt_dlic_tab_customer" class="form-label">Drivers License</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_dlic_tab_customer" name="txt_dlic_tab_customer" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-7">
                                            <label for="id_txt_paddress_tab_customer" class="form-label">Primary Address</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_paddress_tab_customer" name="id_txt_paddress_tab_customer" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-5">
                                            <label for="id_txt_saddress_tab_customer" class="form-label">Secundary Address</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_saddress_tab_customer" name="txt_saddress_tab_customer" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">
                                            <label for="id_txt_state_tab_customer" class="form-label">State</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_state_tab_customer" name="txt_state_tab_customer" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">
                                            <label for="id_txt_city_tab_customer" class="form-label">City</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_city_tab_customer" name="txt_city_tab_customer" autocomplete="off" readonly>
                                        </div>
                                        <div class="col-sm-12 col-lg-4">
                                            <label for="id_txt_zip_tab_customer" class="form-label">ZIP</label>
                                            <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_zip_tab_customer" name="txt_zip_tab_customer" autocomplete="off" readonly>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12 text-end">
                                            <button type="button" id="id_btn_update_tab_customer" class="btn btn-info fw-bold lh-lg" disabled><i class="fe fe-log-out"></i> Go to Customer Information</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </div>
    
    <div class="row mt-5" >
        <div class="card">
            <div class="card-body">
                <div class="panel panel-primary" id="id_div_panel_tab_summary">
                    <div class="tab-menu-heading">
                        <div class="tabs-menu">
                            <!-- Tabs -->
                            <ul class="nav panel-tabs panel-info">
                                <li><a href="#id_div_panel_tab_option_summary" class="active" data-bs-toggle="tab"><span><i class="fa fa-calculator me-1"></i></span>Account Summary</a></li>
                                <li><a href="#id_div_panel_tab_option_scheduled" class="" data-bs-toggle="tab"><span><i class="fa fa-calculator me-1"></i></span>Schedule Payments</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="panel-body tabs-menu-body">
                        <div class="tab-content">
                            <div class="tab-pane active" id="id_div_panel_tab_option_summary">
                                <div class="row">
                                    <div class="col-md-12 col-lg-9">
                                        <div class="table-responsive">
                                            <table id="id_table_loan_summary" class="table table-sm table-bordered table-hover text-nowrap mb-0" style="width:100%">
                                                <thead class="border-top">
                                                    <tr>
                                                        <th class="bg-transparent border-bottom-0">ID</th>
                                                        <th class="bg-transparent border-bottom-0">Description</th>
                                                        <th class="bg-transparent border-bottom-0 text-center">Date <br> Payment</th>
                                                        <th class="bg-transparent border-bottom-0 text-center">Amount Due</th>
                                                        <th class="bg-transparent border-bottom-0 text-center">Balance</th>
                                                        <th class="bg-transparent border-bottom-0 text-center">Options</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-3 align-middle">
                                        <div class="d-grid gap-2">
                                            <button type="button" class="btn btn-lg btn-info  mb-1" id="id_btn_new_payment_tab_loan" disabled><i class="fa fa-money"></i> New Payment</button>
                                            <button type="button" class="btn btn-lg btn-success mb-1" id="id_btn_pay_balance_tab_loan" disabled><i class="fa fa-handshake-o"></i> Pay Balance</button>
                                            <button type="button" class="btn btn-lg btn-danger mb-1" id="id_btn_new_feelate_tab_loan" disabled><i class="fa fa-gavel"></i> Add Fee Late</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="id_div_panel_tab_option_scheduled">
                                <div class="table-responsive">
                                    <table id="id_table_loan_scheduled" class="table table-sm table-bordered table-hover text-nowrap mb-0" style="width:100%">
                                        <thead class="border-top">
                                            <tr>
                                                <th class="bg-transparent border-bottom-0">Number</th>
                                                <th class="bg-transparent border-bottom-0 text-center">Date Scheduled</th>
                                                <th class="bg-transparent border-bottom-0 text-center">Date Due</th>
                                                <th class="bg-transparent border-bottom-0 text-center">Got Payment?</th>
                                                <th class="bg-transparent border-bottom-0 text-center">Current</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </div>  


    <div class="modal fade" id="id_modal_get_payment" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="fa fa-money"></i> Payment Car Loan</h5>
                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                </div>
                <div class="modal-body">
                    <form id="id_form_get_payment" class="validate-form"> 
                        <input type="hidden" name="hid_loan_id_payment" id="id_hid_loan_id_payment" value="">
                        <input type="hidden" name="hid_email_customer_payment" id="id_hid_email_customer_payment" value="">
                        <input type="hidden" name="hid_balance_loan_payment" id="id_hid_balance_loan_payment" value="">
                        <input type="hidden" name="hid_concepto_payment" id="id_hid_concepto_payment" value="1">
                        <input type="hidden" name="hid_validate_date_payment" id="id_hid_validate_date_payment" value="0">
                        <input type="hidden" name="hid_user_id_payment" id="id_hid_user_id_payment" value="'.$_SESSION['usuAA'].'">
                        <div class="row">
                            <div class="col-md-12 col-lg-4">
                                <label for="id_txt_balance_payment" class="form-label">Balance (US$)</label>
                                <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_balance_payment" name="txt_balance_payment" autocomplete="off" readonly>
                            </div>
                            <div class="col-md-12 col-lg-4">
                                <label for="id_txt_minimun_payment" class="form-label">Minimun Payment (US$)</label>
                                <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_minimun_payment" name="txt_minimun_payment" autocomplete="off" readonly>
                            </div>
                            <div class="col-md-12 col-lg-4">
                                <label for="id_txt_amount_due_payment" class="form-label">Amount Due (US$)<span class="text-red">*</span></label>
                                <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_amount_due_payment" name="txt_amount_due_payment" autocomplete="off" required>
                            </div>
                            <div class="col-12">
                                <label for="id_txt_description_payment" class="form-label">Description <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_description_payment" name="txt_description_payment" maxlength="255" value="Payment Car Loan " autocomplete="off" required>
                            </div>
                            <div class="col-md-12 col-lg-6">
                                <div class="form-group">
                                    <label for="id_date_payment_get_payment" class="form-label">Payment Date <span class="text-red">*</span></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="id_date_payment_get_payment" name="date_payment_get_payment" placeholder="MM/DD/YYYY" value="" autocomplete="off" data-cerror-print="id_div_msg_error_date_payment" required>
                                        <button class="btn btn-light" title="Click to set today date" type="button" id="id_btn_date_today_payment"><i class="fa fa-calendar fs-6"></i></button>
                                    </div>
                                </div>
                                <div id="id_div_msg_error_date_payment" class="div-identificador" role="alert"></div>
                            </div>
                            <div class="col-md-12 col-lg-6">    
                                <label for="id_scl_payment_form_get_payment" class="form-label">Payment Form <span class="text-red">*</span></label>                               
                                <select class="form-control select2 form-select" id="id_scl_payment_form_get_payment" name="scl_payment_form_get_payment" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcfpayment_up" required>
                                    <option label="Choose one"></option>
                                    <option value="1">Debit Card</option>
                                    <option value="2">Credit Card</option>
                                    <option value="3">Bank Check</option>
                                    <option value="4">Cash</option>
                                    <option value="5">ZELLE</option>
                                    <option value="5">Deposit Account</option>
                                </select>
                                <div id="id_div_msg_error_slcfpayment_up"  class="" role="alert"></div>
                            </div>
                            <div class="col-md-12 col-lg-6">
                                <label for="id_chk_send_email_payment" class="form-label">Send Receipt by Email?</label>
                                <label class="custom-control custom-checkbox" for="id_chk_send_email_payment">
                                    <input type="checkbox" class="custom-control-input" name="chk_send_email_payment" id="id_chk_send_email_payment" value="0">
                                    <span class="custom-control-label">Email: <span class="text-info fw-bold" id="id_lbl_email_customer_payment"></span></span>
                                </label>
                            </div>
                            
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-default" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-info" id="id_btn_add_get_payment">Add Payment</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="id_modal_get_balance" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="fa fa-handshake-o"></i> Pay the Balance</h5>
                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                </div>
                <div class="modal-body">
                    <form id="id_form_get_balance" class="validate-form"> 
                        <input type="hidden" name="hid_loan_id_balance" id="id_hid_loan_id_balance" value="">
                        <input type="hidden" name="hid_email_customer_balance" id="id_hid_email_customer_balance" value="">
                        <input type="hidden" name="hid_concepto_balance" id="id_hid_concepto_balance" value="2">
                        <input type="hidden" name="hid_validate_date_balance" id="id_hid_validate_date_balance" value="0">
                        <input type="hidden" name="hid_validate_discount_balance" id="id_hid_validate_discount_balance" value="0">
                        <input type="hidden" name="hid_user_id_balance" id="id_hid_user_id_balance" value="'.$_SESSION['usuAA'].'">
                        <div class="row">
                            <div class="col-md-12 col-lg-4">
                                <label for="id_txt_balance_balance" class="form-label">Balance (US$)</label>
                                <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_balance_balance" name="txt_balance_balance" autocomplete="off" readonly>
                            </div>
                            <div class="col-md-12 col-lg-4">
                                <label for="id_txt_discount_balance" class="form-label">Discount (US$)</label>
                                <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_discount_balance" name="txt_discount_balance" autocomplete="off" required disabled>
                            </div>
                            <div class="col-md-12 col-lg-4">
                                <label for="id_txt_amount_due_balance" class="form-label">Amount Due (US$)</label>
                                <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_amount_due_balance" name="txt_amount_due_balance" autocomplete="off" readonly>
                            </div>
                            <div class="col-12">
                                <label for="id_txt_description_balance" class="form-label">Description <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_description_balance" name="txt_description_balance" value="Pay the Balance " autocomplete="off" maxlength="255" required>
                            </div>
                            <div class="col-md-12 col-lg-6">
                                <div class="form-group">
                                    <label for="id_date_payment_balance" class="form-label">Payment Date <span class="text-red">*</span></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="id_date_payment_balance" name="date_payment_balance" placeholder="MM/DD/YYYY" value="" autocomplete="off" data-cerror-print="id_div_msg_error_date_balance" required>
                                        <button class="btn btn-light" title="Click to set today date" type="button" id="id_btn_date_today_balance"><i class="fa fa-calendar fs-6"></i></button>
                                    </div>
                                    <div id="id_div_msg_error_date_balance"  class="" role="alert"></div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-6">    
                                <label for="id_scl_payment_form_balance" class="form-label">Payment Form <span class="text-red">*</span></label>                               
                                <select class="form-control select2 form-select" id="id_scl_payment_form_balance" name="scl_payment_form_balance" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slcfbalance_up" required>
                                    <option label="Choose one"></option>
                                    <option value="1">Debit Card</option>
                                    <option value="2">Credit Card</option>
                                    <option value="3">Bank Check</option>
                                    <option value="4">Cash</option>
                                    <option value="5">ZELLE</option>
                                    <option value="5">Deposit Account</option>
                                </select>
                                <div id="id_div_msg_error_slcfbalance_up"  class="" role="alert"></div>
                            </div>
                            <div class="col-md-12 col-lg-6">
                                <label for="id_chk_send_email_balance" class="form-label">Send Receipt by Email?</label>
                                <label class="custom-control custom-checkbox" for="id_chk_send_email_balance">
                                    <input type="checkbox" class="custom-control-input" name="chk_send_email_balance" id="id_chk_send_email_balance" value="0">
                                    <span class="custom-control-label">Email: <span class="text-info fw-bold" id="id_lbl_email_customer_balance"></span></span>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-default" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-success" id="id_btn_add_balance">Pay Balance</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="id_modal_late_fee" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-md" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="fa fa-gavel"></i> Add Fee Late</h5>
                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                </div>
                <div class="modal-body">
                    <form id="id_form_late_fee" class="validate-form"> 
                        <input type="hidden" name="hid_loan_id_late_fee" id="id_hid_loan_id_late_fee" value="">
                        <input type="hidden" name="hid_concepto_late_fee" id="id_hid_concepto_late_fee" value="3">
                        <input type="hidden" name="hid_validate_date_late_fee" id="id_hid_validate_date_late_fee" value="0">
                        <input type="hidden" name="hid_balance_late_fee" id="id_hid_balance_late_fee" value="">
                        <input type="hidden" name="hid_user_id_late_fee" id="id_hid_user_id_late_fee" value="'.$_SESSION['usuAA'].'">
                        <div class="row">
                            <div class="col-md-12 col-lg-6">
                                <label for="id_txt_amount_late_fee" class="form-label">Late Fee</label>
                                <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_amount_late_fee" name="txt_amount_late_fee" autocomplete="off" readonly>
                            </div>
                            <div class="col-md-12 col-lg-6">
                                <div class="form-group">
                                    <label for="id_date_late_fee" class="form-label">Late Fee Date <span class="text-red">*</span></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="id_date_late_fee" name="date_late_fee" placeholder="MM/DD/YYYY" value="" autocomplete="off" data-cerror-print="id_div_msg_error_date_late_fee" required>
                                        <button class="btn btn-light" title="Click to set today date" type="button" id="id_btn_date_today_late_fee"><i class="fa fa-calendar fs-6"></i></button>
                                    </div>
                                    <div id="id_div_msg_error_date_late_fee"  class="" role="alert"></div>
                                </div>
                            </div>                
                            <div class="col-12">
                                <label for="id_txt_description_late_fee" class="form-label">Description <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_description_late_fee" name="txt_description_late_fee" value="Late Fee " autocomplete="off" maxlength="255" required>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-default" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-danger" id="id_btn_add_late_fee">Add Late Fee</button>
                </div>
            </div>
        </div>
    </div>  

    <div class="modal fade" id="id_modal_delete_late_fee" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-md" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="fa fa-trash"></i> Delete</h5>
                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                </div>
                <div class="modal-body">
                    <form id="id_form_delete_late_fee" class="validate-form"> 
                        <input type="hidden" name="hid_loan_id_delete_late_fee" id="id_hid_loan_id_delete_late_fee" value="">
                        <input type="hidden" name="hid_payment_id_delete_late_fee" id="id_hid_payment_id_delete_late_fee" value="">
                        <input type="hidden" name="hid_fee_late_delete_late_fee" id="id_hid_fee_late_delete_late_fee" value="">
                        <input type="hidden" name="hid_balance_delete_late_fee" id="id_hid_balance_delete_late_fee" value="">
                        <input type="hidden" name="hid_operacion_delete_late_fee" id="id_hid_operacion_delete_late_fee" value="">
                        <input type="hidden" name="hid_estado_delete_late_fee" id="id_hid_estado_delete_late_fee" value="2">
                        <input type="hidden" name="hid_user_id_delete_late_fee" id="id_hid_user_id_delete_late_fee" value="'.$_SESSION['usuAA'].'">
                        <div class="row">
                            <div class="col-12">
                                <label for="id_txt_reason_delete_late_fee" class="form-label">Reason to Delete</label>
                                <textarea class="form-control" placeholder="" id="id_txta_reason_delete_late_fee" name="txta_reason_delete_late_fee" maxlength="255"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-default" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-danger" id="id_btn_delete_late_fee">Delete</button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade" id="id_modal_update_payment" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="fa fa-edit"></i> Update Info Payment</h5>
                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="id_form_update_payment" class="validate-form"> 
                        <input type="hidden" name="hid_loan_id_upd_payment" id="id_hid_loan_id_upd_payment" value="">
                        <input type="hidden" name="hid_validate_date_upd_payment" id="id_hid_validate_date_upd_payment" value="0">
                        <input type="hidden" name="hid_user_id_upd_payment" id="id_hid_user_id_upd_payment" value="'.$_SESSION['usuAA'].'">
                        <div class="row">
                            <div class="col-12">
                                <label for="id_txt_description_upd_payment" class="form-label">Description <span class="text-red">*</span></label>
                                <input type="text" class="form-control" id="id_txt_description_upd_payment" name="txt_description_upd_payment" maxlength="255" value="Payment Car Loan " autocomplete="off" required>
                            </div>
                            <div class="col-md-12 col-lg-4">
                                <div class="form-group">
                                    <label for="id_date_payment_upd_payment" class="form-label">Payment Date <span class="text-red">*</span></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="id_date_payment_upd_payment" name="date_payment_upd_payment" placeholder="MM/DD/YYYY" value="" autocomplete="off" data-cerror-print="id_div_msg_error_date_upd_payment" required>
                                        <button class="btn btn-light" title="Click to set today date" type="button" id="id_btn_date_today_upd_payment"><i class="fa fa-calendar fs-6"></i></button>
                                    </div>
                                </div>
                                <div id="id_div_msg_error_date_upd_payment" class="div-identificador" role="alert"></div>
                            </div>
                            <div class="col-md-12 col-lg-4">    
                                <label for="id_scl_payment_upd_payment" class="form-label">Payment Form <span class="text-red">*</span></label>                               
                                <select class="form-control select2 form-select" id="id_scl_payment_upd_payment" name="scl_payment_upd_payment" data-placeholder="Choose one" data-cerror-print="id_div_msg_error_slc_upd_payment" required>
                                    <option label="Choose one"></option>
                                    <option value="1">Debit Card</option>
                                    <option value="2">Credit Card</option>
                                    <option value="3">Bank Check</option>
                                    <option value="4">Cash</option>
                                    <option value="5">ZELLE</option>
                                    <option value="5">Deposit Account</option>
                                </select>
                                <div id="id_div_msg_error_slc_upd_payment"  class="" role="alert"></div>
                            </div>
                            <div class="col-md-12 col-lg-4">
                                <label for="id_txt_amount_due_upd_payment" class="form-label">Amount Due (US$)<span class="text-red">*</span></label>
                                <input type="text" class="form-control text-center fs-6  fw-bold" id="id_txt_amount_due_upd_payment" name="txt_amount_due_upd_payment" autocomplete="off" readonly>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-default" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-warning" id="id_btn_update_payment">Update Payment</button>
                </div>
            </div>
        </div>
    </div>    

    ';


    return $tmpHTML;
}

function list_loan()
{
    $tmp_rpt         = isset($_GET['rpt']) ? $_GET['rpt'] : 0;

    $rpt1_active = '';
    $rpt2_active = '';
    $rpt3_active = '';

    switch($tmp_rpt)
    {
        case 1:
            $rpt1_active = 'active';
        break;
        
        case 2:
            $rpt2_active = 'active';
        break;
        
        case 3:
            $rpt3_active = 'active';
        break;

        default:
            $rpt2_active = 'active';
        break;
    }


    $tmpHTML = '
    <div class="row mt-5" >
        <div class="card">
            <div class="card-body">
                <div class="panel panel-primary" id="id_div_panel_tab_reportes">
                    <div class="tab-menu-heading">
                        <div class="tabs-menu">
                            <!-- Tabs -->
                            <ul class="nav panel-tabs panel-info">
                                <li><a href="#id_div_panel_tab_reporte2" class="'.$rpt2_active.'" data-bs-toggle="tab"><span><i class="fa fa-warning me-1"></i></span>Expected Loan payments today ('.date('m/d/Y').')</a></li>
                                <li><a href="#id_div_panel_tab_reporte3" class="'.$rpt3_active.'" data-bs-toggle="tab"><span><i class="fa fa-bell me-1"></i></span>Loan payments due</a></li>
                                <li><a href="#id_div_panel_tab_reporte1" class="'.$rpt1_active.'"  data-bs-toggle="tab"><span><i class="fa fa-list-ol me-1"></i></span>All Car Loans</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="panel-body tabs-menu-body">
                        <div class="tab-content">
                            <div class="tab-pane '.$rpt1_active.'" id="id_div_panel_tab_reporte1">
                                <div class="table-responsive">
                                    <table id="id_table_all_loan" class="table table-sm table-bordered table-hover text-nowrap mb-0" style="width:100%">
                                        <thead class="border-top">
                                            <tr>
                                                <th rowspan="2" class="text-center w-1">ID</th>
                                                <th colspan="3" class="text-center">Customer Info</th>
                                                <th colspan="3" class="text-center">Car Info</th>
                                                <th colspan="2" class="text-center">Loan Info</th>
                                                <th rowspan="2" class="text-center w-1"></th>
                                            </tr>
                                            <tr>
                                                <th class="text-center"></td>
                                                <th class="text-center">Full Name</td>
                                                <th class="text-center">Birthdate<br><span class="text-muted font-6">(MM/DD/YYYY)</span></td>
                                                <th class="text-center">Model</td>
                                                <th class="text-center">Stock <br> Number</td>
                                                <th class="text-center">VIN</td>
                                                <th class="text-center">Total <br>Financed</td>
                                                <th class="text-center">Balance</td>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>  
                            </div>  
                            <div class="tab-pane '.$rpt2_active.'" id="id_div_panel_tab_reporte2">
                                <div class="table-responsive">
                                    <table id="id_table_payments_today" class="table table-sm table-bordered  table-hover text-nowrap mb-0" style="width:100%">
                                        <thead class="border-top">
                                            <tr>
                                                <th class="text-center"></th>
                                                <th class="text-center">Full Name</th>
                                                <th class="text-center">Birthdate<br><span class="text-muted font-6">(MM/DD/YYYY)</span></th>
                                                <th class="text-center">Car Model</th>
                                                <th class="text-center">Stock Number</th>
                                                <th class="text-center">VIN</th>
                                                <th class="text-center">Minimun<br> Payment</th>
                                                <th class="text-center">Loan Date<br><span class="text-muted font-6">(MM/DD/YYYY)</span></td>
                                                <th class="text-center w-1"></th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>  
                            </div>
                            <div class="tab-pane '.$rpt3_active.'" id="id_div_panel_tab_reporte3">
                                <div class="table-responsive">
                                    <table id="id_table_payments_due" class="table table-sm table-bordered  table-hover text-nowrap mb-0" style="width:100%">
                                        <thead class="border-top">
                                            <tr>
                                                <th class="text-center"></th>
                                                <th class="text-center">Full Name</th>
                                                <th class="text-center">Birthdate<br><span class="text-muted font-6">(MM/DD/YYYY)</span></th>
                                                <th class="text-center">Car Model</th>
                                                <th class="text-center">Stock Number</th>
                                                <th class="text-center">VIN</th>
                                                <th class="text-center">MINIMUN<br>PAYMENT</th>
                                                <th class="text-center">Payment Date</th>
                                                <th class="text-center">Date Due</th>
                                                <th class="text-center w-1"></th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </div>
    ';
    return $tmpHTML;
}   