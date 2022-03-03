const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const context = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const click = document.querySelector('.snap');
const redRadio = document.querySelector('#red-filter')
const greenRadio = document.querySelector('#green-filter')
const blueRadio = document.querySelector('#blue-filter')
const splitRadio = document.querySelector('#split-filter')
const ghostRadio = document.querySelector('#ghost-filter')
const customRadio = document.querySelector('#custom-filter')
const noRadio = document.querySelector('#no-filter')

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.srcObject = localMediaStream; 
            video.play();
        })
        .catch(error => {
            console.error("Please allow Webcam Access to take Photo", error);
        })
}

function previewToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        context.drawImage(video, 0 , 0, width, height);
        let pixels = context.getImageData(0, 0, width, height);
        if(noRadio.checked === true) {
            pixels = context.getImageData(0, 0, width, height);
            context.globalAlpha = 1;
        }
        if(redRadio.checked === true) {
            pixels = redFilter(pixels);
        }
        if(greenRadio.checked === true) {
            pixels = greenFilter(pixels);
        }
        if(blueRadio.checked === true) {
            pixels = blueFilter(pixels);
        }
        if(splitRadio.checked === true) {
            pixels = rgbSplit(pixels);
        }
        if(ghostRadio.checked === true) {
            pixels = ghostFilter(pixels);
        }
        if(customRadio.checked === true) {
            pixels = customFilter(pixels);
        }
        context.putImageData(pixels, 0, 0);
    }, 16);
}

function redFilter(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i + 0] += 120;
        context.globalAlpha = 1;
    }
    return pixels;
}

function greenFilter(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i + 1] += 120;
        context.globalAlpha = 1;
    }
    return pixels;
}

function blueFilter(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i + 2] += 120;
        context.globalAlpha = 1;
    }
    return pixels;
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // RED
        pixels.data[i + 200] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 250] = pixels.data[i + 2]; // Blue
        context.globalAlpha = 1;
    }
    return pixels;
}

function ghostFilter(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i - 100] = pixels.data[i + 0]; // RED
        pixels.data[i + 150] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 200] = pixels.data[i + 2]; // Blue
        context.globalAlpha = 0.1;
    }
    return pixels;
}

function customFilter(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i + 0] -= red.value; // RED
        pixels.data[i + 1] -= green.value; // GREEN
        pixels.data[i + 2] -= blue.value; // Blue
        context.globalAlpha = 1;
        pixels.data[i + 3] -= alpha.value; //
    }
    return pixels;
}

function takePhoto() {
    click.currentTime = 0;
    click.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'Snap');
    link.innerHTML = `<img src="${data}" alt="Snap"/>`;
    strip.insertBefore(link, strip.firstChild);
}

getVideo();
video.addEventListener('canplay', previewToCanvas)