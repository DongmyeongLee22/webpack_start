/* Scroll to Top & Navbar bg-color change */
const scrollTop = document.getElementById('scrolltoTop');
const primaryNavbar = document.querySelector('#primary-navbar');

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTop.style.display = 'block';
        primaryNavbar.classList.add('rgba-black-strong');
        primaryNavbar.classList.remove('rgba-black-light');
    } else {
        scrollTop.style.display = 'none';
        primaryNavbar.classList.add('rgba-black-light');
        primaryNavbar.classList.remove('rgba-black-strong');
    }
}

scrollTop.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
});

export {scrollFunction}