$(document).ready(function()
{	
    $('#id_txt_name_mk').focus();

    $("#id_btn_sbm_make").click(function()
    {   
        $("#id_btn_sbm_make").addClass('btn-loading');
        $("#global-loader").fadeIn("fast");
        if(!$('#id_form_new_make').cvalidateForm())
        {
            $.ajax
            ({ 
                type: "POST",
                url: endpoint_general+'makes',
                data:$("#id_form_new_make").serialize(),
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    
                    $('#id_div_msg_error_newmake').html('');
                    $("#id_div_conteiner_error_newmake").removeClass('d-block').addClass('d-none');
                    $('#id_div_msg_error_newmake').removeClass('alert').removeClass('alert-danger').removeClass('alert-success');
                    
                    if(data.res)
                    {
                        swal({
                            title: "Congratulations!",
                            text: "Your information has been succesfully saved",
                            type: "success",
                            showCancelButton: true,
                            confirmButtonClass: "btn-success",
                            confirmButtonText: "Add Make",
                            cancelButtonText:"Go to Directory",
                            closeOnConfirm: false
                          },
                          function(isConfirm)
                          {
                              if(isConfirm)
                              {
                                location.href = './?mod=make&hac=add';
                              }
                              else
                              {
                                location.href = './?mod=make&hac=list';
                              }
                          });
                    }
                    else
                    {
                        $("#id_btn_sbm_make").removeClass('btn-loading');
                        $("#id_div_conteiner_error_newmake").removeClass('d-none').addClass('d-block');
                        $('#id_div_msg_error_newmake').html('Check the information and try again.');
                    }
                    $("#global-loader").fadeOut("slow");
                }
            });
        }
        else
        {
            $("#global-loader").fadeOut("slow");
            $("#id_btn_sbm_make").removeClass('btn-loading');
        }
    });

    if($('#id_table_makes').length) 
    {
        var table = $('#id_table_makes').DataTable
        ({
            "ajax"      : 
            {
                "type"  : "GET",
                "url"   : endpoint_general+'makes'
            },
            "dataSrc"   : "data",
            columns     : 
            [
                {   
                    "data": "id" 
                },
                { 
                    "data": "name" 
                },
                {   
                    "data": "website",
                    render: function(data,type)
                    {
                        return '<a href="'+data+'" target="_blank">'+data+'</a>';
                    }
                },
                {   
                    "data": "bandera_modelo",
                    render: function(data,type)
                    {
                        var data_opciones;
                        if(data)
                        {
                            data_opciones = '<center><button type="button" data-bs-toggle="modal" data-bs-target="#modal_make_update" class="btn btn-icon btn-primary btn-sm"><i class="fe fe-edit"></i></button></center>'
                        }
                        else
                        {
                            data_opciones = '<center><button type="button" data-bs-toggle="modal" data-bs-target="#modal_make_update" class="btn btn-icon btn-primary btn-sm"><i class="fe fe-edit"></i></button>&nbsp;<button type="button" id="delete_make" class="btn btn-icon btn-danger btn-sm" title="Delete this Make"><i class="fa fa-trash"></i></button></center>'
                        }

                        return data_opciones;
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
                    orderable: false, targets: [2,3],
                    visible:false, targets: [0]
                }
            ],
            language: {
                searchPlaceholder: 'Search...',
                sSearch: '',
            }
        });

        $('#id_table_makes tbody').on( 'click', 'button', function () 
        {
            $("#id_div_conteiner_error_updmake").removeClass('d-block').removeClass('alert-danger').removeClass('alert-success').addClass('d-none');
            $('#id_div_msg_error_updmake').html('');

            $("#global-loader").fadeIn("fast");
            var data = table.row( $(this).parents('tr') ).data();
            $.ajax
            ({ 
                type: "GET",
                url: endpoint_general+'makes/'+data.id,
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    if(data.res)
                    {
                        
                        if(data.datos.website != '')
                        {
                            let url_temp = data.datos.website.split('https://');
                            $('#id_txt_url_mk').val(url_temp[1].trim());
                        }
                        else
                        {
                            $('#id_txt_url_mk').val('');
                        }
                        
                        $('#id_hid_id_mk').val(data.datos.id);
                        $('#id_txt_name_mk').val(data.datos.name);
                        
                    }
                    else
                    {
                        $("#id_div_conteiner_error_updmake").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                        $('#id_div_msg_error_updmake').html('Error! Try to load the information later.');
                        $('#id_icon_up_mk').html('<i class="fe fe-alert-circle"></i>');
                    }
                },
                complete : function()
                {
                    $("#global-loader").fadeOut("slow");
                },
                error    : function()
                {
                    $("#id_div_conteiner_error_updmake").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                    $('#id_div_msg_error_updmake').html('Error! Try to load the information later.');
                    $('#id_icon_up_mk').html('<i class="fe fe-alert-circle"></i>');
                }
            });

        });

        $('#id_table_makes tbody').on( 'click', 'button#delete_make', function () 
        {
            var data = table.row( $(this).parents('tr') ).data();
            swal({
                title: "Delete Make?",
                text: "Are you sure to delete this Make?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: "Yes, I am sure",
                cancelButtonText:"No, cancel it!",
            },function(isConfirm) 
            {
                if (isConfirm) 
                {
                    $.ajax
                    ({ 
                        type: "DELETE",
                        url: endpoint_general+'makes/'+data.id,
                        dataType: "json",
                        crossDomain: true,
                        xhrFields: { withCredentials: true },
                        success: function (data, status, jqXHR) 
                        {
                            if(data.res)
                            {
                                swal({
                                    title: "Congratulations!",
                                    text: "We have deleted the Make",
                                    type: "success",
                                    showCancelButton: false,
                                    confirmButtonClass: "btn-success",
                                    confirmButtonText: "Ok",
                                    closeOnConfirm: true
                                });
                                table.ajax.reload();
                            }
                            else
                            {
                                swal({
                                    title: "Warning",
                                    text: "This Make is not available to delete",
                                    type: "warning",
                                    showCancelButton: false,
                                    confirmButtonClass: "btn-success",
                                    confirmButtonText: "Exit",
                                    closeOnConfirm: true
                                });
                            }
                        }
                    });
                }
                else
                {
                    $("#global-loader").fadeOut("slow");
                    return false;
                }
            });
        });
        
        
        // Select2
        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity
        });


        $("#id_btn_update_mk").click(function()
        {   
            $('#id_div_msg_error_updmake').html('');
            $("#id_div_conteiner_error_updmake").removeClass('d-block').addClass('d-none').removeClass('alert-danger').removeClass('alert-success');

            $("#id_btn_update_mk").addClass('btn-loading');
            $("#global-loader").fadeIn("fast");
            if(!$('#id_form_upd_make').cvalidateForm())
            {
                $.ajax
                ({ 
                    type: "PUT",
                    url: endpoint_general+'makes/'+$('#id_hid_id_mk').val(),
                    data:$("#id_form_upd_make").serialize(),
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {
                        if(data.res)
                        {
                            $("#id_btn_update_mk").removeClass('btn-loading');
                            $("#id_div_conteiner_error_updmake").removeClass('d-none').removeClass('alert-danger').addClass('d-block').addClass('alert-success');
                            $('#id_div_msg_error_updmake').html('Success! Your information has been succesfully saved');
                            $('#id_icon_up_mk').html('<i class="fe fe-check"></i>');
                            table.ajax.reload();
                        }
                        else
                        {
                            $("#id_btn_update_mk").removeClass('btn-loading');
                            $("#id_div_conteiner_error_updmake").removeClass('d-none').removeClass('alert-success').addClass('d-block').addClass('alert-danger');
                            $('#id_div_msg_error_updmake').html('Error! Try to save your information later');
                            $('#id_icon_up_mk').html('<i class="fe fe-alert-circle"></i>');
                        }
                        $("#global-loader").fadeOut("slow");
                    },
                    error : function(data)
                    {
                        $("#id_btn_update_mk").removeClass('btn-loading');
                        $("#id_div_conteiner_error_updmake").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                        $('#id_div_msg_error_updmake').html('Error! Try to save your information later');
                        $('#id_icon_up_mk').html('<i class="fe fe-alert-circle"></i>');
                    }
                });
            }
            else
            {
                $("#global-loader").fadeOut("slow");
                $("#id_btn_update_mk").removeClass('btn-loading');
            }
        });

        $('#id_btn_new_make').click(function(){
            location.href = './?mod=make&hac=add';
        });
    }
});