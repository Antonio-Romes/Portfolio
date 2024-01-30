 
  
 AOS.init();

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


const by = (seletor) => document.querySelector(seletor);
const $typingText = by(".type-text");
const $cursor = by(".cursor");

const words = ["Desenvolvedor Web."];

const delay = {
    typing: 200,
    keeping: 1000,
    erasing: 100,
    word: 2000,
}

const sleep = (ms) => {

    return new Promise ((resolve) =>{
        setTimeout(() => resolve(),ms);
    });

};

const type = async(word)=>{
    $cursor.classList.add("typing");
    for(const char of word){
        $typingText.textContent += char;
        await sleep(delay.typing);
    }

    $cursor.classList.remove("typing");
    await sleep(delay.keeping);

    for(let i = 1; i <= word.length; i++){
        $typingText.textContent = word.substring(0, word.length -i);
        await sleep(delay.erasing);
    }
}

const loop = async (wordIndex = 0) =>{
    await type(words[wordIndex % words.length])
    setTimeout(async () => {
        await loop(wordIndex + 1)
    },delay.word);
}

document.addEventListener("DOMContentLoaded",() =>{
    loop();
});

