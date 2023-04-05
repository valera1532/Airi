document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header-burger__block').classList.toggle('active');
});
// ждем, пока страница полностью загрузится
/* document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollToPlugin);

    const slides = gsap.utils.toArray(".slide");
    let currentSlide = 1;
    function changeSlide(slideNumber) {
        console.log(slideNumber);
        currentSlide = slideNumber;
        if (currentSlide === 1) {
            gsap.to(".header__registrations", { color: "#fff" });
            gsap.to(".slide", { color: "#fff" });
        } else if (currentSlide === 2) {
        } else if (currentSlide === 3) {
        }
        gsap.to(window, {
            duration: 1,
            ease: "power4.inOut",
            scrollTo: { y: window.innerHeight * (currentSlide - 1) }
        });

    } */
    // устанавливаем начальные значения для каждого слайда
/*     gsap.set(slides, { yPercent: -100 });
    gsap.set(".slide1", { yPercent: 0 }); */
/* 
    slides.forEach((slide, index) => {
        ScrollTrigger.create({
            trigger: slide,
            start: "top top",
            end: "bottom bottom",
            onEnter: () => {
                changeSlide(index + 1);
            },
        });
    });

    ScrollTrigger.create({
        trigger: '.scroll',
        start: 'top top',
        end: 'bottom bottom',
        onLeave: (index, direction) => {
            if (direction === 1) {
                currentSlide++;
                if (currentSlide > 6) {
                    currentSlide = 6;
                } else {
                    changeSlide(currentSlide);
                }
            } else {
                currentSlide--;
                if (currentSlide < 1) {
                    currentSlide = 1;
                } else {
                    changeSlide(currentSlide);
                }
            }
        },
    });
}); */