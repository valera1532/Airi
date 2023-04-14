/*------------------------------Слайдер  НАЧАЛО------------------------------------------*/
const mySwiperSubMain = new Swiper('.manual__slider', {
    /*     loop: true, */
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    slideToClickedSlide: true,
    spaceBetween: 500,
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});
/*------------------------------Слайдер  КОНЕЦ------------------------------------------*/
/*------------------------------ЗУМ на главном экране  НАЧАЛО---------------------------*/
setTimeout(() => {
    document.querySelector('.revolutionary__dating-image').classList.add('_active');
}, 1000);
/*------------------------------ЗУМ на главном экране  КОНЕЦ---------------------------*/
/*--------------Открытие поп-апа при нажатии на кнопки красные  НАЧАЛО-----------------*/
let btnsSignUp = document.querySelectorAll('.revolutionary-dating__main-button-try');
for (let i = 0; i < btnsSignUp.length; i++) {
    btnsSignUp[i].addEventListener('click', () => {
        document.querySelector(".pup-up__info-gender").classList.add("active");
        document.querySelector("body").classList.add("lock");
    });
};
/*--------------Открытие поп-апа при нажатии на кнопки красные  КОНЕЦ-----------------*/
/*---------------------При смене слайда менять цвет шапки НАЧАЛО----------------------*/
mySwiperSubMain.on('slideChange', function () {
    setTimeout(() => {
        if (document.querySelector('.manual-black').classList.contains('swiper-slide-active')) {
            document.querySelector('.manual').classList.add('black');
            document.querySelector('.header').classList.add('whiteL');
            document.querySelector('.header').classList.add('white');
            setTimeout(() => {
                document.querySelector('.manual').classList.add('black-back');
            }, 400);
        } else {
            document.querySelector('.manual').classList.remove('black');
            document.querySelector('.manual').classList.remove('black-back');
            document.querySelector('.header').classList.remove('whiteL');
            document.querySelector('.header').classList.remove('white');
        }
    }, 100);
})
/*---------------------При смене слайда менять цвет шапки КОНЕЦ----------------------*/
/* Стоп автоплея слайдера при загрузке страницы */
mySwiperSubMain.autoplay.stop();
/* старт когда доскролим до автоплея слайдера*/
window.addEventListener('scroll', () => {
    const heightViewport = window.screen.availHeight;
    const scrollPosition = window.scrollY;
    if ((heightViewport * 1.8) <= scrollPosition) {
        mySwiperSubMain.autoplay.start()
    }
});
/* Создание второго слайдера только при экраннах выше 992 пикселя */
if (window.innerWidth > 992) {
    const mySwiperSubMain2 = new Swiper('.economy-section__slider', {
        /*     loop: true, */
        slidesPerView: 1,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        slideToClickedSlide: true,
        spaceBetween: 0,
        slidesPerGroup: 1,
        pagination: {
            el: '.swiper-pagination2',
            type: 'bullets',
            clickable: true,
        },
    });
}

/*------------------------------Анимация кругов первый экран  НАЧАЛО------------------------------------------*/
const circleContainer = document.getElementById('circle-container');
let maxCircleSize = 150; // максимальный размер круга
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
        }, 2500);
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
    if (window.innerWidth > 992) {
        if (((heightViewport - 150) <= scrollPosition) && ((heightViewport * 1.7) >= scrollPosition)) {
            header.classList.add('white');
            header.classList.add('whiteL');
        } else if ((heightViewport * 1.8) <= scrollPosition && (heightViewport * 7.2) >= scrollPosition) {
            header.classList.remove('white');
            header.classList.remove('whiteL');
        } else if ((heightViewport) >= scrollPosition) {
            header.classList.remove('white');
            header.classList.remove('whiteL');
        } else if (((heightViewport * 7.2) <= scrollPosition) && ((heightViewport * 8) >= scrollPosition)) {
            header.classList.add('white');
            header.classList.add('whiteL');
        }
    } else {
        if (((heightViewport * 1.95) <= scrollPosition) && ((heightViewport * 2.7) >= scrollPosition)) {
            header.classList.add('white');
        } else if ((heightViewport * 2.95) <= scrollPosition && (heightViewport * 11.95) >= scrollPosition) {
            header.classList.remove('white');
            header.classList.remove('whiteL');
        } else if ((heightViewport * 2) >= scrollPosition) {
            header.classList.remove('white');
            header.classList.remove('whiteL');
        } else if (((heightViewport * 11.95) <= scrollPosition) && ((heightViewport * 13) >= scrollPosition)) {
            header.classList.add('white');
            header.classList.add('whiteL');
        }
    }
}
window.addEventListener('scroll', () => {
    changeSlide()
});
let arrowsDown = document.querySelectorAll('.arrow-down');
for (let i = 0; i < arrowsDown.length; i++) {
    arrowsDown[i].addEventListener('click', () => {
        window.scroll({
            left: 0,
            top: (window.scrollY + window.innerHeight),
            behavior: 'smooth',
        });
        console.log(window.scrollY);
        console.log(window.innerHeight);
        console.log(window.scrollY + window.innerHeight);
        console.log(document.querySelector('.slide').clientHeight);
    });
};

