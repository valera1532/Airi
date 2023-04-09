document.querySelector('.header__burger-body').addEventListener('click', function () {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.header-burger__block').classList.toggle('active');
});
document.querySelector(".header__punkt-group1-founder").addEventListener("click", () => {
   document.querySelector(".founder").classList.add("active");
   document.querySelector('body').classList.add('lock');
});
document.querySelector(".header__punkt-group1-news").addEventListener("click", () => {
   document.querySelector(".news").classList.add("active");
   document.querySelector('body').classList.add('lock');
});
let userModal = document.querySelector(".user-agriment");
let userBtn = document.querySelector(".header__punkt-group3-user-agriment");
userBtn.addEventListener("click", () => userModal.classList.add("active"));
let popupClose = document.querySelectorAll(".pup-up__close");
for (let i = 0; i < popupClose.length; i++) {
   popupClose[i].addEventListener("click", () => {
      popupClose[i].closest(".popup").classList.remove("active");
      document.querySelector('body').classList.remove('lock');
   });
}
let headerLinks = document.querySelectorAll(".punkts");
for (let i = 0; i < headerLinks.length; i++) {
   headerLinks[i].addEventListener("click", () => {
      document.querySelector('.header__burger').classList.remove('active');
      document.querySelector('.header-burger__block').classList.remove('active');
   }
   )
}



