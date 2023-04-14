/* Бургер меню открытие и закрытие НАЧАЛО*/
document.querySelector('.header__burger-body').addEventListener('click', function () {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.header-burger__block').classList.toggle('active');
});
/* Бургер меню открытие и закрытие КОНЕЦ*/

/* Поп-ап в бургере открытие и закрытие НАЧАЛО*/
document.querySelector(".header__punkt-group1-founder").addEventListener("click", () => {
   document.querySelector(".founder").classList.add("active");
   document.querySelector('body').classList.add('lock');
});
/* Поп-ап в бургере открытие и закрытие КОНЕЦ*/

/* Поп-ап новости в бургере открытие и закрытие НАЧАЛО*/
document.querySelector(".header__punkt-group1-news").addEventListener("click", () => {
   document.querySelector(".news").classList.add("active");
   document.querySelector('body').classList.add('lock');
});
/* Поп-ап новости в бургере открытие и закрытие КОНЕЦ*/

/* Поп-ап в бургере открытие и закрытие НАЧАЛО*/
let userModal = document.querySelector(".user-agriment");
let userBtn = document.querySelector(".header__punkt-group3-user-agriment");
userBtn.addEventListener("click", () => userModal.classList.add("active"));
/* Поп-ап в бургере открытие и закрытие КОНЕЦ*/

/* Закрытие поп-апа при клике на крестик НАЧАЛО*/
let popupClose = document.querySelectorAll(".pup-up__close");
for (let i = 0; i < popupClose.length; i++) {
   popupClose[i].addEventListener("click", () => {
      popupClose[i].closest(".popup").classList.remove("active");
      document.querySelector('body').classList.remove('lock');
   });
}
/* Закрытие поп-апа при клике на крестик КОНЕЦ*/

/* Закрытие бургера при клике на один из его пунктов НАЧАЛО*/
let headerLinks = document.querySelectorAll(".punkts");
for (let i = 0; i < headerLinks.length; i++) {
   headerLinks[i].addEventListener("click", () => {
      document.querySelector('.header__burger').classList.remove('active');
      document.querySelector('.header-burger__block').classList.remove('active');
   }
   )
}
/* Закрытие бургера при клике на один из его пунктов КОНЕЦ*/

/* Открпытие авторизации при клике на кнопку НАЧАЛО*/
document.querySelector(".header__sing").addEventListener("click", () => {
   document.querySelector(".pup-up__info-sing").classList.add("active");
   document.querySelector("body").classList.add("lock");
});
/* Открпытие авторизации при клике на кнопку КОНЕЦ*/

/* Открпытие регистрации при клике на кнопку НАЧАЛО*/
document
   .querySelector(".header__registrations")
   .addEventListener("click", () => {
      document.querySelector(".pup-up__info-gender").classList.add("active");
      document.querySelector("body").classList.add("lock");
   });
/* Открпытие регистрации при клике на кнопку КОНЕЦ*/

/* переключение между поп-апами НАЧАЛО*/
let popupInfo = document.querySelectorAll(".pup-up__info");
let popupInfoActive = 0;
let popupInfoNext = document.querySelectorAll(".popup__next");
for (let i = 0; i < popupInfoNext.length; i++) {
   popupInfoNext[i].addEventListener("click", () => {
      popupInfo[popupInfoActive].classList.remove("active");
      console.log(1);
      popupInfo[popupInfoActive + 1].classList.add("active");
      popupInfoActive += 1;
      if (popupInfoActive === popupInfo.length) {
         popupInfoActive = 0;
      }
   });
}
/* переключение между поп-апами КОНЕЦ*/



/* Скрытие и открытие поп-апа НАЧАЛО*/
function passwordsInputsPopupLogin() {
   const inputsPassword = document.querySelectorAll('.password-input');
   const eyePasswordInput = document.querySelectorAll('.popup-login__input-svg');
   for (let i = 0; i < eyePasswordInput.length; i++) {
      eyePasswordInput[i].addEventListener('click', () => {
         if (inputsPassword[i].type == 'text') {
            document.querySelector('.eye-true').classList.remove('active');
            document.querySelector('.eye-false').classList.add('active');
            inputsPassword[i].setAttribute("type", "password");
         } else {
            inputsPassword[i].setAttribute("type", "text");
            document.querySelector('.eye-true').classList.add('active');
            document.querySelector('.eye-false').classList.remove('active');
         };
      });
   };
};
passwordsInputsPopupLogin();
/* Скрытие и открытие поп-апа КОНЕЦ*/


/* Открытие одной новости при клике на определенную новость НАЧАЛО */
let newsItem = document.querySelectorAll('.news__main-block');
for (let i = 0; i < newsItem.length; i++) {
   newsItem[i].addEventListener('click', () => {
      document.querySelector(".news").classList.remove("active");
      document.querySelector(".news__active").classList.add("active");
   });
};
/* Открытие одной новости при клике на определенную новость КОНЕЦ */

/* Закрытие блока с ондной новостью НАЧАЛО */
document.querySelector('.news__active-close').addEventListener('click', () => {
   document.querySelector(".news__active").classList.remove("active");
   document.querySelector("body").classList.remove("lock");
});
/* Закрытие блока с ондной новостью КОНЕЦ */
/* Закрытие блока с ондной новостью и открытие обратно блока с новостями нажатием на стрелку назада НАЧАЛО */
document.querySelector('.news__active-arrow').addEventListener('click', () => {
   document.querySelector(".news__active").classList.remove("active");
   document.querySelector(".news").classList.add("active");
});
/* Закрытие блока с ондной новостью и открытие обратно блока с новостями нажатием на стрелку назада КОНЕЦ */


/* Багованный код добавления надписи ошибки, лучше перписать НАЧАЛО */
/* let errorText = 'Неверный пароль';
let inputsFocus = document.querySelectorAll('.pup-up__info-inp input');
let blocksFocus = document.querySelectorAll('.pup-up__info-inp');
for (let i = 0; i < blocksFocus.length; i++) {
   document.addEventListener('click', () => {
      if (inputsFocus[i] == document.activeElement) {
         blocksFocus[i].classList.add('active');
         blocksFocus[i].innerHTML += `
        <div class="popup__text-error">
            ${errorText}
        </div>
        `;
      } else {
         blocksFocus[i].classList.remove('active');
         blocksFocus[i].querySelector('.popup__text-error').remove();
      };
   });
}; */
/* Багованный код добавления надписи ошибки, лучше перписать КОНЕЦ */