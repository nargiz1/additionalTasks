let elemDiv=document.querySelectorAll("#carousel .carousel-item")

function Down(elemDiv){

    for(let i=0; i<elemDiv.length; i++){
        if(elemDiv[i].classList.contains("upper")){
            elemDiv[i].classList.remove("upper");
            if(i==0){
                elemDiv[elemDiv.length-1].classList.add("upper");
            }else{
            elemDiv[i-1].classList.add("upper");
            }
        }
        else if(elemDiv[i].classList.contains("upper2")){
            elemDiv[i].classList.remove("upper2");
            if(i==0){
                elemDiv[elemDiv.length-1].classList.add("upper2");
            }else{
            elemDiv[i-1].classList.add("upper2");
            }
        }
        else if(elemDiv[i].classList.contains("current")){
            elemDiv[i].classList.remove("current");
            if(i==0){
                elemDiv[elemDiv.length-1].classList.add("current");
            }else{
            elemDiv[i-1].classList.add("current");

            }
        }
        else if(elemDiv[i].classList.contains("lower")){
            elemDiv[i].classList.remove("lower");
            if(i==0){
                elemDiv[elemDiv.length-1].classList.add("lower");
            }else{
            elemDiv[i-1].classList.add("lower");

            }
        }
        else if(elemDiv[i].classList.contains("lower2")){
            elemDiv[i].classList.remove("lower2");
            if(i==0){
                elemDiv[elemDiv.length-1].classList.add("lower2");
            }else{
            elemDiv[i-1].classList.add("lower2");

            }
        }
    }
}

function Up(elemDiv){
    for (let i=0; i<elemDiv.length; i++) {
        if(elemDiv[i].classList.contains("upper2")){
            elemDiv[i].classList.remove("upper2");
        }
        else if(elemDiv[i].classList.contains("upper")){
            elemDiv[i].classList.remove("upper");
            elemDiv[i].classList.add("upper2");
        }
        else if(elemDiv[i].classList.contains("current")){
            elemDiv[i].classList.remove("current");
            elemDiv[i].classList.add("upper");
        }
        else if(elemDiv[i].classList.contains("lower")){
            elemDiv[i].classList.remove("lower");
            elemDiv[i].classList.add("current");
        }
        else if(elemDiv[i].classList.contains("lower2")){

            elemDiv[i].classList.remove("lower2");
            elemDiv[i].classList.add("lower");
        }
        else{
        }

    }
    

}
document.addEventListener("keyup", function(e){
    if(e.keyCode==40){
        Down(elemDiv);
    }
})

document.addEventListener("keyup", function(e){
    if(e.keyCode==38){
        Up(elemDiv);
    }  
})