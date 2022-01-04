$.ajax
({ 
    type: "GET",
    url: endpoint_csrf,
    crossDomain: true,
    dataType: "json",
    headers: 
    {          
        Accept: "application/json; charset=utf-8",         
        "Content-Type": "application/json; charset=utf-8"   
    },
    success: function (data, status, jqXHR) 
    {
    },
    error : function(data)
    {
        alert('no podemos conectar con el servidor');
    }
});

