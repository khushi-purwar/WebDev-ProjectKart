// let filterA= document.getElementById("blur");
// let filterB= document.getElementById("contrast");
// let filterC= document.getElementById("hue-rotate");
// let filterD= document.getElementById("sepia");

// let noFlipBtn = document.getElementById("no-flip");
// let flipXbtn = document.getElementById("flip-x");
// let flipYbtn = document.getElementById("flip-y");


// let uploadButton = document.getElementById("upload-button");
// let image = document.getElementById("chosen-image");

// function resetFliter(){
//     filterA.value="0";
//     filterB.value="100";
//     filterC.value="0";
//     filterD.value="0";

//     noFlipBtn.checked=true;
//     addfilter();
//     flipimage();
// }

// uploadButton.onchange=()=>{
//     resetFliter();
//     document.querySelector(".image-container").style.display="block";
//     let reader = new FileReader();
//     reader.readAsDataURL(uploadButton.file[0]);
//     reader.onload=()=>{
//         image.setAttribute("src",reader.result);
//     }
// }

// let slider = document.querySelectorAll(".image-container").style.display="block";
// slider.forEach(slider => {
//     slider.addEventListener("input",addfliter);
// });

// function addFliter(){
//     image.style.filter=`blur(${filterA.value}px contrast(${filterB.value}%) hue-rotate(${filterC.value}deg) sepia(${filterD.value})%)`;
// }

// let radioBtns=document.querySelectorAll(".flip-option input[type='radio']");
// radioBtns.forEach(radioBtns=>{
//     radioBtns.addEventListener("Click",flipimage);
// });

// function flipimage(){
//     if(flipXbtn.checked){
//         image.style.transform="scaleX(-1)";
//     }
//     else if (flipYbtn.checked){
//         image.style.transform="scaleY(-1)";

//     }
//     else{
//         image.style.transform ="scale(1,1)";
//     }
// }

let filterA = document.getElementById("blur");
let filterB = document.getElementById("contrast");
let filterC = document.getElementById("hue-rotate");
let filterD = document.getElementById("sepia");

let noFlipBtn = document.getElementById("no-flip");
let flipXBtn = document.getElementById("flip-x");
let flipYBtn = document.getElementById("flip-y");

let uploadButton = document.getElementById("upload-button");
let image = document.getElementById("chosen-image");


function resetFilter(){
    filterA.value = "0";
    filterB.value = "100";
    filterC.value = "0";
    filterD.value = "0";
    noFlipBtn.checked = true;
    addFilter();
    flipImage();
}

uploadButton.onchange = () => {
    resetFilter();
    document.querySelector(".image-container").style.display = "block";
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        image.setAttribute("src", reader.result);
    }
}

let sliders = document.querySelectorAll(".filter input[type='range']");
sliders.forEach( slider => {
    slider.addEventListener("input", addFilter);
});

function addFilter(){
    image.style.filter = `blur(${filterA.value}px) contrast(${filterB.value}%) hue-rotate(${filterC.value}deg) sepia(${filterD.value}%)`;
}

let radioBtns = document.querySelectorAll(".flip-option input[type='radio']");
radioBtns.forEach( radioBtn => {
    radioBtn.addEventListener("click", flipImage);
});

function flipImage(){
    if(flipXBtn.checked){
        image.style.transform = "scaleX(-1)";
    }
    else if(flipYBtn.checked){
        image.style.transform = "scaleY(-1)";
    }
    else{
        image.style.transform = "scale(1,1)";
    }
}