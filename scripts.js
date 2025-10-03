document.querySelector(".botao-entrar").onclick = function () {
    window.open("https://www.netflix.com/br/login?serverState=%7B%22realm%22%3A%22growth%22%2C%22name%22%3A%22LOGIN%22%2C%22clcsSessionId%22%3A%2298d65318-8a58-453e-a238-fdbfd9aef1e9%22%2C%22sessionContext%22%3A%7B%22session-breadcrumbs%22%3A%7B%22funnel_name%22%3A%22loginWeb%22%7D%7D%7D", "_blank");
}

document.querySelector(".click-1").onclick = function () {
    window.open("https://www.netflix.com/signup?serverState=%7B%22realm%22%3A%22growth%22%2C%22name%22%3A%22EMAIL_REGISTER_SEND_LINK%22%2C%22clcsSessionId%22%3A%2273a0a15d-8506-45af-86b1-0f4c87f43c46%22%2C%22sessionContext%22%3A%7B%22session-breadcrumbs%22%3A%7B%22funnel_name%22%3A%22signupSimplicity%22%7D%7D%7D", "_blank");
}

document.querySelector(".botao-info").onclick = function () {
    window.open("https://www.netflix.com/br/ads-plan", "_blank");
}

document.addEventListener('DOMContentLoaded', function () {
    const containerPerguntas = document.querySelector('.container-perguntas');
    const containerFinal = document.querySelector('.container-final');
    const imagem = containerPerguntas.querySelector('.imagem-click'); // Seleciona a imagem uma vez

    // Clique no container de perguntas
    containerPerguntas.addEventListener('click', function () {
        // Alterna a classe 'active' no container-final
        containerFinal.classList.toggle('active');

        // Verifica se a imagem já tem a classe 'girar'
        if (imagem.classList.contains('girar')) {
            // Se já tem, remove a classe para voltar à posição normal
            imagem.classList.remove('girar');
        } else {
            // Se não tem, adiciona a classe para girar
            imagem.classList.add('girar');
        }
    });
});
