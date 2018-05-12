//function for loading game, use dinamic loading jquery ajax method
$(document).ready(function(){
    $("#loading-game").click(function(){
        $("#form").load("page1.html");
    });
});