$(document).ready(function()
{
    var wait = new Promise(function(resolve, reject){

     try {
                //creating xhr object
                 var xhttp = new XMLHttpRequest();
                //event listener
                xhttp.onreadystatechange = function(){
                //condition
                if(this.readyState==4&& this.status==200){
                // document.getElementById("demo").innerHTML =this.responseText;
                //to convert json text to normal text we use json.parse
                    var response = JSON.parse(this.responseText);
                // console.log(response);
            
                    var output ="<table><tr><th>UserID</th><th>ID</th><th>Title</th><th>Completed</th></tr><tr>";
                    var check = "";
                    for(var i = 0; i < response.length; i++)
                    {
                        if(JSON.stringify(response[i].completed) == "true")
                        {
                            check = "<input type='checkbox' checked class='check' name='state' value='done' disabled>";
                        }
                        else{
                            check = "<input type='checkbox' class='check' name='state' value='notdone' >";
                        }
                        output += "<td>" + response[i].userId + "</td><td>" + response[i].id + "</td><td>" + response[i].title + "</td><td>" + check + "</td></tr><tr>";
            
                    }
                    document.getElementById("demo").innerHTML = output +  "</tr></table>";

    
                }
            }
            xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
   
            xhttp.send();
            }
            catch (e) {
                reject();
            }
            
            finally{
                console.log("success");
                resolve();
            }
        }) 
          
        .then(function(s){
            console.log('Promise called');
            main();
        })
});


function main()
{
    setTimeout(function(){
        var checked = $('input:checkbox:checked'); 
        var select = $('input:checkbox'); 
        console.log("Checkboxes: " + select.length);
        console.log("Checked: " + checked.length);
        count = 0;
        select.change(function(){
            var newly_checked = $('input:checkbox:checked'); 
            console.log("Newly Checked: " + newly_checked.length);
            count = newly_checked.length - checked.length;
            console.log(count);
    
            if(count == 5){
                setTimeout(function(){
                    alert('Congrats. 5 Tasks have been Successfully Completed');
                }, 400);
            }
        })
    }, 5000);

}    