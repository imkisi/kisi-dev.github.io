window.addEventListener('focus',function(){
    this.document.title="KiSI - Portfolio";
})
window.addEventListener('blur',function(){
    this.document.title="KiSI - Sketch, Design, Develop";
})

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('ul li a');

    const currentSection = sections.entries().find(([index, section]) => {
        const sectionTop = section.offsetTop;
        return window.scrollY >= sectionTop - 100;
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (currentSection) {
        const currentSectionId = sections[currentSection[0]].id;
        const currentNavLink = document.querySelector(`nav a[href="#${currentSectionId}"]`);
        currentNavLink.classList.add('active');
    }
});