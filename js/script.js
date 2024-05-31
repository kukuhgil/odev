const navbarNav =document.querySelector('.navbar-nav')

document.querySelector('#martabak-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const martabak =document.querySelector('#martabak-menu');

document.addEventListener('click', function(e) {
    if(!martabak.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})