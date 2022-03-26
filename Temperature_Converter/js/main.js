//Write your pseduo code first! 




const calculateTemp = ()=>{
    
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSel = document.getElementById("temp_diff");
    const valueTemp = temp_diff.options[tempSel.selectedIndex].value;
    console.log(valueTemp);

    var emoji = document.getElementById("emoji");
    const celToFah = (cel)=>{
        let farenheit = (cel*9/5) + 32;
        farenheit = farenheit.toFixed(2);
        return farenheit;
    }
    const fahToCel = (fah)=>{
        let celsius = (fah-30)/1.8;
        celsius = celsius.toFixed(2);
        return celsius;
    }

    let result;
    if(valueTemp == "cel"){
        result = celToFah(numberTemp);
        document.getElementById("resultDisplay").innerHTML = `= ${result} &#176;Farenheit`

        if (result<50.00) {
            emoji.innerHTML = `🥶🥶🥶`
        }else if (result >=50.00 && result<=91.40) {
            emoji.innerHTML = `😎😎😎`
        }else{
            emoji.innerHTML = `🥵🥵🥵`
        }

    }else if(valueTemp =="fah"){
        result = fahToCel(numberTemp);
        
        document.getElementById("resultDisplay").innerHTML = `= ${result} &#176;Celsius`;
        if (result<10.00) {
            emoji.innerHTML = `🥶🥶🥶`
        }else if (result >=10.00 && result<=33.00) {
            emoji.innerHTML = `😎😎😎`
        }else{
            emoji.innerHTML = `🥵🥵🥵`
        }
    }else{
        document.getElementById("resultDisplay").innerHTML=`Please select a Scale`
    }
}

