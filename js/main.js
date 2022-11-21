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



$(document).ready(() => {

  $('#indFeaturesImg2').hide();
  $('#indFeaturesImg3').hide();
  $('.divider1').show();
  $('.divider2').hide();
  $('.divider3').hide();

  $('#cat1-wrap').on('click', () => {
    $('#indFeaturesImg').fadeIn(800);
    $('#indFeaturesImg2').hide();
    $('#indFeaturesImg3').hide();
    $('.divider1').show();
    $('.divider2').hide();
    $('.divider3').hide();
  })

  $('#cat2-wrap').on('click', () => {
    $('#indFeaturesImg').hide();
    $('#indFeaturesImg2').fadeIn(800);
    $('#indFeaturesImg3').hide();
    $('.divider1').hide();
    $('.divider2').show();
    $('.divider3').hide();
  })

  $('#cat3-wrap').on('click', () => {
    $('#indFeaturesImg').hide();
    $('#indFeaturesImg2').hide();
    $('#indFeaturesImg3').fadeIn(800);
    $('.divider1').hide();
    $('.divider2').hide();
    $('.divider3').show();
  })

})




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
