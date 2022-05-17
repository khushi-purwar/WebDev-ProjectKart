function getInputValue() {
  var inputVal = document.getElementById("userinput").value;

  if (isValidISBN(inputVal)) {
    document.getElementById("result").value = "Valid ISBN Number";
  }
  else {
    document.getElementById("result").value = "Not a Valid ISBN Number";
  }
}

function isValidISBN(isbn)
{
       
    let n = isbn.length;
    if (n != 10)
        return false;


    let sum = 0;
    for (let i = 0; i < 9; i++)
    {
        let digit = isbn[i] - '0';
           
        if (0 > digit || 9 < digit)
            return false;
               
        sum += (digit * (10 - i));
    }

    let last = isbn[9];
    if (last != 'X' && (last < '0' || last > '9'))
        return false;


    sum += ((last == 'X') ? 10 : (last - '0'));

    return (sum % 11 == 0);
}







function reset() {
  document.getElementById("userinput").value = "";
  document.getElementById("result").value = "";
}