
let para1 = document.getElementById('paragraph1');
let para2 = document.getElementById('paragraph2');
let para3 = document.getElementById('paragraph3');
let para4 = document.getElementById('paragraph4');

let arrowClose = document.getElementById('arrowClose');
let arrowOpen = document.getElementById('arrowOpen');
let arrowClose2 = document.getElementById('arrowClose2');
let arrowOpen2 = document.getElementById('arrowOpen2');
let arrowClose3 = document.getElementById('arrowClose3');
let arrowOpen3 = document.getElementById('arrowOpen3');
let arrowClose4 = document.getElementById('arrowClose4');
let arrowOpen4 = document.getElementById('arrowOpen4');

function openClose(){
    if(para1.style.display === "none"){
        para1.style.display = "block";
        arrowClose.style.display = "none";
        arrowOpen.style.display ="block";
    } else {
        para1.style.display = "none";
        arrowOpen.style.display="none";
        arrowClose.style.display ="block";
    }
}

openClose();

function openClose2(){
    if(para2.style.display === "none"){
        para2.style.display = "block";
        arrowClose2.style.display = "none";
        arrowOpen2.style.display ="block";
    } else {
        para2.style.display = "none";
        arrowOpen2.style.display="none";
        arrowClose2.style.display ="block";
    }
}

openClose2();

function openClose3(){
    if(para3.style.display === "none"){
        para3.style.display = "block";
        arrowClose3.style.display = "none";
        arrowOpen3.style.display ="block";
    } else {
        para3.style.display = "none";
        arrowOpen3.style.display="none";
        arrowClose3.style.display ="block";
    }
}

openClose3();


function openClose4(){
    if(para4.style.display === "none"){
        para4.style.display = "block";
        arrowClose4.style.display = "none";
        arrowOpen4.style.display ="block";
    } else {
        para4.style.display = "none";
        arrowOpen4.style.display="none";
        arrowClose4.style.display ="block";
    }
}

openClose4();


