
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
