// Chamando a classe
const el = document.querySelector(".texto__animado");

// Texto que deve ser exibido
const text = "Olá, \nMeu nome é Luiz Martinez,\nDesenvolvedor Front-End";

// Tempo de digitação
const interval = 100;

// Função que exibe o texto caractere por caractere com um intervalo definido

function showText(el, text, interval) {

    // Mantém a posição atual do cursor no texto
    let cursorPosition = 0;

    // Armazena o texto a ser exibido
    let content = '';

    // Cria um intervalo que será executado a cada `interval` milissegundos
    const typer = setInterval(() => {

        // Verifica se todos os caracteres foram exibidos
        if (cursorPosition === text.length) {

            // Para o intervalo quando o texto estiver completo
            clearInterval(typer);
            return;
        }

        // Adiciona uma quebra de linha HTML quando encontrar '\n' no texto
        if (text[cursorPosition] === '\n') {
            content += '<br>';
        } else {

            // Adiciona um destaque especial ao texto entre as posições 17 e 29
            if (cursorPosition >= 17 && cursorPosition <= 29) {
                content += `<span class="destaque">${text[cursorPosition]}</span>`;
            } else {

                // Adiciona o caractere normal ao conteúdo
                content += text[cursorPosition];
            }
        }

        // Incrementa a posição do cursor
        cursorPosition++; 

        // Atualiza o HTML do elemento com o conteúdo atual e um cursor
        el.innerHTML = content + '<span class="cursor"></span>';
    }, interval);
}

// Chama a função para exibir o texto no elemento selecionado
showText(el, text, interval);