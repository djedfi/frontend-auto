$(document).ready(function()
{	

    if($('#id_slc_brand_md').length)
    {
        $("#global-loader").fadeIn("fast");
        $('#id_slc_brand_md').select2({
            minimumResultsForSearch: '',
            width: '100%'
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
                        $("#id_slc_brand_md").append('<option value="'+id+'">'+name+'</option>');
                    });
                }
            },
            complete : function()
            {
                $("#global-loader").fadeOut("slow");
            }
        });
    }

    $("#id_btn_sbm_model").click(function()
    {   
        
        $("#id_btn_sbm_model").addClass('btn-loading');
        $("#global-loader").fadeIn("fast");
        if(!$('#id_form_new_model').cvalidateForm())
        {
            $.ajax
            ({ 
                type: "POST",
                url: endpoint_general+'modelos',
                data:$("#id_form_new_model").serialize(),
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    
                    $('#id_div_msg_error_newmodel').html('');
                    $("#id_div_conteiner_error_newmodelo").removeClass('d-block').addClass('d-none');
                    $('#id_div_msg_error_newmodel').removeClass('alert').removeClass('alert-danger').removeClass('alert-success');
                    
                    if(data.res)
                    {
                        swal({
                            title: "Congratulations!",
                            text: "Your information has been succesfully saved",
                            type: "success",
                            showCancelButton: true,
                            confirmButtonClass: "btn-success",
                            confirmButtonText: "Add Model",
                            cancelButtonText:"Go to Directory",
                            closeOnConfirm: false
                          },
                          function(isConfirm)
                          {
                              if(isConfirm)
                              {
                                location.href = './?mod=model&hac=add';
                              }
                              else
                              {
                                location.href = './?mod=model&hac=list';
                              }
                          });
                        
                    }
                    else
                    {
                        $("#id_btn_sbm_model").removeClass('btn-loading');
                        $("#id_div_conteiner_error_newmodelo").removeClass('d-none').addClass('d-block');
                        $('#id_div_msg_error_newmodel').html('Check the information and try again.');
                    }
                    $("#global-loader").fadeOut("slow");
                }
            });
        }
        else
        {
            $("#global-loader").fadeOut("slow");
            $("#id_btn_sbm_model").removeClass('btn-loading');
        }

    });


    if($('#id_table_models').length) 
    {
        var groupColumn = 2;
        var table = $('#id_table_models').DataTable
        ({
            "ajax"      : 
            {
                "type"  : "GET",
                "url"   : endpoint_general+'modelos'
            },
            "dataSrc"   : "data",
            columns     : 
            [
                {   
                    "data": "id" 
                },
                { 
                    "data": "name_modelo" 
                },
                {   
                    "data": "name_make"
                }
                ,
                {   
                    "data": "conteo",
                    render: function(data,type)
                    {
                        var data_opciones;
                        if(data > 0)
                        {
                            data_opciones = '<center><button type="button" data-bs-toggle="modal" data-bs-target="#modal_model_update" class="btn btn-icon btn-primary btn-sm"><i class="fe fe-edit"></i></button></center>'
                        }
                        else
                        {
                            data_opciones = '<center><button type="button" data-bs-toggle="modal" data-bs-target="#modal_model_update" class="btn btn-icon btn-primary btn-sm"><i class="fe fe-edit"></i></button>&nbsp;<button type="button" id="delete_model" class="btn btn-icon btn-danger btn-sm" title="Delete this Model"><i class="fa fa-trash"></i></button></center>'
                        }

                        return data_opciones;
                    }
                }
            ],
            "order"     : 
            [
                [2, "asc"]
            ],
            columnDefs: 
            [
                { 
                    orderable: false, targets: [1,2],
                    visible:false, targets: [0,groupColumn],
                }
            ],
            "displayLength": 10,
            "drawCallback": function ( settings ) 
            {
                var api = this.api();
                var rows = api.rows( {page:'current'} ).nodes();
                var last=null;
    
                api.column(groupColumn, {page:'current'} ).data().each( function ( group, i ) {
                    if ( last !== group ) {
                        $(rows).eq( i ).before(
                            '<tr class="group"><td colspan="5">'+group+'</td></tr>'
                        );
    
                        last = group;
                    }
                } );
            },
            language: {
                searchPlaceholder: 'Search...',
                sSearch: '',
            }
        });

        // Select2
        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity
        });

        $('#id_table_models tbody').on( 'click', 'button', function () 
        {
            $("#id_div_conteiner_error_updmodel").removeClass('d-block').addClass('d-none');
            $("#global-loader").fadeIn("fast");
            var data = table.row( $(this).parents('tr') ).data();
            var make_id = data.make_id
            //load all makes
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
                            if(make_id == id)
                            {
                                $("#id_slc_brand_md_up").append('<option value="'+id+'" selected>'+name+'</option>');
                            }
                            else
                            {
                                $("#id_slc_brand_md_up").append('<option value="'+id+'">'+name+'</option>');
                            }
                            
                        });
                    }
                    else
                    {
                        $("#id_div_conteiner_error_updmodel").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                        $('#id_div_msg_error_updmodel').html('Error! Try to load the information later.');
                        $('#id_icon_up_md').html('<i class="fe fe-alert-circle"></i>');
                    }
                },
                complete : function()
                {
               
                },
                error    : function()
                {
                    $("#id_div_conteiner_error_updmodel").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                    $('#id_div_msg_error_updmodel').html('Error! Try to load the information later.');
                    $('#id_icon_up_md').html('<i class="fe fe-alert-circle"></i>');
                }
            });
            
            $('#id_slc_brand_md_up').val(data.make_id);
            $('#id_hid_id_md_up').val(data.id);
            $('#id_txt_name_md_up').val(data.name);
            $("#global-loader").fadeOut("slow");
        });

        $('#id_table_models tbody').on( 'click', 'button#delete_model', function ()
        {
            var data = table.row( $(this).parents('tr') ).data();
            swal({
                title: "Delete Model?",
                text: "Are you sure to delete this Model?",
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
                        url: endpoint_general+'modelos/'+data.id,
                        dataType: "json",
                        crossDomain: true,
                        xhrFields: { withCredentials: true },
                        success: function (data, status, jqXHR) 
                        {
                            if(data.res)
                            {
                                swal({
                                    title: "Congratulations!",
                                    text: "We have deleted the Model",
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
                                    text: "This Model is not available to delete",
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


        $("#id_btn_update_md").click(function()
        {   
            $('#id_div_msg_error_updmodel').html('');
            $("#id_div_conteiner_error_updmodel").removeClass('d-block').addClass('d-none').removeClass('alert-danger').removeClass('alert-success');

            $("#id_btn_update_md").addClass('btn-loading');
            $("#global-loader").fadeIn("fast");
            if(!$('#id_form_upd_model').cvalidateForm())
            {
                $.ajax
                ({ 
                    type: "PUT",
                    url: endpoint_general+'modelos/'+$('#id_hid_id_md_up').val(),
                    data:$("#id_form_upd_model").serialize(),
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {
                        if(data.res)
                        {
                            $("#id_btn_update_md").removeClass('btn-loading');
                            $("#id_div_conteiner_error_updmodel").removeClass('d-none').addClass('d-block').addClass('alert-success');
                            $('#id_div_msg_error_updmodel').html('Success! Your information has been succesfully saved');
                            $('#id_icon_up_md').html('<i class="fe fe-check"></i>');
                            table.ajax.reload();
                        }
                        else
                        {
                            $("#id_btn_update_md").removeClass('btn-loading');
                            $("#id_div_conteiner_error_updmodel").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                            $('#id_div_msg_error_updmodel').html('Error! Try to save your information later');
                            $('#id_icon_up_md').html('<i class="fe fe-alert-circle"></i>');
                        }
                        $("#global-loader").fadeOut("slow");
                    },
                    error : function(data)
                    {
                        $("#id_btn_update_md").removeClass('btn-loading');
                        $("#id_div_conteiner_error_updmodel").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                        $('#id_div_msg_error_updmodel').html('Error! Try to save your information later');
                        $('#id_icon_up_md').html('<i class="fe fe-alert-circle"></i>');
                    }
                });
            }
            else
            {
                $("#global-loader").fadeOut("slow");
                $("#id_btn_update_md").removeClass('btn-loading');
            }
        });

        $('#id_btn_new_model').click(function(){
            location.href = './?mod=model&hac=add';
        });
    }
    
});

