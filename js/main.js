const modifiers = {
    elSiteHeaderOpen: 'site-header--open'
}

const elSiteHeader = document.querySelector('.site-header');
const elSiteHeaderMenuToggle = elSiteHeader.querySelector('.site-header__menu-toggle');

if (elSiteHeaderMenuToggle) {
    elSiteHeaderMenuToggle.addEventListener('click', function () {
        elSiteHeader.classList.toggle(modifiers.elSiteHeaderOpen);
    });
}
