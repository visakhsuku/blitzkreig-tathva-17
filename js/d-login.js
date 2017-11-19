$(document).ready(function(){
    $("#d-login-forget-container").hide();
    $("#d-login-password-reset").click(function(){
        $("#d-login-container-outer").fadeOut("slow", function() {
            $("#d-login-forget-container").fadeIn("slow");
        });
    });
});