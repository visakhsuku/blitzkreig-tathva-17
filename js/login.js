$(window).on('load',function(){
    
    const auth=firebase.auth();
 auth.onAuthStateChanged(function(user){
     //if user logged in redirects
        if(user){
          //console.log("User signed in");
          if(user.emailVerified){
              console.log('user logged in');
              $('#d-login-box').css('opacity','0');
             $("#d-login-box").fadeOut("slow");
             $('.login-navbar').html('Profile');
             $('.login-navbar').off('click');
              $('.login-navbar').on('click',function(){
                 window.location.href = '../dashboard/profile.html';
              });
                
            
             
          }
          else{
                  auth.signOut().then(function(){
                alert("verify your email and login again"); 
               });
          }
          
        }
        //if user not signed in
        else{
          $(document).ready(function(){
            /* $('#Login-logo').click(function(){
                 auth.signOut().then(function(){
                 alert("You are logged out"); 
               }); 
             }); */
          $('#d-login-button').click(function(){
          var email=$('#d-login-username').val();
          var pass=$('#d-login-password').val();
              //console.log(email+'email');
              //console.log(pass+'pass');
       
           auth.signInWithEmailAndPassword(email,pass).catch(function(error){
           
            var errormsg=error.message;
            var errorcode=error.code;
            if(errorcode=='auth/invalid-email'){
               alert("Email address is invalid");
            }
            else if(errorcode=='auth/user-not-found'){
               alert("User doesn't exist in this email id.Create one");
            }
            else if(errorcode=='auth/wrong-password'){
               alert("Wrong password");
            }
            else{
               alert("Some unkown error occured.Try again"+errormsg);
            }
       
           });
 
          });
       
         });
       }
       //else user nor signed in over
    });

    
}); 




