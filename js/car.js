$(document).ready(function()
{	
    "use strict";

    $("#global-loader").fadeIn("fast");

    if($('#id_wizard_car').length)
    {
        $('#id_wizard_car').steps
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
                        
                        if(!$('#id_form_main').cvalidateForm() && ($('#id_hid_validate_vin').val() != 1 && $('#id_hid_validate_stk').val() != 1))
                        {
                            $("#global-loader").fadeOut("slow");
                            return true;
                        }
                        else
                        {
                            let error = [];
                            if($('#id_hid_validate_vin').val() == 1)
                            {
                                error['id_txt_vin_car'] = 'This VIN has been previoulsy registered';
                            }

                            if($('#id_hid_validate_stk').val() == 1)
                            {
                                error['id_txt_stcnumber_car'] = 'This Stock Number has been previoulsy registered';
                            }

                            $.fn.set_error_msg_array(error);                                
                            $("#global-loader").fadeOut("slow");
                            return false;
                        }

                        
                    }
                    // Step 2 form validation
                    if (currentIndex === 1) 
                    {
                        $("#global-loader").fadeIn("fast");
                        if(!$('#id_form_price').cvalidateForm())
                        {
                            $("#global-loader").fadeOut("slow");
                            return true;
                        }
                        else
                        {
                            $("#global-loader").fadeOut("slow");
                            return false;
                        }
                        
                    }
                    // Always allow step back to the previous step even if the current step is not valid.
                } 
                else 
                {
                    return true;
                }
            },
            onFinishing     : function(event, currentIndex, newIndex)
            {
                //$("#id_btn_sbm_trim").addClass('btn-loading');
                $("#global-loader").fadeIn("fast");
                
                if(!$('#id_form_otherinfo').cvalidateForm())
                {
                    var dataString = $("#id_form_main, #id_form_price, #id_form_otherinfo").serialize();

                    $.ajax
                    ({ 
                        type: "POST",
                        url: endpoint_general+'cars',
                        data:dataString,
                        dataType: "json",
                        crossDomain: true,
                        xhrFields: { withCredentials: true },
                        success: function (data, status, jqXHR) 
                        {
                            $('#id_div_msg_error_newcar').html('');
                            $("#id_div_conteiner_error_newcar").removeClass('d-block').addClass('d-none');
                            $('#id_div_msg_error_newcar').removeClass('alert').removeClass('alert-danger').removeClass('alert-success');
                            
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
                                    location.href = './?mod=car&hac=list';
                                  });
                                
                            }
                            else
                            {
                                //$("#id_btn_sbm_trim").removeClass('btn-loading');
                                $("#id_div_conteiner_error_newcar").removeClass('d-none').addClass('d-block');
                                $('#id_div_msg_error_newcar').html('Ingreso informacion incorrecta');
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

    $('#id_slc_make_car').select2({
        minimumResultsForSearch: '',
        width: '100%'
    });

    $('#id_slc_model_car').select2({
        minimumResultsForSearch: '',
        width: '100%'
    });

    $('#id_slc_trim_car').select2({
        minimumResultsForSearch: '',
        width: '100%'
    });

    $('#id_slc_model_car').select2("enable", false);
    $('#id_slc_trim_car').select2("enable", false);

    $.ajax
    ({ 
        type: "GET",
        url: endpoint_general+'makes',
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
                    $("#id_slc_make_car").append('<option value="'+id+'">'+name+'</option>');
                });
            }
        },
        complete : function()
        {
            
        }
    });

    $.ajax
    ({ 
        type: "GET",
        url: endpoint_general+'branches',
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
                    $("#id_slc_branch_car").append('<option value="'+id+'">'+name+'</option>');
                });
            }
        },
        complete : function()
        {
            
        }
    });


    $.ajax
    ({ 
        type: "GET",
        url: endpoint_general+'styles',
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
                    $("#id_slc_style_car").append('<option value="'+id+'">'+name+'</option>');
                });
            }
        },
        complete : function()
        {
            $("#global-loader").fadeOut("slow");
        }
    });

    $('#id_txt_color_car').spectrum({
        showPaletteOnly: true,
        showPalette: true,
        color: '#fff',
        palette: [
            ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
            ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
            ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
            ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
            ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
            ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
            ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
            ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
        ],
        change: function(color) 
        {
            $('#id_hid_color_car').val(color.toHexString());
            console.log(color.toHexString());
        }
    });
    $("#id_txt_price_car").maskMoney({prefix:'US$ ',thousands:',', decimal:'.'});
    $("#id_txt_mileage_car").maskMoney({thousands:',', decimal:'.',precision:0});

    $("#id_slc_make_car").change(function()
	{
        $("#global-loader").fadeIn("fast");
        $('#id_slc_model_car').select2("enable", false);

        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'modelosbmake/'+$(this).val(),
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {
                if(data.res)
                {
                    $('#id_slc_model_car').children('option:not(:first)').remove();
                    $('#id_slc_model_car').removeAttr('disabled');
                    data.datos.forEach(element => {
                        let id = element.id;
                        let name = element.name;
                        $("#id_slc_model_car").append('<option value="'+id+'">'+name+'</option>');
                    });
                }
                else
                {
                    $('#id_slc_model_car').select2("enable", false);
                }
            },
            complete : function()
            {
                $("#global-loader").fadeOut("slow");
            }
        });
    });

    $("#id_slc_model_car").change(function()
	{
        $("#global-loader").fadeIn("fast");
        $('#id_slc_trim_car').select2("enable", false);

        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'trimsbmodel/'+$(this).val(),
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {
                if(data.res)
                {
                    $('#id_slc_trim_car').children('option:not(:first)').remove();
                    $('#id_slc_trim_car').removeAttr('disabled');
                    data.datos.forEach(element => {
                        let id = element.id;
                        let name = element.name;
                        $("#id_slc_trim_car").append('<option value="'+id+'">'+name+'</option>');
                    });
                }
                else
                {
                    $('#id_slc_trim_car').select2("enable", false);
                }
            },
            complete : function()
            {
                $("#global-loader").fadeOut("slow");
            }
        });
    });

    $( "#id_txt_vin_car" ).blur(function() 
    {
        $.ajax
        ({ 
            type: "POST",
            url: endpoint_general+'checkvincar/0',
            data:{txt_vin_car:$('#id_txt_vin_car').val()},
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {   
                let error = [];
                if(data.res)
                {
                    $('#id_hid_validate_vin').val(1);
                    error['id_txt_vin_car'] = 'This VIN has been previoulsy registered';
                    $.fn.set_error_msg_array(error);
                }
                else
                {
                    $('#id_hid_validate_vin').val(0);
                    $('#id_msg_error_id_txt_vin_car').html('');
                    $('#id_txt_vin_car').removeClass('border').removeClass('border-danger');
                }
            }
        });
    });

    $( "#id_txt_stcnumber_car" ).blur(function() 
    {
        $.ajax
        ({ 
            type: "POST",
            url: endpoint_general+'checksnumbercar/0',
            data:{txt_stcnumber_car:$('#id_txt_stcnumber_car').val()},
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {   
                let error = [];
                if(data.res)
                {
                    $('#id_hid_validate_stk').val(1);
                    error['id_txt_stcnumber_car'] = 'This Stock Number has been previoulsy registered';
                    $.fn.set_error_msg_array(error);
                }
                else
                {
                    $('#id_hid_validate_stk').val(0);
                    $('#id_msg_error_id_txt_stcnumber_car').html('');
                    $('#id_txt_stcnumber_car').removeClass('border').removeClass('border-danger');
                }
            }
        });
    });
    
});