const THEME_ELEMENTS = document.querySelectorAll('.theme');
const THEME_BTN = document.querySelector('.header__theme');

document.addEventListener("DOMContentLoaded", () => {
   if (document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1") === 'dark') {
      for (let i = 0; i < THEME_ELEMENTS.length; i++) {
         THEME_ELEMENTS[i].classList.add('dark');
      };
   };
});

/*------------------------------------BURGER-----------------------------------------*/
document.querySelector('.header__burger').addEventListener('click', function () {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.header-burger__block').classList.toggle('active');
   document.querySelector('body').classList.toggle('lock');
});


/*------------------------------------THEME-----------------------------------------*/
for (let i = 0; i < THEME_ELEMENTS.length; i++) {
   THEME_BTN.addEventListener('click', () => {
      THEME_ELEMENTS[i].classList.toggle('dark');
      if (THEME_ELEMENTS[i].classList.contains('dark')) {
         document.cookie = 'theme=dark';
      } else {
         document.cookie = 'theme=';
      };
   });
};


/*------------------OPEN AND CLOSE POP-UP USER----------------------------------------*/
let userImgs = document.querySelectorAll('.header-user-img');
let userList = document.querySelector('.header-user__block');
for (let i = 0; i < userImgs.length; i++) {
   userImgs[i].addEventListener('click', () => {
      userList.classList.toggle('active');
      document.querySelector('.header-user__shadow').classList.toggle('active');
      document.querySelector('body').classList.toggle('lock');
   });
};
let userIcon = document.querySelector('.header__user');
document.addEventListener('click', (e) => {
   const withinBoundaries = e.composedPath().includes(userIcon);
   if (!withinBoundaries) {
      userList.classList.remove('active');
      document.querySelector('.header-user__shadow').classList.remove('active');
      document.querySelector('body').classList.remove('lock');
   };
});
document.querySelector('.header-user__close').addEventListener('click', () => {
   userList.classList.remove('active');
   document.querySelector('.header-user__shadow').classList.remove('active');
   document.querySelector('body').classList.remove('lock');
});