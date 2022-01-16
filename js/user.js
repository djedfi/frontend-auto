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
                            showCancelButton: false,
                            confirmButtonClass: "btn-danger",
                            confirmButtonText: "Ok",
                            closeOnConfirm: false
                          },
                          function(){
                            location.href = './?mod=user&hac=list';
                          });
                        
                    }
                    else
                    {
                        $("#id_btn_sbm_user").removeClass('btn-loading');
                        $("#id_div_conteiner_error_newuser").removeClass('d-none').addClass('d-block');
                        $('#id_div_msg_error_newuser').html('Ingreso informacion incorrecta');
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

});