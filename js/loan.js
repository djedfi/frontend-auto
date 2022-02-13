$(document).ready(function()
{	
    "use strict";
    $('#id_form_loan').trigger('reset');
    
    $("#global-loader").fadeIn("fast");
    
    if($('#id_hid_id_car_loan').val() > 0)
    {
        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'getFullCar/'+$('#id_hid_id_car_loan').val(),
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {
                if(data.res)
                {
                    if(data.data[0].id_car == $('#id_hid_id_car_loan').val() && data.data[0].estado == 1)
                    {
                        
                        $('#id_hid_id_car_loan').val(data.data[0].id_car);
                        $('#id_txt_make_car_loan').val(data.data[0].name_make);
                        $('#id_txt_model_car_loan').val(data.data[0].name_modelo);
                        $('#id_txt_trim_car_loan').val(data.data[0].name_trim);
                        $('#id_txt_vin_car_loan').val(data.data[0].vin);
                        $('#id_txt_scknumber_car_loan').val(data.data[0].stock_number);
                        $('#id_txt_year_car_loan').val(data.data[0].year);
                        $('#id_txt_style_car_loan').val(data.data[0].name_style);
                        $('#id_txt_mileage_car_loan').val($.fn.dataTable.render.number( ',', '.', 0, '').display(data.data[0].mileage));
                        $('#id_txt_price_car_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.data[0].precio));
                        let lbl_transmission;
                       
                        switch(data.data[0].transmission)
                        {
                            case 1:
                                lbl_transmission = 'Automatic';
                            break;
                            case 2:
                                lbl_transmission = 'CVT';
                            break;
                            case 3:
                                lbl_transmission = 'Manual';
                            break;
                            default:
                                lbl_transmission = 'NO INFO';
                            break;
                        }
                        
                        
                        let lbl_condition;
                        switch(data.data[0].condition_car)
                        {
                            case 1:
                                lbl_condition = 'Used';
                            break;
                            case 2:
                                lbl_condition = 'New';
                            break;
                            default:
                                lbl_condition = 'NO INFO';
                            break;
                        }
                        let lbl_fueltype;
                        switch(data.data[0].fuel_type)
                        {
                            case 1:
                                lbl_fueltype = 'Gasoline';
                            break;
                            case 2:
                                lbl_fueltype = 'Diesel';
                            break;
                            case 3:
                                lbl_fueltype = 'Hybrid';
                            break;
                            case 4:
                                lbl_fueltype = 'Electric';
                            break;
                            default:
                                lbl_fueltype = 'NO INFO';
                            break;
                        }
                        $("#id_div_conteiner_error_info_car_loan").removeClass('d-block').addClass('d-none');
                        $('#id_txt_transmi_car_loan').val(lbl_transmission);
                        $('#id_txt_condition_car_loan').val(lbl_condition);
                        $('#id_txt_fuelt_car_loan').val(lbl_fueltype);
                    }
                    else
                    {
                        location.href = './?mod=loan&hac=add';
                    }
                }
                else
                {
                    location.href = './?mod=loan&hac=add';
                }
            }
        });

        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'configs/'+$('#id_hid_branch_id_loan').val(),
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {
                if(data.res)
                {
                    $('#id_txt_costo_plate_loan').prop("disabled", false);
                    $('#id_txt_costo_doc_loan').prop("disabled", false);
                    
                    $('#id_txt_interest_loan').prop("disabled", false);
                    $('#id_txt_taxes_loan').prop("disabled", false);
                    $('#id_txt_dpayment_loan').prop("disabled", false);

                    $('#id_txt_long_term_loan').prop("disabled", false);
                    $('#id_date_open_loan').prop("disabled", false);
                    $('#id_date_startpay_loan').prop("disabled", false);
                    $('#id_chk_auto_payment_loan').prop("disabled", false);

                    setTimeout(
                    function() 
                    {
                        //do something special
                    }, 1000);

                    //let precio = data.datos[0].
                    let downpayment = data.datos[0].porc_downpay_default / 100;
                    var long_term  = data.datos[0].long_term_default;
                    
                    let int_rate   = data.datos[0].int_rate_default;
                    var taxes_rate   = data.datos[0].taxes_rate_default;

                    $('#id_txt_costo_plate_loan').val();
                    $('#id_txt_costo_doc_loan').val();
                    $('#id_txt_dpayment_loan').val();
                    $('#id_txt_interest_loan').val($.fn.dataTable.render.number( ',', '.', 2, '',' %').display(int_rate));
                    $('#id_txt_taxes_loan').val($.fn.dataTable.render.number( ',', '.', 2, '',' %').display(taxes_rate));
                    

                    $('#id_hid_late_fee_loan').val(data.datos[0].latefee_default);
                    $('#id_hid_days_late_loan').val(data.datos[0].dayslate_default);
                    $('#id_hid_branch_id_loan').val(data.datos[0].branch_id);
                    $('#id_btn_sbm_loan').prop("disabled",true);
                    $('#id_btn_calculare_loan').prop("disabled",false);
                }
            },
            complete : function()
            {
                $('#id_modal_find_car').modal('hide');
                $("#global-loader").fadeOut("slow");
            }
        });       
    }

    if($('#id_hid_id_cust_loan').val() > 0)
    {
        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'customers/'+$('#id_hid_id_cust_loan').val(),
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {
                if(data.res)
                {
                    if(data.datos.id == $('#id_hid_id_cust_loan').val())
                    {
                        $('#id_hid_id_cust_loan').val(data.datos.id);
                        $('#id_txt_fname_cust_loan').val(data.datos.first_name);
                        $('#id_txt_lname_cust_loan').val(data.datos.last_name);

                        if(data.datos.birthday == null)
                        {
                            $('#id_txt_bday_cust_loan').val('NO INFO');
                        }
                        else
                        {
                            let birthday = data.datos.birthday.split('-');
                            $('#id_txt_bday_cust_loan').val(birthday[1]+'/'+birthday[2]+'/'+birthday[0]);
                        }
                        
            
                        let formato_cell = new StringMask('(000) 000-0000');
                        $('#id_txt_cphone_cust_loan').val(formato_cell.apply(data.datos.cellphone));
                        $('#id_txt_email_cust_loan').val(data.datos.email);

                        if(data.datos.license == null)
                        {
                            $('#id_txt_dlic_cust_loan').val('NO INFO');
                        }
                        else
                        {
                            $('#id_txt_dlic_cust_loan').val(data.datos.license);
                        }
            
                        $('#id_txt_paddress_cust_loan').val(data.datos.address_p);
                        $('#id_txt_saddress_cust_loan').val(data.datos.address_s);
            
                        $('#id_txt_state_cust_loan').val(data.datos.state.name);
                        $('#id_txt_city_cust_loan').val(data.datos.city);
                        $('#id_txt_zip_cust_loan').val(data.datos.zip);                        
                    }
                    else
                    {
                        location.href = './?mod=loan&hac=add';
                    }
                }
                else
                {
                    location.href = './?mod=loan&hac=add';
                }
            },
            complete : function()
            {
                $('#id_modal_find_customer').modal('hide');
                $("#global-loader").fadeOut("slow");
            }
        });
    }

    if($('#id_card_info_car').length)
    {
        //cargar la tabla de la informacion del carro
        var table_car = $('#id_table_car_loan').DataTable
        ({
            
            "ajax"      : 
            {
                "type"  : "GET",
                "url"   : endpoint_general+'getCarTable/1'
            },
            "dataSrc"   : "data",
            columns     : 
            [
                {   
                    "data": "id_car" 
                },
                { 
                    "data": "stock_number",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "name_make",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "name_modelo",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "name_trim",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "vin_car",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "precio",
                    render: function(data, type) 
                    {
                        var number = $.fn.dataTable.render.number( ',', '.', 2, '$'). display(data);
                        return '<center><span>'+number+'</span></center>';
                    }
                }
            ],
            "order"     : 
            [
                [0, "desc"]
            ],
            columnDefs: 
            [
                { 
                    visible:false, targets: [0]
                },
                {
                    'targets': 7,
                    'data': null,
                    'defaultContent': '<center><button type="button" id="car_select" class="btn btn-icon btn-primary btn-sm" title="Select this Car"><i class="fe fe-link"></i></button></center>'
                }
            ],
            language: {
                searchPlaceholder: 'Search...',
                sSearch: '',
                "decimal": ".",
                "thousands": ","
            }
        });

        $('#id_table_car_loan tbody').on( 'click', 'button#car_select', function () 
        {
            $("#global-loader").fadeIn("fast");
            var data = table_car.row( $(this).parents('tr') ).data();
            var car_id = data.id_car;
            $('#id_form_loan').trigger('reset');
            $.ajax
            ({ 
                type: "GET",
                url: endpoint_general+'getFullCar/'+car_id,
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    if(data.res)
                    {
                        if(data.data[0].id_car == car_id && data.data[0].estado == 1)
                        {
                            
                            $('#id_hid_id_car_loan').val(data.data[0].id_car);
                            $('#id_txt_make_car_loan').val(data.data[0].name_make);
                            $('#id_txt_model_car_loan').val(data.data[0].name_modelo);
                            $('#id_txt_trim_car_loan').val(data.data[0].name_trim);
                            $('#id_txt_vin_car_loan').val(data.data[0].vin);
                            $('#id_txt_scknumber_car_loan').val(data.data[0].stock_number);
                            $('#id_txt_year_car_loan').val(data.data[0].year);
                            $('#id_txt_style_car_loan').val(data.data[0].name_style);
                            $('#id_txt_mileage_car_loan').val($.fn.dataTable.render.number( ',', '.', 0, '').display(data.data[0].mileage));
                            $('#id_txt_price_car_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.data[0].precio));
                            let lbl_transmission;
                           
                            switch(data.data[0].transmission)
                            {
                                case 1:
                                    lbl_transmission = 'Automatic';
                                break;
                                case 2:
                                    lbl_transmission = 'CVT';
                                break;
                                case 3:
                                    lbl_transmission = 'Manual';
                                break;
                                default:
                                    lbl_transmission = 'NO INFO';
                                break;
                            }
                            
                            
                            let lbl_condition;
                            switch(data.data[0].condition_car)
                            {
                                case 1:
                                    lbl_condition = 'Used';
                                break;
                                case 2:
                                    lbl_condition = 'New';
                                break;
                                default:
                                    lbl_condition = 'NO INFO';
                                break;
                            }
                            let lbl_fueltype;
                            switch(data.data[0].fuel_type)
                            {
                                case 1:
                                    lbl_fueltype = 'Gasoline';
                                break;
                                case 2:
                                    lbl_fueltype = 'Diesel';
                                break;
                                case 3:
                                    lbl_fueltype = 'Hybrid';
                                break;
                                case 4:
                                    lbl_fueltype = 'Electric';
                                break;
                                default:
                                    lbl_fueltype = 'NO INFO';
                                break;
                            }
                            $("#id_div_conteiner_error_info_car_loan").removeClass('d-block').addClass('d-none');
                            $('#id_txt_transmi_car_loan').val(lbl_transmission);
                            $('#id_txt_condition_car_loan').val(lbl_condition);
                            $('#id_txt_fuelt_car_loan').val(lbl_fueltype);
                        }
                        else
                        {
                            location.href = './?mod=loan&hac=add';
                        }
                    }
                    else
                    {
                        location.href = './?mod=loan&hac=add';
                    }
                }
            });

            $.ajax
            ({ 
                type: "GET",
                url: endpoint_general+'configs/'+$('#id_hid_branch_id_loan').val(),
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    if(data.res)
                    {
                        $('#id_txt_costo_plate_loan').prop("disabled", false);
                        $('#id_txt_costo_doc_loan').prop("disabled", false);
                        
                        $('#id_txt_interest_loan').prop("disabled", false);
                        $('#id_txt_taxes_loan').prop("disabled", false);
                        $('#id_txt_dpayment_loan').prop("disabled", false);

                        $('#id_txt_long_term_loan').prop("disabled", false);
                        $('#id_date_open_loan').prop("disabled", false);
                        $('#id_date_startpay_loan').prop("disabled", false);
                        $('#id_chk_auto_payment_loan').prop("disabled", false);

                        setTimeout(
                        function() 
                        {
                            //do something special
                        }, 1000);

                        //let precio = data.datos[0].
                        let downpayment = data.datos[0].porc_downpay_default / 100;
                        var long_term  = data.datos[0].long_term_default;
                        
                        let int_rate   = data.datos[0].int_rate_default;
                        var taxes_rate   = data.datos[0].taxes_rate_default;

                        $('#id_txt_costo_plate_loan').val();
                        $('#id_txt_costo_doc_loan').val();
                        $('#id_txt_dpayment_loan').val();
                        $('#id_txt_interest_loan').val($.fn.dataTable.render.number( ',', '.', 2, '',' %').display(int_rate));
                        $('#id_txt_taxes_loan').val($.fn.dataTable.render.number( ',', '.', 2, '',' %').display(taxes_rate));
                        

                        $('#id_hid_late_fee_loan').val(data.datos[0].latefee_default);
                        $('#id_hid_days_late_loan').val(data.datos[0].dayslate_default);
                        $('#id_hid_branch_id_loan').val(data.datos[0].branch_id);
                        $('#id_btn_sbm_loan').prop("disabled",true);
                        $('#id_btn_calculare_loan').prop("disabled",false);
                    }
                },
                complete : function()
                {
                    $('#id_modal_find_car').modal('hide');
                    $("#global-loader").fadeOut("slow");
                }
            });
        });
    }

    if($('#id_card_info_customer').length)
    {
        var table_customer = $('#id_table_customer_loan').DataTable
        ({
            
            "ajax"      : 
            {
                "type"  : "GET",
                "url"   : endpoint_general+'customers'
            },
            "dataSrc"   : "data",
            columns     : 
            [
                {   
                    "data": "id" 
                },
                { 
                    "data": "first_name",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "last_name",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "birthday",
                    render: function(data, type) 
                    {
                        if(data == null)
                        {
                            return '<center><span>NO INFO</span></center>';
                        }
                        else
                        {
                            let birthday = data.split('-');
                            return '<center><span>'+birthday[1]+'/'+birthday[2]+'/'+birthday[0]+'</span></center>';
                        }
                        
                    }
                },
                { 
                    "data": "cellphone",
                    render: function(data, type) 
                    {
                        let formato = new StringMask('(000) 000-0000');
                        return '<center><span><a href="tel:'+formato.apply(data)+'">'+formato.apply(data)+'</a></span></center>';
                    }
                },
                { 
                    "data": "email",
                    render : function(data,type)
                    {
                        if(data == null)
                        {
                            return '<center><span>NO INFO</span></center>';
                        }
                        else
                        {
                            return '<center><span><a href="mailto:'+data+'">'+data+'</span></center>';
                        }
                        
                    }
                },
                { 
                    "data": "license",
                    render: function(data, type) 
                    {
                        if(data == null)
                        {
                            return '<center><span>NO INFO</span></center>';
                        }
                        else
                        {
                            return '<center><span>'+data+'</span></center>';
                        }
                    }
                }
            ],
            "order"     : 
            [
                [0, "desc"]
            ],
            columnDefs: 
            [
                { 
                    visible:false, targets: [0]
                },
                {
                    'targets': 7,
                    'data': null,
                    'defaultContent': '<center><button type="button" id="customer_select" class="btn btn-icon btn-primary btn-sm" title="Link this Customer"><i class="fe fe-link"></i></button></center>'
                }
            ],
            language: {
                searchPlaceholder: 'Search...',
                sSearch: '',
            }
        });
        $("#global-loader").fadeOut("slow");

        $('#id_table_customer_loan tbody').on( 'click', 'button#customer_select', function () 
        {
            $("#global-loader").fadeIn("fast");
            var data = table_customer.row( $(this).parents('tr') ).data();
            var customer_id = data.id;
            $('#id_hid_id_cust_loan').val(customer_id);
            $('#id_txt_fname_cust_loan').val(data.first_name);
            $('#id_txt_lname_cust_loan').val(data.last_name);

            if(data.birthday == null)
            {
                $('#id_txt_bday_cust_loan').val('NO INFO');
            }
            else
            {
                let birthday = data.birthday.split('-');
                $('#id_txt_bday_cust_loan').val(birthday[1]+'/'+birthday[2]+'/'+birthday[0]);
            }
            

            let formato_cell = new StringMask('(000) 000-0000');
            $('#id_txt_cphone_cust_loan').val(formato_cell.apply(data.cellphone));
            $('#id_txt_email_cust_loan').val(data.email);

            if(data.license == null)
            {
                $('#id_txt_dlic_cust_loan').val('NO INFO');
            }
            else
            {
                $('#id_txt_dlic_cust_loan').val(data.license);
            }
            

            $('#id_txt_paddress_cust_loan').val(data.address_p);
            $('#id_txt_saddress_cust_loan').val(data.address_s);

            $('#id_txt_state_cust_loan').val(data.state.name);
            $('#id_txt_city_cust_loan').val(data.city);
            $('#id_txt_zip_cust_loan').val(data.zip);

            $("#id_div_conteiner_error_info_customer_loan").removeClass('d-block').addClass('d-none');
            $('#id_modal_find_customer').modal('hide');
            $("#global-loader").fadeOut("slow");
            
        });
    }

    if($('#id_form_loan').length)
    {
        $("#id_txt_costo_plate_loan").maskMoney({prefix:'US$ ',thousands:',', decimal:'.'});
        $("#id_txt_costo_doc_loan").maskMoney({prefix:'US$ ',thousands:',', decimal:'.'});
        $("#id_txt_dpayment_loan").maskMoney({prefix:'US$ ',thousands:',', decimal:'.'});

        $("#id_txt_interest_loan").maskMoney({suffix:' %',thousands:',', decimal:'.',precision:2});
        $("#id_txt_taxes_loan").maskMoney({suffix:' %',thousands:',', decimal:'.',precision:2});

        $("#id_date_open_loan").mask("00/00/0000");
        $("#id_date_startpay_loan").mask("00/00/0000");

        $("#id_date_open_loan").blur(function() 
        {
            if($('#id_date_open_loan').val().trim() != '')
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'checkdbirthCust',
                    data:{txt_bday_cus:$('#id_date_open_loan').val()},
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {   
                        let error = [];
                        if(!data.res)
                        {
                            $('#id_hid_validate_dopen').val(1);
                            error['id_date_open_loan'] = 'This Date Loan has incorrect format';
                            $.fn.set_error_msg_array(error);
                        }
                        else
                        {
                            $('#id_hid_validate_dopen').val(0);
                            $('#id_msg_error_id_date_open_loan').html('');
                            $('#id_date_open_loan').removeClass('border').removeClass('border-danger');
                        }
                    }
                });
            }
        });

        $("#id_date_startpay_loan").blur(function() 
        {
            if($('#id_date_startpay_loan').val().trim() != '')
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'checkdbirthCust',
                    data:{txt_bday_cus:$('#id_date_startpay_loan').val()},
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {   
                        let error = [];
                        if(!data.res)
                        {
                            $('#id_hid_validate_dstart').val(1);
                            error['id_date_startpay_loan'] = 'This Start Date has incorrect format';
                            $.fn.set_error_msg_array(error);
                        }
                        else
                        {
                            $('#id_hid_validate_dstart').val(0);
                            $('#id_msg_error_id_date_startpay_loan').html('');
                            $('#id_date_startpay_loan').removeClass('border').removeClass('border-danger');
                        }
                    }
                });
            }
        });

        $('#id_btn_sbm_loan').click(function()
        {
            var car_id          = $('#id_hid_id_car_loan').val();
            var customer_id     = $('#id_hid_id_cust_loan').val();
            var error_date_loan = $('#id_hid_validate_dopen').val();  
            var error_date_start = $('#id_hid_validate_dstart').val();  

            $("#id_div_conteiner_error_info_customer_loan").removeClass('d-block').addClass('d-none');
            $("#id_div_conteiner_error_info_car_loan").removeClass('d-block').addClass('d-none');
    
            $("#id_btn_sbm_loan").addClass('btn-loading');
            $("#global-loader").fadeIn("fast");
            if(!$('#id_form_loan').cvalidateForm() && car_id != 0 && customer_id != 0 && error_date_loan == 0 && error_date_start == 0)
            {
                $('#id_hid_car_id_loan').val($('#id_hid_id_car_loan').val());
                $('#id_hid_customer_id_loan').val($('#id_hid_id_cust_loan').val());

                $('#id_div_msg_error_form_loan').html('');
                $("#id_div_div_error_form_loan").removeClass('d-block').addClass('d-none');
                
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'loans',
                    data:$("#id_form_loan").serialize(),
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {
                        if(data.res)
                        {
                            swal({
                                title: "Congratulations!",
                                text: "Your information has been succesfully saved",
                                type: "success",
                                showCancelButton: true,
                                confirmButtonClass: "btn-success",
                                confirmButtonText: "Add Loan",
                                cancelButtonText:"View Loan Info",
                                closeOnConfirm: false
                            },
                            function(isConfirm)
                            {
                                if(isConfirm)
                                {
                                    location.href = './?mod=loan&hac=add';
                                }
                                else
                                {
                                    location.href = './?mod=loan&hac=update&loan='+data.loan_id;
                                }
                            });
                        }
                        else
                        {
                            $("#id_btn_sbm_loan").removeClass('btn-loading');
                            $("#id_div_div_error_form_loan").removeClass('d-none').addClass('d-block');
                            $('#id_div_msg_error_form_loan').html('Check the information and try again.');
                        }
                    },
                    complete : function()
                    {
                        $("#global-loader").fadeOut("slow");
                    },
                    error:function()
                    {
                        $("#global-loader").fadeOut("slow");
                        $("#id_btn_sbm_loan").removeClass('btn-loading');
                        $("#id_div_div_error_form_loan").removeClass('d-none').addClass('d-block');
                        $('#id_div_msg_error_form_loan').html('We have a problem with the server. Try later.');
                    }
                });
            }
            else
            {
                if(car_id == 0)
                {
                    $("#id_div_conteiner_error_info_car_loan").removeClass('d-none').addClass('d-block');
                }

                if(customer_id == 0)
                {
                    $("#id_div_conteiner_error_info_customer_loan").removeClass('d-none').addClass('d-block');
                }

                if(error_date_loan == 1)
                {
                    let error = [];
                    error['id_date_open_loan'] = 'This Date Loan has incorrect format';
                    $.fn.set_error_msg_array(error);
                }

                if(error_date_start)
                {
                    let error = [];
                    error['id_date_startpay_loan'] = 'This Start Date has incorrect format';
                    $.fn.set_error_msg_array(error);
                }
                $("#global-loader").fadeOut("slow");
                $("#id_btn_sbm_loan").removeClass('btn-loading');            
            }
        });

        $('#id_btn_calculare_loan').click(function()
        {
            $("#id_btn_calculare_loan").addClass('btn-loading');
            $("#global-loader").fadeIn("fast");
            var error_date_loan = $('#id_hid_validate_dopen').val();  
            var error_date_start = $('#id_hid_validate_dstart').val(); 

            var costo_plate     = $('#id_txt_costo_plate_loan').val();
            var costo_docs      = $('#id_txt_costo_doc_loan').val();
            var interes_rate    = $('#id_txt_interest_loan').val();
            var taxes_rate      = $('#id_txt_taxes_loan').val();
            var downpayment     = $('#id_txt_dpayment_loan').val();
            $('#id_btn_sbm_loan').prop("disabled",true);
            $('#id_txt_tfinance_loan').val(0); 
            $('#id_txt_ttfinance_loan').val(0); 
            $('#id_txt_mpayment_loan').val(0);
            
            setTimeout(
            function() 
            {
                //do something special
            }, 1000);
                
            if(!$('#id_form_loan').cvalidateForm() && error_date_loan == 0 && error_date_start == 0)
            {
                let subtotal = 0;
                let valor_interest = 0;
                let valor_taxes = 0;
                let total_finance  = 0;
                let error   =   [];

                let precio     = ($('#id_txt_price_car_loan').val()).replace('US$','');
                precio         = precio.replace(',','');
                let meses       =   parseInt($('#id_txt_long_term_loan').val());

                costo_plate = costo_plate.replace('US$ ','');
                costo_plate = costo_plate.replace(',','');

                costo_docs = costo_docs.replace('US$ ','');
                costo_docs = costo_docs.replace(',','');

                downpayment = downpayment.replace('US$ ','');
                downpayment = downpayment.replace(',','');

                interes_rate= interes_rate.replace(' %','');
                interes_rate= interes_rate.replace(',','');
                interes_rate = interes_rate / 100;

                taxes_rate= taxes_rate.replace(' %','');
                taxes_rate= taxes_rate.replace(',','');
                taxes_rate = taxes_rate / 100;

                if($("#id_msg_error_id_txt_dpayment_loan").length)
                {
                    $('#id_txt_dpayment_loan').removeClass('border-danger');
                    $("#id_msg_error_id_txt_dpayment_loan").remove();
                }

                if(parseFloat(downpayment) >= parseFloat(precio))
                {
                    error['id_txt_dpayment_loan'] = 'The down payment value has to be less or the equal to price of vehicle';
                    $.fn.set_error_msg_array(error);
                    $('#id_btn_sbm_loan').prop("disabled",true);
                    $("#id_btn_calculare_loan").removeClass('btn-loading');
                    $("#global-loader").fadeOut("slow");
                    return false; 
                }

                subtotal            =   parseFloat(precio) + parseFloat(costo_plate) + parseFloat(costo_docs);
                
                valor_interest      =   parseFloat(subtotal) + parseFloat(subtotal*interes_rate);
                valor_taxes         =   parseFloat(valor_interest) + parseFloat(valor_interest*taxes_rate);

                total_finance       =   parseFloat(valor_taxes) - parseFloat(downpayment);

                $('#id_txt_tfinance_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(subtotal)); 
                $('#id_txt_ttfinance_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(total_finance)); 
                $('#id_txt_mpayment_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(total_finance/meses));
                $('#id_btn_sbm_loan').prop("disabled",false); 
            }
            else
            {
                if(error_date_loan == 1)
                {
                    let error_open = [];
                    error_open['id_date_open_loan'] = 'This Date Loan has incorrect format';
                    $.fn.set_error_msg_array(error_open);
                }

                if(error_date_start == 1)
                {
                    let error_start = [];
                    error_start['id_date_startpay_loan'] = 'This Start Date has incorrect format';
                    $.fn.set_error_msg_array(error_start);
                }
            }

            $("#id_btn_calculare_loan").removeClass('btn-loading');
            $("#global-loader").fadeOut("slow");
        });

        $('#id_txt_costo_plate_loan, #id_txt_costo_doc_loan, #id_txt_interest_loan, #id_txt_taxes_loan, #id_txt_dpayment_loan, #id_txt_long_term_loan').change(function()
        {   
            $('#id_btn_sbm_loan').prop('disabled',true);
        })

    }

    if($('#id_div_panel_tab_reportes').length)
    {
        
        var table_all_loan = $('#id_table_all_loan').DataTable
        ({
            "ajax"      : 
            {
                "type"  : "GET",
                "url"   : endpoint_general+'getReporteLoan/1'
            },
            "dataSrc"   : "data",
            columns     : 
            [
                {   
                    "data": "loan_id"
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
                    "data": "full_name",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "birthday"
                },
                { 
                    "data": "modelo_car",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "stock_number",
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
                    "data": "total_financed"
                },
                { 
                    "data": "balance"
                }
            ],
            "order"     : 
            [
                [0, "desc"]
            ],
            columnDefs: 
            [
                { 
                    visible:false, targets: [0]
                },
                {
                    targets: [3],
                    render: $.fn.dataTable.render.moment( 'MM/DD/YYYY' )
                },
                {
                    targets: [7,8],
                    render: $.fn.dataTable.render.number( ',', '.', 2, 'US$ ')
                },
                {
                    'targets': 9,
                    'data': null,
                    'defaultContent': '<center><button type="button" id="loan_select" class="btn btn-icon btn-primary btn-sm" title="Select this Car Loan"><i class="fe fe-eye"></i></button></center>'
                }
            ],
            language: {
                searchPlaceholder: 'Search...',
                sSearch: '',
                "decimal": ".",
                "thousands": ","
            }
        });

        $('#id_table_all_loan tbody').on( 'click', 'button#loan_select', function () 
        {
            var data = table_all_loan.row( $(this).parents('tr') ).data();
            location.href = './?mod=loan&hac=update&loan='+data.loan_id;
            console.log(data);
        });

       
        var table_payments_now = $('#id_table_payments_today').DataTable
        ({
            "ajax"      : 
            {
                "type"  : "GET",
                "url"   : endpoint_general+'getReporteLoan/2'
            },
            "dataSrc"   : "data",
            columns     : 
            [
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
                    "data": "full_name",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "birthday",
                    render: function(data, type) 
                    {
                        if(data == null)
                        {
                            return '<center>NO INFO</center>'
                        }
                        let birthday = data.split('-');
                        return '<center><span>'+birthday[1]+'/'+birthday[2]+'/'+birthday[0]+'</span></center>';
                    }
                },
                { 
                    "data": "modelo_car",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "stock_number",
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
                    "data": "minimun_payment",
                    render: function(data, type) 
                    {
                        var number = $.fn.dataTable.render.number( ',', '.', 2, '$'). display(data);
                        return '<center><span>'+number+'</span></center>';
                    }
                },
                { 
                    "data": "loan_date",
                    render: function(data, type) 
                    {
                        let loan_date = data.split('-');
                        return '<center><span>'+loan_date[1]+'/'+loan_date[2]+'/'+loan_date[0]+'</span></center>';
                    }
                }
            ],
            "order"     : 
            [
                [1, "asc"]
            ],
            columnDefs: 
            [
                {
                    'targets': 8,
                    'data': null,
                    'defaultContent': '<center><button type="button" id="loan_select" class="btn btn-icon btn-primary btn-sm" title="Select this Car Loan"><i class="fe fe-eye"></i></button></center>'
                }
            ],
            language: {
                searchPlaceholder: 'Search...',
                sSearch: '',
                "decimal": ".",
                "thousands": ","
            }
        });

        $('#id_table_payments_today tbody').on( 'click', 'button#loan_select', function () 
        {
            var data = table_payments_now.row( $(this).parents('tr') ).data();
            location.href = './?mod=loan&hac=update&loan='+data.loan_id;
            console.log(data);
        });

        var table_payments_due = $('#id_table_payments_due').DataTable
        ({
            "ajax"      : 
            {
                "type"  : "GET",
                "url"   : endpoint_general+'getReporteLoan/3'
            },
            "dataSrc"   : "data",
            columns     : 
            [
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
                    "data": "full_name",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "birthday",
                    render: function(data, type) 
                    {
                        if(data == null)
                        {
                            return '<center>NO INFO</center>'
                        }
                        let birthday = data.split('-');
                        return '<center><span>'+birthday[1]+'/'+birthday[2]+'/'+birthday[0]+'</span></center>';
                    }
                },
                { 
                    "data": "modelo_car",
                    render: function(data, type) 
                    {
                        return '<center><span>'+data+'</span></center>';
                    }
                },
                { 
                    "data": "stock_number",
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
                    "data": "minimun_payment",
                    render: function(data, type) 
                    {
                        var number = $.fn.dataTable.render.number( ',', '.', 2, '$'). display(data);
                        return '<center><span>'+number+'</span></center>';
                    }
                },
                { 
                    "data": "date_programable",
                    render: function(data, type) 
                    {
                        let date_programable = data.split('-');
                        return '<center><span>'+date_programable[1]+'/'+date_programable[2]+'/'+date_programable[0]+'</span></center>';
                    }
                }
                ,
                { 
                    "data": "date_end",
                    render: function(data, type) 
                    {
                        let date_programable = data.split('-');
                        return '<center><span>'+date_programable[1]+'/'+date_programable[2]+'/'+date_programable[0]+'</span></center>';
                    }
                }
            ],
            "order"     : 
            [
                [1, "desc"]
            ],
            columnDefs: 
            [
                
                {
                    'targets': 9,
                    'data': null,
                    'defaultContent': '<center><button type="button" id="loan_select" class="btn btn-icon btn-primary btn-sm" title="Select this Car Loan"><i class="fe fe-eye"></i></button>'
                }
            ],
            language: {
                searchPlaceholder: 'Search...',
                sSearch: '',
                "decimal": ".",
                "thousands": ","
            }
        });


        $('#id_table_payments_due tbody').on( 'click', 'button#loan_select', function () 
        {
            var data = table_payments_due.row( $(this).parents('tr') ).data();
            location.href = './?mod=loan&hac=update&loan='+data.loan_id;
        });

        
    }



    if($('#id_div_panel_tab_loan').length)
    {
        $('#id_form_tab_loan').trigger('reset');
        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'loans/'+$('#id_hid_loan_id_tab_loan').val(),
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {
                if(data.res)
                {
                    console.log(data.datos);
                    //MOSTRAR LOS VALORES EN LA TAB DE CAR LOAN INFORMATION
                    let subtotal = parseFloat(data.datos.price) + parseFloat(data.datos.pay_placa) + parseFloat(data.datos.pay_documentation);
                    $('#id_txt_price_car_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.datos.price));
                    $('#id_txt_costo_plate_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.datos.pay_placa));
                    $('#id_txt_costo_doc_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.datos.pay_documentation));
                    $('#id_txt_tfinance_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(subtotal))


                    $('#id_txt_interest_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, '',' %').display(data.datos.interest_rate));
                    $('#id_txt_taxes_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, '',' %').display(data.datos.taxes_rate));
                    $('#id_txt_dpayment_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.datos.downpayment));
                    $('#id_txt_ttfinance_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.datos.total_financed));

                    $('#id_txt_long_term_tab_loan').val(data.datos.long_term);
                    $('#id_txt_mpayment_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.datos.minimun_payment));
                    
                    let date_loan = data.datos.loan_date.split('-');
                    $('#id_date_open_tab_loan').val(date_loan[1]+'/'+date_loan[2]+'/'+date_loan[0]);

                    let start_payment = data.datos.start_payment.split('-');
                    $('#id_date_startpay_tab_loan').val(start_payment[1]+'/'+start_payment[2]+'/'+start_payment[0]);

                    $("#id_txt_fee_late_tab_loan").prop('disabled',false);
                    $("#id_txt_fee_late_tab_loan").maskMoney({prefix:'US$ ',thousands:',', decimal:'.'});
                    
                    $('#id_txt_fee_late_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.datos.late_fee));
                    $('#id_hid_late_fee_tab_loan').val(data.datos.late_fee);
                    $('#id_txt_days_late_tab_loan').val(data.datos.days_late);

                    $('#id_txt_balance_now_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.datos.balance));

                    if(data.datos.pago_automatico == 1)
                    {
                        $('#id_div_setup_pago_automatico').removeClass('d-none').addClass('d-block')
                    }
                    else
                    {
                        $('#id_div_setup_pago_automatico').removeClass('d-block').addClass('d-none')
                    }

                    $('#id_btn_save_tab_loan').prop('disabled',false);                      

                    //MOSTRAR LOS VALORES EN LA TAB DE CAR INFORMATION
                    $.ajax
                    ({ 
                        type: "GET",
                        url: endpoint_general+'getFullCar/'+data.datos.car_id,
                        dataType: "json",
                        crossDomain: true,
                        xhrFields: { withCredentials: true },
                        success: function (data, status, jqXHR) 
                        {
                            if(data.res)
                            {
                                $('#id_hid_id_car_tab_car').val(data.data[0].id_car);
                                $('#id_txt_make_tab_car').val(data.data[0].name_make);
                                $('#id_txt_model_tab_car').val(data.data[0].name_modelo);
                                $('#id_txt_trim_tab_car').val(data.data[0].name_trim);
                                $('#id_txt_vin_tab_car').val(data.data[0].vin);
                                $('#id_txt_scknumber_tab_car').val(data.data[0].stock_number);
                                $('#id_txt_year_tab_car').val(data.data[0].year);
                                $('#id_txt_style_tab_car').val(data.data[0].name_style);
                                $('#id_txt_mileage_tab_car').val($.fn.dataTable.render.number( ',', '.', 0, ''). display(data.data[0].mileage));
                                let lbl_transmission;
                                switch(data.data[0].transmission)
                                {
                                    case 1:
                                        lbl_transmission = 'Automatic';
                                    break;
                                    case 2:
                                        lbl_transmission = 'CVT';
                                    break;
                                    case 3:
                                        lbl_transmission = 'Manual';
                                    break;
                                    default:
                                        lbl_transmission = 'NO INFO';
                                    break;
                                }
                                let lbl_condition;
                                switch(data.data[0].condition_car)
                                {
                                    case 1:
                                        lbl_condition = 'Used';
                                    break;
                                    case 2:
                                        lbl_condition = 'New';
                                    break;
                                    default:
                                        lbl_condition = 'NO INFO';
                                    break;
                                }
                                let lbl_fueltype;
                                switch(data.data[0].fuel_type)
                                {
                                    case 1:
                                        lbl_fueltype = 'Gasoline';
                                    break;
                                    case 2:
                                        lbl_fueltype = 'Diesel';
                                    break;
                                    case 3:
                                        lbl_fueltype = 'Hybrid';
                                    break;
                                    case 4:
                                        lbl_fueltype = 'Electric';
                                    break;
                                    default:
                                        lbl_fueltype = 'NO INFO';
                                    break;
                                }
        
                                $('#id_txt_transmi_tab_car').val(lbl_transmission);
                                $('#id_txt_condition_tab_car').val(lbl_condition);
                                $('#id_txt_fuelt_tab_car').val(lbl_fueltype);
                                $('#id_btn_update_tab_car').prop('disabled',false);
                                
                            }
                            else
                            {
                                $('#id_btn_update_tab_car').prop('disabled',true);
                            }
                        }
                    });

                    //MOSTRAR LOS VALORES EN LA TAB DE CUSTOMER INFORMATION
                    $.ajax
                    ({ 
                        type: "GET",
                        url: endpoint_general+'customers/'+data.datos.customer_id,
                        dataType: "json",
                        crossDomain: true,
                        xhrFields: { withCredentials: true },
                        success: function (data, status, jqXHR) 
                        {
                            if(data.res)
                            {
                                $('#id_hid_id_cust_tab_customer').val(data.datos.id);
                                $('#id_txt_fname_tab_customer').val(data.datos.first_name);
                                $('#id_txt_lname_tab_customer').val(data.datos.last_name);

                                if(data.datos.birthday != null)
                                {
                                    let birthday = data.datos.birthday.split('-');
                                    $('#id_txt_bday_tab_customer').val(birthday[1]+'/'+birthday[2]+'/'+birthday[0]);
                                }
                                else
                                {
                                    $('#id_txt_bday_tab_customer').val('NO INFO');
                                }

                                let formato_cell = new StringMask('(000) 000-0000');
                                $('#id_txt_cphone_tab_customer').val(formato_cell.apply(data.datos.cellphone));

                                if(data.datos.email != null)
                                {
                                    $('#id_txt_email_tab_customer').val(data.datos.email);
                                }
                                else
                                {
                                    $('#id_txt_email_tab_customer').val('NO INFO');
                                }

                                if(data.datos.license != null)
                                {
                                    $('#id_txt_dlic_tab_customer').val(data.datos.license);
                                }
                                else
                                {
                                    $('#id_txt_dlic_tab_customer').val('NO INFO');
                                }
                                
                                $('#id_txt_paddress_tab_customer').val(data.datos.address_p);
                                $('#id_txt_saddress_tab_customer').val(data.datos.address_s);
                    
                                $('#id_txt_state_tab_customer').val(data.datos.state.name);
                                $('#id_txt_city_tab_customer').val(data.datos.city);
                                $('#id_txt_zip_tab_customer').val(data.datos.zip);    
                                $('#id_btn_update_tab_customer').prop('disabled',false);                    
                            }
                            else
                            {
                                $('#id_btn_update_tab_customer').prop('disabled',true);                    
                            }
                        }
                    });

                    if(data.datos.balance > 0)
                    {
                        $('#id_btn_new_payment_tab_loan').prop('disabled',false);                      
                        $('#id_btn_new_feelate_tab_loan').prop('disabled',false);                      
                        $('#id_btn_pay_balance_tab_loan').prop('disabled',false);                      
                    }
                }
                else
                {
                    location.href='./?mod=loan&hac=add';
                }
            },
            complete : function()
            {
                
            }
        });

        //MOSTRAR LOS REGISTROS DE PAYMENTLOAN
        var table_loan_summary = $('#id_table_loan_summary').DataTable
        ({
            
            "ajax"      : 
            {
                "type"  : "GET",
                "url"   : endpoint_general+'payments/'+$('#id_hid_loan_id_tab_loan').val()
            },
            "dataSrc"       : "data",
            scrollY         : '50vh',
            scrollCollapse  : true,
            "ordering"      : false,
            "paging"        : false,
            columns     : 
            [
                {   
                    "data": "id" 
                },
                { 
                    "data": "description"
                },
                { 
                    "data": "date_doit"
                },
                { 
                    "data": "monto"
                },
                { 
                    "data": "balance"
                },
                {
                    "data" : "concepto",
                    render : function(data)
                    {
                        if(data == 1)
                        {
                            return '<center><button type="button" id="send_email" class="btn btn-icon btn-info btn-sm" title="Select this Payment"><i class="fa fa-envelope"></i></button></center>';
                        }
                        else
                        {
                            return '<center><button type="button" id="delete_fee" class="btn btn-icon btn-danger btn-sm" title="Select this Payment"><i class="fa fa-trash"></i></button></center>';
                        }
                        
                    }
                }
            ],
            "order"     : 
            [
                [0, "asc"]
            ],
            columnDefs: 
            [
                { 
                    visible:false, targets: [0]
                },
                {
                    targets: [2],
                    render: $.fn.dataTable.render.moment( 'MM/DD/YYYY' )
                },
                {
                    targets: [3,4],
                    render: $.fn.dataTable.render.number( ',', '.', 2, 'US$ ')
                }
            ],
            language: {
                searchPlaceholder: 'Search...',
                sSearch: '',
                "decimal": ".",
                "thousands": ","
            }
        });

        $('#id_table_loan_summary tbody').on( 'click', 'button#send_email', function () 
        {
            $("#global-loader").fadeIn("fast");
            var data = table_loan_summary.row( $(this).parents('tr') ).data();
            console.log(data);
            $.ajax
            ({ 
                type: "GET",
                url: endpoint_general+'sendReceipt/'+data.id,
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    if(data.res)
                    {
                        swal({
                            title: "Congratulations!",
                            text: "We sent the payment receipt to the customer.",
                            type: "success",
                            showCancelButton: false,
                            confirmButtonClass: "btn-default",
                            confirmButtonText: "Close",
                            closeOnConfirm: true
                        });
                    }
                    else
                    {
                        swal({
                            title: "Alert",
                            text: "We could not sent the payment receipt. Try later!",
                            type: "warning",
                            showCancelButton: false,
                            confirmButtonClass: "btn-default",
                            confirmButtonText: "Close",
                            closeOnConfirm: true
                        });
                    }
                },
                complete : function()
                {
                    $("#global-loader").fadeOut("slow");
                }
            });
            
        });

        $('#id_table_loan_summary tbody').on( 'click', 'button#delete_fee', function () 
        {
            $("#global-loader").fadeIn("fast");
            var data_payment = table_loan_summary.row( $(this).parents('tr') ).data();
            $.ajax
            ({ 
                type: "GET",
                url: endpoint_general+'getLastPaymentbyLoad/'+data_payment.loan_id,
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    if(data.res)
                    {
                        if(data.data.id == data_payment.id)
                        {
                            $('#id_modal_delete_late_fee').modal('show');
                            $('#id_hid_loan_id_delete_late_fee').val(data_payment.loan_id);
                            $('#id_hid_payment_id_delete_late_fee').val(data_payment.id);
                            $('#id_hid_fee_late_delete_late_fee').val($('#id_txt_fee_late_tab_loan').val());
                            $('#id_hid_balance_delete_late_fee').val($('#id_txt_balance_now_tab_loan').val());
                        }
                        else
                        {
                            swal({
                                title: "Warning",
                                text: "This Fee late is not available to delete",
                                type: "warning",
                                showCancelButton: false,
                                confirmButtonClass: "btn-success",
                                confirmButtonText: "Exit",
                                closeOnConfirm: true
                            });
                        }
                        $("#global-loader").fadeOut("slow");
                    }
                    else
                    {
                        $("#global-loader").fadeOut("slow");
                    }
                }
            });
            
            
            
        });

        //MOSTRAR EL SCHEDULE DE PAGOS
        $('#id_table_loan_scheduled').DataTable
        (
            {
                
                "ajax"      : 
                {
                    "type"  : "GET",
                    "url"   : endpoint_general+'getReporteSchedule/'+$('#id_hid_loan_id_tab_loan').val()
                },
                "dataSrc"       : "data",
                "ordering"      : false,
                "paging"        : false,
                columns     : 
                [
                    {   
                        "data": "id" 
                    },
                    { 
                        "data": "date_programable"
                    },
                    { 
                        "data": "date_end"
                    },
                    { 
                        "data": "pago",
                        render:function(data)
                        {
                            if(data == 1)
                            {
                                return '<center><span class="text-success fw-bold">PAID</span></center>'
                            }
                            else
                            {
                                return '<center><span class="text-danger fw-bold">NO PAYMENT</span></center>'
                            }
                        }
                    },
                    {
                        "data": "current_month"
                    }
                ],
                "order"     : 
                [
                    [0, "asc"]
                ],
                columnDefs: 
                [
                    { 
                        visible:false, targets: [4]
                    },
                    {
                        targets: [1,2],
                        render: $.fn.dataTable.render.moment( 'MM/DD/YYYY' )
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


        $('#id_btn_save_tab_loan').on('click',function()
        {
            $("#id_btn_save_tab_loan").addClass('btn-loading');
            $("#global-loader").fadeIn("fast");
            if(!$('#id_form_tab_loan').cvalidateForm())
            {
                $.ajax
                ({ 
                    type: "PUT",
                    url: endpoint_general+'loans/'+$('#id_hid_loan_id_tab_loan').val(),
                    data:$("#id_form_tab_loan").serialize(),
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {
                        if(data.res)
                        {
                            swal({
                                title: "Congratulations!",
                                text: "Your information has been succesfully saved",
                                type: "success",
                                showCancelButton: false,
                                confirmButtonClass: "btn-success",
                                confirmButtonText: "Ok",
                                closeOnConfirm: true
                            });
                            $('#id_hid_late_fee_tab_loan').val(data.fee);
                        }
                        else
                        {
                            swal({
                                title: "Alert",
                                text: "We can not save your information, Try later!!",
                                type: "warning",
                                showCancelButton: false,
                                confirmButtonClass: "btn-success",
                                confirmButtonText: "Exit",
                                closeOnConfirm: true
                            });
                        }
                    }
                });
                $("#id_btn_save_tab_loan").removeClass('btn-loading');
                $("#global-loader").fadeOut("slow");
            }
            else
            {
                $("#id_btn_save_tab_loan").removeClass('btn-loading');
                $("#global-loader").fadeOut("slow");
            }
        });

        $('#id_btn_update_tab_car').on('click',function()
        {
            location.href='./?mod=car&hac=update&car='+$('#id_hid_id_car_tab_car').val()+'&loan='+$('#id_hid_loan_id_tab_loan').val();
        });

        $('#id_btn_update_tab_customer').on('click',function()
        {
            location.href='./?mod=customer&hac=update&customer='+$('#id_hid_id_cust_tab_customer').val()+'&loan='+$('#id_hid_loan_id_tab_loan').val();
        });

        $('#id_btn_new_payment_tab_loan').on('click', function ()
        {
            $("#global-loader").fadeIn("fast");
            $('#id_modal_get_payment').modal('show'); 
            $('#id_form_get_payment').trigger('reset');
            $('#id_hid_loan_id_payment').val($('#id_hid_loan_id_tab_loan').val());
            $('#id_hid_balance_loan_payment').val($('#id_txt_balance_now_tab_loan').val());
            $('#id_txt_balance_payment').val($('#id_txt_balance_now_tab_loan').val());
            $('#id_txt_minimun_payment').val($('#id_txt_mpayment_tab_loan').val());
            if($('#id_txt_email_tab_customer').val() == '')
            {
                $('#id_lbl_email_customer_payment').html('<span class="text-danger">NO EMAIL</span>');
                $('#id_chk_send_email_payment').prop('disabled',true);
            }
            else
            {
                $('#id_lbl_email_customer_payment').html($('#id_txt_email_tab_customer').val());
                $('#id_chk_send_email_payment').prop('disabled',false);
            }
            

            let balance             = $('#id_txt_balance_now_tab_loan').val().replace('US$','');
            balance                 = balance.replace(',','');
            balance                 = parseFloat(balance);

            let minimun             = $('#id_txt_mpayment_tab_loan').val().replace('US$','');
            minimun                 = minimun.replace(',','');
            minimun                 = parseFloat(minimun);

            if(minimun >= balance)
            {
                let resta = (balance).toFixed(2);
                $('#id_txt_amount_due_payment').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(resta))
                $('#id_txt_amount_due_payment').prop('readonly',true);
            }
            
            $('#id_div_msg_error_date_payment').html('');
            $('#id_date_payment_get_payment').removeClass('border').removeClass('border-danger');
            $("#global-loader").fadeOut("slow");
        });

        $('#id_btn_pay_balance_tab_loan').on('click', function ()
        {
            $("#global-loader").fadeIn("fast");
            $('#id_modal_get_balance').modal('show'); 
            $('#id_form_get_balance').trigger('reset');
            $('#id_txt_balance_balance').val($('#id_txt_balance_now_tab_loan').val());
            $('#id_hid_loan_id_balance').val($('#id_hid_loan_id_tab_loan').val());
            
            if($('#id_txt_email_tab_customer').val() == '')
            {
                $('#id_lbl_email_customer_balance').html('<span class="text-danger">NO EMAIL</span>');
                $('#id_chk_send_email_balance').prop('disabled',true);
            }
            else
            {
                $('#id_lbl_email_customer_balance').html($('#id_txt_email_tab_customer').val());
                $('#id_chk_send_email_balance').prop('disabled',false);
            }
            

            let balance             = $('#id_txt_balance_now_tab_loan').val().replace('US$','');
            balance                 = balance.replace(',','');
            balance                 = parseFloat(balance);

            let interes_rate        =   $('#id_txt_interest_tab_loan').val().replace(' %','');
            interes_rate                 = interes_rate.replace(',','');
            interes_rate                 = parseFloat(interes_rate);

            let discount            =   (balance * (interes_rate / 100)).toFixed(2);
            let payment_due         =   (balance - discount).toFixed(2);
            $('#id_txt_discount_balance').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(discount));
            $('#id_txt_amount_due_balance').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(payment_due));
            $('#id_div_msg_error_date_balance').html('');
            $('#id_date_payment_balance').removeClass('border').removeClass('border-danger');

            $("#global-loader").fadeOut("slow");
        });

        $('#id_btn_new_feelate_tab_loan').on('click', function ()
        {
            $("#global-loader").fadeIn("fast");
            $('#id_modal_late_fee').modal('show'); 
            $('#id_form_late_fee').trigger('reset');
            $('#id_hid_loan_id_late_fee').val($('#id_hid_loan_id_tab_loan').val());
            $('#id_txt_amount_late_fee').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display($('#id_hid_late_fee_tab_loan').val()));
            $('#id_hid_balance_late_fee').val($('#id_txt_balance_now_tab_loan').val());
            $('#id_div_msg_error_date_late_fee').html('');
            $('#id_date_late_fee').removeClass('border').removeClass('border-danger');

            $("#global-loader").fadeOut("slow");
        });

        $("#global-loader").fadeOut("slow");
    }

    if($('#id_form_get_payment').length)
    {
        $("#id_date_payment_get_payment").mask("00/00/0000");
        $("#id_txt_amount_due_payment").maskMoney({prefix:'US$ ',thousands:',', decimal:'.'});

        $( "#id_txt_amount_due_payment" ).blur(function() 
        {
            let minimun_payment     = ($('#id_txt_minimun_payment').val()).replace('US$','');
            minimun_payment         = minimun_payment.replace(',','');
            minimun_payment         = parseFloat(minimun_payment);

            let amount_due          = ($(this).val()).replace('US$','');
            amount_due              = amount_due.replace(',','');
            amount_due              = parseFloat(amount_due);

            let balance             = ($('#id_txt_balance_now_tab_loan').val()).replace('US$','');
            balance                 = balance.replace(',','');
            balance                 = parseFloat(balance);


            if(amount_due < minimun_payment)
            {
                let error   =   [];
                $('#id_hid_validate_amount_due_payment').val(1);
                error['id_txt_amount_due_payment'] = 'The Amount has to be iqual or more than the Minimun Payment';
                $.fn.set_error_msg_array(error);
            }
            else if(amount_due > balance)
            {
                let error   =   [];
                $('#id_hid_validate_amount_due_payment').val(1);
                error['id_txt_amount_due_payment'] = 'The Amount has to be less than the Balance';
                $.fn.set_error_msg_array(error);
            }
            else
            {
                $('#id_hid_validate_amount_due_payment').val(0);
                $('#id_msg_error_id_txt_amount_due_payment').html('');
                $('#id_txt_amount_due_payment').removeClass('border').removeClass('border-danger');
            }
        });

        $('#id_date_payment_get_payment').blur(function()
        {
            if($('#id_date_payment_get_payment').val().trim() != '')
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'checkdbirthCust',
                    data:{txt_bday_cus:$('#id_date_payment_get_payment').val()},
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {   
                        let error = [];
                        if(!data.res)
                        {
                            $('#id_hid_validate_date_payment').val(1);
                            error['id_date_payment_get_payment'] = 'This Payment Date has incorrect format';
                            $.fn.set_error_msg_array(error);
                        }
                        else
                        {
                            $('#id_hid_validate_date_payment').val(0);
                            $('#id_div_msg_error_date_payment').html('');
                            $('#id_date_payment_get_payment').removeClass('border').removeClass('border-danger');
                        }
                    }
                });
            }
        });

        $('#id_chk_send_email_payment').click(function() 
        {
            if(this.checked)
            {
                $('#id_hid_email_customer_payment').val($('#id_txt_email_tab_customer').val());
            }
            else
            {
                $('#id_hid_email_customer_payment').val('');
            }
        });

        $('#id_btn_date_today_payment').on('click', function ()
        {   
            $("#id_date_payment_get_payment").val(moment().format('MM/DD/YYYY'));
            $("#id_date_payment_get_payment").focus();
        });

        $('#id_btn_add_get_payment').on('click',function()
        {
            $("#id_btn_add_get_payment").addClass('btn-loading');
            $("#global-loader").fadeIn("fast");

            if(!$('#id_form_get_payment').cvalidateForm() && $('#id_hid_validate_amount_due_payment').val() != 1 && $('#id_hid_validate_date_payment').val() != 1)
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'payments',
                    data:$("#id_form_get_payment").serialize(),
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {
                        if(data.res)
                        {
                            $('#id_modal_get_payment').modal('hide');
                            swal({
                                title: "Congratulations!",
                                text: "Your information has been succesfully saved",
                                type: "success",
                                showCancelButton: false,
                                confirmButtonClass: "btn-success",
                                confirmButtonText: "Ok",
                                closeOnConfirm: true
                            });
                            $('#id_txt_balance_now_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.balance));
                            table_loan_summary.ajax.reload();
                            if(data.bandera_balance)
                            {
                                $('#id_btn_new_payment_tab_loan').prop('disabled',true);                      
                                $('#id_btn_new_feelate_tab_loan').prop('disabled',true);                      
                                $('#id_btn_pay_balance_tab_loan').prop('disabled',true); 
                            }
                        }
                        else
                        {
                            $('#id_modal_get_payment').modal('hide');
                            swal({
                                title: "Alert",
                                text: "We can not save your information, Try later!!",
                                type: "warning",
                                showCancelButton: false,
                                confirmButtonClass: "btn-success",
                                confirmButtonText: "Exit",
                                closeOnConfirm: true
                            });
                        }
                        $("#id_btn_add_get_payment").removeClass('btn-loading');
                        $("#global-loader").fadeOut("slow");
                    },
                    error : function(data)
                    {
                        $("#id_btn_add_get_payment").removeClass('btn-loading');
                        $("#global-loader").fadeOut("slow");
                        $('#id_modal_get_payment').modal('hide');
                        swal({
                            title: "Alert",
                            text: "We can not connect with the server",
                            type: "error",
                            showCancelButton: false,
                            confirmButtonText: 'Exit',
                            closeOnConfirm: true
                        });
                    }
                });
            }
            else
            {
                let error = [];
                if($('#id_hid_validate_amount_due_payment').val() == 1)
                {
                    error['id_txt_amount_due_payment'] = 'The Amount has to be iqual or more than the Minimun Payment';
                }

                if($('#id_hid_validate_date_payment').val() == 1)
                {
                    error['id_date_payment_get_payment'] = 'This Payment Date has incorrect format';
                }
                
                $.fn.set_error_msg_array(error);    

                $("#id_btn_add_get_payment").removeClass('btn-loading');
                $("#global-loader").fadeOut("slow");
            }
        });
    }

    if($('#id_form_get_balance').length)
    {
        $("#id_date_payment_balance").mask("00/00/0000");

        $('#id_chk_send_email_balance').click(function() 
        {
            if(this.checked)
            {
                $('#id_hid_email_customer_balance').val($('#id_txt_email_tab_customer').val());
            }
            else
            {
                $('#id_hid_email_customer_balance').val('');
            }
        });

        $('#id_btn_date_today_balance').on('click', function ()
        {   
            $("#id_date_payment_balance").val(moment().format('MM/DD/YYYY'));
            $("#id_date_payment_balance").focus();
        });

        $('#id_date_payment_balance').blur(function()
        {
            if($('#id_date_payment_balance').val().trim() != '')
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'checkdbirthCust',
                    data:{txt_bday_cus:$('#id_date_payment_balance').val()},
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {   
                        let error = [];
                        if(!data.res)
                        {
                            $('#id_hid_validate_date_balance').val(1);
                            error['id_date_payment_balance'] = 'This Payment Date has incorrect format';
                            $.fn.set_error_msg_array(error);
                        }
                        else
                        {
                            $('#id_hid_validate_date_balance').val(0);
                            $('#id_div_msg_error_date_balance').html('');
                            $('#id_date_payment_balance').removeClass('border').removeClass('border-danger');
                        }
                    }
                });
            }
        });

        $('#id_btn_add_balance').on('click',function()
        {
            $("#id_btn_add_balance").addClass('btn-loading');
            $("#global-loader").fadeIn("fast");

            if(!$('#id_form_get_balance').cvalidateForm() && $('#id_hid_validate_date_balance').val() != 1)
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'payments',
                    data:$("#id_form_get_balance").serialize(),
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {
                        if(data.res)
                        {
                            $('#id_modal_get_balance').modal('hide');
                            swal({
                                title: "Congratulations!",
                                text: "Your information has been succesfully saved",
                                type: "success",
                                showCancelButton: false,
                                confirmButtonClass: "btn-success",
                                confirmButtonText: "Ok",
                                closeOnConfirm: true
                            });
                            $('#id_txt_balance_now_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.balance));
                            table_loan_summary.ajax.reload();
                            if(data.bandera_balance)
                            {
                                $('#id_btn_new_payment_tab_loan').prop('disabled',true);                      
                                $('#id_btn_new_feelate_tab_loan').prop('disabled',true);                      
                                $('#id_btn_pay_balance_tab_loan').prop('disabled',true); 
                            }
                        }
                        else
                        {
                            $('#id_modal_get_balance').modal('hide');
                            swal({
                                title: "Alert",
                                text: "We can not save your information, Try later!!",
                                type: "warning",
                                showCancelButton: false,
                                confirmButtonClass: "btn-success",
                                confirmButtonText: "Exit",
                                closeOnConfirm: true
                            });
                        }
                        $("#id_btn_add_balance").removeClass('btn-loading');
                        $("#global-loader").fadeOut("slow");
                    },
                    error : function(data)
                    {
                        $("#id_btn_add_balance").removeClass('btn-loading');
                        $("#global-loader").fadeOut("slow");
                        $('#id_modal_get_balance').modal('hide');
                        swal({
                            title: "Alert",
                            text: "We can not connect with the server",
                            type: "error",
                            showCancelButton: false,
                            confirmButtonText: 'Exit',
                            closeOnConfirm: true
                        });
                    }
                });
            }
            else
            {
                let error = [];

                if($('#id_hid_validate_date_balance').val() == 1)
                {
                    error['id_date_payment_balance'] = 'This Payment Date has incorrect format';
                }
                
                $.fn.set_error_msg_array(error);    
                $("#id_btn_add_balance").removeClass('btn-loading');
                $("#global-loader").fadeOut("slow");
            }
        });
    }

    if($('#id_form_late_fee').length)
    {
        $("#id_date_late_fee").mask("00/00/0000");
        $('#id_btn_date_today_late_fee').on('click', function ()
        {   
            $("#id_date_late_fee").val(moment().format('MM/DD/YYYY'));
            $("#id_date_late_fee").focus();
        });

        $('#id_date_late_fee').blur(function()
        {
            if($('#id_date_late_fee').val().trim() != '')
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'checkdbirthCust',
                    data:{txt_bday_cus:$('#id_date_late_fee').val()},
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {   
                        let error = [];
                        if(!data.res)
                        {
                            $('#hid_validate_date_late_fee').val(1);
                            error['id_date_late_fee'] = 'This Late Fee Date has incorrect format';
                            $.fn.set_error_msg_array(error);
                        }
                        else
                        {
                            $('#hid_validate_date_late_fee').val(0);
                            $('#id_div_msg_error_date_late_fee').html('');
                            $('#id_date_late_fee').removeClass('border').removeClass('border-danger');
                        }
                    }
                });
            }
        });

        $('#id_btn_add_late_fee').on('click',function()
        {
            $("#id_btn_add_late_fee").addClass('btn-loading');
            $("#global-loader").fadeIn("fast");

            if(!$('#id_form_late_fee').cvalidateForm() && $('#id_hid_validate_date_late_fee').val() != 1)
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'payments',
                    data:$("#id_form_late_fee").serialize(),
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {
                        if(data.res)
                        {
                            $('#id_modal_late_fee').modal('hide');
                            swal({
                                title: "Congratulations!",
                                text: "Your information has been succesfully saved",
                                type: "success",
                                showCancelButton: false,
                                confirmButtonClass: "btn-success",
                                confirmButtonText: "Ok",
                                closeOnConfirm: true
                            });
                            $('#id_txt_balance_now_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.balance));
                            table_loan_summary.ajax.reload();
                            if(data.bandera_balance)
                            {
                                $('#id_btn_new_payment_tab_loan').prop('disabled',true);                      
                                $('#id_btn_new_feelate_tab_loan').prop('disabled',true);                      
                                $('#id_btn_pay_balance_tab_loan').prop('disabled',true); 
                            }
                        }
                        else
                        {
                            $('#id_modal_late_fee').modal('hide');
                            swal({
                                title: "Alert",
                                text: "We can not save your information, Try later!!",
                                type: "warning",
                                showCancelButton: false,
                                confirmButtonClass: "btn-success",
                                confirmButtonText: "Exit",
                                closeOnConfirm: true
                            });
                        }
                        $("#id_btn_add_late_fee").removeClass('btn-loading');
                        $("#global-loader").fadeOut("slow");
                    },
                    error : function(data)
                    {
                        $("#id_btn_add_late_fee").removeClass('btn-loading');
                        $("#global-loader").fadeOut("slow");
                        $('#id_modal_late_fee').modal('hide');
                        swal({
                            title: "Alert",
                            text: "We can not connect with the server",
                            type: "error",
                            showCancelButton: false,
                            confirmButtonText: 'Exit',
                            closeOnConfirm: true
                        });
                    }
                });
            }
            else
            {
                let error = [];
                if($('#id_hid_validate_date_late_fee').val() == 1)
                {
                    error['id_date_late_fee'] = 'This Late Fee Date has incorrect format';
                }
                $.fn.set_error_msg_array(error);    
                $("#id_btn_add_late_fee").removeClass('btn-loading');
                $("#global-loader").fadeOut("slow");
            }
        });        
    }

    if($('#id_form_delete_late_fee').length)
    {
        $('#id_btn_delete_late_fee').on('click',function()
        {
            $("#id_btn_delete_late_fee").addClass('btn-loading');
            $("#global-loader").fadeIn("fast");

            if(!$('#id_form_delete_late_fee').cvalidateForm())
            {
                $.ajax
                ({ 
                    type: "PUT",
                    url: endpoint_general+'payments/'+$('#id_hid_payment_id_delete_late_fee').val(),
                    data:$("#id_form_delete_late_fee").serialize(),
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {
                        if(data.res)
                        {
                            $('#id_modal_delete_late_fee').modal('hide');
                            swal({
                                title: "Congratulations!",
                                text: "Your information has been succesfully saved",
                                type: "success",
                                showCancelButton: false,
                                confirmButtonClass: "btn-success",
                                confirmButtonText: "Ok",
                                closeOnConfirm: true
                            });
                            $('#id_txt_balance_now_tab_loan').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ ').display(data.balance));
                            table_loan_summary.ajax.reload();
                        }
                        else
                        {
                            $('#id_modal_delete_late_fee').modal('hide');
                            swal({
                                title: "Alert",
                                text: "We can not save your information, Try later!!",
                                type: "warning",
                                showCancelButton: false,
                                confirmButtonClass: "btn-success",
                                confirmButtonText: "Exit",
                                closeOnConfirm: true
                            });
                        }
                        $("#id_btn_delete_late_fee").removeClass('btn-loading');
                        $("#global-loader").fadeOut("slow");
                    },
                    error : function(data)
                    {
                        $("#id_btn_delete_late_fee").removeClass('btn-loading');
                        $("#global-loader").fadeOut("slow");
                        $('#id_modal_delete_late_fee').modal('hide');
                        swal({
                            title: "Alert",
                            text: "We can not connect with the server",
                            type: "error",
                            showCancelButton: false,
                            confirmButtonText: 'Exit',
                            closeOnConfirm: true
                        });
                    }
                });
            }
            else
            {
                $("#id_btn_delete_late_fee").removeClass('btn-loading');
                $("#global-loader").fadeOut("slow");
            }
        });        
    }


    $("#global-loader").fadeOut("slow");
});