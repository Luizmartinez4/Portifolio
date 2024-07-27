// Seleciona todos os slides e a mensagem de download
const downloadSlides = document.querySelectorAll('.courses__slide');
const downloadMessageSlide = document.querySelector('.download__message');

// Adiciona um evento de clique a cada slide
downloadSlides.forEach(slide => {
    slide.addEventListener('click', () => {
        // Adiciona a classe 'active' para mostrar a mensagem
        downloadMessageSlide.classList.add('active');

        // Tempo para remover a classe 'active' e esconder a mensagem
        setTimeout(() => {
            downloadMessageSlide.classList.remove('active');
        }, 4000);
    });
});