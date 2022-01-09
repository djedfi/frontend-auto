$(document).ready(function()
{	
    $("#global-loader").fadeIn("fast");
    $.ajax
    ({ 
        type: "POST",
        url: endpoint_general+'logout',
        data:$("#id_form_login").serialize(),
        dataType: "json",
        crossDomain: true,
        xhrFields: { withCredentials: true },
        success: function (data, status, jqXHR) 
        {
            if(data.res)
            {
                $.ajax
                ({ 
                    type    : "POST",
                    url     : './auxcall/general.php',
                    data    : {ahac:'logout'},
                    dataType: "json",
                    success: function (data, status, jqXHR) 
                    {
                        if(data.bandera)
                        {
                            location.href = './?mod=login';
                        }
                    }
                });
            }
            else
            {
                swal({
                    title: "Alert",
                    text: "We can not connect with the server. Try latter.",
                    type: "error",
                    showCancelButton: false,
                    confirmButtonText: 'Stay on the page'
                },
                function()
                {
                    return false;
                });
            }
        },
        error:function(data)
        {
            swal({
                title: "Alert",
                text: "We can not connect with the server. Try latter.",
                type: "error",
                showCancelButton: false,
                confirmButtonText: 'Stay on the page'
            },
            function()
            {
                return false;
            });
        }
    });
});