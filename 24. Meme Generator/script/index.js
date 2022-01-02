const CANVAS_DIM = 500;
let canvas, memeImage, generateMeme, panel, changeImage,  addText, ctx;
let reader = new FileReader();
let img = new Image();

const generate = (img) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,     // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle
}

const handleChangeImage = () => {
    // remove the changeImage button
    panel.removeChild(changeImage);
    // add the memeImage input
    panel.appendChild(memeImage);
}

const init = () => {
    // defining variables
    canvas = document.getElementById('memeCanvas');
    memeImage = document.getElementById('memeImage');
    generateMeme = document.getElementById('generateMeme');
    panel = document.getElementById('configPanel');
    addText = document.getElementById('addText');

    changeImage = document.createElement('button');
    changeImage.textContent = "Change Image"
    changeImage.addEventListener('click', handleChangeImage);

    // getting the contex of the canvas
    ctx = canvas.getContext('2d');

    // setting the canvas dimensions
    canvas.height = canvas.width  = CANVAS_DIM;
    
    const handleImage = () => {
        img.src = reader.result;
        generate(img);
    }
    memeImage.addEventListener('change', () => {
        reader.readAsDataURL(memeImage.files[0]);
        panel.removeChild(memeImage);
        panel.appendChild(changeImage);
    })

    reader.onload = handleImage;
    reader.onloadend = handleImage;

}

init();