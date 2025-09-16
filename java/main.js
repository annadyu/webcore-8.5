if (window.matchMedia("(min-width: 320px) and (max-width: 767px").matches) {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },
    })
}

if (window.matchMedia("(min-width: 768px)").matches) {
    const swiper = document.getElementsByClassName("swiper")[0];
    const btn = document.getElementsByClassName("show_all-btn")[0];

    btn.addEventListener("click", () => {
        swiper.classList.toggle("expanded");
        btn.textContent = swiper.classList.contains("expanded")
            ? "Скрыть"
            : "Показать все";
    });
}