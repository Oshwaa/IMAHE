// navbar.js
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function setActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.parentElement.classList.remove('active'));
        navLinks[index].parentElement.classList.add('active');
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });
});
