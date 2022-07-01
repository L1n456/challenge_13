err_msg = document.querySelectorAll(".err-msg");
err_img = document.querySelectorAll(".err-img");
input = document.querySelectorAll(".input");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let key = true;

function validate() {
        if( document.myForm.fname.value == ""){
            err_msg[0].innerHTML = "First Name cannot be empty";
            err_img[0].style.display = "block";
            input[0].style.borderColor = "hsl(0, 100%, 74%)";
            key = false;
        }else{
            err_msg[0].innerHTML = "";
            err_img[0].style.display = "none";
            input[0].style.borderColor = "hsl(246, 25%, 77%)";
        }

        if( document.myForm.lname.value == ""){
            err_msg[1].innerHTML = "Last Name cannot be empty";
            err_img[1].style.display = "block";
            input[1].style.borderColor = "hsl(0, 100%, 74%)";
            key = false;    
        }else{
            err_msg[1].innerHTML = "";
            err_img[1].style.display = "none"; 
            input[1].style.borderColor = "hsl(246, 25%, 77%)";
        }

        if( document.myForm.email.value == ""){
            err_msg[2].innerHTML = "Email cannot be empty";
            err_img[2].style.display = "block";
            input[2].style.borderColor = "hsl(0, 100%, 74%)";
            key = false;  
        }else if(!(document.myForm.email.value.match(mailformat))){
            err_msg[2].innerHTML = "Looks like this is not an email";
            err_img[2].style.display = "block";
            input[2].style.borderColor = "hsl(0, 100%, 74%)";
            key = false;
        }else{
            err_msg[2].innerHTML = "";
            err_img[2].style.display = "none";
            input[2].style.borderColor = "hsl(246, 25%, 77%)";
        }

        if( document.myForm.pw.value == ""){
            err_msg[3].innerHTML = "Password cannot be empty";
            err_img[3].style.display = "block";
            input[3].style.borderColor = "hsl(0, 100%, 74%)";
            key = false; 
        }else{
            err_msg[3].innerHTML = "";
            err_img[3].style.display = "none"; 
            input[3].style.borderColor = "hsl(246, 25%, 77%)"; 
        } 
        return key;
    }
     
        
        
 



