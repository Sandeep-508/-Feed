window.addEventListener('scroll', function () {
    let navbar = document.getElementById('navbar');
    let links = document.querySelectorAll(".item");
    let span = this.document.querySelectorAll(".bar");

    if (window.scrollY > 500) {
        navbar.classList.add('scrolled');
        links.forEach(e => e.style.color = "white")
        span.forEach(e => e.style.backgroundColor = "white")
    } else {
        navbar.classList.remove('scrolled');
        links.forEach(e => e.style.color = "black")
    }
});
