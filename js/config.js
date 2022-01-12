var endpoint_general    = 'http://127.0.0.1:8000/api/';
var endpoint_csrf       = 'http://127.0.0.1:8000/sanctum/csrf-cookie';

$.ajaxSetup({
    beforeSend: function(xhr) 
    {
        xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    },
    error : function()
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
                location.href = './?mod=logout';
            }
            else
            {
                return false;
            }
            
        });
    }
});

