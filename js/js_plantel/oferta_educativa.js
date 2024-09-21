document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const cardWidth = 300; // Debe coincidir con el ancho de las tarjetas en CSS

    let offset = 0;
    const cardCount = document.querySelectorAll('.card').length;
    const maxOffset = -(cardCount - 1) * cardWidth;

    prevButton.addEventListener('click', () => {
        if (offset < 0) {
            offset += cardWidth;
            cardsContainer.style.transform = `translateX(${offset}px)`;
        }
    });

    nextButton.addEventListener('click', () => {
        if (offset > maxOffset) {
            offset -= cardWidth;
            cardsContainer.style.transform = `translateX(${offset}px)`;
        }
    });
});
