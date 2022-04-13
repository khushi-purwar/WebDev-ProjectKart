const btn = document.getElementById('btn');
const Result = document.getElementById('Result');


 btn.addEventListener('click',function(e){
       e.preventDefault();
      const p = document.getElementById('p').value;
      const r = document.getElementById('r').value;
      const t = document.getElementById('t').value;
    
      const ci = (p * (1 + (r/100))**t);
      // ** represet power
      Result.innerText = `your interest is $${ci}`;
     


 })