function limpa(){
    const remo = document.querySelectorAll(".imagem.adicionada");
    remo.forEach(element => {
        document.querySelector(".cenarios-imagem").removeChild(element)
    });
}

const diversos = {
    1: {
        nome: "Dragon Balls",
        descricao: "Dragon Balls",
        img: "src/imagens/ativarDragonBalls.webp",
        habilidade: "Invocar src/imagens/dragonBall.png",
        habilidadeTamanho: function(mudar){
            mudar.style.height = "300px";
            mudar.style.left = "50%";
            mudar.style.top = "46%";
        },
        habilidadeUsar:function(){
            const mudar = document.querySelector(".cenario-personagem");
            mudar.style.height = "600px";
            mudar.style.top = "10%"
            if(mudar.src.split("src")[1] == "/imagens/ativarDragonBalls.webp")
                mudar.src = "src/imagens/shenron.gif";
        },
        habilidadeAcabar: function(){
            const mudar = document.querySelector(".cenario-personagem");
            const ima = document.createElement("img");
            ima.style.height = "600px";
            ima.style.position = "absolute";
            ima.style.left = "37%";
            ima.style.top = "2%";
            ima.src = "src/imagens/shenron.png";
            ima.classList = "imagem adicionada";
            if(mudar.src.split("src")[1] == "/imagens/shenron.gif"){
                this.habilidadeTamanho(mudar);
                mudar.style.top = "50%";
                mudar.src = "src/imagens/ativarDragonBalls.webp";
                document.querySelector(".cenarios-imagem").appendChild(ima);
            }
        }
    }
}



function mudarDiversos(elemento) {

    limpa();

    var  mudar = document.querySelector(".personagem.ativo");
    if(mudar != null){
        var test = mudar.classList;
        mudar.classList = test[0] + " " + test[1];
    }

    mudar = document.querySelector(".diverso.ativo");
    if(mudar != null){
        var test = mudar.classList;
        mudar.classList = test[0] + " " + test[1];
    }
    document.querySelector(".diverso." + elemento[1]).classList = elemento + " ativo";
    var habi = document.querySelector(".habilidades");
    habi.style.maxHeight = "0";
    habi.style.visibility = "hidden";


    habi = document.querySelector(".habilidades-diversos");
    habi.style.visibility = "visible";
    habi.style.maxHeight = "";

    var num = elemento[1].split("id")[1];

    document.querySelector('.nome').innerText = diversos[num].nome;
    document.querySelector('.descricao').innerText = diversos[num].descricao;
    var escrita = document.querySelectorAll('.escrita');
    escrita[0].style.visibility = 'visible';
    escrita[1].style.visibility = 'visible';
    escrita = document.querySelector('.cenario-personagem');
    escrita.src = diversos[num].img;
    escrita.style.visibility = 'visible';
    diversos[num].habilidadeTamanho(escrita);

    escrita = document.querySelector(".habilidade-diverso");
    escrita.src = diversos[num].habilidade.split(" ")[1];
    escrita.title = diversos[num].habilidade.split(" ")[0];

    escrita = document.querySelector(".btn-habilidade.diverso");
    if(diversos[num].habilidade == ""){
        escrita.classList = escrita.classList + " disable";
    } else {
        escrita.classList = "btn-habilidade diverso " + num;
    }
}

async function ativarDiverso(elemento){

    const bloq = document.querySelector(".btn-habilidade.disable");
    if(bloq != null){
        var classe = bloq.classList;
        var adicionar = classe[2];
        if (classe[2] == "disable") {
            adicionar = classe[1];
        }
        bloq.classList = classe[0] + " " + classe[1] + " " + adicionar;
    }

    elemento.classList = elemento.classList + " disable";

    elemento = elemento.classList;

    var num = elemento[2];

    await new Promise(resolve => setTimeout(resolve, 1000));

    diversos[num].habilidadeUsar();
    await new Promise(resolve => setTimeout(resolve, 3000));

    diversos[num].habilidadeAcabar();

}