$(document).ready(function()
{	
    "use strict";

    $("#global-loader").fadeIn("fast");

    if($('#id_wizard_customer').length)
    {
        $('#id_wizard_customer').steps
        ({
            headerTag       : 'h3',
            bodyTag         : 'section',
            autoFocus       : true,
            titleTemplate   : '<span class="number">#index#<\/span> <span class="title">#title#<\/span>',
            labels          : {finish: '<i class="fa fa-save"></i> Submit'},
            onStepChanging  : function(event, currentIndex, newIndex) 
            {
                if (currentIndex < newIndex) 
                {
                    // Step 1 form validation
                    if (currentIndex === 0) 
                    {
                        $("#global-loader").fadeIn("fast");
                        
                        if(!$('#id_form_primary_info').cvalidateForm() && ($('#id_hid_validate_driverl').val() != 1 &&  $('#id_hid_validate_email').val() != 1 && $('#id_hid_validate_bday').val() != 1))
                        {
                            $("#global-loader").fadeOut("slow");
                            return true;
                        }
                        else
                        {
                            let error = [];
                            if($('#id_hid_validate_driverl').val() == 1)
                            {
                                error['id_txt_dlicense_cus'] = 'This Drives License has been previoulsy registered';
                            }

                            if($('#id_hid_validate_email').val() == 1)
                            {
                                error['id_txt_email_cus'] = 'This E-Mail has been previoulsy registered';
                            }

                            if($('#id_hid_validate_bday').val() == 1)
                            {
                                error['id_txt_bday_cus'] = 'This Birthday is incorrect format';
                            }

                            $.fn.set_error_msg_array(error);                                
                            $("#global-loader").fadeOut("slow");
                            return false;
                        }                        
                    }
                    
                } 
                else 
                {
                    return true;
                }
            },
            onFinishing     : function(event, currentIndex, newIndex)
            {
                $("#global-loader").fadeIn("fast");
                
                if(!$('#id_form_housing_info').cvalidateForm())
                {
                    var dataString = $("#id_form_primary_info, #id_form_housing_info").serialize();

                    $.ajax
                    ({ 
                        type: "POST",
                        url: endpoint_general+'customers',
                        data:dataString,
                        dataType: "json",
                        crossDomain: true,
                        xhrFields: { withCredentials: true },
                        success: function (data, status, jqXHR) 
                        {
                            $('#id_div_msg_error_newcus').html('');
                            $("#id_div_conteiner_error_newcus").removeClass('d-block').addClass('d-none');
                            $('#id_div_msg_error_newcus').removeClass('alert').removeClass('alert-danger').removeClass('alert-success');
                            
                            if(data.res)
                            {
                                swal({
                                    title: "Congratulations!",
                                    text: "Your information has been succesfully saved",
                                    type: "success",
                                    showCancelButton: true,
                                    confirmButtonClass: "btn-success",
                                    confirmButtonText: "Add Customer",
                                    cancelButtonText:"Go to Directory",
                                    closeOnConfirm: false
                                },
                                function(isConfirm)
                                {
                                    if(isConfirm)
                                    {
                                        location.href = './?mod=customer&hac=add';
                                    }
                                    else
                                    {
                                        location.href = './?mod=customer&hac=list';
                                    }
                                });
                                
                            }
                            else
                            {

                                $("#id_div_conteiner_error_newcus").removeClass('d-none').addClass('d-block');
                                $('#id_div_msg_error_newcus').html('Error: Check the information.');
                            }
                        },
                        complete : function()
                        {
                            $("#global-loader").fadeOut("slow");
                        }
                    });
                }
                else
                {
                    $("#global-loader").fadeOut("slow");
                    return false;
                }
            }
        });

        $('#id_slc_statelic_cus').select2({
            minimumResultsForSearch: '',
            width: '100%'
        });
    
        $('#id_slc_state_cus').select2({
            minimumResultsForSearch: '',
            width: '100%'
        });
    
        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'states',
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {
                if(data.res)
                {
                    data.data.forEach(element => {
                        let id = element.id;
                        let name = element.name;
                        $("#id_slc_statelic_cus").append('<option value="'+name+'">'+name+'</option>');
                        $("#id_slc_state_cus").append('<option value="'+id+'">'+name+'</option>');
                    });
                }
            },
            complete: function(data)
            {
                $("#global-loader").fadeOut("slow");
            }
        });
    
        $("#id_txt_mobile_cus").mask("(000) 000-00000");
        $("#id_txt_bday_cus").mask("00/00/0000");
        $("#id_txt_resphone_cus").mask("(000) 000-0000");
        $("#id_txt_business_cus").mask("(000) 000-0000? Ext 000");
    
        $("#id_txt_email_cus").blur(function() 
        {
            if($('#id_txt_email_cus').val().trim() != '')
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'checkemailCust/0',
                    data:{txt_email_cus:$('#id_txt_email_cus').val()},
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {   
                        let error = [];
                        if(data.res)
                        {
                            $('#id_hid_validate_email').val(1);
                            error['id_txt_email_cus'] = 'This E-Mail has been previoulsy registered';
                            $.fn.set_error_msg_array(error);
                        }
                        else
                        {
                            $('#id_hid_validate_email').val(0);
                            $('#id_msg_error_id_txt_email_cus').html('');
                            $('#id_txt_email_cus').removeClass('border').removeClass('border-danger');
                        }
                    }
                });
            }
        });
    
        $("#id_txt_dlicense_cus").blur(function() 
        {
            if($('#id_txt_dlicense_cus').val().trim() != '')
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'checkdriverlCust/0',
                    data:{txt_dlicense_cus:$('#id_txt_dlicense_cus').val()},
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {   
                        let error = [];
                        if(data.res)
                        {
                            $('#id_hid_validate_driverl').val(1);
                            error['id_txt_dlicense_cus'] = 'This Drives License has been previoulsy registered';
                            $.fn.set_error_msg_array(error);
                        }
                        else
                        {
                            $('#id_hid_validate_driverl').val(0);
                            $('#id_msg_error_id_txt_dlicense_cus').html('');
                            $('#id_txt_dlicense_cus').removeClass('border').removeClass('border-danger');
                        }
                    }
                });
            }
        });
    
        $("#id_txt_bday_cus").blur(function() 
        {
            if($('#id_txt_bday_cus').val().trim() != '')
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'checkdbirthCust',
                    data:{txt_bday_cus:$('#id_txt_bday_cus').val()},
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {   
                        let error = [];
                        if(!data.res)
                        {
                            $('#id_hid_validate_bday').val(1);
                            error['id_txt_bday_cus'] = 'This Birthday has incorrect format';
                            $.fn.set_error_msg_array(error);
                        }
                        else
                        {
                            $('#id_hid_validate_bday').val(0);
                            $('#id_msg_error_id_txt_bday_cus').html('');
                            $('#id_txt_bday_cus').removeClass('border').removeClass('border-danger');
                        }
                    }
                });
            }
        });
    }

    if($('#id_table_customers').length)
    {
        var table = $('#id_table_customers').DataTable
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
                    "data": "first_name" 
                },
                { 
                    "data": "last_name" 
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
                        if(data == null || data == '')
                        {
                            return '<center><span class="text-warning fw-bold">NO INFO</span></center>';
                        }
                        else
                        {
                            return '<center><span><a href="mailto:'+data+'">'+data+'</span></center>';
                        }
                        
                    }
                },
                { 
                    "data": "birthday",
                    render: function(data, type) 
                    {
                        if(data == null || data == '')
                        {
                            return '<center><span class="text-warning fw-bold">NO INFO</span></center>';
                        }
                        else
                        {
                            let birthday = data.split('-');
                            return '<center><span>'+birthday[1]+'/'+birthday[2]+'/'+birthday[0]+'</span></center>';
                        }
                        
                    }
                },
                { 
                    "data": "licence",
                    render : function(data,type)
                    {
                        if(data == null || data == '')
                        {
                            return '<center><span class="text-warning fw-bold">NO INFO</span></center>';
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
                    orderable: false, targets: [0],
                    visible:false, targets: [0]
                },
                {
                    'targets': 7,
                    'data': null,
                    'defaultContent': '<center><button type="button" id="car_edit" class="btn btn-icon btn-primary btn-sm" title="Edit information"><i class="fe fe-edit"></i></button>&nbsp;<button type="button" id="car_sale" class="btn btn-icon btn-primary btn-sm" title="Add a Car Loan"><i class="fe fe-shopping-cart"></i></button></center>'
                }
            ],
            language: {
                searchPlaceholder: 'Search...',
                sSearch: ''
            }
        });  

        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity
        });

        $('#id_table_customers tbody').on( 'click', 'button#car_edit', function () 
        {
            var data = table.row( $(this).parents('tr') ).data();
            location.href = './?mod=customer&hac=update&customer='+data.id;
        });

        $('#id_table_customers tbody').on( 'click', 'button#car_sale', function () 
        {
            var data = table.row( $(this).parents('tr') ).data();
            location.href = './?mod=loan&hac=add&customer='+data.id;
        });




        $("#global-loader").fadeOut("slow");
        $('#id_btn_new_customer').click(function(){
            location.href = './?mod=customer&hac=add';
        });
    }

    if($('#id_div_customer_update').length)
    {
        $('#id_wizard_customer_update').steps
        ({
            headerTag       : 'h3',
            bodyTag         : 'section',
            autoFocus       : true,
            titleTemplate   : '<span class="number">#index#<\/span> <span class="title">#title#<\/span>',
            labels          : {finish: '<i class="fa fa-save"></i> Submit'},
            onStepChanging  : function(event, currentIndex, newIndex) 
            {
                if (currentIndex < newIndex) 
                {
                    // Step 1 form validation
                    if (currentIndex === 0) 
                    {
                        $("#global-loader").fadeIn("fast");
                        
                        if(!$('#id_form_primary_info_update').cvalidateForm() && ($('#id_hid_validate_driverl_upd').val() != 1 && $('#id_hid_validate_email_upd').val() != 1 && $('#id_hid_validate_bday_upd').val() != 1))
                        {
                            $("#global-loader").fadeOut("slow");
                            return true;
                        }
                        else
                        {
                            let error = [];
                            if($('#id_hid_validate_driverl_upd').val() == 1)
                            {
                                error['id_txt_dlicense_cus_upd'] = 'This Drives License has been previoulsy registered';
                            }

                            if($('#id_hid_validate_email_upd').val() == 1)
                            {
                                error['id_txt_email_cus_upd'] = 'This E-Mail has been previoulsy registered';
                            }

                            if($('#id_hid_validate_bday_upd').val() == 1)
                            {
                                error['id_txt_bday_cus_upd'] = 'This Birthday has incorrect format';
                            }

                            $.fn.set_error_msg_array(error);                                
                            $("#global-loader").fadeOut("slow");
                            return false;
                        }     
                    }
                    
                } 
                else 
                {
                    return true;
                }
            },
            onFinishing     : function(event, currentIndex, newIndex)
            {
                $("#global-loader").fadeIn("fast");
                
                if(!$('#id_form_housing_info_update').cvalidateForm())
                {
                    var dataString = $("#id_form_primary_info_update, #id_form_housing_info_update").serialize();
                    $('#id_div_msg_error_updcus').html('');
                    $("#id_div_conteiner_error_updcus").removeClass('d-block').addClass('d-none');
                    
                    $.ajax
                    ({ 
                        type: "PUT",
                        url: endpoint_general+'customers/'+$('#id_hid_id_customer_upd').val(),
                        data:dataString,
                        dataType: "json",
                        crossDomain: true,
                        xhrFields: { withCredentials: true },
                        success: function (data, status, jqXHR) 
                        {
                            if(data.res)
                            {
                                if($('#id_hid_id_loan').val() > 0)
                                {
                                    swal({
                                        title: "Congratulations!",
                                        text: "Your information has been succesfully updated",
                                        type: "success",
                                        showCancelButton: false,
                                        confirmButtonClass: "btn-success",
                                        confirmButtonText: "Go to Loan Information",
                                        closeOnConfirm: false
                                    },
                                    function()
                                    {
                                        location.href = './?mod=loan&hac=update&loan='+$('#id_hid_id_loan').val()+'&opc=3';
                                    });
                                }
                                else
                                {
                                    swal({
                                        title: "Congratulations!",
                                        text: "Your information has been succesfully updated",
                                        type: "success",
                                        showCancelButton: true,
                                        confirmButtonClass: "btn-success",
                                        confirmButtonText: "Stay on the page",
                                        cancelButtonText:"Go to Directory",
                                        closeOnConfirm: false
                                    },
                                    function(isConfirm)
                                    {
                                        if(isConfirm)
                                        {
                                            swal.close();
                                        }
                                        else
                                        {
                                            location.href = './?mod=customer&hac=list';
                                        }
                                    });
                                }
                                
                            }
                            else
                            {
                                $("#id_div_conteiner_error_updcus").removeClass('d-none').addClass('d-block');
                                $('#id_div_msg_error_updcus').html('Error: Check the information.');
                            }
                        },
                        complete : function()
                        {
                            $("#global-loader").fadeOut("slow");
                        }
                    });
                }
                else
                {
                    $("#global-loader").fadeOut("slow");
                    return false;
                }
            }
        });

        $('#id_slc_statelic_cus_upd').select2({
            minimumResultsForSearch: '',
            width: '100%'
        });
    
        $('#id_slc_state_cus_upd').select2({
            minimumResultsForSearch: '',
            width: '100%'
        });
    
        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'states',
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {
                if(data.res)
                {
                    data.data.forEach(element => {
                        let id = element.id;
                        let name = element.name;
                        $("#id_slc_statelic_cus_upd").append('<option value="'+name+'">'+name+'</option>');
                        $("#id_slc_state_cus_upd").append('<option value="'+id+'">'+name+'</option>');
                    });
                }
            },
            complete: function(data)
            {
                //$("#global-loader").fadeOut("slow");
            }
        });
    
  
    
        $("#id_txt_email_cus_upd").blur(function() 
        {
            if($('#id_txt_email_cus_upd').val().trim() != '')
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'checkemailCust/'+$('#id_hid_id_customer_upd').val(),
                    data:{txt_email_cus:$('#id_txt_email_cus_upd').val()},
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {   
                        let error = [];
                        if(data.res)
                        {
                            $('#id_hid_validate_email_upd').val(1);
                            error['id_txt_email_cus_upd'] = 'This E-Mail has been previoulsy registered';
                            $.fn.set_error_msg_array(error);
                        }
                        else
                        {
                            $('#id_hid_validate_email_upd').val(0);
                            $('#id_msg_error_id_txt_email_cus_upd').html('');
                            $('#id_txt_email_cus_upd').removeClass('border').removeClass('border-danger');
                        }
                    }
                });
            }
        });
    
        $("#id_txt_dlicense_cus_upd").blur(function() 
        {
            if($('#id_txt_dlicense_cus_upd').val().trim() != '')
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'checkdriverlCust/'+$('#id_hid_id_customer_upd').val(),
                    data:{txt_dlicense_cus:$('#id_txt_dlicense_cus_upd').val()},
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {   
                        let error = [];
                        if(data.res)
                        {
                            $('#id_hid_validate_driverl_upd').val(1);
                            error['id_txt_dlicense_cus_upd'] = 'This Drives License has been previoulsy registered';
                            $.fn.set_error_msg_array(error);
                        }
                        else
                        {
                            $('#id_hid_validate_driverl_upd').val(0);
                            $('#id_msg_error_id_txt_dlicense_cus_upd').html('');
                            $('#id_txt_dlicense_cus_upd').removeClass('border').removeClass('border-danger');
                        }
                    }
                });
            }
        });
    
        $("#id_txt_bday_cus_upd").blur(function() 
        {
            if($('#id_txt_bday_cus_upd').val().trim() != '')
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'checkdbirthCust',
                    data:{txt_bday_cus:$('#id_txt_bday_cus_upd').val()},
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {   
                        let error = [];
                        if(!data.res)
                        {
                            $('#id_hid_validate_bday_upd').val(1);
                            error['id_txt_bday_cus_upd'] = 'This Birthday has incorrect format';
                            $.fn.set_error_msg_array(error);
                        }
                        else
                        {
                            $('#id_hid_validate_bday_upd').val(0);
                            $('#id_msg_error_id_txt_bday_cus_upd').html('');
                            $('#id_txt_bday_cus_upd').removeClass('border').removeClass('border-danger');
                        }
                    }
                });
            }
        });

        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'customers/'+$('#id_hid_id_customer_upd').val(),
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {
                if(data.res)
                {
                    
                    if(data.datos.id == $('#id_hid_id_customer_upd').val())
                    {
                        //console.log(data.data[0])
                        $('#id_txt_fname_cus_upd').val(data.datos.first_name);
                        $('#id_txt_init_cus_upd').val(data.datos.initial);
                        $('#id_txt_lname_cus_upd').val(data.datos.last_name);
                        $("#id_txt_mobile_cus_upd").val(data.datos.cellphone);
                        $('#id_txt_email_cus_upd').val(data.datos.email);
                        $('#id_txt_dlicense_cus_upd').val(data.datos.licence);
                        $('#id_slc_statelic_cus_upd').val(data.datos.state_licence);
                        $('#id_slc_statelic_cus_upd').trigger('change');
                        if(data.datos.birthday != null)
                        {
                            let tmp_bday = data.datos.birthday.split('-');
                            $('#id_txt_bday_cus_upd').val(tmp_bday[1]+'/'+tmp_bday[2]+'/'+tmp_bday[0]);
                        }
                        
                        $('#id_slc_gender_cus_upd').val(data.datos.gender);
                        $('#id_slc_gender_cus_upd').trigger('change');

                        $('#id_txt_paddress_cus_upd').val(data.datos.address_p);
                        $('#id_txt_saddress_cus_upd').val(data.datos.address_s);
                        $('#id_txt_city_cus_upd').val(data.datos.city);
                        $('#id_slc_state_cus_upd').val(data.datos.state_id);
                        $('#id_slc_state_cus_upd').trigger('change');
                        $('#id_txt_zip_cus_upd').val(data.datos.zip);
                        $('#id_txt_resphone_cus_upd').val(data.datos.telephone_res);
                        $('#id_txt_business_cus_upd').val(data.datos.telephone_bus);

                        $("#id_txt_mobile_cus_upd").mask("(000) 000-0000");
                        $("#id_txt_bday_cus_upd").mask("00/00/0000");
                        $("#id_txt_resphone_cus_upd").mask("(000) 000-0000");
                        $("#id_txt_business_cus_upd").mask("(000) 000-0000? Ext 000");
                        setTimeout(
                            function() 
                            {
                            }, 1000);
                            $("#global-loader").fadeOut("slow");
                    }
                    else
                    {
                        location.href = './?mod=customer&hac=list';
                    }
                }
                else
                {
                    location.href = './?mod=customer&hac=list';
                }
            },
            complete : function()
            {
               
            }
        });

    }
});