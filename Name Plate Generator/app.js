function plateGenerate() {
    let entry = document.getElementById("userText").value;
    let entryLetters = entry.split("");
  
    var plateLetters = document.createElement('ul');
  
    for (var i = 0; i < entryLetters.length; ++i) {
          // create an item for each one
          var listItem = document.createElement('li');
  
          // Add the item text
          listItem.innerHTML = entryLetters[i];
  
          // Add listItem to the listElement
          plateLetters.appendChild(listItem);
      }
  
      document.getElementById("out").innerHTML = plateLetters.innerHTML;
  
  }