const CANVAS_DIM = 500;
let canvas, memeImage, generateMeme, panel, changeImage, ctx;
let reader = new FileReader();
let img = new Image();

const addImage = (img) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,     // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle
}

const createChangeImageButton = () => {
    changeImage = document.createElement('button');
    changeImage.classList = ['button'];
    changeImage.textContent = "Change Image"
    changeImage.addEventListener('click', () => {
        // remove the changeImage button
        panel.removeChild(changeImage);
        // add the memeImage input
        panel.appendChild(memeImage);
    });
}

const handleImageChange = () => {
    img.src = reader.result;
    addImage(img);
}

const init = () => {
    // defining elements
    canvas = document.getElementById('memeCanvas');
    memeImage = document.getElementById('memeImage');
    generateMeme = document.getElementById('generateMeme');
    panel = document.getElementById('configPanel');

    createChangeImageButton();

    // getting the contex of the canvas
    ctx = canvas.getContext('2d');

    // setting the canvas dimensions
    canvas.height = canvas.width  = CANVAS_DIM;
    
    //  checks for change in the input-file
    memeImage.addEventListener('change', () => {
        reader.readAsDataURL(memeImage.files[0]);
        panel.removeChild(memeImage);
        panel.appendChild(changeImage);
    })

    // file reader event listeners
    reader.onload = handleImageChange;
    reader.onloadend = handleImageChange;
    
    // onclick add a input box
    let hasInput = false;
    canvas.onclick = function(e) {
        if (hasInput) return;
        addInput(e.clientX, e.clientY);
    }
    
    //Function to dynamically add an input box: 
    function addInput(x, y) {
    
        let input = document.createElement('input');
    
        input.type = 'text';
        input.style.position = 'fixed';
        input.style.left = x + 'px';
        input.style.top = y + 'px';
        input.style.opacity = 0.6;
        input.style.border = 'none';
        input.style.outline = 'none';
        input.style.width = '200px';
        input.style.height = '40px';
        input.style.padding = '7px';
        input.style.borderRadius = '5px';
        input.style.fontSize = 'large';

        input.onkeydown = handleEnter;
    
        document.body.appendChild(input);
    
        input.focus();
    
        hasInput = true;
        
        //Key handler for input box:
        function handleEnter(e) {
            let keyCode = e.keyCode;
            if (keyCode === 13) {
                let [top, left] = getInputPostion(input);
                drawText(this.value, left, top);
                document.body.removeChild(this);
                hasInput = false;
            }
        }
        
        function getInputPostion (i) {
            let rect = i.getBoundingClientRect();
            let can = canvas.getBoundingClientRect();
            // console.log(rect.top, rect.right, rect.bottom, rect.left);
            // console.log(can.top, can.right, can.bottom, can.left);
            let top = rect.top - can.top;
            let left = rect.left - can.left;
            return [ top, left ];
        }

        //Draw the text onto canvas:
        function drawText(txt, x, y) {
            ctx.textBaseline = 'top';
            ctx.textAlign = 'left';
            ctx.font = 30 + 'px Impact';
            ctx.lineWidth = 50 / 20;    
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.textAlign = 'start';
            ctx.fillText(txt, x, y);
            ctx.strokeText(txt, x, y, canvas.width, canvas.height);
        }
    }

    generateMeme.addEventListener('click', function() {
        let dimage = canvas.toDataURL("image/jpg");
        this.href = dimage;
    })

}

init();