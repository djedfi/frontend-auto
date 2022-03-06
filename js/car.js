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
                                    showCancelButton: true,
                                    confirmButtonClass: "btn-success",
                                    confirmButtonText: "Add car",
                                    cancelButtonText:"Go to Directory",
                                    closeOnConfirm: false
                                },
                                function(isConfirm)
                                {
                                    if(isConfirm)
                                    {
                                        location.href = './?mod=car&hac=add';
                                    }
                                    else
                                    {
                                        location.href = './?mod=car&hac=list';
                                    }
                                });
                            }
                            else
                            {
                                $("#id_div_conteiner_error_newcar").removeClass('d-none').addClass('d-block');
                                $('#id_div_msg_error_newcar').html('Check the information and try again.');
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
                        $('#id_slc_model_car').removeAttr('disabled');
                        //$('#id_slc_model_car').select2("enable", false);
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
                        $('#id_slc_trim_car').removeAttr('disabled');
                        //$('#id_slc_trim_car').select2("enable", true);
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
    }

    if($('#id_table_cars').length)
    {
        $('#id_btn_new_car').on('click',function()
        {
            location.href = './?mod=car&hac=add';
        });

        var table = $('#id_table_cars').DataTable
        ({
            "ajax"      : 
            {
                "type"  : "GET",
                "url"   : endpoint_general+'getCarTable/0'
            },
            "dataSrc"   : "data",
            columns     : 
            [
                {   
                    "data": "id_car" 
                },
                { 
                    "data": "name_make" 
                },
                { 
                    "data": "name_modelo" 
                },
                { 
                    "data": "name_trim" 
                },
                { 
                    "data": "condition_car",
                    render: function(data, type) 
                    {
                        let lbl_condition;
                        switch(data)
                        {
                            case 1:
                                lbl_condition = 'Used';
                            break;
                            case 2:
                                lbl_condition = 'New';
                            break;
                            default:
                                lbl_condition = data;
                            break;
                        }
                        return '<center><span>'+lbl_condition+'</span></center>';
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
                    "data": "stock_number",
                    render: function(data, type) 
                    {
                       return '<center><span>'+data+'</span></center>';
                    } 
                },
                { 
                    "data": "precio",
                    render: function(data, type) 
                    {
                        var number = $.fn.dataTable.render.number( ',', '.', 2,'$'). display(data);
                        return '<center><span>'+number+'</span></center>';
                    }
                }
                ,
                { 
                    "data": "estado_car",
                    render: function(data, type) 
                    {
                        switch(data)
                        {
                            case 1:
                                return '<center><span class="badge rounded-pill bg-success badge-lg me-1 mb-1 mt-1">Active</span></center>';
                            break;
                            case 2:
                                return '<center><span class="badge rounded-pill bg-danger badge-lg me-1 mb-1 mt-1">Sold</span></center>'
                            break;
                            case 3:
                                return '<center><span class="badge rounded-pill bg-warning badge-lg me-1 mb-1 mt-1">Hold on</span></center>';
                            break;
                            case 4:
                                return '<center><span class="badge rounded-pill bg-default badge-lg me-1 mb-1 mt-1">Undefined</span></center>';
                            break;
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
                    'targets': 9,
                    'data': null,
                    'defaultContent': '<center><button type="button" id="car_edit" class="btn btn-icon btn-primary btn-sm" title="Edit information"><i class="fe fe-edit"></i></button>&nbsp;<button type="button" id="car_sale" class="btn btn-icon btn-primary btn-sm" title="Sell this Car"><i class="fe fe-shopping-cart"></i></button></center>'
                }
            ],
            language: {
                searchPlaceholder: 'Search...',
                sSearch: '',
                "decimal": ".",
                "thousands": ","
            }
        });  

        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity
        });

        $('#id_table_cars tbody').on( 'click', 'button#car_edit', function () 
        {
            var data = table.row( $(this).parents('tr') ).data();
            location.href = './?mod=car&hac=update&car='+data.id_car;
        });

        $('#id_table_cars tbody').on( 'click', 'button#car_sale', function () 
        {
            var data = table.row( $(this).parents('tr') ).data();
            
            if(data.estado_car == 1)
            {
                location.href = './?mod=loan&hac=add&car='+data.id_car;
            }
            else
            {
                swal({
                    title: "Alert",
                    text: "This car is not active to sell",
                    type: "warning",
                    showCancelButton: false,
                    confirmButtonClass: "btn-success",
                    confirmButtonText: "Exit",
                    closeOnConfirm: true
                });
            }
        });

        $("#global-loader").fadeOut("slow");
    }

    if($('#id_div_car_update').length)
    {
        $('#id_wizard_car_update').steps
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
                        if(!$('#id_form_main_update').cvalidateForm() && ($('#id_hid_validate_vin_upd').val() != 1 && $('#id_hid_validate_stk_upd').val() != 1))
                        {
                            $("#global-loader").fadeOut("slow");
                            return true;
                        }
                        else
                        {
                            let error = [];
                            if($('#id_hid_validate_vin_upd').val() == 1)
                            {
                                error['id_txt_vin_car_upd'] = 'This VIN has been previoulsy registered';
                            }

                            if($('#id_hid_validate_stk_upd').val() == 1)
                            {
                                error['id_txt_stcnumber_car_upd'] = 'This Stock Number has been previoulsy registered';
                            }

                            $.fn.set_error_msg_array(error);                                
                            $("#global-loader").fadeOut("slow");
                            return false;
                        }
                    }
                    if (currentIndex === 1)
                    {
                        $("#global-loader").fadeIn("fast");
                        if(!$('#id_form_price_update').cvalidateForm())
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
                }
                else
                {
                    return true;                 
                }
            },
            onFinishing     : function(event, currentIndex, newIndex)
            {
                $("#global-loader").fadeIn("fast");
                $('#id_div_msg_error_updcar').html('');
                $("#id_div_conteiner_error_updcar").removeClass('d-block').addClass('d-none');

                if(!$('#id_form_otherinfo_update').cvalidateForm())
                {
                    var dataString = $("#id_form_main_update, #id_form_price_update, #id_form_otherinfo_update").serialize();

                    $.ajax
                    ({ 
                        type: "PUT",
                        url: endpoint_general+'cars/'+$('#id_hid_id_car_update').val(),
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
                                        location.href = './?mod=loan&hac=update&loan='+$('#id_hid_id_loan').val()+'&opc=2';
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
                                            location.href = './?mod=car&hac=list';
                                        }
                                    });
                                }
                                
                            }
                            else
                            {
                                $("#id_div_conteiner_error_updcar").removeClass('d-none').addClass('d-block');
                                $('#id_div_msg_error_updcar').html('Error! Try to send the information later');
                                return false;
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

        $('#id_slc_make_car_upd').select2({
            minimumResultsForSearch: '',
            width: '100%'
        });

    


        $("#id_txt_price_car_upd").maskMoney({prefix:'US$ ',thousands:',', decimal:'.'});
        $("#id_txt_mileage_car_upd").maskMoney({thousands:',', decimal:'.',precision:0});

        $("#id_slc_make_car_upd").change(function()
        {
            $("#global-loader").fadeIn("fast");
            $('#id_slc_model_car_upd').prop('disabled', 'disabled');
            $('#id_slc_trim_car_upd').prop('disabled', 'disabled');
        
            $.ajax
            ({ 
                type: "GET",
                url: endpoint_general+'modelosbmake/'+$(this).val(),
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    $('#id_slc_trim_car_upd').children('option:not(:first)').remove();
                    $('#id_slc_model_car_upd').children('option:not(:first)').remove();
                    if(data.res)
                    {
                        $('#id_slc_model_car_upd').removeAttr('disabled');
                        data.datos.forEach(element => {
                            let id = element.id;
                            let name = element.name;
                            $("#id_slc_model_car_upd").append('<option value="'+id+'">'+name+'</option>');
                        });
                    }
                    else
                    {
                        $('#id_slc_model_car_upd').prop('disabled', 'disabled');
                        //$('#id_slc_model_car').select2("enable", false);
                    }
                },
                complete : function()
                {
                    $("#global-loader").fadeOut("slow");
                }
            });
        });
        
        $("#id_slc_model_car_upd").change(function()
        {
            $("#global-loader").fadeIn("fast");
            $('#id_slc_trim_car_upd').prop('disabled', 'disabled');
        
            $.ajax
            ({ 
                type: "GET",
                url: endpoint_general+'trimsbmodel/'+$(this).val(),
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    $('#id_slc_trim_car_upd').children('option:not(:first)').remove();
                    if(data.res)
                    {
                        $('#id_slc_trim_car_upd').removeAttr('disabled');
                        data.datos.forEach(element => {
                            let id = element.id;
                            let name = element.name;
                            $("#id_slc_trim_car_upd").append('<option value="'+id+'">'+name+'</option>');
                        });
                    }
                    else
                    {
                        $('#id_slc_trim_car_upd').prop('disabled', 'disabled');
                        //$('#id_slc_trim_car').select2("enable", true);
                    }
                },
                complete : function()
                {
                    $("#global-loader").fadeOut("slow");
                }
            });
        });


        $('#id_txt_color_car_upd').spectrum({
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
                $('#id_hid_color_car_upd').val(color.toHexString());
                console.log(color.toHexString());
            }
        });

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
                        $("#id_slc_make_car_upd").append('<option value="'+id+'">'+name+'</option>');
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
                        $("#id_slc_branch_car_upd").append('<option value="'+id+'">'+name+'</option>');
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
                        $("#id_slc_style_car_upd").append('<option value="'+id+'">'+name+'</option>');
                    });
                }
            }
        });

        $( "#id_txt_vin_car_upd" ).blur(function() 
        {
            $.ajax
            ({ 
                type: "POST",
                url: endpoint_general+'checkvincar/'+$('#id_hid_id_car_update').val(),
                data:{txt_vin_car:$('#id_txt_vin_car_upd').val()},
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {   
                    let error = [];
                    if(data.res)
                    {
                        $('#id_hid_validate_vin_upd').val(1);
                        error['id_txt_vin_car_upd'] = 'This VIN has been previoulsy registered';
                        $.fn.set_error_msg_array(error);
                    }
                    else
                    {
                        $('#id_hid_validate_vin_upd').val(0);
                        $('#id_msg_error_id_txt_vin_car_upd').html('');
                        $('#id_txt_vin_car_upd').removeClass('border').removeClass('border-danger');
                    }
                }
            });
        });
    
        $( "#id_txt_stcnumber_car_upd" ).blur(function() 
        {
            $.ajax
            ({ 
                type: "POST",
                url: endpoint_general+'checksnumbercar/'+$('#id_hid_id_car_update').val(),
                data:{txt_stcnumber_car:$('#id_txt_stcnumber_car_upd').val()},
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {   
                    let error = [];
                    if(data.res)
                    {
                        $('#id_hid_validate_stk_upd').val(1);
                        error['id_txt_stcnumber_car_upd'] = 'This Stock Number has been previoulsy registered';
                        $.fn.set_error_msg_array(error);
                    }
                    else
                    {
                        $('#id_hid_validate_stk_upd').val(0);
                        $('#id_msg_error_id_txt_stcnumber_car_upd').html('');
                        $('#id_txt_stcnumber_car_upd').removeClass('border').removeClass('border-danger');
                    }
                }
            });
        }); 

        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'getFullCar/'+$('#id_hid_id_car_update').val(),
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {
                if(data.res)
                {
                    if(data.data[0].id_car == $('#id_hid_id_car_update').val())
                    {
                        //console.log(data.data[0])
                        $('#id_txt_year_car_upd').val(data.data[0].year);
                        $('#id_txt_vin_car_upd').val(data.data[0].vin);
                        $('#id_txt_stcnumber_car_upd').val(data.data[0].stock_number);
                        $('#id_txt_ndoors_car_upd').val(data.data[0].doors);
                        $('#id_slc_make_car_upd').val(data.data[0].id_make);
                        $('#id_slc_make_car_upd').trigger('change');
                        $('#id_txt_price_car_upd').val($.fn.dataTable.render.number( ',', '.', 2, 'US$ '). display(data.data[0].precio));
                        $('#id_slc_branch_car_upd').val(data.data[0].branch_id);
                        $('#id_slc_style_car_upd').val(data.data[0].style_id);
                        $('#id_slc_transmi_car_upd').val(data.data[0].transmission);
                        $('#id_slc_condicion_car_upd').val(data.data[0].condition_car);
                        $('#id_slc_fueltype_car_upd').val(data.data[0].fuel_type);
                        $('#id_txt_mileage_car_upd').val($.fn.dataTable.render.number( ',', '.', 0, ''). display(data.data[0].mileage));
                        $("#id_txt_color_car_upd").spectrum("set", data.data[0].color);
                        $('#id_hid_color_car_upd').val(data.data[0].color);

                        $("#id_txt_engineinfo_car_upd").val(data.data[0].engine);
                        $("#id_txt_drivetrain_car_upd").val(data.data[0].drivetrain);
                        $("#id_txt_fuelecono_car_upd").val(data.data[0].fuel_economy);
                        $("#id_txt_wheelsize_car_upd").val(data.data[0].wheel_size);

                        let url_temp = data.data[0].url_info.split('https://');
                        $("#id_txt_url_car_upd").val(url_temp[1]);
                        var modelo_temp = data.data[0].id_modelo;
                        $.ajax
                        ({ 
                            type: "GET",
                            url: endpoint_general+'modelosbmake/'+data.data[0].id_make,
                            dataType: "json",
                            crossDomain: true,
                            xhrFields: { withCredentials: true },
                            success: function (data, status, jqXHR) 
                            {
                                if(data.res)
                                {
                                    $('#id_slc_model_car_upd').children('option:not(:first)').remove();
                                    $('#id_slc_model_car_upd').removeAttr('disabled');
                                    data.datos.forEach(element => {
                                        let id = element.id;
                                        let name = element.name;
                                        if(id == modelo_temp)
                                        {
                                            $("#id_slc_model_car_upd").append('<option value="'+id+'" selected>'+name+'</option>');
                                        }
                                        else
                                        {
                                            $("#id_slc_model_car_upd").append('<option value="'+id+'">'+name+'</option>');
                                        }
                                        
                                    });
                                }
                                else
                                {
                                   // $('#id_slc_model_car_upd').select2("enable", false);
                                }
                            }
                        });
                        
                        var trim_temp = data.data[0].id_trim;
                        $.ajax
                        ({ 
                            type: "GET",
                            url: endpoint_general+'trimsbmodel/'+data.data[0].id_modelo,
                            dataType: "json",
                            crossDomain: true,
                            xhrFields: { withCredentials: true },
                            success: function (data, status, jqXHR) 
                            {
                                if(data.res)
                                {
                                    $('#id_slc_trim_car_upd').children('option:not(:first)').remove();
                                    $('#id_slc_trim_car_upd').removeAttr('disabled');
                                    data.datos.forEach(element => {
                                        let id = element.id;
                                        let name = element.name;
                                        if(id == trim_temp)
                                        {
                                            $("#id_slc_trim_car_upd").append('<option value="'+id+'" selected>'+name+'</option>');
                                        }
                                        else
                                        {
                                            $("#id_slc_trim_car_upd").append('<option value="'+id+'">'+name+'</option>');
                                        }
                                        
                                    });
                                }
                                else
                                {
                                    //$('#id_slc_trim_car_upd').select2("enable", false);
                                }
                            },
                            
                        });    
                        //
                        $('#id_slc_model_car_upd').val(data.data[0].id_modelo);
                        $('#id_slc_trim_car_upd').val(data.data[0].id_trim);
                        // $('#id_slc_model_car_upd').trigger('change.select2');
                        // $('#id_slc_trim_car_upd').trigger('change.select2');
                        // alert('We have loaded your information!');
                       
                        
                    }
                    else
                    {
                        location.href = './?mod=car&hac=list';
                    }
                }
                else
                {
                    location.href = './?mod=car&hac=list';
                }
            },
            complete : function()
            {
                
                
                $("#global-loader").fadeOut("slow");
            }
        });
    }
    
});