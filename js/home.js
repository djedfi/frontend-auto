$(document).ready(function()
{	
    "use strict";

    $("#global-loader").fadeIn("fast");
    $.ajax
    ({ 
        type: "GET",
        url: endpoint_general+'getCardCar',
        dataType: "json",
        crossDomain: true,
        xhrFields: { withCredentials: true },
        success: function (data, status, jqXHR) 
        {
            if(data.res)
            {
                let activos = parseInt(data.total_activos);
                let sold    = parseInt(data.total_sold);

                $('#id_total_actives_cars').html(activos);
                $('#id_total_sold_cars').html(sold);
                $('#id_card_total_cars').html(activos + sold);
            }
            else
            {
                $('#id_total_actives_cars').html('NO DATA');
                $('#id_total_sold_cars').html('NO DATA');
                $('#id_card_total_cars').html('NO DATA');
            }
        }
    });

    $.ajax
    ({ 
        type: "GET",
        url: endpoint_general+'getCardCustomer',
        dataType: "json",
        crossDomain: true,
        xhrFields: { withCredentials: true },
        success: function (data, status, jqXHR) 
        {
            if(data.res)
            {
                let female = parseInt(data.customer_female);
                let male   = parseInt(data.customer_male);
                let other  = parseInt(data.customer_other);

                $('#id_total_female_customers').html(female);
                $('#id_total_male_customers').html(male);
                $('#id_total_other_customers').html(other);
                $('#id_card_total_customers').html(female + male + other);
            }
            else
            {
                $('#id_total_female_customers').html('NO DATA');
                $('#id_total_male_customers').html('NO DATA');
                $('#id_total_other_customers').html('NO DATA');
                $('#id_card_total_customers').html('NO DATA');
            }
        }
    });

    $.ajax
    ({ 
        type: "GET",
        url: endpoint_general+'getCardLoan',
        dataType: "json",
        crossDomain: true,
        xhrFields: { withCredentials: true },
        success: function (data, status, jqXHR) 
        {
            if(data.res)
            {
                let total   = parseInt(data.total_loan);
                let week    = parseInt(data.total_loan_week);
                let month   = parseInt(data.total_loan_month);
                let year    = parseInt(data.total_loan_year);

                $('#id_card_total_car_loans').html(total);
                $('#id_total_week_cloans').html(week);
                $('#id_total_month_cloans').html(month);
                $('#id_total_year_cloans').html(year);
            }
            else
            {
                $('#id_card_total_car_loans').html('NO DATA');
                $('#id_total_week_cloans').html('NO DATA');
                $('#id_total_month_cloans').html('NO DATA');
                $('#id_total_year_cloans').html('NO DATA');
            }
        }
    });    

    $.ajax
    ({ 
        type: "GET",
        url: endpoint_general+'getCardPayment',
        dataType: "json",
        crossDomain: true,
        xhrFields: { withCredentials: true },
        success: function (data, status, jqXHR) 
        {
            if(data.res)
            {
                let total   = parseInt(data.total_monto);
                let today    = parseInt(data.total_payment_today);
                let week   = parseInt(data.total_payment_week);
                let month    = parseInt(data.total_payment_month);

                $('#id_card_total_payments').html($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(total));
                $('#id_total_today_payments').html(today);
                $('#id_total_week_payments').html(week);
                $('#id_total_month_payments').html(month);
            }
            else
            {
                $('#id_card_total_payments').html('NO DATA');
                $('#id_total_today_payments').html('NO DATA');
                $('#id_total_week_payments').html('NO DATA');
                $('#id_total_month_payments').html('NO DATA');
            }
        }
    });    

    $.ajax
    ({ 
        type: "GET",
        url: endpoint_general+'getCardPaymentToday',
        dataType: "json",
        crossDomain: true,
        xhrFields: { withCredentials: true },
        success: function (data, status, jqXHR) 
        {
            if(data.res)
            {
                if(data.data.length > 0)
                {
                    const item_paymente_today = ({ full_name, minimun_payment, modelo_car, vin,loan_id,pago_automatico,color }) =>  `
                    <li class="d-sm-flex">
                        <div>
                            <i class="task-icon ${color}"></i>
                            <h6 class="fw-semibold">${full_name}<span class="text-muted fs-9 ms-2 fw-normal">(MP: US$ ${minimun_payment})</span></h6>
                            <p class="text-muted fs-12">${modelo_car} <br> (VIN: ${vin})</p>
                        </div>
                        <div class="ms-auto d-md-flex">
                            <a href="./?mod=loan&hac=update&loan=${loan_id}" class="text-muted me-2 fs-5" data-bs-toggle="tooltip" data-bs-placement="top" title="Get payment" aria-label="Get payment"><span class="fa fa-money"></span></a>
                            ${pago_automatico}                        
                        </div>
                    </li>`;
                    $('#id_div_list_exp_paymente_today').html(data.data.map(item_paymente_today).join(''));
                }
                else
                {
                    $('#id_div_list_exp_paymente_today').html('<center><p class="fw-bold text-info">NO PAYMENTS FOR TODAY</p></center>');    
                }

            }
            else
            {
                $('#id_div_list_exp_paymente_today').html('NO DATA');
            }
        }
    });  

    $('#id_table_payments_due').DataTable
    (
        {
            
            "ajax"      : 
            {
                "type"  : "GET",
                "url"   : endpoint_general+'getListPendingPayment'
            },
            "dataSrc"       : "data",
            "ordering"      : false,
            "paging"        : false,
            columns     : 
            [
                {   
                    "data": "schedule_id" 
                },
                {  
                    "data": "pago_automatico",
                    render : function(data,type)
                    {
                        if(data == 1)
                        {
                            return '<center><i class="fe fe-alert-octagon text-warning fs-5" title="Automatic payment"></center>';
                        }
                        else
                        {
                            return '';
                        }
                        
                    }
                },
                { 
                    "data": "customer_name",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "email",
                    render: function(data, type) 
                    {
                        if(data == null || data == '')
                        {
                            return '<center>NO INFO</center>'
                        }
                        return '<center><span><a href="mailto:'+data+'">'+data+'</span></center>';
                    }
                },
                { 
                    "data": "car_info",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "vin",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "minimun_payment"
                },
                { 
                    "data": "date_programable"
                },
                { 
                    "data": "date_end"
                }
            ],
            "order"     : 
            [
                [2, "asc"]
            ],
            columnDefs: 
            [
                { 
                    visible:false, targets: [0]
                },
                {
                    targets: [7,8],
                    render: $.fn.dataTable.render.moment( 'MM/DD/YYYY' )
                },
                {
                    targets: [6],
                    render: $.fn.dataTable.render.number( ',', '.', 2, 'US$ ')
                }
            ],
            language: {
                searchPlaceholder: 'Search...',
                sSearch: '',
                "decimal": ".",
                "thousands": ","
            }
        }
    );    
    
    $.ajax
    ({ 
        type: "GET",
        url: endpoint_general+'getPaymentDue',
        dataType: "json",
        crossDomain: true,
        xhrFields: { withCredentials: true },
        success: function (data, status, jqXHR) 
        {
            if(data.res)
            {
                if(data.data.length > 0)
                {
                    const item_paymente_today = ({ full_name, minimun_payment, modelo_car, vin,loan_id,pago_automatico,color }) =>  `
                    <li class="d-sm-flex">
                        <div>
                            <i class="task-icon ${color}"></i>
                            <h6 class="fw-semibold">${full_name}<span class="text-muted fs-9 ms-2 fw-normal">(MP: US$ ${minimun_payment})</span></h6>
                            <p class="text-muted fs-12">${modelo_car} <br> (VIN: ${vin})</p>
                        </div>
                        <div class="ms-auto d-md-flex">
                            <a href="./?mod=loan&hac=update&loan=${loan_id}" class="text-muted me-2 fs-5" data-bs-toggle="tooltip" data-bs-placement="top" title="Get payment" aria-label="Get payment"><span class="fa fa-money"></span></a>
                            ${pago_automatico}                        
                        </div>
                    </li>`;
                    $('#id_div_list_paymente_due_today').html(data.data.map(item_paymente_today).join(''));
                }
                else
                {
                    $('#id_div_list_paymente_due_today').html('<center><p class="fw-bold text-info">NO PAYMENTS FOR TODAY</p></center>');    
                }

            }
            else
            {
                $('#id_div_list_paymente_due_today').html('NO DATA');
            }
        },
        complete:function()
        {
            $("#global-loader").fadeOut("slow");
        }
    });   
});