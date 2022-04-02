const uploadBtn = document.querySelector(".btn");
const downloadBtn = document.querySelector(".download");
const fileIP = document.querySelector("#file-hidden");
const form = document.querySelector(".form")
const processText = document.querySelector(".process")

uploadBtn.addEventListener("click", async function(e){
    e.preventDefault();
   
    console.log(fileIP.files);
    if(!fileIP.files.length){
        processText.style.display = "block";
        return processText.innerHTML = "No files selected"
    }
    this.style.display = "none"
    const formData = new FormData(form);
   
    processText.innerHTML = "Processing..."
    processText.style.display = "block";

   const response = await axios.post("http://localhost:3005/fileupload",formData);

   if(response.status != 200){
    processText.style.display = "block";
    return processText.innerHTML = "Can't upload right now. please try again later."
   }
   processText.style.display = "none";
     e.target.style.display = "none"
     downloadBtn.style.display = "block"
})

downloadBtn.addEventListener("click", async(e)=>{
    e.preventDefault();
    console.log(fileIP.files[0]);
    window.open(`http://localhost:3005/downloadfile?file=${fileIP.files[0].name}`)

})


