// data from html
const  btn = document.querySelector(".container button");
const content = document.querySelector(".content");

// btn event listener
btn.addEventListener("mouseover",mouseover);
btn.addEventListener("click",mouseclick);
btn.addEventListener("mouseout",mouseout);



// mouseover function
function mouseover(){
    content.innerHTML="Get display when the mouse is kept on the button";
}

// mouseclick function
function mouseclick(){
    content.innerHTML = "clicked!"
}

// mouseout function
function mouseout(){
    content.innerHTML="Mouse out";
}