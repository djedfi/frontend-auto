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
                            showCancelButton: false,
                            confirmButtonClass: "btn-danger",
                            confirmButtonText: "Ok",
                            closeOnConfirm: false
                          },
                          function(){
                            location.href = './?mod=model&hac=list';
                          });
                        
                    }
                    else
                    {
                        $("#id_btn_sbm_model").removeClass('btn-loading');
                        $("#id_div_conteiner_error_newmodelo").removeClass('d-none').addClass('d-block');
                        $('#id_div_msg_error_newmodel').html('Ingreso informacion incorrecta');
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
                            $("#id_btn_sbm_model").removeClass('btn-loading');
                            return false;
                        }
                      
                    });
                }
            });
        }
        else
        {
            $("#global-loader").fadeOut("slow");
            $("#id_btn_sbm_model").removeClass('btn-loading');
        }

    });
    
});