/*-----------------------------Редактирование Header КОНЕЦ----------------------------------*/
/*----------------------Смена выбранной кнопки на тарифах НАЧАЛО----------------------------*/
let tarifBtns = document.querySelectorAll('.economy-btn');
for (let i = 0; i < tarifBtns.length; i++) {
    tarifBtns[i].addEventListener('click', () => {
        for (let j = 0; j < tarifBtns.length; j++) {
            tarifBtns[j].classList.remove('active')
        }
        tarifBtns[i].classList.add('active')
    });
};
/*----------------------Смена выбранной кнопки на тарифах КОНЕЦ----------------------------*/
/*-------------------------------Скролл вправо НАЧАЛО--------------------------------------*/




// Для начала посмотри на этот код, пойми суть. 
window.addEventListener('scroll', () => {

    const mainTop = window.scrollY;

    const mainViewport = window.innerHeight;

    const mainWidth = window.innerWidth;

    let mainScroll = mainTop - (mainViewport * 2);

    const slideManual = document.querySelectorAll('.div');

    let maxScroll22 = mainWidth * (slideManual.length - 2);

    document.querySelector('.manual').style.minHeight = `${maxScroll22}px `;

    console.log(mainScroll);/* 6937 */ /* 7095 */
    console.log(maxScroll22);/* 8565 */ /* 8565 */
    console.log(mainWidth);/* 1713 */ /* 1713 */ /* 6854 */

    if (mainScroll >= (maxScroll22/*  - mainWidth * 0.5 */)) {
        mainScroll = (maxScroll22/*  - mainWidth * 0.5 */);
    } else if (mainViewport * 2 < mainTop) {
        document.querySelector('.div__block').style.marginLeft = `${-mainScroll}px`;
    };

    const progressBars = document.querySelectorAll('.manual__item-progress');

    let curentSlide = Math.ceil((mainScroll + (mainWidth / 2)) / mainWidth);

    console.log(curentSlide);

    if (curentSlide > 0) {
        for (let i = 0; i < progressBars.length; i++) {
            progressBars[i].classList.remove('active');
            progressBars[curentSlide - 1].classList.add('active');
            progressBars[i].addEventListener('click', () => {
                nextScroll = ((curentSlide * mainWidth)) + (mainViewport * 2);
                window.scroll({
                    left: 0,
                    top: nextScroll,
                    behavior: 'smooth',
                });
            });
        };
    };
});






/*-------------------------------Скролл вправо КОНЕЦ--------------------------------------*/

/*--------------------------Автоматическая печать текста НАЧАЛО----------------------------*/
var CharTimeout = 70; // скорость печатания
var StoryTimeout = 1500; // время ожидания перед переключением

var Summaries = new Array();
var SiteLinks = new Array();

Summaries[0] = "Знакомств";
Summaries[1] = "Встреч";
Summaries[2] = "Поиска";
Summaries[3] = "Общения";
Summaries[4] = "Веселья";

var myTimeoutId;

function startTicker(name) {
    massiveItemCount = Number(Summaries.length);
    CurrentStory = -1;
    CurrentLength = 0;
    AnchorObject = document.getElementById(name);
    console.log(AnchorObject);
    runTheTicker();
}

function runTheTicker() {
    if (myTimeoutId) {
        clearTimeout(myTimeoutId);
    }

    if (CurrentLength == 0) {
        CurrentStory++;
        CurrentStory = CurrentStory % massiveItemCount;
        StorySummary = Summaries[CurrentStory].replace(/"/g, "-");
    }
    AnchorObject.innerHTML = StorySummary.substring(0, CurrentLength) + znak();
    if (CurrentLength != StorySummary.length) {
        CurrentLength++;
        myTimeout = CharTimeout;
    } else {
        CurrentLength = 0;
        myTimeout = StoryTimeout;
    }
    myTimeoutId = setTimeout(runTheTicker, myTimeout);
}

function znak() {
    if (CurrentLength == StorySummary.length) return "";
    else return "";
}

startTicker('Ticker');
/*--------------------------Автоматическая печать текста КОНЕЦ----------------------------*/

/*--------------------------------открытие поп-апа НАЧАЛО---------------------------------*/
document.querySelector(".pup-up__info-repair").addEventListener("click", () => {
    document.querySelector(".pup-up__info-repair-block").classList.add("active");
    document.querySelector("body").classList.add("lock");
});
/*--------------------------------открытие поп-апа КОНЕЦ---------------------------------*/
/*----------------------------открытие датапикера НАЧАЛО---------------------------------*/
$(document).ready(function () {
    $(".calendar-btn").click(function () {
        $(".datepicker-here").datepicker().data("datepicker").show();
    });
});

$(document).ready(function () {
    $(".datepicker-here").datepicker();
    $(".calendar-btn").click(function (event) {
        event.preventDefault();
    });
});
/*----------------------------открытие датапикера КОНЕЦ---------------------------------*/
let inputDate = document.querySelector(".datepicker-here");
inputDate.addEventListener("click", () => {
    if (!document.querySelector(".datepicker__btn")) {
        document.querySelector(".datepicker--content").insertAdjacentHTML(
            "afterend",
            `
       <button class="datepicker__btn">
         Выбрать
       </butoon>
    `
        );
    }
    setTimeout(() => {
        document.querySelector(".datepicker__btn").addEventListener("click", () => {
            document.querySelector(".datepicker").remove();
        });
    }, 200);
});