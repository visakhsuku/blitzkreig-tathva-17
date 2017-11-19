$(window).on('load',function(){ 

    
$('.login-navbar').on('click',function(){
        $('#d-login-box').css('display','block');
        $('#d-login-box').css('opacity','1');
        $('#login-wrapper').css('z-index','100000001');
        $('.content').css('opacity','0.2');
        $('#d-login-box').css('opacity','1');
       
        $('#tathva-writeup').css('opacity','0');
 });  

 $('#login-wrapper').on('click',function(e){
        if($(e.target).attr('id')=='login-wrapper'){
            console.log('triggered');
       $('#d-login-box').css('opacity','0');
       
       $("#d-login-forget-container").hide();
          $("#d-login-container-outer").fadeIn("slow");
//            $("#d-login-forget-con't'ainer").fadeOut("slow");
            
        $('.content').css('opacity','1');

            
            
       $('#tathva-man-container').css('opacity','1');
       setTimeout(function(){$('#login-wrapper').css('z-index','-10');},1000);
        }
    });
    
    
});
