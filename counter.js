const output = document.getElementById("count");
const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const mood = document.getElementById("mood");

let count=0;

mood.addEventListener("click",function(){
localStorage.setItem("color",light);
});
increment.addEventListener("click",function(){
    count++;
    output.innerText = count;
});

decrement.addEventListener("click",function(){
     count--;
     output.innerText = count;
});

reset.addEventListener("click",function(){
    count=0;
    output.innerText = "0";
})
