$(window).on('load',function(){

    var checkMod = function(){
        
     
   if(Modernizr.mq('(min-width: 1280px)')){

    $('.device').css('box-shadow','0px 0px 19px 5px #710000');
    $('.b').css('box-shadow','0px -10px 19px 5px #710000');
    $('.a').css('box-shadow','0px 5px 19px 5px #710000');

      
   }
           else if(Modernizr.mq('(min-width: 920px)')){
             $('.device').css('box-shadow','0px 0px 19px 5px #710000');
            $('.a').css('box-shadow','0px 5px 19px 5px #710000');

        }
        else if(Modernizr.mq('(min-width: 200px)')){
            
            $('.device').css('box-shadow','0px 0px 19px 5px #710000');
  
        }
        

    }

     $(window).resize(checkMod);

     checkMod ();
    
})