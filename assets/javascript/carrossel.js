// Espera o DOM ser totalmente carregado antes de executar o código

document.addEventListener('DOMContentLoaded', function () {

    // Chamando as classes

    const carousel = document.querySelector('.courses__container');
    const slides = document.querySelectorAll('.courses__slide');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    
    // Índice atual do slide exibido
    let currentIndex = 0;
    
     // Função que atualiza a posição do carrossel com base no índice atual

    function updateCarousel() {

        // Calcula o deslocamento para mover o carrossel para a posição correta
        const offset = -currentIndex * 100;

        // Aplica a transformação CSS para mover o carrossel horizontalmente
        carousel.style.transform = `translateX(${offset}%)`;
    }
    
    // Adiciona um evento ao botão prev ao ser clicado

    prevButton.addEventListener('click', function () {

        // Se não estiver no primeiro slide, move para o slide anterior
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Se estiver no primeiro slide, volta para o último slide
            currentIndex = slides.length - 1;
        }

        // Atualiza o carrossel para exibir o slide correto
        updateCarousel();
    });
    
    // Adiciona um evento ao botão next ao ser clicado

    nextButton.addEventListener('click', function () {

        // Se não estiver no último slide, move para o próximo slide
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            // Se estiver no último slide, move para o primeiro slide
            currentIndex = 0;
        }

        // Função para lidar com redimensionamento da janela

        function handleResize() {

            // Reseta o índice para 0 e atualiza o carrossel
            currentIndex = 0;

            updateCarousel();
        }

        // Adiciona a função que reseta o índice ao redimensionar a tela

        window.addEventListener('resize', handleResize);

        updateCarousel();
    });
});
