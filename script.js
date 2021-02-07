

let currentoperator = "0";

function checkAns(inputAns, inpNum1, inpNum2){
    var correctAns;
    console.log(currentoperator);
    switch(currentoperator){
        
        case "0":
            correctAns = inpNum1 + inpNum2;
            
            console.log("case 1");
            break;
        case "1":
            correctAns = inpNum1 - inpNum2;
            console.log("case 2");
            console.log(correctAns);
            break;    
        case "2":
            correctAns = inpNum1 * inpNum2;
            console.log("case 3");
            console.log(correctAns);  
            break;
        default:
            console.log(currentoperator);
            console.log("I should not be here");
            correctAns = 0;     
            
    }
    console.log(correctAns);
    if(inputAns == correctAns){
        return "You are right!";
    }
    else{
        return "Wrong Try again";
    }

}

function genNewNumb(){

    var newNumbs ={

        num1 :  Math.floor(Math.random()*10) + 1,
        num2 :  Math.floor(Math.random()*10) + 1
    };
    return newNumbs;
}


questionNum = genNewNumb();

function newQuestion(){
    newQuestionNum = genNewNumb();
    var newQuestString;
    questionNum.num1 = newQuestionNum.num1;
    questionNum.num2 = newQuestionNum.num2;
    currentoperator = document.getElementById("operator").value;
   
    switch (currentoperator){
        case "0":
            newQuestString = newQuestionNum.num1 + ' + '  + newQuestionNum.num2 + ' = ';
            
            console.log("case 1");
            break;
        case "1":
            newQuestString = newQuestionNum.num1 + ' - '  + newQuestionNum.num2 + ' = ';
            console.log("case 2");
            
            break;    
        case "2":
            newQuestString = newQuestionNum.num1 + ' * '  + newQuestionNum.num2 + ' = ';
            console.log("case 3");
       
            break;
        default:
            console.log(currentoperator);
            console.log("I should not be here");
            newQuestString = 'invalid';
            
    }

    
    
    return  newQuestString;
}