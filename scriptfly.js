function validate(){
    const username = document.getElementById("username").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const nameerror = document.getElementById("nameerror")
    const mobileerror = document.getElementById("mobileerror")
    const emailerror = document.getElementById("emailerror")
    let namestatus = mobilestatus = emailstatus = false;
    const alphaExp = /^[a-zA-Z]+$/
    const numExp = /^[0-9]+$/
    const mailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    

    
   
    


    //Name Validation
   if(username === ""){
   nameerror.innerHTML = "Name is Mandatory"
   }
   else{
    if(username.match(alphaExp)){
        nameerror.innerHTML = ""
        namestatus = true
    }
    else{
        nameerror.innerHTML = "Only Characters"
    }
   
   }


   //Mobilestatus
   if(mobile === ""){
    mobileerror.innerHTML = "Mobile Number is Mandatory"
   }
   else{
    if(mobile.match(numExp)){
       if(mobile.length === 10){
        mobileerror.innerHTML = ""
        mobilestatus = true
       }
       else{
        mobileerror.innerHTML = "Enter 10 digits "
       }
    }
    else{
       mobileerror.innerHTML = "Only Numbers"
    }
   }

   //emailstatus
   if(email === ""){
    emailerror.innerHTML = "Email is Mandatory"
   }
   else{
    if(email.match(mailExp)){
        emailerror.innerHTML = ""
        emailstatus = true
    }
    else{
        emailerror.innerHTML = "Enter valid email"
    }
   }



   //Return validation
   if(namestatus && mobilestatus && emailstatus){
    return true;
   }
   else{
    return false;
   }
}
