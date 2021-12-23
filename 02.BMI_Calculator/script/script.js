const btn = document.querySelector("#btn")
btn.addEventListener('click', calculateBMI);

function calculateBMI(){
    const height  = parseInt(document.querySelector("#height").value);
    const weight  = parseInt(document.querySelector("#weight").value);
    const res = document.querySelector("#result");

    if(height === '' || isNaN(height) || height<=0){
        res.innerHTML = "Please provide a valid height!"
    }else if(weight === '' || isNaN(weight) || weight<=0){
        res.innerHTML = "Please provide a valid weight!"
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);   // bmi = weight/ height*height (kg/m^2)

        if(bmi<18.5){
            res.innerHTML = `Underweight <span>${bmi}</span>`
        }else if(bmi>=18.5 && bmi<=24.9){
            res.innerHTML = `Normal <span>${bmi}</span>`
        }else if(bmi>=25 && bmi<=29.9){
            res.innerHTML = `Overweight <span>${bmi}</span>`
        }
        else{
            res.innerHTML = `Obesity <span>${bmi}</span>`
        }
    }
}