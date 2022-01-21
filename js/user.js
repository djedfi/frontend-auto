$(document).ready(function()
{	
    $('#id_txt_fname_user').focus();

    if($('#id_slc_role_usr').length)
    {
        $('#id_slc_role_usr').select2({
            minimumResultsForSearch: '',
            width: '100%'
        });

        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'optiosapp',
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
                        $("#id_slc_role_usr").append('<option value="'+id+'">'+name+'</option>');
                    });
                }
            },
            complete : function()
            {
                $("#global-loader").fadeOut("slow");
            }
        });
    }
    
    $("#id_btn_sbm_user").click(function()
    {   
        
        $("#id_btn_sbm_user").addClass('btn-loading');
        $("#global-loader").fadeIn("fast");
        if(!$('#id_form_new_user').cvalidateForm() && $('#id_hid_validate_email').val() != 1)
        {
            $('#id_hid_options_usr').val($('#id_slc_role_usr').val());
            $.ajax
            ({ 
                type: "POST",
                url: endpoint_general+'register',
                data:$("#id_form_new_user").serialize(),
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    
                    $('#id_div_msg_error_newuser').html('');
                    $("#id_div_conteiner_error_newuser").removeClass('d-block').addClass('d-none');
                    $('#id_div_msg_error_newuser').removeClass('alert').removeClass('alert-danger').removeClass('alert-success');
                    
                    if(data.res)
                    {
                        swal({
                            title: "Congratulations!",
                            text: "Your information has been succesfully saved",
                            type: "success",
                            showCancelButton: true,
                            confirmButtonClass: "btn-success",
                            confirmButtonText: "Add User",
                            cancelButtonText:"Go to Directory",
                            closeOnConfirm: false
                        },
                        function(isConfirm)
                        {
                            if(isConfirm)
                            {
                            location.href = './?mod=user&hac=add';
                            }
                            else
                            {
                            location.href = './?mod=user&hac=list';
                            }
                        });
                    }
                    else
                    {
                        $("#id_btn_sbm_user").removeClass('btn-loading');
                        $("#id_div_conteiner_error_newuser").removeClass('d-none').addClass('d-block');
                        $('#id_div_msg_error_newuser').html('Error! Try to send the information later');
                    }
                    $("#global-loader").fadeOut("slow");
                }
            });
        }
        else
        {
            let error= [];
            if($('#id_hid_validate_email').val() == 1)
            {
                error['id_txt_email_user'] = 'This E-Mail has been previoulsy registered';
            }

            $.fn.set_error_msg_array(error);     
            $("#global-loader").fadeOut("slow");
            $("#id_btn_sbm_user").removeClass('btn-loading');
        }
       
    });

    $("#id_txt_email_user").blur(function() 
    {
        if($('#id_txt_email_user').val().trim() != '')
        {
            $.ajax
            ({ 
                type: "POST",
                url: endpoint_general+'checkemailUser/0',
                data:{txt_email_user:$('#id_txt_email_user').val()},
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {   
                    let error = [];
                    if(data.res)
                    {
                        $('#id_hid_validate_email').val(1);
                        error['id_txt_email_user'] = 'This E-mail has been previoulsy registered';
                        $.fn.set_error_msg_array(error);
                    }
                    else
                    {
                        $('#id_hid_validate_email').val(0);
                        $('#id_msg_error_id_txt_email_user').html('');
                        $('#id_txt_email_user').removeClass('border').removeClass('border-danger');
                    }
                }
            });
        }
    });

    if($('#id_table_users').length)
    {
        var table = $('#id_table_users').DataTable
        ({
            "ajax"      : 
            {
                "type"  : "GET",
                "url"   : endpoint_general+'users'
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
                    "data": "email" 
                },
                { 
                    "data": "cargo" 
                }
            ],
            "order"     : 
            [
                [1, "asc"]
            ],
            columnDefs: 
            [
                { 
                    orderable: false, targets: [0,5],
                    visible:false, targets: [0]
                },
                {
                    'targets': 5,
                    'data': null,
                    'defaultContent': '<center><button type="button" class="btn btn-icon btn-primary btn-sm"><i class="fe fe-edit"></i></button></center>'
                }
            ],
            language: {
                searchPlaceholder: 'Search...',
                sSearch: '',
            }
        });     
        
        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity
        });

        $('#id_table_users tbody').on( 'click', 'button', function () 
        {
            var data = table.row( $(this).parents('tr') ).data();
            console.log(data);
            location.href = './?mod=user&hac=update&user='+data.id;
        });

        $('#id_btn_new_user').on('click', function()
        {
            location.href = './?mod=user&hac=add';
        });
    }

    if($('#id_form_update_user').length)
    {
        $('#id_slc_role_update_usr').select2({
            minimumResultsForSearch: '',
            width: '100%'
        });

        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'optiosapp',
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
                        $("#id_slc_role_update_usr").append('<option value="'+id+'">'+name+'</option>');
                    });
                }
            },
            complete : function()
            {
                $("#global-loader").fadeOut("slow");
            }
        });    
        
        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'users/'+$('#id_hid_id_user_update').val(),
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {
                if(data.res)
                {
                    if(data.datos.id == $('#id_hid_id_user_update').val())
                    {
                        $('#id_hid_id_user_update').val(data.datos.id);
                        $('#id_txt_fname_update_user').val(data.datos.first_name);
                        $('#id_txt_lname_update_user').val(data.datos.last_name);
                        $('#id_txt_email_update_user').val(data.datos.email);
                        $('#id_txt_position_update_user').val(data.datos.cargo);
                        $('#id_title_user_update').html('Information about: '+data.datos.first_name+' '+data.datos.last_name);
                        
                        let array_opciones = [];
                        data.datos.user_options.forEach(element => {
                            array_opciones.push(element.id)
                        });
                        //console.log(array_opciones);

                        $('#id_slc_role_update_usr').val(array_opciones);
                        $('#id_slc_role_update_usr').trigger('change');
                    }
                    else
                    {
                        location.href = './?mod=user&hac=list';
                    }
                }
            },
            complete : function()
            {
                $("#global-loader").fadeOut("slow");
            }
        });    

        $("#id_txt_email_update_user").blur(function() 
        {
            if($('#id_txt_email_update_user').val().trim() != '')
            {
                $.ajax
                ({ 
                    type: "POST",
                    url: endpoint_general+'checkemailUser/'+$('#id_hid_id_user_update').val(),
                    data:{txt_email_user:$('#id_txt_email_update_user').val()},
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {   
                        let error = [];
                        if(data.res)
                        {
                            $('#id_hid_validate_email_update').val(1);
                            error['id_txt_email_update_user'] = 'This E-mail has been previoulsy registered';
                            $.fn.set_error_msg_array(error);
                        }
                        else
                        {
                            $('#id_hid_validate_email_update').val(0);
                            $('#id_msg_error_id_txt_email_update_user').html('');
                            $('#id_txt_email_update_user').removeClass('border').removeClass('border-danger');
                        }
                    }
                });
            }
        });
        
        $("#id_btn_sbm_update_user").click(function()
        {   
            $("#id_btn_sbm_update_user").addClass('btn-loading');
            $("#global-loader").fadeIn("fast");
            $('#id_div_msg_error_updateuser').html('');
            $("#id_div_conteiner_error_updateuser").removeClass('d-block').addClass('d-none');
            $('#id_div_msg_error_updateuser').removeClass('alert').removeClass('alert-danger').removeClass('alert-success');

            if(!$('#id_form_update_user').cvalidateForm() && $('#id_hid_validate_email_update').val() != 1)
            {
                $('#id_hid_options_update_usr').val($('#id_slc_role_update_usr').val());
                $.ajax
                ({ 
                    type: "PUT",
                    url: endpoint_general+'users/'+$('#id_hid_id_user_update').val(),
                    data:$("#id_form_update_user").serialize(),
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {
                        if(data.res)
                        {
                            $("#id_btn_sbm_update_user").removeClass('btn-loading');
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
                                    location.href = './?mod=user&hac=list';
                                }
                            });
                            
                        }
                        else
                        {
                            $("#id_btn_sbm_update_user").removeClass('btn-loading');
                            $("#id_div_conteiner_error_updateuser").removeClass('d-none').addClass('d-block');
                            $('#id_div_msg_error_updateuser').html('Error! Try to send the information later');
                        }
                        $("#global-loader").fadeOut("slow");
                    },
                    error : function(data)
                    {
                        $("#id_btn_sbm_update_user").removeClass('btn-loading');
                        $("#global-loader").fadeOut("slow");

                        swal({
                            title: "Alert",
                            text: "We can not connect with the server",
                            type: "error",
                            showCancelButton: true,
                            confirmButtonText: 'Exit',
                            cancelButtonText: 'Stay on the page'
                        },
                        function(isConfirm)
                        {
                            if(isConfirm)
                            {
                                location.href = './?mod=logout';
                            }
                            else
                            {
                                return false;
                            }
                            
                        });
                    }
                });
            }
            else
            {
                let error= [];
                if($('#id_hid_validate_email_update').val() == 1)
                {
                    error['id_txt_email_update_user'] = 'This E-Mail has been previoulsy registered';
                }
    
                $.fn.set_error_msg_array(error);     
                $("#global-loader").fadeOut("slow");
                $("#id_btn_sbm_update_user").removeClass('btn-loading');
            }
           
        });
    }
});
