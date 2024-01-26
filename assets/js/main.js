 
 window.addEventListener('resize', adjustContentHeight);
 window.addEventListener('load', adjustContentHeight);

 function adjustContentHeight() {
     var navHeight = document.querySelector('nav').offsetHeight;
     document.querySelector('main').style.marginTop = navHeight + 'px';
 }