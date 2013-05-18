var nav = document.getElementById('nav');
var main = document.getElementById('main');
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var touchStartX = 0;
var navStart = 0;
var mainStart = 0;
var navCurrent = 0;
var mainCurrent = 0;

main.addEventListener('touchstart', function(event) {
  touchStartX = event.touches[0].pageX;
  
  var nav = document.getElementById('nav');
  navStart = nav.style.left.substring(0, nav.style.left.length-1);
  (navStart) ? navStart = parseInt(navStart) : navStart = -100;

  var main = document.getElementById('main');
  mainStart = main.style.left.substring(0, main.style.left.length-1);
  (mainStart) ? mainStart = parseInt(mainStart) : mainStart = 0;  
}, false);

main.addEventListener('touchmove', function(event) {  
  var touch = event.targetTouches[0];
  var dragX = (touch.pageX - touchStartX);
  var percent = (dragX / width) * 100;
  navCurrent = navStart + percent;
  nav.style.left = navCurrent + '%';
  mainCurrent = mainStart + percent;
  main.style.left = mainCurrent + '%';
}, false);

main.addEventListener('touchend', function(event) {
  if(mainCurrent < 40) {
    nav.style.left = "-100%";
    main.style.left = "0%";
  }
  else {
    nav.style.left = "0%";
    main.style.left = "100%";    
  }
}, false);
