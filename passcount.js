let saveEl=document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count=0;
// console.log(saveEl)
function increment(){
    count=count+1
    countEl.innerText=count
}
function decrement(){
    count=count-1
    if(count<0){
        alert("Error")
        count=0;
    }
    countEl.innerText=count
}
function save(){
    let countstr=count +" - "
    saveEl.textContent += countstr
    console.log(count)
}