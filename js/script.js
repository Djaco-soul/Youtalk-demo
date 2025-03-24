switchClassOnWidth = () => {

    let body = document.getElementById('body');

    if (window.innerWidth < 1024) {
        body.classList.remove('normalWidth');
        body.classList.add('smallWidth');

    } else {
        body.classList.remove('smallWidth');
        body.classList.add('normalWidth');
    }
}

const widthCheck = setInterval(switchClassOnWidth, 1000);


addClassOnClick = (receivingElementId, clickableElementId, className) => {

    let receivingClassElement = document.getElementById(receivingElementId);
    let clickableElement = document.getElementById(clickableElementId);

    addClass = () => {
        receivingClassElement.classList.toggle(className);
    }

    clickableElement.addEventListener('click', addClass);
};

addClassOnClick('header', 'burger', 'header__active');
addClassOnClick('burger', 'burger', 'header__burger-button__active');
addClassOnClick('certificates', 'certificates', 'header__nav__item__active');
addClassOnClick('materials', 'materials', 'header__nav__item__active');



let navBarCollection = document.getElementsByClassName('header__nav__item-box');
for (let navBar of navBarCollection) {

    showElement = () => {
        navBar.classList.add('box__active');
    }

    navBar.previousElementSibling.addEventListener('mousemove', showElement);
    navBar.addEventListener('mousemove', showElement);

    hideElement = () => {
        navBar.classList.remove('box__active');
    }

    navBar.previousElementSibling.addEventListener('mouseleave', hideElement)
    navBar.addEventListener('mouseleave', hideElement);
}