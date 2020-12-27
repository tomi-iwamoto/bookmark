//faq section variables 
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

//features section variables 
let cat1 = document.getElementById('cat1');
let cat2 = document.getElementById('cat2');
let cat3 = document.getElementById('cat3');

let featuresImg1 = document.getElementById('featuresImg1');
let featuresImg2 = document.getElementById('featuresImg2');
let featuresImg3 = document.getElementById('featuresImg3');



//carousel for features section-----------------------------------


let tab = document.getElementById("cat1-wrap");
let tab2 = document.getElementById("cat2-wrap");
let tab3 = document.getElementById("cat3-wrap");


let featImg = document.getElementById("indFeaturesImg");
let featImg2 = document.getElementById("indFeaturesImg2");
let featImg3 = document.getElementById("indFeaturesImg3");

let indicator1 = document.querySelector(".divider1");
let indicator2 = document.querySelector(".divider2");
let indicator3 = document.querySelector(".divider3");


featImg2.style.display = "none";
featImg3.style.display = "none";
indicator1.style.display = "block";
indicator2.style.display = "none";
indicator3.style.display = "none";
let amountToMove = "-500px";


function slider() {
  featImg.style.display = "flex";
  featImg2.style.display = "none";
  featImg3.style.display = "none";
  indicator1.style.display = "block";
  indicator2.style.display = "none";
  indicator3.style.display = "none";

  featImg.style.transform = "translateX(-" + amountToMove + ")";
}


tab.addEventListener("click", slider);


function slider2() {
  featImg.style.display = "none";
  featImg2.style.display = "flex";
  featImg3.style.display = "none";
  indicator1.style.display = "none";
  indicator2.style.display = "block";
  indicator3.style.display = "none";

  featImg2.style.transform = "translateX(-" + amountToMove + ")";
}

tab2.addEventListener("click", slider2);

function slider3() {
  featImg.style.display = "none";
  featImg2.style.display = "none";
  featImg3.style.display = "flex";
  indicator1.style.display = "none";
  indicator2.style.display = "none";
  indicator3.style.display = "block";

  featImg2.style.transform = "translateX(-" + amountToMove + ")";
}


tab3.addEventListener("click", slider3);




//function to open and close the faq questions section 
// function openClose(){
//     if(para1.style.display === "none"){
//         para1.style.display = "block";
//         arrowClose.style.display = "none";
//         arrowOpen.style.display ="block";

//         para2.style.display = "none";
//         arrowClose2.style.display = "block";
//         arrowOpen2.style.display ="none";

//         para3.style.display = "none";
//         arrowClose3.style.display = "block";
//         arrowOpen3.style.display ="none";

//         para4.style.display = "none";
//         arrowClose4.style.display = "block";
//         arrowOpen4.style.display ="none";

//     } else {
//         para1.style.display = "none";
//         arrowOpen.style.display="none";
//         arrowClose.style.display ="block";

//     }
// }

// openClose();

// function openClose2(){
//     if(para2.style.display === "none"){
//         para2.style.display = "block";
//         arrowClose2.style.display = "none";
//         arrowOpen2.style.display ="block";

//         para1.style.display = "none";
//         arrowClose.style.display = "block";
//         arrowOpen.style.display ="none";

//         para3.style.display = "none";
//         arrowClose3.style.display = "block";
//         arrowOpen3.style.display ="none";

//         para4.style.display = "none";
//         arrowClose4.style.display = "block";
//         arrowOpen4.style.display ="none";


//     } else {
//         para2.style.display = "none";
//         arrowOpen2.style.display="none";
//         arrowClose2.style.display ="block";
//     }
// }

// openClose2();

// function openClose3(){
//     if(para3.style.display === "none"){
//         para3.style.display = "block";
//         arrowClose3.style.display = "none";
//         arrowOpen3.style.display ="block";

//         para1.style.display = "none";
//         arrowClose.style.display = "block";
//         arrowOpen.style.display ="none";

//         para2.style.display = "none";
//         arrowClose2.style.display = "block";
//         arrowOpen2.style.display ="none";

