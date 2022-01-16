$(document).ready(function()
{	
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('token'))
    {
        localStorage.setItem('token',searchParams.get('token'));
    }
    else
    {
        location.href = './?mod=login';
    }

    $("#id_btn_rst").click(function()
    {   
        $("#global-loader").fadeIn("fast");
        $('#id_div_msg_error_reset').html('');
        $('#id_div_msg_error_reset').removeClass('alert').removeClass('alert-danger').removeClass('alert-success');
        
        if(!$('#id_form_reset').cvalidateForm())
        {
            $('#id_hid_token_rst').val(localStorage.getItem('token'));

            $.ajax
            ({ 
                type: "POST",
                url: endpoint_general+'save_password',
                data:$("#id_form_reset").serialize(),
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    $('#id_div_msg_error_reset').html('');
                    $('#id_div_msg_error_reset').removeClass('alert').removeClass('alert-danger').removeClass('alert-success');
                    
                    if(data.res)
                    {
                        swal({
                            title: "Congratulations!",
                            text: data.message,
                            type: "success",
                            showCancelButton: false,
                            confirmButtonClass: "btn-danger",
                            confirmButtonText: "Ok",
                            closeOnConfirm: false
                          },
                          function(){
                            location.href = './?mod=login';
                          });
                    }
                    else
                    {
                        $('#id_div_msg_error_reset').addClass('alert').addClass('alert-danger');
                        $('#id_div_msg_error_reset').html(data.message);
                    }
                    $("#global-loader").fadeOut("slow");
                },
                error: function(data)
                {
                    $('#id_div_msg_error_reset').html('');
                    $('#id_div_msg_error_reset').removeClass('alert').removeClass('alert-danger').removeClass('alert-success');

                    $('#id_div_msg_error_reset').addClass('alert').addClass('alert-danger');
                    $('#id_div_msg_error_reset').html(data.message);
                    $("#global-loader").fadeOut("slow");
                }
            });
        }
        else
        {
            $("#global-loader").fadeOut("slow");
        }

    });
});