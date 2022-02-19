<?php
global $innerHTML;

$innerHTML = '
<!-- Row -->
<div class="row align-items-center h-100 mt-5">
    <div class="col-md-12 col-xl-8 mx-auto">
        <div class="card h-100 border-primary justify-content-center">
            <div class="card-header">
                <h4 class="card-title">Loan Configuration</h4>
            </div>
            <div class="card-body">
                <form id="id_form_cfg" class="validate-form">
                    <input type="hidden" name="hid_branch_id_cfg" id="id_hid_branch_id_cfg" value="'.$_SESSION['branch_id'].'">
                    <input type="hidden" name="hid_id_cfg" id="id_hid_id_cfg" value="0">
                    <span class="text-red">All inputs with (*) are required</span>  
                    <div class="row">
                        <div class="col-md-12 col-lg-6">    
                            <label for="id_rdo_long_term_cfg" class="form-label">Long Term in months by Default <span class="text-red">*</span></label>                               
                            <div class="btn-group" role="group" aria-label="Long Term in months">
                                <input type="radio" class="btn-check" name="rdo_long_term_cfg" id="id_rdo_long_term_cfg_24" value="1" required>
                                <label class="btn btn-outline-primary" for="id_rdo_long_term_cfg_24">24</label>

                                <input type="radio" class="btn-check" name="rdo_long_term_cfg" id="id_rdo_long_term_cfg_36" value="2" required>
                                <label class="btn btn-outline-primary" for="id_rdo_long_term_cfg_36">36</label>

                                <input type="radio" class="btn-check" name="rdo_long_term_cfg" id="id_rdo_long_term_cfg_48" value="3" required>
                                <label class="btn btn-outline-primary" for="id_rdo_long_term_cfg_48">48</label>

                                <input type="radio" class="btn-check" name="rdo_long_term_cfg" id="id_rdo_long_term_cfg_60" value="4" required>
                                <label class="btn btn-outline-primary" for="id_rdo_long_term_cfg_60">60</label>

                                <input type="radio" class="btn-check" name="rdo_long_term_cfg" id="id_rdo_long_term_cfg_72" value="5" required>
                                <label class="btn btn-outline-primary" for="id_rdo_long_term_cfg_72">72</label>

                                <input type="radio" class="btn-check" name="rdo_long_term_cfg" id="id_rdo_long_term_cfg_84" value="6" required>
                                <label class="btn btn-outline-primary" for="id_rdo_long_term_cfg_84">84</label>                                    
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-6">
                            <label for="id_txt_down_rate_cfg" class="form-label">Downpayment Rate by Default (%) <span class="text-red">*</span></label>
                            <input type="text" class="form-control" id="id_txt_down_rate_cfg" name="txt_down_rate_cfg" autocomplete="off" required>
                        </div>
                        <div class="col-sm-12 col-lg-6">
                            <label for="id_txt_interest_rate_cfg" class="form-label">Interest rate by Default (%) <span class="text-red">*</span></label>
                            <input type="text" class="form-control" id="id_txt_interest_rate_cfg" name="txt_interest_rate_cfg" autocomplete="off" required>
                        </div>
                        <div class="col-sm-12 col-lg-6">
                            <label for="id_txt_taxes_cfg" class="form-label">Taxes Rate by Default (%) <span class="text-red">*</span></label>
                            <input type="text" class="form-control" id="id_txt_taxes_cfg" name="txt_taxes_cfg" autocomplete="off" required>
                        </div>                        
                        <div class="col-sm-12 col-lg-6">
                            <label for="id_txt_latedays_fee_cfg" class="form-label">Late Days Fee by Default (US$)<span class="text-red">*</span></label>
                            <input type="text" class="form-control" id="id_txt_latedays_fee_cfg" name="txt_latedays_fee_cfg" autocomplete="off" required>
                        </div>
                        <div class="col-sm-12 col-lg-6">
                            <label for="id_txt_latedays_cfg" class="form-label">Late Days by Default <span class="text-red">*</span></label>
                            <input type="number" class="form-control" id="id_txt_latedays_cfg" name="txt_latedays_cfg" autocomplete="off" required>
                        </div>

                        <div class="alert alert-danger mb-0 d-none mt-3" id="id_div_conteiner_error_cfg" role="alert">
                            <span class="alert-inner--icon" id="id_icon_up_cfg"><i class="fe fe-check"></i></span>
                            <span class="alert-inner--text "><span id="id_div_msg_error_cfg" class="fw-bold"><strong>Danger!</strong> </span></span>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer text-center">
                <button class="btn btn-primary w-lg" id="id_btn_sbm_cfg" type="button">
                    <i class="fa fa-save"></i>
                    Submit
                </button>
            </div>
        </div>
    </div>
</div>
<!-- End Row -->
';