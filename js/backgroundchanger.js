
$(window).on('load',function(){
    console.log('backgroundchanger loaded');
    $('body').css('background-image','url(images/1.jpg)');
    
    $('.fp-next').on('click',function(){
        var current = $('body').css('background-image');
        current = parseInt(current.split('/')[current.split('/').length - 1].split('.')[0]);
        var next = (current + 1)%5;
	if(next==0)
next=1;
        $("body").css('background-image','url(images/'+next+'.jpg)');
        
    })
    
    
    $('.fp-prev').on('click',function(){
        var current = $('body').css('background-image');
        current = parseInt(current.split('/')[current.split('/').length - 1].split('.')[0]);
        var prev = (current - 1);
        if(prev < 1)
            prev = 4;
            
        $("body").css('background-image','url(images/'+prev+'.jpg)');
        
    })
})
