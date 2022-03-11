
const dropArea = document.querySelector(".file-upload-area"),
dragText = dropArea.querySelector("header"),
button = document.getElementById("browse"),
input = dropArea.querySelector("input");
let file; 
let fileShow= document.getElementById("file-show");
let changeBtn = document.getElementById("change-div");
let imgTag;

button.onclick = ()=>{
  input.click(); 
}

  input.addEventListener("change", function(){
    
    file = this.files[0];
    dropArea.classList.add("active");
    showFile(); 
  });
  
  
  //If user Drag File Over DropArea
  dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault(); 
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
  });
  
  //If user leave dragged File from DropArea
  dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  });
  
  //If user drop File on DropArea
  dropArea.addEventListener("drop", (event)=>{
    event.preventDefault(); 
    
    file = event.dataTransfer.files[0];
    showFile(); 
  });

  
  function showFile(){
    let fileType = file.type; //getting selected file type
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    console.log(fileType) 
    if (fileType==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
      alert("Doc or Docx file can't be displayed")
      return;
    }
   
      let fileReader = new FileReader(); //creating new FileReader object
      fileReader.onload = ()=>{
        let fileURL = fileReader.result; //passing user file source in fileURL variable
        if(validExtensions.includes(fileType)){
          imgTag = `<img src="${fileURL}" alt="image" width="800" height="745">`
        }
        else{
          imgTag = `<embed src="${fileURL}" width="700" height="575">`; 
        }
        fileShow.innerHTML = imgTag; 
        
      }
      fileReader.readAsDataURL(file);
      
    dragText.textContent = "Drag & Drop to Upload File";
    
    dropArea.classList.remove("active");
}