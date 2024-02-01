window.addEventListener('scroll', function () {
    let navbar = document.getElementById('navbar');
    let links = document.querySelectorAll(".item");

    if (window.scrollY > 500) {
        navbar.classList.add('scrolled');
        links.forEach(e => e.style.color = "white")
    } else {
        navbar.classList.remove('scrolled');
        links.forEach(e => e.style.color = "black")
    }
});
