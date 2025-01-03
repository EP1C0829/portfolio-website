document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function setActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        if (index >= 0) {
            navLinks.forEach((link) => {
                if (link.getAttribute('href').slice(1) === sections[index].id) {
                    link.classList.add('active');
                }
            });
        }
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);

    
});