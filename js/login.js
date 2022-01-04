$(document).ready(function()
{	
    $("#id_a_fpass").click(function()
    {
        $('#id_div_login').removeClass('d-block').addClass('d-none');
        $('#id_div_reset_pass').removeClass('d-none').addClass('d-block');
    });

    $("#id_a_flogin").click(function()
    {
        $('#id_div_login').removeClass('d-none').addClass('d-block');
        $('#id_div_reset_pass').removeClass('d-block').addClass('d-none');
    });

    $("#id_btn_login").click(function()
    {   
        $("#global-loader").fadeIn("fast");
        if(!$('#id_form_login').cvalidateForm())
        {
            $.ajax
            ({ 
                type: "POST",
                url: endpoint_general+'login',
                data:$("#id_form_login").serialize(),
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) 
                {
                    $('#id_div_msg_error_login').html('');
                    $('#id_div_msg_error_login').removeClass('alert').removeClass('alert-danger').removeClass('alert-success');
                    
                    if(data.res)
                    {
                        var v_user_id         = data.user.id;
                        var v_token           = data.token;
                        var v_name_user       = data.user.first_name+' '+data.user.last_name;
                        
                        
                        // localStorage.setItem('token',data.token);

                        $.ajax
                        ({ 
                            type    : "POST",
                            url     : './auxcall/general.php',
                            data    : {ahac:'login',user_id:v_user_id,token:v_token,name_user:v_name_user},
                            dataType: "json",
                            success: function (data, status, jqXHR) 
                            {
                                if(data.bandera)
                                {
                                    location.href = './?mod=home';
                                }
                            }
                        });
                    }
                    else
                    {
                        $('#id_div_msg_error_login').addClass('alert').addClass('alert-danger');
                        $('#id_div_msg_error_login').html('Ingreso informacion incorrecta');
                    }
                    $("#global-loader").fadeOut("slow");
                },
                error: function(data)
                {
                    $('#id_div_msg_error_login').html('');
                    $('#id_div_msg_error_login').removeClass('alert').removeClass('alert-danger').removeClass('alert-success');

                    $('#id_div_msg_error_login').addClass('alert').addClass('alert-danger');
                    $('#id_div_msg_error_login').html('Error con el servidor');
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