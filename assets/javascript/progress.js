function calcScrollValue() {
    let progresso = document.getElementById('retornar-inicio');
    let pos = document.documentElement.scrollTop;   // Pega a posição ja rolada em relação ao topo

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;     //Calcula a altura da pagina menos o tamanho da tela do usuário
    let scrollValue = Math.round((pos * 100) / calcHeight);     // calcula a porcentagem ja percorrida da página

    // Faz o botão de progresso aparecer apenas após o usuário rolar um pouco a página para baixo
    
    if(pos > 150) {
        progresso.style.display = 'grid';
    } else {
        progresso.style.display = 'none';
    }

    // Aplica a funcionalidade do botão de levar o usuário de volta ao topo da página
    
    progresso.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })

    // Cria o circulo de progresso que é preenchido ao rolar a página

    progresso.style.background = `conic-gradient(#191351 ${scrollValue}%, #004BED ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;