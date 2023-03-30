document.querySelector('.types__btn').addEventListener('click', function () {
    document.querySelector('.types__btn').classList.toggle('active');
    document.querySelector('.types__items').classList.toggle('active');
});

function openLoginPopup() {
    document.querySelector('.popup-login').classList.add('active');
    document.querySelector('body').classList.add('lock');
}
function closeLoginPopup() {
    document.querySelector('.popup-login').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
}
document.querySelector('.popup-login__close').addEventListener('click', () => { closeLoginPopup() })
let btnsPopup = document.querySelectorAll('.btn-popup')
for (let i = 0; i < btnsPopup.length; i++) {
    btnsPopup[i].addEventListener('click', () => { openLoginPopup() })
};


function openEmailPopup() {
    document.querySelector('.popup-email').classList.add('active');
    document.querySelector('body').classList.add('lock');
}
function closeEmailPopup() {
    document.querySelector('.popup-email').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
}
document.querySelector('.popup-email__close').addEventListener('click', () => { closeEmailPopup() })
/* document.querySelector('.authorization__title').addEventListener('click', () => { openEmailPopup() })   */

function passwordsInputsPopupLogin() {
    const inputsPassword = document.querySelectorAll('.password-input');
    const eyePasswordInput = document.querySelectorAll('.popup-login__input-svg');
    for (let i = 0; i < eyePasswordInput.length; i++) {
        eyePasswordInput[i].addEventListener('click', () => {
            eyePasswordInput[i].classList.toggle('active');
            if (inputsPassword[i].type == 'text') {
                inputsPassword[i].setAttribute("type", "password");
            } else {
                inputsPassword[i].setAttribute("type", "text");
            };
        });
    };
};
passwordsInputsPopupLogin();
class ItcTabs {
    constructor(target, config) {
        const defaultConfig = {};
        this._config = Object.assign(defaultConfig, config);
        this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
        this._elButtons = this._elTabs.querySelectorAll('.popup-login-tabs__btn');
        this._elPanes = this._elTabs.querySelectorAll('.popup-login-tabs__pane');
        this._eventShow = new Event('tab.itc.change');
        this._init();
        this._events();
    }
    _init() {
        this._elTabs.setAttribute('role', 'tablist');
        this._elButtons.forEach((el, index) => {
            el.dataset.index = index;
            el.setAttribute('role', 'tab');
            this._elPanes[index].setAttribute('role', 'tabpanel');
        });
    }
    show(elLinkTarget) {
        const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
        const elLinkActive = this._elTabs.querySelector('.popup-login-tabs__btn_active');
        const elPaneShow = this._elTabs.querySelector('.popup-login-tabs__pane_show');
        if (elLinkTarget === elLinkActive) {
            return;
        }
        elLinkActive ? elLinkActive.classList.remove('popup-login-tabs__btn_active') : null;
        elPaneShow ? elPaneShow.classList.remove('popup-login-tabs__pane_show') : null;
        elLinkTarget.classList.add('popup-login-tabs__btn_active');
        elPaneTarget.classList.add('popup-login-tabs__pane_show');
        this._elTabs.dispatchEvent(this._eventShow);
        elLinkTarget.focus();
    }
    showByIndex(index) {
        const elLinkTarget = this._elButtons[index];
        elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
        this._elTabs.addEventListener('click', (e) => {
            const target = e.target.closest('.popup-login-tabs__btn');
            if (target) {
                e.preventDefault();
                this.show(target);
            }
        });
    }
}

// инициализация .popup-login-tabs как табов
new ItcTabs('.popup-login-tabs');