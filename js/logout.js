$(document).ready(function()
{	
    $("#global-loader").fadeIn("fast");
    $.ajax
    ({ 
        type    : "POST",
        url     : './auxcall/general.php',
        data    : {ahac:'logout'},
        dataType: "json",
        success: function (data, status, jqXHR) 
        {
        }
    });

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
            location.href = './?mod=login';
        },
        error: function (data, status, jqXHR) 
        {
            location.href = './?mod=login';
        }
    });
});