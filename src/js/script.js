//HAMBURGER MENU

const hamburger = document.querySelector('.hamburger'), 
menu = document.querySelector('.menu'),
closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () =>
{
  menu.classList.remove('active');
});


//PERCEENT COUNTERS

const counters = document.querySelectorAll('.abilities__rating-percent'), 
  lines = document.querySelectorAll('.abilities__rating-diagrama span');

counters.forEach( (item, i) => {
      lines[i].style.width = item.innerHTML;
});  

///CHANGE STYLE HAMB ON SCROLL
$(document).ready(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop() > 750) {
        $('.hamburger').addClass('scrolled');
      } else {
        $('.hamburger').removeClass('scrolled');
      };

      if ($(this).scrollTop() > 200) {
        $('.sidepanel__title, .sidepanel__divider, .sidepanel__links').addClass('scrolled');
      } else {
        $('.sidepanel__title, .sidepanel__divider, .sidepanel__links').removeClass('scrolled');
      };

      if ($(this).scrollTop() > 200) {
        $('.sidepanel__divider').addClass('scrolled2');
      } else {
        $('.sidepanel__divider').removeClass('scrolled2');
      }

      });
});