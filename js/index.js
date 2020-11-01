const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


// This listens for a click on all links (it is able to listen for this via the const navLinks, which targets all .nav__link via the querySelectorAll). when it hears a click, it will remove the .nav-open, which slides the menu back off screen. 

navLinks.forEach(link => {
    link.addEventListener('click' , () => {
        document.body.classList.remove('nav-open');
    })
})
