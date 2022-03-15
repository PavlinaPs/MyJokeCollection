const menu = document.getElementById('hamburger-menu');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    const checkVisible = menu.getAttribute('data-visible');
    if(checkVisible === 'false') {
        menu.setAttribute('data-visible', true);
        hamburger.setAttribute('aria-expanded', true);
    } else {
        menu.setAttribute('data-visible', false);
        hamburger.setAttribute('aria-expanded', false);
    }
})