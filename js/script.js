switchClassOnWidth = () => {

    let body = document.getElementById('body');

    if (window.innerWidth < 1024) {
        body.classList.remove('normalWidth');
        body.classList.add('smallWidth');

    } else {
        body.classList.remove('smallWidth');
        body.classList.add('normalWidth');
    }

    let layoutFilters = document.getElementsByClassName('layout__content__item');

    for (let filter of layoutFilters) {

        if (window.innerWidth < 768) {

            filter.classList.remove('tabletLayout', 'computerLayout');
            filter.classList.add('smartphoneLayout');

        } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {

            filter.classList.remove('smartphoneLayout', 'computerLayout');
            filter.classList.add('tabletLayout');

        } else {

            filter.classList.remove('smartphoneLayout', 'tabletLayout');
            filter.classList.add('computerLayout');
        }
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


(function () {

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
})();


let layoutLists = document.getElementsByClassName('layout__list__item');
let layoutFilters = document.getElementsByClassName('layout__content__item');

function hideContent() {

    for (let filter of layoutFilters) {

        if (this.id === 'Все') {

            filter.style.display = 'block';

        } else if (filter.firstElementChild.innerHTML.includes(`${this.id}`)) {

            filter.style.display = 'block';

        } else {

            filter.style.display = 'none';
        }
    }


    changeLayout = () => {

        let result = 0;
        for (let filter of layoutFilters) {

            if (filter.style.display === 'block' && filter.classList.contains('smartphoneLayout')) {

                filter.style.gridColumn = 'span 7';

            } else if (filter.style.display === 'block' && filter.classList.contains('tabletLayout') &&
                result < 2) {

                filter.style.gridColumn = 'span 7';
                filter.classList.remove('threeСolumns');
                filter.classList.add('sevenСolumns');
                result += 1;

            } else if (filter.style.display === 'block' && filter.classList.contains('tabletLayout') &&
                result >= 2) {

                filter.style.gridColumn = 'span 3';
                filter.classList.remove('twoСolumns');
                filter.classList.add('threeСolumns');

            } else if (filter.style.display === 'block' && filter.classList.contains('computerLayout') &&
                result < 2) {

                filter.style.gridColumn = 'span 3';
                filter.classList.remove('twoСolumns');
                filter.classList.add('threeСolumns');
                result += 1;

            } else if (filter.style.display === 'block' && filter.classList.contains('computerLayout') &&
                result >= 2) {

                filter.style.gridColumn = 'span 2';
                filter.classList.remove('threeСolumns');
                filter.classList.add('twoСolumns');
            }
        }
    }
    changeLayout();
}

for (let list of layoutLists) {
    list.addEventListener('click', hideContent);
}
