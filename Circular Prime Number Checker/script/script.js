function getInputValue() {
  var num = document.getElementById("num1").value;
  if (checkCircular(num)){
    document.getElementById("result").value = "Circular Prime Number";
  }
  else {
    document.getElementById("result").value = "Not a Circular Prime Number";
  }
}

function isPrime(n)
{
      
    if (n <= 1)
        return false;
    if (n <= 3)
        return true;


    if (n % 2 == 0 || n % 3 == 0)
        return false;

    for (let i = 5; i * i <= n; i = i + 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;

    return true;
}

function checkCircular(N)
{
      
    let count = 0, temp = N;
    while (temp > 0)
    {
        count++;
        temp = parseInt(temp / 10, 10);
    }

    let num = N;
    while (isPrime(num))
    {


        let rem = num % 10;
        let div = parseInt(num / 10, 10);
        num = ((Math.pow(10, count - 1)) * rem) + div;
  
        if (num == N)
            return true;
    }

    return false;
}




function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").value = "";
}