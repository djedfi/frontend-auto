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
                        
                        if(!$('#id_form_primary_info').cvalidateForm() && ($('#id_hid_validate_driverl').val() != 1 && $('#id_hid_validate_ssn').val() != 1 && $('#id_hid_validate_email').val() != 1 && $('#id_hid_validate_bday').val() != 1))
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

                            if($('#id_hid_validate_ssn').val() == 1)
                            {
                                error['id_txt_ssn_cus'] = 'This SSN has been previoulsy registered';
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
                                    showCancelButton: false,
                                    confirmButtonClass: "btn-danger",
                                    confirmButtonText: "Ok",
                                    closeOnConfirm: false
                                  },
                                  function(){
                                    location.href = './?mod=customer&hac=list';
                                  });
                                
                            }
                            else
                            {
                                $("#id_div_conteiner_error_newcus").removeClass('d-none').addClass('d-block');
                                $('#id_div_msg_error_newcus').html('Ingreso informacion incorrecta');
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
    }

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
                    let name = element.name;
                    $("#id_slc_statelic_cus").append('<option value="'+name+'">'+name+'</option>');
                });
            }
        }
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
                    $("#id_slc_state_cus").append('<option value="'+id+'">'+name+'</option>');
                });
            }
        },
        complete: function(data)
        {
            $("#global-loader").fadeOut("slow");
        }
    });

    $("#id_txt_mobile_cus").mask("(999) 999-9999");
    $("#id_txt_bday_cus").mask("99/99/9999");
    $("#id_txt_ssn_cus").mask("999-99-9999");
    $("#id_txt_resphone_cus").mask("(999) 999-9999");
    $("#id_txt_business_cus").mask("(999) 999-9999? Ext 999");

    $( "#id_txt_ssn_cus" ).blur(function() 
    {
        if($('#id_txt_ssn_cus').val().trim() != '')
        {
            $.ajax
            ({ 
                type: "POST",
                url: endpoint_general+'checkssnCust/0',
                data:{txt_ssn_cus:$('#id_txt_ssn_cus').val()},
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {   
                    let error = [];
                    if(data.res)
                    {
                        $('#id_hid_validate_ssn').val(1);
                        error['id_txt_ssn_cus'] = 'This SSN has been previoulsy registered';
                        $.fn.set_error_msg_array(error);
                    }
                    else
                    {
                        $('#id_hid_validate_ssn').val(0);
                        $('#id_msg_error_id_txt_ssn_cus').html('');
                        $('#id_txt_ssn_cus').removeClass('border').removeClass('border-danger');
                    }
                }
            });
        }

    });

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
                        error['id_txt_bday_cus'] = 'This Birthday is incorrect format';
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
    

});