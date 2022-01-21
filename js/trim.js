$(document).ready(function()
{	
    if($('#id_slc_brand_trim').length)
    {
        $("#global-loader").fadeIn("fast");

        $('#id_slc_brand_trim').select2({
            minimumResultsForSearch: '',
            width: '100%'
        });

        $('#id_slc_model_trim').select2({
            minimumResultsForSearch: '',
            width: '100%'
        });

        $('#id_slc_model_trim').select2("enable", false)

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
                        $("#id_slc_brand_trim").append('<option value="'+id+'">'+name+'</option>');
                    });
                }
            },
            complete : function()
            {
                $("#global-loader").fadeOut("slow");
            }
        });
    }

    
	$("#id_slc_brand_trim").change(function()
	{
        $("#global-loader").fadeIn("fast");
        $('#id_slc_model_trim').select2("enable", false);

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
                    $('#id_slc_model_trim').children('option:not(:first)').remove();
                    $('#id_slc_model_trim').removeAttr('disabled');
                    data.datos.forEach(element => {
                        let id = element.id;
                        let name = element.name;
                        $("#id_slc_model_trim").append('<option value="'+id+'">'+name+'</option>');
                    });
                }
                else
                {
                    $('#id_slc_model_trim').select2("enable", false);
                }
            },
            complete : function()
            {
                $("#global-loader").fadeOut("slow");
            }
        });
    });

    $("#id_btn_sbm_trim").click(function()
    {   
        
        $("#id_btn_sbm_trim").addClass('btn-loading');
        $("#global-loader").fadeIn("fast");
        if(!$('#id_form_new_trim').cvalidateForm())
        {
            $.ajax
            ({ 
                type: "POST",
                url: endpoint_general+'trims',
                data:$("#id_form_new_trim").serialize(),
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    
                    $('#id_div_msg_error_newtrim').html('');
                    $("#id_div_conteiner_error_newtrim").removeClass('d-block').addClass('d-none');
                    $('#id_div_msg_error_newtrim').removeClass('alert').removeClass('alert-danger').removeClass('alert-success');
                    
                    if(data.res)
                    {
                        swal({
                            title: "Congratulations!",
                            text: "Your information has been succesfully saved",
                            type: "success",
                            showCancelButton: true,
                            confirmButtonClass: "btn-success",
                            confirmButtonText: "Add Trim",
                            cancelButtonText:"Go to Directory",
                            closeOnConfirm: false
                        },
                        function(isConfirm)
                        {
                            if(isConfirm)
                            {
                            location.href = './?mod=trim&hac=add';
                            }
                            else
                            {
                            location.href = './?mod=trim&hac=list';
                            }
                        });
                        
                    }
                    else
                    {
                        $("#id_btn_sbm_trim").removeClass('btn-loading');
                        $("#id_div_conteiner_error_newtrim").removeClass('d-none').addClass('d-block');
                        $('#id_div_msg_error_newtrim').html('Ingreso informacion incorrecta');
                    }
                    $("#global-loader").fadeOut("slow");
                }
            });
        }
        else
        {
            $("#global-loader").fadeOut("slow");
            $("#id_btn_sbm_trim").removeClass('btn-loading');
        }

    });
  

    if($('#id_table_trim').length)
    {
        var groupColumn = 2;
        var table = $('#id_table_trim').DataTable
        ({
            "ajax"      : 
            {
                "type"  : "GET",
                "url"   : endpoint_general+'gettrimfull/0'
            },
            "dataSrc"   : "data",
            columns     : 
            [
                {   
                    "data": "id_trim" 
                },
                { 
                    "data": "name_trim" 
                },
                {   
                    "data": "full_name"
                }
            ],
            "order"     : 
            [
                [2, "asc"]
            ],
            columnDefs: 
            [
                { 
                    orderable: false, targets: [1],
                    visible:false, targets: [0,groupColumn],
                },
                {
                    'targets': 3,
                    'data': null,
                    'defaultContent': '<center><button type="button" data-bs-toggle="modal" data-bs-target="#modal_trim_update" class="btn btn-icon btn-primary btn-sm"><i class="fe fe-edit"></i></button></center>'
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

        $('#id_table_trim tbody').on( 'click', 'button', function () 
        {
            $("#id_div_conteiner_error_updtrim").removeClass('d-block').addClass('d-none');
            $("#global-loader").fadeIn("fast");
            var data = table.row( $(this).parents('tr') ).data();
            console.log(data);
            var make_id = data.id_make;
            var model_id = data.id_modelo;
            var trim_id = data.id_trim;
            var name_trim = data.name_trim;
            

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
                        $('#id_slc_brand_tr_up').children('option:not(:first)').remove();
                        data.data.forEach(element => {
                            let id = element.id;
                            let name = element.name;
                            if(make_id == id)
                            {
                                $("#id_slc_brand_tr_up").append('<option value="'+id+'" selected>'+name+'</option>');
                            }
                            else
                            {
                                $("#id_slc_brand_tr_up").append('<option value="'+id+'">'+name+'</option>');
                            }
                        });
                    }
                    else
                    {
                        $("#id_div_conteiner_error_updtrim").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                        $('#id_div_msg_error_updtrim').html('Error! Try to load the information later.');
                        $('#id_icon_up_tr').html('<i class="fe fe-alert-circle"></i>');
                    }
                },
                error    : function()
                {
                    $("#id_div_conteiner_error_updtrim").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                    $('#id_div_msg_error_updtrim').html('Error! Try to load the information later.');
                    $('#id_icon_up_tr').html('<i class="fe fe-alert-circle"></i>');
                }
            });

            $.ajax
            ({ 
                type: "GET",
                url: endpoint_general+'modelosbmake/'+make_id,
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    if(data.res)
                    {
                        $('#id_slc_model_tr_up').children('option:not(:first)').remove();
                        data.datos.forEach(element => {
                            let id = element.id;
                            let name = element.name;
                            if(model_id == id)
                            {
                                $("#id_slc_model_tr_up").append('<option value="'+id+'" selected>'+name+'</option>');
                            }
                            else
                            {
                                $("#id_slc_model_tr_up").append('<option value="'+id+'">'+name+'</option>');
                            }
                        });
                    }
                    else
                    {
                        $("#id_div_conteiner_error_updtrim").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                        $('#id_div_msg_error_updtrim').html('Error! Try to load the information later.');
                        $('#id_icon_up_tr').html('<i class="fe fe-alert-circle"></i>');
                    }
                },
                error    : function()
                {
                    $("#id_div_conteiner_error_updtrim").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                    $('#id_div_msg_error_updtrim').html('Error! Try to load the information later.');
                    $('#id_icon_up_tr').html('<i class="fe fe-alert-circle"></i>');
                },
                complete : function()
                {
                    $("#global-loader").fadeOut("slow");
                }
            });            
            

            $('#id_hid_id_tr_up').val(trim_id);
            $('#id_txt_name_trim').val(name_trim);
            
        });

        $("#id_slc_brand_tr_up").change(function()
        {
            $("#global-loader").fadeIn("fast");

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
                        $('#id_slc_model_tr_up').children('option:not(:first)').remove();
                        $('#id_slc_model_tr_up').removeAttr('disabled');
                        data.datos.forEach(element => {
                            let id = element.id;
                            let name = element.name;
                            $("#id_slc_model_tr_up").append('<option value="'+id+'">'+name+'</option>');
                        });
                    }
                    else
                    {
                        
                    }
                },
                complete : function()
                {
                    $("#global-loader").fadeOut("slow");
                }
            });
        });

        $("#id_btn_update_tr").click(function()
        {   
            $('#id_div_msg_error_updtrim').html('');
            $("#id_div_conteiner_error_updtrim").removeClass('d-block').addClass('d-none').removeClass('alert-danger').removeClass('alert-success');

            $("#id_btn_update_tr").addClass('btn-loading');
            $("#global-loader").fadeIn("fast");
            if(!$('#id_form_upd_trim').cvalidateForm())
            {
                $.ajax
                ({ 
                    type: "PUT",
                    url: endpoint_general+'trims/'+$('#id_hid_id_tr_up').val(),
                    data:$("#id_form_upd_trim").serialize(),
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {
                        if(data.res)
                        {
                            $("#id_btn_update_tr").removeClass('btn-loading');
                            $("#id_div_conteiner_error_updtrim").removeClass('d-none').addClass('d-block').addClass('alert-success');
                            $('#id_div_msg_error_updtrim').html('Success! Your information has been succesfully saved');
                            $('#id_icon_up_tr').html('<i class="fe fe-check"></i>');
                            table.ajax.reload();
                        }
                        else
                        {
                            $("#id_btn_update_tr").removeClass('btn-loading');
                            $("#id_div_conteiner_error_updtrim").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                            $('#id_div_msg_error_updtrim').html('Error! Try to save your information later');
                            $('#id_icon_up_tr').html('<i class="fe fe-alert-circle"></i>');
                        }
                        $("#global-loader").fadeOut("slow");
                    },
                    error : function(data)
                    {
                        $("#id_btn_update_tr").removeClass('btn-loading');
                        $("#id_div_conteiner_error_updtrim").removeClass('d-none').addClass('d-block').addClass('alert-danger');
                        $('#id_div_msg_error_updtrim').html('Error! Try to save your information later');
                        $('#id_icon_up_tr').html('<i class="fe fe-alert-circle"></i>');
                    }
                });
            }
            else
            {
                $("#global-loader").fadeOut("slow");
                $("#id_btn_update_tr").removeClass('btn-loading');
            }
        });

        $('#id_btn_new_trim').click(function(){
            location.href = './?mod=trim&hac=add';
        });
    }
});

