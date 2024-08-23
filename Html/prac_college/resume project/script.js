function toggPass(){
    var user_pass = document.getElementById('pin');
    var toggle_pass = document.getElementById('chk');
    if(toggle_pass.checked){
        user_pass.type = "text";
    }
    else{
        user_pass.type = "password";
    }
}

// function confPass(){
//     var isValid = true;
//     var pass  = document.getElementById('pin1');
//     var check = document.getElementById('chk1');
//     if(check.checked){

//     }
// }


// yet to change html code for this
// 23-07 Javascript Pattern testing
function validateField(){
    var isValid = true;
    var user_name = document.getElementById('username');
    if(user_name.value.trim() === "" || user_name.value.trim().length < 5){
        // trim removes extra space form the start and end
        // .value fetches the value(user input) from the element fetched by document.get....
        alert("UserName must be Minium 5 characters");
        isValid = false;
    }
    //email Validiation
    var user_email = document.getElementById('txtmail');
    var email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;   // this is known as regular expression or REGEX
    if(user_email.value.trim() === "" || !email_pattern.test(user_email.value.trim()))
}