const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    let feet =document.querySelector('#feet');
    let inches = document.querySelector('#inches');
    const results = document.querySelector('#results');

    e.preventDefault();
    feet =parseInt(feet.value);
    inches=parseInt(inches.value);

    if(isNaN(feet)||isNaN(inches)){
        results.textContent="Please enter valid number!";
    }
    else if(feet<0){
        results.textContent="Please enter an inche value between 0 and 12";
    }
    else{
        let totalInches =(feet*12)+inches;
        results.textContent=`${totalInches}cm`;
        document.querySelector('#feet').value='';
        document.querySelector('#inches').value='';
    }
})