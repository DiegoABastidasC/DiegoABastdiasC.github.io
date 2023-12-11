let vwAnimationFT = document.querySelectorAll('.animation-from-top');
let vwAnimationFR = document.querySelectorAll('.animation-from-right');
//funcion para determinar si un view esta dentro de la pantalla
function isInViewPort(elem){
    var boundle = elem.getBoundingClientRect();
    return (
        boundle.top >= 0 &&
        boundle.left >= 0 &&
        boundle.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        boundle.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    // console.log(boundle.bottom + 'window inner' + window.innerHeight);
    // return (
    //     boundle.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    // );
}

function scrollHandler(){
    //funcion para reiniciar from top cuando no son visibles
    vwAnimationFT.forEach(function(element){
        if(isInViewPort(element)){
            element.classList.add('animation-from-top');
        }else{
            element.style.opacity = '0';
            element.classList.remove('animation-from-top');
        }
    });
    //funcion para reiniciar from right cuando no son visibles
    vwAnimationFR.forEach(function(element){
        if(isInViewPort(element)){
            element.classList.add('animation-from-right');
        }else{
            element.style.opacity = '0';
            element.classList.remove('animation-from-right');
        }
    });
}

document.querySelector('.page-container').addEventListener('scroll',scrollHandler);




// document.addEventListener("DOMContentLoaded", function(){
//     let vwPageHeader = document.querySelector('.page-header');
//     let vwAnimationAFT = document.querySelectorAll('.animation-from-top');
//     let vwAnimationAFR = document.querySelectorAll('.animation-from-right');
//     // let vwAnimationAA = document.querySelector('.animation-appear');
    
//     function fncToggleVisibility(entries){
//         console.log('looking');
//          entries.forEach(element => {
//              if(element.isIntersecting){
                
//                 vwAnimationAFT.offsetWidth;
//                 vwAnimationAFR.offsetWidth;
//                 // vwAnimationAA.offsetWidth;
//                 vwAnimationAFT[0].classList.add('animation-from-top');
//                 vwAnimationAFT[1].classList.add('animation-from-top');
//                 vwAnimationAFR[0].classList.add('animation-from-right');
//                 vwAnimationAFR[1].classList.add('animation-from-right');
//                 // vwAnimationAA.classList.add('animation-appear');
//             }else{
//                 vwAnimationAFT[0].classList.remove('animation-from-top');
//                 vwAnimationAFT[1].classList.remove('animation-from-top');
//                 vwAnimationAFR[0].classList.remove('animation-from-right');
//                 vwAnimationAFR[1].classList.remove('animation-from-right');
//                 // vwAnimationAA.classList.remove('animation-appear');
//             }
//         });
//     }
//     const options = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.5
//     };
    
//     const observar = new IntersectionObserver(fncToggleVisibility, options)
//     observar.observe(vwPageHeader);

// });