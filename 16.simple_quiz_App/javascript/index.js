// making dynamic question set

let questionState = ["Bihar","India","Jharkhand","Mizoram","Gujrat"]
let answerString = ["Patna","New Delhi","Ranchi","Aizwal","Ahamdabad"];
let optionString = [
                ["Bhagalpur",`${answerString[0]}`,"Gaya","Munger"] ,
                ["Noida",`${answerString[1]}`,"India Gate","Kolkata"] ,
                [`${answerString[2]}`,"Dhanbaad","Tata","Jamsedpur"] ,
                ["Kolasib","Imphal",`${answerString[3]}`,"Itanagar"] ,
                ["Rohtak","Chandigadh","kanpur",`${answerString[4]}`]
            ];

let questionString=[
    ` What is the Capital City of ${questionState[0]} ?` ,
    ` What is the Capital City of ${questionState[1]}?` ,
    ` What is the Capital City of ${questionState[2]}?` ,
    ` What is the Capital City of ${questionState[3]}?` ,
    ` What is the Capital City of ${questionState[4]}?` ,
];

let userName = prompt("Enter your random UserName?");
// userOption = userOption.toUpperCase();

// if(userOption[0]!='Y'){
//     return;
// }

let QuestionSet =[];

for(let i=0;i<questionString.length;++i){
    QuestionSet += [`
        <div class="question">
        
        <h4>${i+1}. ${questionString[i]} </h4>
        
        <h5><input class="radio" type="radio" name="answer${i}" value="${optionString[i][0]}"> <label for="answer">${optionString[i][0]}</label></h5>
        
        <h5><input class="radio" type="radio" name="answer${i}" value="${optionString[i][1]}"> <label for="answer">${optionString[i][1]}</label></h5>
        
        <h5><input class="radio" type="radio" name="answer${i}" value="${optionString[i][2]}"> <label for="answer">${optionString[i][2]}</label></h5>
        
        <h5><input class="radio" type="radio" name="answer${i}" value="${optionString[i][3]}"> <label for="answer">${optionString[i][3]}</label></h5>
        
        
        
        </div>
        
        <p id="outputFinel"></p>
        `];
}

console.log(QuestionSet);

// taking id for submit button . 
let sumbmitBtn = document.querySelector("#submit");

sumbmitBtn.addEventListener("click",()=>{
    // call stop time counter to stop the program execution
    stopTimeCounter(2);
});


// taking id of question div where we will show the question.
let questionDiv = document.querySelector("#questionDiv");
questionDiv.innerHTML = QuestionSet;

let timeLeftForQuiz = 180;
let totalTime = 0;
// taking id where we will show the timing counter
const quizCounterId = document.querySelector("#Total_Time");
quizCounterId.innerHTML = timeLeftForQuiz;
const Time_Per_Qeustion = document.querySelector("#Time_Per_Qeustion");

let timeCounter = setInterval(() => {
    // console.log(timeLeftForQuiz);
    quizCounterId.innerHTML = timeLeftForQuiz;
    timeLeftForQuiz--;

    Time_Per_Qeustion.innerHTML = totalTime;
    totalTime++;
    
    if(timeLeftForQuiz == -2){
        stopTimeCounter(1);
    }
}, 1000);

// creating stop timing counter to end the quiz.
function stopTimeCounter(time){
    if(time==2){
        alert(`Congratulations!! ${userName} ,
         you have completed your quiz in ${totalTime} sec.`)
    }
    else{
        alert(`oops! ${userName} time is up for the quiz...`);
    }
    clearInterval(timeCounter);

    // resultOfQuiz function call;
    resultOfQuiz();
}


function resultOfQuiz(){
    let qName="";
    let rightAnswer =0;
    for(let i=0;i<5;++i){
        qName = document.getElementsByName(`answer${i}`);
        // console.log(qName);
        for(let j=0;j<4;++j){
            if(qName[j].checked){
                if(qName[j].value == answerString[i]){
                    ++rightAnswer;
                    console.log(qName[j]);
                    console.log(answerString[i],rightAnswer);
                }
            }
        }
    }
    alert(`${userName} ,
            you have answered ${rightAnswer} q. Correctly. in ${totalTime} sec.
             Thankyou So much for taking this quiz.
    `);

    
}

    
    
    
    
    