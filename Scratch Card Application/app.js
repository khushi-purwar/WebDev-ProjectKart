var num = Math.floor(Math.random() * 4) + 1;

$("#card").wScratchPad({
  size: 100, 
  bg: `Images/Gpay_Card ${num}.jpg`, 
  fg: `Images/front.jpg`, 
  cursor: "pointer",
});
