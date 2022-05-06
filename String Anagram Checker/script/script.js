function getInputValue() {
  var word1 = document.getElementById("word1").value;
  var word2 = document.getElementById("word2").value;
  if (checkStringsAnagram(word1,word2)) {
    document.getElementById("result").value = "String Anagrams";
  }
  else {
    document.getElementById("result").value = "Not String Anagrams";
  }
}

function checkStringsAnagram(a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if(len1 !== len2){
     return false;
  }
  let str1 = a.split('').sort().join('');
  let str2 = b.split('').sort().join('');
  if(str1 === str2){
     return true;
  } else { 
     return false;
  }
}







function reset() {
  document.getElementById("word1").value = "";
  document.getElementById("word2").value = "";
  document.getElementById("result").value = "";
}