//         para4.style.display = "none";
//         arrowClose4.style.display = "block";
//         arrowOpen4.style.display ="none";


//     } else {
//         para3.style.display = "none";
//         arrowOpen3.style.display="none";
//         arrowClose3.style.display ="block";
//     }
// }

// openClose3();


// function openClose4(){
//     if(para4.style.display === "none"){
//         para4.style.display = "block";
//         arrowClose4.style.display = "none";
//         arrowOpen4.style.display ="block";

//         para3.style.display = "none";
//         arrowClose3.style.display = "block";
//         arrowOpen3.style.display ="none";

//         para1.style.display = "none";
//         arrowClose.style.display = "block";
//         arrowOpen.style.display ="none";

//         para2.style.display = "none";
//         arrowClose2.style.display = "block";
//         arrowOpen2.style.display ="none";

//     } else {
//         para4.style.display = "none";
//         arrowOpen4.style.display="none";
//         arrowClose4.style.display ="block";
//     }
// }

// openClose4();

$(document).ready(() => {
  //the first faq question and paragraph
  $('#arrowClose').show();
  $('#arrowOpen').hide();
  $('#paragraph1').hide();

  $('.faq-quest').on('click', () => {
    $('#paragraph1').slideToggle();
    $('#arrowClose').toggle();
    $('#arrowOpen').toggle();
  })

  $('#arrowClose').on('click', () => {
    $('#arrowClose').hide();
    $('#arrowOpen').show();
    $('#paragraph1').slideToggle();

  })

  $('#arrowOpen').on('click', () => {
    $('#arrowClose').show();
    $('#arrowOpen').hide();
    $('#paragraph1').slideToggle();
  })

  //the second faq question and paragraph
  $('#arrowClose2').show();
  $('#arrowOpen2').hide();
  $('#paragraph2').hide();

  $('.faq-quest2').on('click', () => {
    $('#paragraph2').slideToggle();
    $('#arrowClose2').toggle();
    $('#arrowOpen2').toggle();
  })

  $('#arrowClose2').on('click', () => {
    $('#arrowClose2').hide();
    $('#arrowOpen2').show();
    $('#paragraph2').slideToggle();

  })

  $('#arrowOpen2').on('click', () => {
    $('#arrowClose2').show();
    $('#arrowOpen2').hide();
    $('#paragraph2').slideToggle();
  })

  //the third faq question and paragraph

  $('#arrowClose3').show();
  $('#arrowOpen3').hide();
  $('#paragraph3').hide();

  $('.faq-quest3').on('click', () => {
    $('#paragraph3').slideToggle();
    $('#arrowClose3').toggle();
    $('#arrowOpen3').toggle();
  })

  $('#arrowClose3').on('click', () => {
    $('#arrowClose3').hide();
    $('#arrowOpen3').show();
    $('#paragraph3').slideToggle();

  })

  $('#arrowOpen3').on('click', () => {
    $('#arrowClose3').show();
    $('#arrowOpen3').hide();
    $('#paragraph3').slideToggle();
  })

  //the fourth faq question and paragraph

  $('#arrowClose4').show();
  $('#arrowOpen4').hide();
  $('#paragraph4').hide();

  $('.faq-quest4').on('click', () => {
    $('#paragraph4').slideToggle();
    $('#arrowClose4').toggle();
    $('#arrowOpen4').toggle();
  })

  $('#arrowClose4').on('click', () => {
    $('#arrowClose4').hide();
    $('#arrowOpen4').show();
    $('#paragraph4').slideToggle();
  })

  $('#arrowOpen4').on('click', () => {
    $('#arrowClose4').show();
    $('#arrowOpen4').hide();
    $('#paragraph4').slideToggle();
  })




})


/*--------slider nav--------*/

const navToggle = document.querySelector(".menu-button")
const closebtn = document.querySelector(".closebtn")

navToggle.addEventListener("click", () => {
  document.querySelector(".slider-nav").classList.add("nav-open")
})

closebtn.addEventListener("click", () => {
  document.querySelector(".slider-nav").classList.remove("nav-open")
})
