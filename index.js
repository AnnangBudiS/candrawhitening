const openNav = document.querySelector('.opennav');
const closeNav = document.querySelector('.closenav');


openNav.addEventListener('click', () => {
    document.querySelector('.navbar-items').style.width = "100%"
});

closeNav.addEventListener('click', () => {
    document.querySelector('.navbar-items').style.width = '0';
});