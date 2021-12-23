let validateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
     let validateUser = /^[a-z0-9_-]{5,15}$/;
     let validatePassword = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
     let validateNumber = /^[0-9]{10}$/;
    //fran@gmail.coooooom.ar .gob .gov .edu.ar .gob.ar .tv .gov.uk
     /^$/


$(() => {
    $('#formUser').submit((e) => {
        e.preventDefault()
        let username = $('#username').val();
        let emailId = $('#emailid').val();
        let mobileNumber = $('#mobilenumber').val();
        let userPassword = $('#userpassword').val();

        $('.errorMsg').hide();

        if(!validateUser.test(username)) {    
            $('#errorusername').show();    
        }
        
        if(!validateMail.test(emailId)) {    
            $('#erroremail').show();      
        } 

        if(!validateNumber.test(mobileNumber)){    
            $('#errormobile').show();             
        }

        if(!validatePassword.test(userPassword)){    
            $('#errorpassword').show();           
         } else {
            alert("successful")
            $('#formUser').trigger('reset')
         }

         
    })
}) 

$(document).ready(function() { 
    $( "#submitform" ).on( "click", function() {
     

     let username = $('#username').val();
     let emailid = $('#emailid').val();
     let mobilenumber = $('#mobilenumber').val();
     let userpassword = $('#userpassword').val();
    
     $('.errorMsg').hide();
     
     if(!validateUser.test(username)) {    
            $('#errorusername').show();    
            return false;  
     } 

     if(!validateMail.test(emailid)) {    
            $('#erroremail').show(); 
            return false;       
     } 
     
     if(!validateNumber.test(mobilenumber)){    
            $('#errormobile').show();     
            return false;         
     }

     if(!validatePassword.test(userpassword)){    
        $('#errorpassword').show();     
        return false;       
     } else {
        alert("successful")
     }
      
    });
});