$(document).ready(function()
{	
    "use strict";

    $("#global-loader").fadeIn("fast");

    if($('#id_form_cfg').length)
    {
        $.ajax
        ({ 
            type: "GET",
            url: endpoint_general+'configs/'+$('#id_hid_branch_id_cfg').val(),
            dataType: "json",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            success: function (data, status, jqXHR) 
            {
                if(data.res)
                {
                    $('#id_hid_id_cfg').val(data.datos[0].id);
                    $('input[name=rdo_long_term_cfg][value='+data.datos[0].long_term_default+']').prop("checked",true);
                    $('#id_txt_down_rate_cfg').val($.fn.dataTable.render.number( ',', '.', 2, '','').display(data.datos[0].porc_downpay_default));
                    $('#id_txt_interest_rate_cfg').val($.fn.dataTable.render.number( ',', '.', 2, '','').display(data.datos[0].int_rate_default));
                    $('#id_txt_latedays_fee_cfg').val($.fn.dataTable.render.number( ',', '.', 2, '').display(data.datos[0].latefee_default));
                    $('#id_txt_latedays_cfg').val(data.datos[0].dayslate_default);
                    $('#id_txt_taxes_cfg').val($.fn.dataTable.render.number( ',', '.', 2, '','').display(data.datos[0].taxes_rate_default));
                }
                else
                {
                    $('#id_form_cfg').trigger('reset');
                }

                $("#id_txt_down_rate_cfg").mask('#,##0.00', {reverse: true});
                $("#id_txt_interest_rate_cfg").mask('#,##0.00', {reverse: true});
                $("#id_txt_taxes_cfg").mask('#,##0.00', {reverse: true});
                $("#id_txt_latedays_fee_cfg").mask('#,##0.00', {reverse: true});
            },
            complete : function()
            {
                $("#global-loader").fadeOut("slow");
            }
        });


        $('#id_btn_sbm_cfg').click(function()
        {
            $('#global-loader').fadeIn("fast");
            $('#id_btn_sbm_cfg').addClass('btn-loading');
            $('#id_div_msg_error_cfg').html('');
            $("#id_div_conteiner_error_cfg").removeClass('d-block').addClass('d-none').removeClass('alert-danger').removeClass('alert-success');
            
            if(!$('#id_form_cfg').cvalidateForm())
            {
                var url_info = ''
                var method = '';

                if($('#id_hid_id_cfg').val() > 0)
                {
                    url_info    = endpoint_general+'configs/'+$('#id_hid_id_cfg').val();
                    method      = 'PUT';
                }
                else
                {
                    url_info    = endpoint_general+'configs'
                    method      = 'POST';
                }

                $.ajax
                ({ 
                    type: method,
                    url: url_info,
                    data:$("#id_form_cfg").serialize(),
                    dataType: "json",
                    crossDomain: true,
                    xhrFields: { withCredentials: true },
                    success: function (data, status, jqXHR) 
                    {
                        if(data.res)
                        {
                            $("#id_btn_sbm_cfg").removeClass('btn-loading');
                            $("#id_div_conteiner_error_cfg").removeClass('d-none').removeClass('alert-danger').addClass('d-block').addClass('alert-success');
                            $('#id_div_msg_error_cfg').html('Success! Your information has been succesfully saved');
                            $('#id_icon_up_cfg').html('<i class="fe fe-check"></i>');
                        }
                        else
                        {
                            $("#id_btn_sbm_cfg").removeClass('btn-loading');
                            $("#id_div_conteiner_error_cfg").removeClass('d-none').removeClass('alert-success').addClass('d-block').addClass('alert-danger');
                            $('#id_div_msg_error_cfg').html('Error! Try to save your information later');
                            $('#id_icon_up_cfg').html('<i class="fe fe-alert-circle"></i>');
                        }
                        $("#global-loader").fadeOut("slow");
                    },
                    error : function(data)
                    {
                        $("#id_btn_sbm_cfg").removeClass('btn-loading');
                        $("#id_div_conteiner_error_cfg").removeClass('d-none').removeClass('alert-success').addClass('d-block').addClass('alert-danger');
                        $('#id_div_msg_error_cfg').html('Error! Try to save your information later');
                        $('#id_icon_up_cfg').html('<i class="fe fe-alert-circle"></i>');
                        $('#global-loader').fadeOut("slow");
                    }
                });
            }
            else
            {
                $('#global-loader').fadeOut("slow");
                $('#id_btn_sbm_cfg').removeClass('btn-loading');
            }

        });
    }


    
});