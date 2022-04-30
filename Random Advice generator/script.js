let advice = document.querySelector('#advice');
    let btn = document.querySelector('#btn')
    let adviceobj;

    function getadvice(){
    fetch('https://api.adviceslip.com/advice').then(response =>{
        return response.json();
    }).then(advicedata => {
    adviceobj = advicedata.slip;
        advice.innerHTML = ` 
        <div class="text-center"><span class="text-violet-500 ">ADVICE #${adviceobj.id}
        </span></div>
        <div class="mt-5 "><p>${adviceobj.advice}</p></div> `
        console.log(adviceobj);
    })
    }
    btn.addEventListener('click' , () =>{
    getadvice();
    })