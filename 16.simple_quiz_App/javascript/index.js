// alert("Inital setup");


// count down part starts from here 
let Time_Per_Qeustion = document.querySelector("#Time_Per_Qeustion")
let Total_Time = document.querySelector("#Total_Time");


let timeStart = 0;
let timePerQ = 300;

console.log(timeStart);
// alert(timeStart)


// count down part ends from here 


// form creation part starts from here

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
];

// for(i=0;i<5;++i){
    //     alert(`
    //         ${questionState[i]}
    //         ${answerString[i]}
    //         ${optionString[i]}
    //         ${questionString[i]}
    //     `);
    // }
    
    
    let radioBtn = document.getElementsByName("answer");
    let outputFinel = document.querySelector("#outputFinel");
    
    let i=0;
    
    
    let output = "";
    
    for(i=0;i<5;++i){
        output += `
        <div class="question">
        
        <h4>${i+1}. ${questionString[i]} </h4>
        
        <h5><input class="radio" type="radio" name="answer${i}" value="${optionString[i][0]}"> <label for="answer">${optionString[i][0]}</label></h5>
        
        <h5><input class="radio" type="radio" name="answer${i}" value="${optionString[i][1]}"> <label for="answer">${optionString[i][1]}</label></h5>
        
        <h5><input class="radio" type="radio" name="answer${i}" value="${optionString[i][2]}"> <label for="answer">${optionString[i][2]}</label></h5>
        
        <h5><input class="radio" type="radio" name="answer${i}" value="${optionString[i][3]}"> <label for="answer">${optionString[i][3]}</label></h5>
        
        
        
        </div>
        
        <p id="outputFinel"></p>
        `;
    }
    
    
    
    
    
    // form creation part ends from here
    let questionDiv = document.querySelector("#questionDiv");
    
    questionDiv.innerHTML = output;
    
    function repeat(){
            timeStart++;
            Total_Time.innerHTML = timeStart;
        
            timePerQ--;
            Time_Per_Qeustion.innerHTML = timePerQ;
            
        }
        
        let settime = setInterval(repeat, 1000);


        // function to calculate result 
        // let rightAnswer = 0;
        // function calculateResult(){
        //     for(i=0;i<5;++i){
        //         let ans = "answer"+i;
        //         let radioBtn = document.getElementsByName("ans")
        //         for(j=0;j<radioBtn.length;++j){
        //             if(radioBtn[j].checked){
        //                 if(radioBtn[j].value == answerString[i]){
        //                     rightAnswer++;
        //                 }
        //             }
        //         }
        //     }
        // };
        
let submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click",()=>{
    let rightAnswer =0;
    for(i=0;i<5;++i){
        let ans = "answer"+i;
        console.log(ans," ",i);
        let radioBtn = document.getElementsByName("ans")
        for(j=0;j<radioBtn.length;++j){
            if(radioBtn[j].checked){
                if(radioBtn[j].value == answerString[i]){
                    rightAnswer++;
                }
            }
        }
    }
    // console.log(rightAnswer);
    alert("ram");
    alert(rightAnswer);
});



// submitBtn.addEventListener("click",()=>{
//     let outString = "radio selected value is : "
//     for(i=0; i<radioBtn.length;++i){
//         if(radioBtn[i].checked){
//             outString+=radioBtn[i].value;
//             outputFinel.innerHTML = outString;
//         }
//     }
// });

