var endpoint_general    = 'http://127.0.0.1:8000/api/';
var endpoint_csrf       = 'http://127.0.0.1:8000/sanctum/csrf-cookie';

$.ajaxSetup({
    beforeSend: function(xhr) 
    {
        xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
});

