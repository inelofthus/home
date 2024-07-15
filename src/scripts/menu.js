document.addEventListener('astro:page-load', () => {
    const mql = window.matchMedia("(max-width: 636px)")
    mql.addEventListener("change", closeMenu)

    document
        .querySelector(".hamburger")
        .addEventListener("click", toggleMenu);
})

function closeMenu() {
    document
        .querySelector(".nav-links")
        .classList.remove("expanded");
}

function toggleMenu() {
    document
        .querySelector(".nav-links")
        .classList.toggle("expanded");
}
