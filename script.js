$(document).ready(function(){
    var displayName;
    var container = document.getElementById("container");
    $.get("https://api.github.com/users/im2basic", function(data){
        var h1 = document.createElement('h1');
        h1.innerHTML = `${data.login}`;
        container.appendChild(h1);
        console.log(data);
    })
})
