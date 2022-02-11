<?php
    global $innerHTML;

    $innerHTML = '<!-- PAGE-HEADER -->
    <div class="page-header">
        <h1 class="page-title">Home Page</h1>
        <div>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
        </div>
    </div>
    <!-- PAGE-HEADER END -->
    
    
    <!-- ROW OPEN -->
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <div class="card">
                <div class="card-body text-center">
                    <h6 class=""><span class="text-info"><i class="fa fa-automobile me-2 fs-20 text-info-shadow"></i></span>Total Cars</h6>
                    <h3 class="text-dark counter mt-0 mb-1 number-font" id="id_card_total_cars">#999</h3>
                    <span class="text-muted fs-6">(LIFETIME)</span>
                    <div class="progress h-1 mt-0 mb-2">
                        <div class="progress-bar progress-bar-striped bg-info" id="id_card_progressbar_cars" style="width: 100%;" role="progressbar"></div>
                    </div>
                    <div class="row mt-4">
                        <div class="col text-center"> <span class="text-muted">Actives</span>
                            <h4 class="fw-normal mt-2 mb-0 number-font1"><span id="id_total_actives_cars">#999</span></h4>
                        </div>
                        <div class="col text-center"> <span class="text-muted">Sold</span>
                            <h4 class="fw-normal mt-2 mb-0 number-font2"><span id="id_total_sold_cars">#999</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- COL END -->
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <div class="card">
                <div class="card-body text-center">
                    <h6 class=""><span class="text-success"><i class="fa fa-user-circle me-2 fs-20 text-success-shadow"></i></span>Total Customers</h6>
                    <h3 class="text-dark counter mt-0 mb-1 number-font" id="id_card_total_customers">#999</h3>
                    <span class="text-muted fs-6">(LIFETIME)</span>
                    <div class="progress h-1 mt-0 mb-2">
                        <div class="progress-bar progress-bar-striped bg-success" id="id_card_progressbar_customers" style="width: 100%;" role="progressbar"></div>
                    </div>
                    <div class="row mt-4">
                        <div class="col text-center"> <span class="text-muted">Female</span>
                            <h4 class="fw-normal mt-2 mb-0 number-font1"><span id="id_total_female_customers">#999</span></h4>
                        </div>
                        <div class="col text-center"> <span class="text-muted">Male</span>
                            <h4 class="fw-normal mt-2 mb-0 number-font2"><span id="id_total_male_customers">#999</span></h4>
                        </div>
                        <div class="col text-center"> <span class="text-muted">Others</span>
                            <h4 class="fw-normal mt-2 mb-0 number-font3"><span id="id_total_other_customers">#999</span></h4>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <!-- COL END -->
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <div class="card">
                <div class="card-body text-center">
                    <h6 class=""><span class="text-warning"><i class="fa fa-university me-2 fs-20 text-warning-shadow"></i></span>Total Car Loans</h6>
                    <h3 class="text-dark counter mt-0 mb-1 number-font" id="id_card_total_car_loans">#999</h3>
                    <span class="text-muted fs-6">(LIFETIME)</span>
                    <div class="progress h-1 mt-0 mb-2">
                        <div class="progress-bar progress-bar-striped bg-warning" id="id_card_progressbar_car_loans" style="width: 100%;" role="progressbar"></div>
                    </div>
                    <div class="row mt-4">
                        <div class="col text-center"> <span class="text-muted">Week</span>
                            <h4 class="fw-normal mt-2 mb-0 number-font1"><span id="id_total_week_cloans">#999</span></h4>
                        </div>
                        <div class="col text-center"> <span class="text-muted">Month</span>
                            <h4 class="fw-normal mt-2 mb-0 number-font2"><span id="id_total_month_cloans">#999</span></h4>
                        </div>
                        <div class="col text-center"> <span class="text-muted">Year</span>
                            <h4 class="fw-normal mt-2 mb-0 number-font3"><span id="id_total_year_cloans">#999</span></h4>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <!-- COL END -->
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <div class="card">
                <div class="card-body text-center">
                    <h6 class=""><span class="text-cyan"><i class="fa fa-money me-2 fs-20 text-cyan-shadow"></i></span>Get Payments</h6>
                    <h3 class="text-dark counter mt-0 mb-1 number-font" id="id_card_total_payments">US$ #999</h3>
                    <span class="text-muted fs-6">(Year: '.date('Y').')</span>
                    <div class="progress h-1 mt-0 mb-2">
                        <div class="progress-bar progress-bar-striped bg-cyan" id="id_card_progressbar_car_payments" style="width: 100%;" role="progressbar"></div>
                    </div>
                    <div class="row mt-4">
                        <div class="col text-center"> <span class="text-muted">Today</span>
                            <h4 class="fw-normal mt-2 mb-0 number-font1"><span id="id_total_today_payments">#999</span></h4>
                        </div>
                        <div class="col text-center"> <span class="text-muted">Week</span>
                            <h4 class="fw-normal mt-2 mb-0 number-font2"><span id="id_total_week_payments">#999</span></h4>
                        </div>
                        <div class="col text-center"> <span class="text-muted">Month</span>
                            <h4 class="fw-normal mt-2 mb-0 number-font3"><span id="id_total_month_payments">#999</span></h4>
                        </div>
                    </div>
                </div>
            </div>                        
        </div>
        <!-- COL END -->
    </div>
    <!-- ROW CLOSED -->

    <!-- ROW OPEN -->
    <div class="row">
        <div class="col-xl-4 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title fw-semibold">Expected Payment Today</h4>
                </div>
                <div class="card-body pb-0">
                    <ul class="task-list" id="id_div_list_exp_paymente_today">
                        
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title fw-semibold">Payment Due Today</h4>
                </div>
                <div class="card-body pb-0">
                    <ul class="task-list" id="id_div_list_paymente_due_today">

                    </ul>
                </div>
            </div>
        </div>
        
    </div>
    <!-- ROW CLOSED -->

    ';