$(document).ready(function()
{	
    $('#id_txt_name_st').focus();

    $("#id_btn_sbm_style").click(function()
    {   
        
        $("#id_btn_sbm_style").addClass('btn-loading');
        $("#global-loader").fadeIn("fast");
        if(!$('#id_form_new_st').cvalidateForm())
        {
            $.ajax
            ({ 
                type: "POST",
                url: endpoint_general+'styles',
                data:$("#id_form_new_st").serialize(),
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    
                    $('#id_div_msg_error_newstyle').html('');
                    $("#id_div_conteiner_error_newstyle").removeClass('d-block').addClass('d-none');
                    $('#id_div_msg_error_newstyle').removeClass('alert').removeClass('alert-danger').removeClass('alert-success');
                    
                    if(data.res)
                    {
                        swal({
                            title: "Congratulations!",
                            text: "Your information has been succesfully saved",
                            type: "success",
                            showCancelButton: true,
                            confirmButtonClass: "btn-success",
                            confirmButtonText: "Add Style",
                            cancelButtonText:"Go to Directory",
                            closeOnConfirm: false
                          },
                          function(isConfirm)
                          {
                              if(isConfirm)
                              {
                                location.href = './?mod=style&hac=add';
                              }
                              else
                              {
                                location.href = './?mod=style&hac=list';
                              }
                          });
                    }
                    else
                    {
                        $("#id_btn_sbm_style").removeClass('btn-loading');
                        $("#id_div_conteiner_error_newstyle").removeClass('d-none').addClass('d-block');
                        $('#id_div_msg_error_newstyle').html('Check the information and try again.');
                    }
                    $("#global-loader").fadeOut("slow");
                }
            });
        }
        else
        {
            $("#global-loader").fadeOut("slow");
            $("#id_btn_sbm_style").removeClass('btn-loading');
        }

    });


    if($('#id_table_styles').length)
    {
        var table = $('#id_table_styles').DataTable
        ({
            "ajax"      : 
            {
                "type"  : "GET",
                "url"   : endpoint_general+'styles'
            },
            "dataSrc"   : "data",
            columns     : 
            [
                {   
                    "data": "id" 
                },
                { 
                    "data": "name" 
                }
            ],
            "order"     : 
            [
                [1, "asc"]
            ],
            columnDefs: 
            [
                { 
                    orderable: false, targets: [0],
                    visible:false, targets: [0]
                },
                {
                    'targets': 2,
                    'data': null,
                    'defaultContent': '<center><button type="button" data-bs-toggle="modal" data-bs-target="#modal_style_update" class="btn btn-icon btn-primary btn-sm"><i class="fe fe-edit"></i></button></center>'
                }
            ],
            language: {
                searchPlaceholder: 'Search...',
                sSearch: '',
            }
        });

        $('#id_table_styles tbody').on( 'click', 'button', function () 
        {
            $("#id_div_conteiner_error_updstyle").removeClass('d-block').removeClass('alert-danger').removeClass('alert-success').addClass('d-none');
            $('#id_div_msg_error_updstyle').html('');

            $("#global-loader").fadeIn("fast");
            var data = table.row( $(this).parents('tr') ).data();
            console.log(data);
            $('#id_hid_id_st').val(data.id);
            $('#id_txt_name_st').val(data.name);

            $("#global-loader").fadeOut("slow");
        });
        
        // Select2
        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity
        });

        $("#id_btn_update_st").click(function()
        {   
            $('#id_div_msg_error_updstyle').html('');
            $("#id_div_conteiner_error_updstyle").removeClass('d-block').addClass('d-none').removeClass('alert-danger').removeClass('alert-success');

            $("#id_btn_update_st").addClass('btn-loading');
            $("#global-loader").fadeIn("fast");
            if(!$('#id_form_upd_style').cvalidateForm())
            {
                $.ajax
                ({ 
                    type: "PUT",
                    url: endpoint_general+'styles/'+$('#id_hid_id_st').val(),
                    data:$("#id_form_upd_style").serialize(),
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {
                        if(data.res)
                        {
                            $("#id_btn_update_st").removeClass('btn-loading');
                            $("#id_div_conteiner_error_updstyle").removeClass('d-none').addClass('d-block').addClass('alert-success');
                            $('#id_div_msg_error_updstyle').html('Success! Your information has been succesfully saved');
                            $('#id_icon_up_st').html('<i class="fe fe-check"></i>');
                            table.ajax.reload();
                        }
                        else
                        {
                            $("#id_btn_update_st").removeClass('btn-loading');
                            $("#id_div_conteiner_error_updstyle").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                            $('#id_div_msg_error_updstyle').html('Error! Try to save your information later');
                            $('#id_icon_up_st').html('<i class="fe fe-alert-circle"></i>');
                        }
                        $("#global-loader").fadeOut("slow");
                    },
                    error : function(data)
                    {
                        $("#id_btn_update_st").removeClass('btn-loading');
                        $("#id_div_conteiner_error_updstyle").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                        $('#id_div_msg_error_updstyle').html('Error! Try to save your information later');
                        $('#id_icon_up_st').html('<i class="fe fe-alert-circle"></i>');
                    }
                });
            }
            else
            {
                $("#global-loader").fadeOut("slow");
                $("#id_btn_update_st").removeClass('btn-loading');
            }
        });

        $('#id_btn_new_style').click(function(){
            location.href = './?mod=style&hac=add';
        });
    }

});