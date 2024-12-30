window.addEventListener('focus',function(){
    this.document.title="KiSI - Portfolio";
})
window.addEventListener('blur',function(){
    this.document.title="KiSI - Sketch, Design, Develop";
})
window.addEventListener('contextmenu', function (e) { 
    e.preventDefault(); 
}, false);
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 100) { // Adjust offset as needed
        currentSection = section;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (currentSection) {
        const currentSectionId = currentSection.getAttribute('id');
        const activeLink = document.querySelector(`nav a[href="#${currentSectionId}"]`);
        activeLink.classList.add('active');
    }
});