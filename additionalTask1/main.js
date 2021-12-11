let elemDiv=document.querySelectorAll("#carousel .carousel-item");
let down=document.querySelector(".fa-chevron-down");
let upBtn=document.querySelector(".fa-chevron-up");


function Down(){
    let upper2=document.querySelector(".upper2");
    upper2.classList.remove("upper2");
    if(upper2.nextElementSibling!=null){
        upper2.nextElementSibling.classList.add("upper2");
    }else{
        document.querySelector("section #carousel").firstElementChild.classList.add("upper2");
    }

    let upper=document.querySelector(".upper");
    upper.classList.remove("upper");
    if(upper.nextElementSibling!=null){
        upper.nextElementSibling.classList.add("upper");
    }else{
        document.querySelector("section #carousel").firstElementChild.classList.add("upper");
    }

    let current=document.querySelector(".current");
    current.classList.remove("current");
    if(current.nextElementSibling!=null){
        current.nextElementSibling.classList.add("current");
    }else{
        document.querySelector("section #carousel").firstElementChild.classList.add("current");
    }

    let lower=document.querySelector(".lower");
    lower.classList.remove("lower");
    if(lower.nextElementSibling!=null){
        lower.nextElementSibling.classList.add("lower");
    }else{
        document.querySelector("section #carousel").firstElementChild.classList.add("lower");
    }

    let lower2=document.querySelector(".lower2");
    lower2.classList.remove("lower2");
    if(lower2.nextElementSibling!=null){
        lower2.nextElementSibling.classList.add("lower2");
    }else{
        document.querySelector("section #carousel").firstElementChild.classList.add("lower2");
    }
}

function Up(){
    let upper2=document.querySelector(".upper2");
    upper2.classList.remove("upper2");
    if(upper2.previousElementSibling!=null){
        upper2.previousElementSibling.classList.add("upper2");
    }else{
        document.querySelector("section #carousel").lastElementChild.classList.add("upper2");
    }
    let upper=document.querySelector(".upper");
    upper.classList.remove("upper");
    if(upper.previousElementSibling!=null){
        upper.previousElementSibling.classList.add("upper");
    }else{
        document.querySelector("section #carousel").lastElementChild.classList.add("upper");
    }

    let current=document.querySelector(".current");
    current.classList.remove("current");
    if(current.previousElementSibling!=null){
        current.previousElementSibling.classList.add("current");
    }else{
        document.querySelector("section #carousel").lastElementChild.classList.add("current");
    }

    let lower=document.querySelector(".lower");
    lower.classList.remove("lower");
    if(lower.previousElementSibling!=null){
        lower.previousElementSibling.classList.add("lower");
    }else{
        document.querySelector("section #carousel").lastElementChild.classList.add("lower");
    }

    let lower2=document.querySelector(".lower2");
    lower2.classList.remove("lower2");
    if(lower2.previousElementSibling!=null){
        lower2.previousElementSibling.classList.add("lower2");
    }else{
        document.querySelector("section #carousel").lastElementChild.classList.add("lower2");
    }
}

upBtn.addEventListener("click", function(){
    Up();
})

down.addEventListener("click", function(){
    Down();
})

document.addEventListener("keyup", function(e){
    if(e.keyCode==40){
        Down();
    }
})

document.addEventListener("keyup", function(e){
    if(e.keyCode==38){
        Up();
    }  
})

