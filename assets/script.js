const burgerIcon = document.querySelector('.navbar-burger')
const navbarMenu = document.querySelector('#nav-links')

burgerIcon.addEventListener('click' , () => {
    navbarMenu.classList.toggle('is-active')
});

