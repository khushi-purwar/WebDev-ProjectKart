const wrapper = document.querySelector(".wrapper"); //wrapper class activation process
qrInput = wrapper.querySelector(".form input"); //input collecting from wrapper class
generateBtn = wrapper.querySelector(".form button");
qrCodeImage = wrapper.querySelector(".qr img"); //

generateBtn.addEventListener("click", ()=>{
   let qrValue = qrInput.value; //qrValue is a temporary variable which takes the input from the user.
   if(!qrValue){
     return;   //if there is no input, the button will not work.
   }
   generateBtn.innerText = "Generating QR code..";

   qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`; //getting qr image using qr code generator API.
   qrCodeImage.addEventListener("load", ()=>{
      wrapper.classList.add("active"); // the output is shown as Qr code 
      generateBtn.innerText = "Generated QR code";
   })
});

qrInput.addEventListener("keyup", ()=>{
  if(!qrInput.value){
      wrapper.classList.remove("active"); 
   }
});