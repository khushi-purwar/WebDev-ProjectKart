const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");


fetch('values.json')
  .then((res) => {
    return res.json();
  }).then((data) => {


    let q1 =data.questions[0].q1
    let q2 =data.questions[1].q2
    let q3 =data.questions[2].q3
    let a1 = data.questions[0].a1
    let a2 = data.questions[1].a2
    let a22 = data.questions[1].a22
    let a3 = data.questions[2].a3



    recognition.addEventListener("result", (e) => {
      texts.appendChild(p);
      const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      p.innerText = text;

      // 🅰🅽🆂🆆🅴🆁🆂 🆃🅾 🆀🆄🅴🆂🆃🅸🅾🅽 【1】
      if (e.results[0].isFinal) {
        if (text.includes(q1)) {
          p = document.createElement("p");
          p.classList.add("reply");
          // 𝓪𝓷𝓼𝔀𝓮𝓻𝓼 𝓽𝓸 𝓫𝓮 𝓭𝓲𝓼𝓹𝓵𝓪𝔂𝓮𝓭 𝓲𝓷𝓼𝓲𝓭𝓮 𝓽𝓱𝓮 𝓓𝓞𝓜 𝓮𝓵𝓮𝓶𝓮𝓷𝓽
          p.innerText = a1
          texts.appendChild(p);
        }
        // 🅰🅽🆂🆆🅴🆁🆂 🆃🅾 🆀🆄🅴🆂🆃🅸🅾🅽 【2】
        if (
          text.includes(q2)
        ) {
          p = document.createElement("p");
          p.classList.add("reply");
          // 𝓪𝓷𝓼𝔀𝓮𝓻𝓼 𝓽𝓸 𝓫𝓮 𝓭𝓲𝓼𝓹𝓵𝓪𝔂𝓮𝓭 𝓲𝓷𝓼𝓲𝓭𝓮 𝓽𝓱𝓮 𝓓𝓞𝓜 𝓮𝓵𝓮𝓶𝓮𝓷𝓽
          p.innerText = a2;
          texts.appendChild(p);
          // 𝒶𝓃𝓈𝓌𝑒𝓇𝓈 𝓉♡ 𝒷𝑒 𝓇𝑒𝒹𝒾𝓇𝑒𝒸𝓉𝑒𝒹
          window.open(a22);
        }
        // 🅰🅽🆂🆆🅴🆁🆂 🆃🅾 🆀🆄🅴🆂🆃🅸🅾🅽 【3】
        if (text.includes(q3)) {
          p = document.createElement("p");
          p.classList.add("reply");
          // 𝓪𝓷𝓼𝔀𝓮𝓻𝓼 𝓽𝓸 𝓫𝓮 𝓭𝓲𝓼𝓹𝓵𝓪𝔂𝓮𝓭 𝓲𝓷𝓼𝓲𝓭𝓮 𝓽𝓱𝓮 𝓓𝓞𝓜 𝓮𝓵𝓮𝓶𝓮𝓷𝓽
          p.innerText = a3;
          texts.appendChild(p);
          // 𝒶𝓃𝓈𝓌𝑒𝓇𝓈 𝓉♡ 𝒷𝑒 𝓇𝑒𝒹𝒾𝓇𝑒𝒸𝓉𝑒𝒹
          window.open(a3);
        }
        p = document.createElement("p");
      }
    });
  })
recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
