function wordcheck(text) {
    const letters = text.match(/[a-z]/gi) || [];
  
    return letters.length >= 1;
  }
  
  
  const checks = [wordcheck];
  const textInput = document.querySelector(".text-input");
  const wordCountElement = document.querySelector(".word-count");
  const letterCountElement = document.querySelector(".letter-count");
  const spaceCountElement = document.querySelector(".space-count");
  
  textInput.addEventListener("input", () => {
    const splitted = textInput.value.trim().split(/[\s-]/);
    const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
    const spaceCount = (textInput.value.match(/ /g) || []).length;
    let wordCount = 0;
  
    outer: for (const text of splitted) {
      for (const check of checks) {
        if (!check(text)) {
          continue outer;
        }
      }
  
      wordCount++;
    }
  
    wordCountElement.textContent = wordCount;
    letterCountElement.textContent = letterCount;
    spaceCountElement.textContent = spaceCount;
  });

  function ClearFields() {

    document.getElementById("myInput").value = "";
    wordCountElement.textContent = 0;
    letterCountElement.textContent = 0;
    spaceCountElement.textContent = 0;
    
}
  