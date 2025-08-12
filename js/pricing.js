document.addEventListener('DOMContentLoaded', () => {
    const labels = document.querySelectorAll(".mobile-plans__tab");
    const prices = document.querySelectorAll(".mobile-plans__prices");

    labels.forEach(selector => {
        selector.addEventListener("click", e => {
            labels.forEach(label => label.classList.remove("mobile-plans__tab--active"));

            selector.classList.add("mobile-plans__tab--active");

            const target = selector.dataset.pricesTarget;

            prices.forEach(price => {
                const isActive = price.dataset.pricesTarget === target;
                price.classList.toggle("mobile-plans__prices--active", isActive);
            });
        });
    });
});
