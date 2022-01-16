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
                            showCancelButton: false,
                            confirmButtonClass: "btn-danger",
                            confirmButtonText: "Ok",
                            closeOnConfirm: false
                          },
                          function(){
                            location.href = './?mod=style&hac=list';
                          });
                        
                    }
                    else
                    {
                        $("#id_btn_sbm_style").removeClass('btn-loading');
                        $("#id_div_conteiner_error_newstyle").removeClass('d-none').addClass('d-block');
                        $('#id_div_msg_error_newstyle').html('Ingreso informacion incorrecta');
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
});