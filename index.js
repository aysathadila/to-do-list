
$(document).ready(login())

function login()
{
    $("#btn").click(function(){
        if ($("#exampleInputEmail1").val() == "admin" && $("#exampleInputPassword1").val() == "12345")
        {
            document.getElementById("form11").setAttribute("action","main.html");
        }    
        else
        {
            alert('Invalid username and password');
        } 
    })
}


