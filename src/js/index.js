const botaoPersonagens = document.querySelector(".btn-personagens");
const botaoDiversos = document.querySelector(".btn-diversos");

botaoPersonagens.addEventListener('click', () => {
    const boxPersonagens = document.querySelector(".container-personagens");
    const boxDiversos = document.querySelector(".container-diversos");

    boxPersonagens.style.visibility = 'visible';
    boxPersonagens.style.maxHeight = '';
    boxDiversos.style.visibility = 'hidden';
    boxDiversos.style.maxHeight = 0;
});

botaoDiversos.addEventListener('click', () => {
    const boxPersonagens = document.querySelector(".container-personagens");
    const boxDiversos = document.querySelector(".container-diversos");

    boxDiversos.style.visibility = 'visible';
    boxDiversos.style.maxHeight = '';
    boxPersonagens.style.visibility = 'hidden';
    boxPersonagens.style.maxHeight = 0;
});
