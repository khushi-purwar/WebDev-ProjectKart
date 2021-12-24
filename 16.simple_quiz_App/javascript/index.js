// alert("Inital setup");


let Time_Per_Qeustion = document.querySelector("#Time_Per_Qeustion")

let Total_Time = document.querySelector("#Total_Time");

let timeStart = 0;
let timePerQ = 30;

console.log(timeStart);
// alert(timeStart)

function repeat(){
    timeStart++;
    Total_Time.innerHTML = timeStart;

    timePerQ--;
    Time_Per_Qeustion.innerHTML = timePerQ;
}

let settime = setInterval(repeat, 1000);

// form operation

let qNumber = 1;
let questionState = ["Bihar","India","Jharkhand","Mizoram","Gujrat"]
let answerString = ["Patna","Delhi","Ranchi","Aizwal","Ahamdabad"];
let optionString = [
                        ["Bhagalpur",`${answerString[0]}`,"Gaya","Munger"] ,
                        ["Noida",`${answerString[1]}`,"India Gate","Kolkata"] ,
                        [`${answerString[2]}`,"Dhanbaad","Tata","Jamsedpur"] ,
                        ["Kolasib","Imphal","Itanagar",`${answerString[4]}`] ,
                        ["Rohtak","Chandigadh","kanpur",`${answerString[5]}`]
                   ];

let questionString=[
                        ` What is the Capital City of ${questionState[0]} ?` ,
                        ` What is the Capital City of ${questionState[1]}?` ,
                        ` What is the Capital City of ${questionState[2]}?` ,
                        ` What is the Capital City of ${questionState[3]}?` ,
                        ` What is the Capital City of ${questionState[4]}?` ,
]

// for(i=0;i<5;++i){
//     alert(`
//         ${questionState[i]}
//         ${answerString[i]}
//         ${optionString[i]}
//         ${questionString[i]}
//     `);
// }


let radioBtn = document.getElementsByName("answer");
let submitBtn = document.querySelector("#submit")
let outputFinel = document.querySelector("#outputFinel");

let i=0;


let output = `
                <div class="question">

                <h2>Q No. ${i+1}</h2>
                <h4>${i+1}. ${questionString[i]} </h4>

                <h5><input class="radio" type="radio" name="answer" value="${optionString[i][0]}"> <label for="answer">${optionString[i][0]}</label></h5>

                <h5><input class="radio" type="radio" name="answer" value="${optionString[i][1]}"> <label for="answer">${optionString[i][1]}</label></h5>

                <h5><input class="radio" type="radio" name="answer" value="${optionString[i][2]}"> <label for="answer">${optionString[i][2]}</label></h5>

                <h5><input class="radio" type="radio" name="answer" value="${optionString[i][3]}"> <label for="answer">${optionString[i][3]}</label></h5>

                <button type="submit" id="submit">Submit</button>

                </div>

                <p id="outputFinel"></p>
`;



let questionDiv = document.querySelector("#questionDiv");

// for(i=0;i<5;++i){
    //     // alert(output[i]);
    // }
    
    
    // let qN = 0;
    
questionDiv.innerHTML = output;

// submitBtn.addEventListener("click",()=>{
//     let outString = "radio selected value is : "
//     for(i=0; i<radioBtn.length;++i){
//         if(radioBtn[i].checked){
//             outString+=radioBtn[i].value;
//             outputFinel.innerHTML = outString;
//         }
//     }
// });