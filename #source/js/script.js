document.querySelector('.header__burger').addEventListener('click', function () {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.header-burger__block').classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', function () {
   // создаем timeline для анимации переключения между слайдами
   const slideTimeline = gsap.timeline({
      defaults: { duration: 1 },
      paused: true,
   });

   // добавляем анимацию для каждого слайда
   slideTimeline
      .to('.slide1', { opacity: 0, y: '-100%' })
      .to('.slide2', { opacity: 1, y: '0%' })
      .to('.slide2', { opacity: 0, y: '-100%' })
      .to('.slide3', { opacity: 1, y: '0%' });

   // устанавливаем начальный слайд и запускаем timeline
   let currentSlide = 1;
   slideTimeline.progress(0);
   slideTimeline.play();

   // создаем ScrollTrigger для каждого слайда
   gsap.utils.toArray('.slide').forEach((slide, index) => {
      const trigger = index === 0 ? slide : gsap.utils.toArray('.slide')[index - 1];

      ScrollTrigger.create({
         trigger: trigger,
         start: 'top center',
         end: 'bottom center',
         onEnter: () => {
            // определяем, какой слайд должен стать активным
            const slideNumber = parseInt(slide.dataset.slideNumber);

            // если активный слайд не изменился, пропускаем анимацию
            if (slideNumber === currentSlide) return;

            // обновляем текущий слайд и запускаем timeline
            currentSlide = slideNumber;
            slideTimeline.progress(currentSlide - 1).play();
         },
      });
   });
})