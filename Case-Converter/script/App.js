const text = document.getElementById('text_content');
const uppercase = document.getElementById('upper_case');
const lowercase = document.getElementById('lower_case');
const alternate = document.getElementById('alternate_case');
const sentence = document.getElementById('sentence_case');

uppercase.addEventListener('click', () => {
    var content = text.value.toUpperCase();
    text.value = content;
});

lowercase.addEventListener('click', () => {
    var content = text.value.toLowerCase();
    text.value = content;
});

alternate.addEventListener('click', () => {
    const content = text.value;
    const spread = [...content];
    for (let i = 0; i < spread.length; i+=2){
        spread[i] = spread[i].toUpperCase();
    }

    for (let i = 1; i < spread.length; i += 2) {
        spread[i] = spread[i].toLowerCase();    
    }
    const finalString = spread.join("");
    text.value = finalString;
});

sentence.addEventListener('click', () => {
    var string = text.value.toLowerCase();
    string = string.split(' ');

    for (let i = 0; i < string.length; i++){
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }

    const finalString = string.join(" ");
    text.value = finalString;
});
