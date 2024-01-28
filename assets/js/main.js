 
  
 let link = document.querySelectorAll('nav a') ;
 

 link.forEach(item => {
    item.addEventListener("click", minhaFuncao)
 })

 function minhaFuncao (e){
    let valueNavHeight = document.querySelector('nav').offsetHeight;

    let valueId = e.target.attributes.value.value;

    let element = document.getElementById(valueId);

    element.style.paddingTop = (valueNavHeight) +"px"; 

    
 }
 
 window.addEventListener("scroll", function() {
     var scrollTop = window.scrollY || document.documentElement.scrollTop; 

    let valueNavHeight = document.querySelector('nav').offsetHeight;

    if(scrollTop <= valueNavHeight){
        let element = document.getElementById('home');

         element.style.paddingTop = (scrollTop) +"px";
    } 
 });