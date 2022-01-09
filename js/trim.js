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
                            showCancelButton: false,
                            confirmButtonClass: "btn-danger",
                            confirmButtonText: "Ok",
                            closeOnConfirm: false
                          },
                          function(){
                            location.href = './?mod=trim&hac=list';
                          });
                        
                    }
                    else
                    {
                        $("#id_btn_sbm_trim").removeClass('btn-loading');
                        $("#id_div_conteiner_error_newtrim").removeClass('d-none').addClass('d-block');
                        $('#id_div_msg_error_newtrim').html('Ingreso informacion incorrecta');
                    }
                    $("#global-loader").fadeOut("slow");
                },
                error: function(data)
                {
                    
                    $("#global-loader").fadeOut("slow");

                    swal({
                        title: "Alert",
                        text: "We can not connect with the server",
                        type: "error",
                        showCancelButton: true,
                        confirmButtonText: 'Exit',
                        cancelButtonText: 'Stay on the page'
                    },
                    function(isConfirm)
                    {
                        if(isConfirm)
                        {
                            alert('Se ira a logout');
                        }
                        else
                        {
                            $("#id_btn_sbm_trim").removeClass('btn-loading');
                            return false;
                        }
                      
                    });
                }
            });
        }
        else
        {
            $("#global-loader").fadeOut("slow");
            $("#id_btn_sbm_trim").removeClass('btn-loading');
        }

    });
  
});

