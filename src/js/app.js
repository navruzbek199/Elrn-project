
$('#nav-icon1').click(function(){
    $(this).toggleClass('open');
    $('.hamburger-menu').toggleClass("active");
});
$('.hamburger-menu li').on('click', function(){
  $('.hamburger-menu').removeClass('active')
  $('#nav-icon1').removeClass('open')
});



$(document).ready(function() {

  $(".toggle-accordion").on("click", function() {
    var accordionId = $(this).attr("accordion-id"),
      numPanelOpen = $(accordionId + ' .collapse.in').length;
    
    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionId);
    } else {
      closeAllPanels(accordionId);
    }
  })

  openAllPanels = function(aId) {
    console.log("setAllPanelOpen");
    $(aId + ' .panel-collapse:not(".in")').collapse('show');
  }
  closeAllPanels = function(aId) {
    console.log("setAllPanelclose");
    $(aId + ' .panel-collapse.in').collapse('hide');
  }
     
});



var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
<<<<<<< HEAD
 

var toptag = document.getElementById('toptag');
window.onscroll=function() { funcScroll() };

function funcScroll(){
  if (document.body.scrollTop>100 || document.documentElement.scrollTop>100)
   {
    toptag.style.display="block";
  }
  else{
    toptag.style.display="none";
  }
}

function gototop(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}
var toptag=$('#toptag');
$(window).scroll(function(){
  if($(window).scrollTop()>30)
{
  toptag.css("display","block");
}
else{
  toptag.css("display","none");
}
});
toptag.on('click',function(e){
  e.preventDefoult();
  $('html,body').animate({scrollTop:0},'300');
});
=======





  let xSetter = gsap.utils.pipe(
    gsap.utils.clamp(0, 100),    //make sure the number is between 0 and 100
    gsap.utils.snap(5),          //snap to the closest increment of 5
    gsap.quickSetter("#id", "x", "px") //apply it to the #id element's x property and append a "px" unit
  );

//then later...
xSetter(150) //sets the #el's transform to translateX(100px) (clamped to 100)
xSetter(3)   //sets it to 5px (snapped)




gsap.set(".ball", {xPercent: -50, yPercent: -50});

var ball = document.querySelector(".ball");
var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var mouse = { x: pos.x, y: pos.y };
var speed = 0.1;

var xSet = gsap.quickSetter(ball, "x", "px");
var ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});



wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
>>>>>>> b75061b836035e4e75bf6d3c00fcf5aa360492de
