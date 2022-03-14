document.getElementById("btn").addEventListener("click",function(){
  let txt = document.getElementById("input-text").value;
  checkPalindrome(txt);
});

function checkPalindrome(txt){
  let temp_txt = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let len = temp_txt.length;
  let res = document.getElementById("result");
  let i;

  for(i = 0; i < len / 2; i++){
    if(temp_txt[i] !== temp_txt[len-1-i]){
      res.textContent = `No! " ${txt} " is NOT a Palindrome.`
      document.getElementById("input-text").value='';
      return;
    }

    res.textContent = `Yes! " ${txt} " is a Palindrome.`;
    document.getElementById("input-text").value='';
  }
}
