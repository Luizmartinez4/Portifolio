// Chamando as classes

const menu = document.querySelector('.menu__hamburger');
const lista = document.querySelector('.header__list');
const header = document.querySelector('.header');
const download = document.querySelector('.download');
const downloadMessage = document.querySelector('.download__message');

// Função que adiciona a classe dos itens para active ao ser clicado, fazendo aparecer uma estilização definida no css

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    lista.classList.toggle('active');
    header.classList.toggle('active');
})

// Função que adiciona a classe de downloadMessage para active ao ser clicado, fazendo aparecer uma mensagem na tela

download.addEventListener('click', () =>  {
    downloadMessage.classList.toggle('active');

    // Tempo para remover a classe active
    setTimeout(() => {
        downloadMessage.classList.remove('active');
    }, 4000);
})