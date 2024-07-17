function init() {
    const cards = document.getElementsByClassName("cards");

    Array.from(cards).forEach(card => {
        document.addEventListener('astro:page-load', () => {
            card.addEventListener("click", flipCard, false);
        })
    });
}

function flipCard(event) {
    event.currentTarget.querySelector(".front").classList.toggle("hide");
    event.currentTarget.querySelector(".back").classList.toggle("hide");
}

init();
document.addEventListener("astro:after-swap", init);