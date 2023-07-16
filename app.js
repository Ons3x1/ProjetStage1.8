const splash= document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{

    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})

function mainx() {
    var element = document.getElementById("cx");
element.style.color = "white";
}

function main() {
    var element = document.getElementById("element");
element.style.color = "white";

}



function main2() {
    var element = document.getElementById("element2");
element.style.color = "white";
}


function main3() {
    var element = document.getElementById("element3");
element.style.color = "white";
}

function main4() {
    var element = document.getElementById("element4");
element.style.color = "white";
}



function main5() {
    var element = document.getElementById("element5");
element.style.color = "white";
}

function main6() {
    var element = document.getElementById("element6");
element.style.color = "white";
}

function main7() {
    var element = document.getElementById("element7");
element.style.color = "white";
}

function main8() {
    var element = document.getElementById("element8");
element.style.color = "white";
}


function main9() {
    var element = document.getElementById("offre");
element.style.color = "grey";
}

function main10() {
    var element = document.getElementById("appel");
element.style.color = "grey";
}

function mainF() {
    var element = document.getElementById("F");
element.style.color = "grey";
}




function outF(){
    var element = document.getElementById("F");
    element.style.color = "black";
    
   
} 

function mainA() {
    var element = document.getElementById("A");
element.style.color = "grey";
}




function outA(){
    var element = document.getElementById("A");
    element.style.color = "black";
    
   
} 

function out(){
    var element = document.getElementById("element");
    element.style.color = "rgb(54, 54, 54)";
    
   
} 

function out2(){
    var element = document.getElementById("element2");
    element.style.color = "rgb(54, 54, 54)";
    
   
}

function out3(){
    var element = document.getElementById("element3");
    element.style.color = "rgb(54, 54, 54)";
    
   
}

function out4(){
    var element = document.getElementById("element4");
    element.style.color = "rgb(54, 54, 54)";
    
   
} 
function out5(){
    var element = document.getElementById("element5");
    element.style.color = "black";
    
   
}

function out6(){
    var element = document.getElementById("element6");
    element.style.color = "black";
    
   
}
function out7(){
    var element = document.getElementById("element7");
    element.style.color = "black";
    
   
}

function out8(){
    var element = document.getElementById("element8");
    element.style.color = "black";
    
   
}

function out9(){
    var element = document.getElementById("offre");
    element.style.color = "black";
    
   
}

function out10(){
    var element = document.getElementById("appel");
    element.style.color = "black";
    
   

}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

var myIndex2 = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel2, 2000); // Change image every 2 seconds
}
