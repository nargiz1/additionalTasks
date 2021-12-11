let myInput=document.querySelector("#num");
let myBtn=document.querySelector("#btn");
let myRes=document.querySelector("#result")

function FibonacciNum(num){
    let F=[];
    F[0]=0;
    F[1]=1;
    for(let i=2; i<=num; i++){
        F[i]=F[i-1]+F[i-2];
        F.push(F[i]);
    }
    return F[num];
}

function createElement(){
    if(myRes.childElementCount!=0){
        myRes.removeChild(myRes.childNodes[0]);
    }
    let res=FibonacciNum(parseInt(myInput.value));
    let newP=document.createElement("p");
    newP.classList.add("fs-3");
    newP.innerText=`${myInput.value}th Fibonacci number is ${res}`;
    myRes.append(newP);
    myInput.value="";
    
}
myBtn.addEventListener("click", function(){
    createElement();
})
document.addEventListener("keyup", function(e){
    if(e.keyCode==13){
        createElement();    
    }
})