const btn = document.getElementById('emoji-btn');
const emojis = ["๐", "๐", "๐คฃ", "๐", "๐", "๐ค", "๐คจ", "๐", "๐", "๐", "๐", "๐", "๐คฅ", "๐ด", "๐ฅบ", "๐ง", "๐ค", "๐คฉ", 
"๐", "๐ฅณ", "๐", "๐ฑ", "๐ค", "๐ท", "๐ฅด", "๐ณ", "๐คฏ", "๐คซ", "๐ค", "๐ช", "๐ด", "๐ต","๐ถโ๐ซ๏ธ", "๐ฅต", "๐ฅถ", "๐ณ","๐คช","๐ต","๐ฅด",
"๐ตโ๐ซ","๐ ","๐ก","๐คฎ","๐คข","๐ค","๐ท","๐คฌ","๐คง","๐","๐ฅณ"];

btn.addEventListener('mouseover', () => {
    btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];
})

btn.addEventListener('click', () => {
    btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];
})