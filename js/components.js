window.onload = function(){
    stopLoading();
}

//Document.Ready
var index=0;
$(document).ready(function(){
  initLoading();
  $("#fullpage").fullpage();

	$("#fullpage").click (function(){
	    $("#login_popup").css({display:'none',opacity:'0'});
	});

	$("#fullpage").hover (function(){
	    $("#user_menu").css({display:'none',opacity:'0'});
	});

	$(".burger").hover(function(){
	    $("#user_menu").css({display:'block',opacity:'1'});
	});
	$.fn.fullpage.moveTo(1,index);
  var elements = document.querySelectorAll( '.intense' );
  Intense( elements );
});



function closeIframe(){
  $("#login_popup").css({display:'none',opacity:'0'});
  location.reload();
}

function loginClick(){
  $("#login_popup").css({display:'block',opacity:'1'});
}

function logout(){
  $("#user_menu").css({display:'none',opacity:'0'});
  initLoading();
  $.ajax({
      type: "POST",
      url: "../Register/logout.php",
      success: function( result ){
        if(result=='success'){
          location.reload();
          stopLoading();
        }else{
          alert('No Internet Connection');
        }
      }
    });
}

function login(event){
  alert("Login Before Registration");
  event.stopPropagation();
  loginClick();
}

function register(eventId,index){
    window.location.href="../Register/register_blitz.php?eventId="+eventId+"&lastPage=Blitz&slide="+index;
}

function register_team(eventId,index){
    $("#register_iframe").attr({'src':"../Register/register_blitz_team.php?eventId="+eventId+"&lastPage=Blitz&slide="+index});
    $("#popup").css({'visibility':'visible','opacity':1});
}

function closeRegister(lastPage,slide){
  $("#popup").css({'visibility':'hidden','opacity':0});
  window.location.href="../"+lastPage+"/index.php?slide="+slide;
}

function hide_popup(){
  $("#popup").css({'visibility':'hidden','opacity':0});
}

function unregister(eventId,index){
  window.location.href="../Register/unregister_blitz.php?eventId="+eventId+"&lastPage=Blitz&slide="+index;
}



