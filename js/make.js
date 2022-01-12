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
                            showCancelButton: false,
                            confirmButtonClass: "btn-danger",
                            confirmButtonText: "Ok",
                            closeOnConfirm: false
                          },
                          function(){
                            location.href = './?mod=make&hac=list';
                          });
                        
                    }
                    else
                    {
                        $("#id_btn_sbm_make").removeClass('btn-loading');
                        $("#id_div_conteiner_error_newmake").removeClass('d-none').addClass('d-block');
                        $('#id_div_msg_error_newmake').html('Ingreso informacion incorrecta');
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
});