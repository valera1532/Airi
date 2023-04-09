/*------------------------------Анимация кругов первый экран  НАЧАЛО------------------------------------------*/
const circleContainer = document.getElementById('circle-container');
const maxCircleSize = 150; // максимальный размер круга
const maxCircles = 2; // максимальное количество кругов
const imagePath = 'img/circles/'; // путь к папке с изображениями
const imageCount = 5; // количество доступных изображений

let circlesCount = 0;

function generateCircle() {
    if (circlesCount < maxCircles) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        const img = document.createElement('img');
        img.src = `${imagePath}${Math.floor(Math.random() * imageCount) + 1}.webp`;
        circle.appendChild(img);

        circle.style.width = `${300}px`;
        circle.style.height = `${300}px`;

        const posX = Math.floor(Math.random() * (circleContainer.offsetWidth - 300)) + 1;
        const posY = Math.floor(Math.random() * (circleContainer.offsetHeight - 300)) + 1;
        circle.style.left = `${posX}px`;
        circle.style.top = `${posY}px`;

        let hiddenBlock = document.querySelector('.revolutionary__dating-image').getBoundingClientRect();
        let hiddenBlock2 = document.querySelector('.revolutionary-dating__main').getBoundingClientRect();
        let hiddenWidth1 = hiddenBlock.left + hiddenBlock.width;
        let hiddenheight1 = hiddenBlock.top + hiddenBlock.height;
        if ((posX >= hiddenBlock.left && posX <= hiddenWidth1) && (posY >= hiddenBlock.top && posY <= hiddenheight1)) {
            return;
        }

        circleContainer.appendChild(circle);
        circlesCount++;

        setTimeout(() => {
            circle.classList.add('circle-fade-out');
            setTimeout(() => {
                circleContainer.removeChild(circle);
                circlesCount--;
            }, 3000);
        }, 3000);
    }
}

setTimeout(() => {
    setInterval(() => {
        generateCircle();
    }, 500);
}, 2000);
/*--------------------------Анимация кругов первый экран  КОНЕЦ-------------------------------*/
/*-------------------Анимация текста/блоков/картинок и т.д. НАЧАЛО----------------------------*/

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}
/*-------------------Анимация текста/блоков/картинок и т.д. КОНЕЦ----------------------------*/
/*--------------------------------Z index слайдам НАЧАЛО-------------------------------------*/
let slides = document.querySelectorAll('.slide');
for (let i = 0; i < slides.length; i++) {
    slides[i].style.cssText += `z-index: ${i + 1};`;
};
/*--------------------------------Z index слайдам КОНЕЦ-------------------------------------*/
/*-----------------------------Редактирование Header НАЧАЛО---------------------------------*/
function changeSlide() {
    const heightViewport = window.screen.availHeight;
    const scrollPosition = window.scrollY;
    const header = document.querySelector('.header');
    /*     console.log(scrollPosition); */
    if (((heightViewport - 50) <= scrollPosition) && ((heightViewport * 1.8) >= scrollPosition)) {
        header.classList.add('white');
    } else if ((heightViewport * 1.8) <= scrollPosition && (heightViewport * 5) >= scrollPosition) {
        header.classList.remove('white');
        header.classList.remove('whiteL');
    } else if ((heightViewport) >= scrollPosition) {
        header.classList.remove('white');
        header.classList.remove('whiteL');
    } else if (((heightViewport * 5) <= scrollPosition) && ((heightViewport * 6) >= scrollPosition)) {
        header.classList.add('white');
        header.classList.add('whiteL');
        console.log(5555555555555);
    } else if ((heightViewport * 6) <= scrollPosition && (heightViewport * 10.7) >= scrollPosition) {
        header.classList.remove('white');
        header.classList.remove('whiteL');
    } else if (((heightViewport * 10.7) <= scrollPosition) && ((heightViewport * 11.7) >= scrollPosition)) {
        header.classList.add('white');
    }
}
window.addEventListener('scroll', () => {
    changeSlide()
});


/*-----------------------------Редактирование Header КОНЕЦ----------------------------------*/
/*--------------------------------------НАРАБОТКИ-------------------------------------------*/
/*--------------------------------------НАРАБОТКИ-------------------------------------------*/
/*--------------------------------------НАРАБОТКИ-------------------------------------------*/
let tarifBtns = document.querySelectorAll('.economy-btn');
for (let i = 0; i < tarifBtns.length; i++) {
    tarifBtns[i].addEventListener('click', () => {
        for (let j = 0; j < tarifBtns.length; j++) {
            tarifBtns[j].classList.remove('active')
        }
        tarifBtns[i].classList.add('active')
    });
};


/* gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
   wrapper: '.wrapper__container',
   content: '.wrapper',
}); */
/* window.addEventListener('scroll', e => {
   document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
}); */
/* const firstBlock = document.querySelector('.slide3');
const secondBlock = document.querySelector('.slide4');
const secondBlockTwo = document.querySelector('.slide5');
function changeNextSlide(elPrev, elNext, nameVariable) {
   var lastScroll = 0;
   window.addEventListener('scroll', () => {
       const firstBlockCoords = elPrev.getBoundingClientRect();
       const secondBlockCoords = elNext.getBoundingClientRect();
       if (firstBlockCoords.bottom <= window.innerHeight && secondBlockCoords.top >= 0) {
           if (lastScroll == 0) lastScroll = window.scrollY;
           elNext.classList.add('active')
       } else if (firstBlockCoords.top > window.scrollY) {
           elNext.classList.remove('active')
       }
       function changeScrollTwo() {
           return window.scrollY - lastScroll;
       }
       changeScrollTwo()
       elNext.style.cssText += `--${nameVariable}: ${changeScrollTwo()}px`
   });
} */
/* function offset(el) {
   var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
} */

/* function changeSlide(prevEl, nextEl, nameVariable) {
   const prevBlock = prevEl.getBoundingClientRect();
   const nextBlock = nextEl.getBoundingClientRect();
   const prevElTop = prevEl.offsetTop;
   const prevElHeight = prevEl.clientHeight;
   console.log(prevEl.offsetTop);
   console.log(prevEl.clientHeight);
   window.addEventListener('scroll', () => {
       const scrollPosition = window.scrollY;
       console.log(scrollPosition);
       if (scrollPosition >= prevElTop && scrollPosition >= prevElTop + prevElHeight && scrollPosition < prevElTop + prevElHeight * 2) {
           console.log(11111111);
           prevEl.style.cssText += `position: fixed;`;
           document.querySelector('.wrapper').style.cssText += `margin-top: ${prevElHeight};`;
       }
   })
}
changeSlide(document.querySelector('.slide1'), document.querySelector('.slide2'), "scrollTopTwo"); */
/* changeNextSlide(firstBlock, secondBlock, "scrollTopTwo"); */
/* changeNextSlide(document.querySelector('.slide4'), document.querySelector('.slide5'), "scrollTopFour"); */
/* changeNextSlide(document.querySelector('.slide5'), document.querySelector('.slide6'), "scrollTopThree"); */
/* function changeSlide(slide, nextSlide, nameVariable) {
   window.addEventListener('scroll', () => {
   });
}; */
/* function changeSlide() {
   const heightViewport = window.screen.availHeight;
   const scrollPosition = window.scrollY;
   console.log(heightViewport);
   console.log(scrollPosition);
   if ((heightViewport * 3) <= scrollPosition) { */
/*         document.querySelector('body').classList.add('lock');
        window.scroll({
            left: 0,
            top: (heightViewport * 3),
            behavior: 'auto',
        }); */
/*   disableScroll() */
/*    }
} */
/* window.addEventListener('scroll', () => {
   changeSlide()
   const firstBlockCoords = document.querySelector('.slide3').getBoundingClientRect();
   const secondBlockCoords = document.querySelector('.slide4').getBoundingClientRect();
   if (firstBlockCoords.bottom <= window.innerHeight && secondBlockCoords.top >= 0) {
   } else if (firstBlockCoords.top > window.scrollY) {

   }
}); */


/* var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
   e.preventDefault();
}
function preventDefaultForScrollKeys(e) {
   if (keys[e.keyCode]) {
       preventDefault(e);
       return false;
   }
}
var supportsPassive = false;
try {
   window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
       get: function () { supportsPassive = true; }
   }));
} catch (e) { }
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
function disableScroll() {
   window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
   window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
   window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
function enableScroll() {
   window.removeEventListener('DOMMouseScroll', preventDefault, false);
   window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
   window.removeEventListener('touchmove', preventDefault, wheelOpt);
   window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
*/


