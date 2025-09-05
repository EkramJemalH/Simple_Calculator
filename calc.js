const screen=document.querySelector(".screen");

const clearBtn=document.querySelector("#btn_clear");
const deleteBtn=document.querySelector("#btn_delete");
const operatorBtn=document.querySelectorAll(".btn_operation");
const numberBtn=document.querySelectorAll(".btn");
const equalBtn=document.querySelector("#btn_equal");

let currentInput="";//a variable to store what the user is typing 
let previousInput="";//a varaiable to store the first number before operator
let operator="";//a variable to store the oprator -,+,*,/,%

//function to update the screen
function updateScreen(value){
 screen.textContent=value;
}

numberBtn.forEach(button =>{
    button.addEventListener("click",() =>{
        currentInput +=button.textContent;
        updateScreen(currentInput);
    })
})

operatorBtn.forEach(button =>{
    button.addEventListener("click",()=>{
        if(currentInput === "")return;//if the user didnt type anything it won't all the user to type any operator
        if(previousInput!==""){
            calculate();//if we have a previous input and operator it will calculate
        }
        operator=button.textContent;
        previousInput=currentInput;//this will free the current input so that the user can type the next number
        currentInput="";

    })

})

equalBtn.addEventListener("click",()=>{
    if(currentInput===""||previousInput==="") return;
    calculate();
    operator="";//Reset operator after calculation
})

clearBtn.addEventListener("click",() =>{
    currentInput="";
    previousInput="";
    operator="";
    updateScreen("");
})

deleteBtn.addEventListener("click",()=>{
    currentInput=currentInput.toString().slice(0,-1);
    if (currentInput === "") {
        updateScreen(previousInput || "0");
    } else {
        updateScreen(currentInput);
    }

})

function calculate(){
    let result;
    const prev=parseFloat(previousInput);
    const curr=parseFloat(currentInput);
    if(isNaN(prev)|| isNaN(curr)) return;
    switch(operator){
        case "+":
           result= prev+curr;
           break;
           case "-":
           result= prev-curr;
           break;
           case "*":
           result= prev*curr;
           break;
           case "/":
           result= prev/curr;
           break;
           case "%":
           result= prev%curr;
           break;
           default:
            return;
    }
    updateScreen(result);
    currentInput=result.toString();
    previousInput="";
}