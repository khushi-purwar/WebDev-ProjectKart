function reset(){
    document.getElementById("value1").value = 0;
    document.getElementById("value2").value = 0;
    document.getElementById("value3").value = 0;
    
    document.getElementById("monthly-interest").innerHTML =" RS/- " +0;
    document.getElementById("monthly-payment").innerHTML ="RS/-" +0;
    document.getElementById("total-repayment").innerHTML ="RS/- " +0;
    document.getElementById("total-interest").innerHTML ="RS/-" +0;
  }
  
  function calculation(){
    
    var loanAmount = document.getElementById("value1").value;
    var interestRate = document.getElementById("value2").value;
    var loanDuration = document.getElementById("value3").value;
     

   var interestPerYear = (loanAmount * interestRate)/100; 
   var monthlyInterest = interestPerYear/12;
    
    
    var monthlyPayment = monthlyInterest + (loanAmount/loanDuration);
    var totalInterestCost = monthlyInterest * loanDuration;
    var totalRepayment = monthlyPayment * loanDuration;
    
    
   document.getElementById("monthly-interest").innerHTML = "RS/- " +monthlyInterest.toFixed(2);
    
    
     document.getElementById("monthly-payment").innerHTML = "RS/- " +monthlyPayment.toFixed(2); 
    
    
    document.getElementById("total-repayment").innerHTML ="RS/- " +totalRepayment.toFixed(2);
    
    
    document.getElementById("total-interest").innerHTML =" RS/- " +totalInterestCost.toFixed(2);
    
  }