window.addEventListener('load', function() {
    let block = document.getElementById('block');
    let scaleCoef = 1;
    let rotateDeg = 0;
    
    // Pos Y manipulation
    let posY = document.getElementById('pos-y');
    posY.addEventListener('input', function() {
        block.style.top = posY.value + 'px';
    })

    // Pos X manipulation
    let posX = document.getElementById('pos-x');
    posX.addEventListener('input', function() {
        block.style.left = posX.value + 'px';
    })

    // Size manipulation
    let size = document.getElementById('size');
    size.addEventListener('input', function() {
        scaleCoef = size.value;
        block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
    })

    // Opacity manipulation
    let opacity = document.getElementById('opacity');
    opacity.addEventListener('input', function() {
        block.style.opacity = opacity.value;
    })

    // Shape manipulation
    let selector = document.getElementById('shape-select');
    let okButton = document.getElementById('ok-shape');
    okButton.addEventListener('click', function() {
        let option = selector.value;
        if(option === '1') {
            block.style.borderRadius = '0';
            rotateDeg = 0;
            block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;;
        } else if(option === '2') {
            block.style.borderRadius = '50%';
        } else if(option === '3') {
            block.style.borderRadius = '0';
            rotateDeg = 45;
            block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;;
        }
    })

    // HEX manipulation
    let hex = document.getElementById('hex');
    hex.addEventListener('keyup', function(e) {
        if(e.key === 'Enter') {
            block.style.backgroundColor = `#${hex.value}`;
        }
    })

    // RGBA manipulation
    let rgbaR = document.getElementById('rgba-r');
    let rgbaG = document.getElementById('rgba-g');
    let rgbaB = document.getElementById('rgba-b');
    let rgbaA = document.getElementById('rgba-a');

    let rgbaInputs = document.querySelectorAll('.rgba-container input');

    rgbaInputs.forEach(function(element) {
        element.addEventListener('input', function() {
            block.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
        })
    })

})