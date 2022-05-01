function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfirmPassward =document.getElementById("cnfirm-passward").value;
    console.log("Password:",password,'\n',"Confirm Password :",cnfirmPassward);
    let mesaage = document.getElementById("message");

    if(password.length !=0){
        if(password==cnfirmPassward){
            message.textContent =" Password match";
            message.style.backgroundColor ="#1dcd59";
        }
        else{
            message.textContent="Password don't match";
            mesaage.style.background="#ff4d4d";
        }
    }
    else{
        alert("Passward can't be empty");
        message.textContent="";
    }
}