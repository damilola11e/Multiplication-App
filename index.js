const num1=Math.floor(Math.random()*10);
const num2=Math.floor(Math.random()*10);
const correctAns=num1*num2;
const questionEl=document.getElementById("question");
const formEl=document.getElementById("form");
const inputEl=document.getElementById("input");
const scoreEl=document.getElementById("score-id");
let score=JSON.parse(localStorage.getItem("score"));
if (!score){
    score=0;
}


questionEl.innerText=`What is ${num1} Multiply by ${num2}?`
scoreEl.innerText=`score:${score}`;

formEl.addEventListener("submit",()=>{
    
    const realAns =+inputEl.value;
    if (correctAns===realAns){
        score++
       updateLocalStorage()
    }else{
        score--
        updateLocalStorage()
    }
})


function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}