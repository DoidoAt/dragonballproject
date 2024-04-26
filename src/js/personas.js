function limpa() {
    const remo = document.querySelectorAll(".imagem.adicionada");
    remo.forEach(element => {
        document.querySelector(".cenarios-imagem").removeChild(element)
    });
}


const personagens = {
    1: {
        nome: "Son Goku",
        descricao: ["Son Goku, nascido Kakarotto, é o protagonista das franquias Dragon Ball.\n Ele é neto adotivo de Vovô Gohan, filho de Bardock e Gine, o irmão mais novo de Raditz, o marido de Chichi, pai de Gohan e Goten, avô de Pan e mais tarde tataravô de Goku Jr. \n Alegre, corajoso, e também um pouco ingênuo, Goku é um Saiyajin originalmente enviado à Terra quando criança com a missão de destruí-la. Porém, um acidente altera sua memória, fazendo-o crescer com um coração puro e depois se torna o maior defensor da Terra, e também o líder informal dos Guerreiros Z. \n Seguindo os ensinamentos de seus mestres, ele treina duro e deseja ser sua melhor versão possível. \n\n Algumas de suas principais técnicas são: Kamehameha, Kaio-ken, Genki-dama, Teletransporte Instântanio e seu acesso a transformações."],
        img: "src/imagens/goku2/34.png",
        rosto: "src/imagens/goku2/0.png",
        mudarImagem: function () {
            let images = ["src/imagens/goku2/34.png", "src/imagens/goku2/35.png", "src/imagens/goku2/36.png", "src/imagens/goku2/36.png",
                "src/imagens/goku2/64.png", "src/imagens/goku2/65.png", "src/imagens/goku2/66.png", "src/imagens/goku2/67.png", "src/imagens/goku2/68.png",
                "src/imagens/goku2/35.png", "src/imagens/goku2/36.png",
                "src/imagens/goku2/59.png", "src/imagens/goku2/60.png", "src/imagens/goku2/61.png", "src/imagens/goku2/62.png", "src/imagens/goku2/63.png",
                "src/imagens/goku2/35.png", "src/imagens/goku2/40.png",
                "src/imagens/goku2/59.png", "src/imagens/goku2/60.png", "src/imagens/goku2/61.png", "src/imagens/goku2/62.png", "src/imagens/goku2/63.png",
                "src/imagens/goku2/35.png", "src/imagens/goku2/40.png",
                "src/imagens/goku2/64.png", "src/imagens/goku2/65.png", "src/imagens/goku2/66.png", "src/imagens/goku2/67.png", "src/imagens/goku2/68.png",
                "src/imagens/goku2/69.png", "src/imagens/goku2/70.png", "src/imagens/goku2/71.png", "src/imagens/goku2/72.png", "src/imagens/goku2/72.png",
                "src/imagens/goku2/35.png", "src/imagens/goku2/40.png",
                "src/imagens/goku2/69.png", "src/imagens/goku2/70.png", "src/imagens/goku2/71.png", "src/imagens/goku2/72.png", "src/imagens/goku2/72.png",
                "src/imagens/goku2/35.png", "src/imagens/goku2/40.png",
                "src/imagens/goku2/59.png", "src/imagens/goku2/60.png", "src/imagens/goku2/61.png", "src/imagens/goku2/62.png", "src/imagens/goku2/63.png",
                "src/imagens/goku2/35.png", "src/imagens/goku2/36.png",
                "src/imagens/goku2/35.png", "src/imagens/goku2/36.png"];
            let index = 0;

            let max = images.length - 2;

            const mudar = document.querySelector(".cenario-personagem");

            var change = setInterval(function () {
                if (images.includes("src" + mudar.src.split("src")[1])) {
                    if (index == 0) {
                        mudar.style.left = "48%";
                    }
                    else if (index == 3) {
                        mudar.style.left = "40%";
                    } else if (index == 10) {
                        mudar.style.left = "30%";
                    } else if (index == 17) {
                        mudar.style.left = "40%";
                    } else if (index == 24) {
                        mudar.style.left = "48%";
                    } else if (index == 36) {
                        mudar.style.left = "60%";
                    } else if (index == 43) {
                        mudar.style.left = "70%";
                    } else if (index == 50) {
                        mudar.style.left = "60%";
                    } else if (index == 52) {
                        mudar.style.left = "48%";
                    }
                    mudar.src = images[index];
                    index > max ? index = 0 : index++;
                } else {
                    clearInterval(change);
                }
            }, 110);
        },
        habilidades: {
            1: "Kamehameha src/imagens/kameha.gif",
            2: "Kaio-ken src/imagens/kaioken.gif",
            3: "Instant-Transmission src/imagens/instant.webp",
            4: "Genki-Dama src/imagens/energy.gif"
        },
        transformacao: "Super Saiyajin src/imagens/ssj.gif",
        habilidadeUsar: {
            1: function () {
                limpa();
                let images = ["src/imagens/goku2/89.png", "src/imagens/goku2/88.png", "src/imagens/goku2/88.png", "src/imagens/goku2/88.png", "src/imagens/goku2/93.png",
                    "src/imagens/goku2/93.png", "src/imagens/goku2/88-2.png"];
                const mudarUm = document.querySelector(".cenario-personagem");
                mudarUm.src = images[0];
                let index = 0;

                function criar(num, imag) {
                    let ima = document.createElement('img');
                    ima.style.height = "100px";
                    ima.style.position = "absolute";
                    ima.style.top = "53%";
                    ima.style.left = num + "%";
                    ima.src = imag;
                    ima.classList = "imagem adicionada";
                    return ima;
                }


                var timer = setInterval(function () {

                    if (images.includes("src" + mudarUm.src.split("src")[1])) {
                        limpa();
                        mudarUm.src = images[index];
                        if (index == 1) {
                            let x = parseInt(mudarUm.style.left, 10) + 4;
                            const adiciona = criar(x, "src/imagens/goku2/90.png");
                            for (x; x < 40; x++) {
                                document.querySelector(".cenarios-imagem").appendChild(criar(x, "src/imagens/goku2/88-1.png"));
                            };
                            adiciona.style.left = x + "%";
                            document.querySelector(".cenarios-imagem").appendChild(adiciona);

                        } else if (index == 2) {
                            let x = parseInt(mudarUm.style.left, 10) + 4;
                            const adiciona = criar(x, "src/imagens/goku2/90.png");
                            for (x; x < 50; x++) {
                                document.querySelector(".cenarios-imagem").appendChild(criar(x, "src/imagens/goku2/88-1.png"));
                            };
                            adiciona.style.left = x + "%";
                            document.querySelector(".cenarios-imagem").appendChild(adiciona);
                        } else if (index == 3) {
                            let x = parseInt(mudarUm.style.left, 10) + 4;
                            const adiciona = criar(x, "src/imagens/goku2/90.png");
                            for (x; x < 58; x++) {
                                document.querySelector(".cenarios-imagem").appendChild(criar(x, "src/imagens/goku2/88-1.png"));
                            };
                            adiciona.style.left = x + "%";
                            document.querySelector(".cenarios-imagem").appendChild(adiciona);
                        } else if (index == 4) {

                            let x = parseInt(mudarUm.style.left, 10) + 4;

                            const adiciona = criar(x, "src/imagens/goku2/94.png");

                            for (x; x < 65; x++) {
                                document.querySelector(".cenarios-imagem").appendChild(criar(x, "src/imagens/goku2/93-1.png"));
                            }
                            adiciona.style.left = (x - 1) + "%";
                            document.querySelector(".cenarios-imagem").appendChild(adiciona);

                        } else if (index == 5) {
                            let x = parseInt(mudarUm.style.left, 10) + 4;

                            const adiciona = criar(x, "src/imagens/goku2/94.png");

                            for (x; x < 70; x++) {
                                document.querySelector(".cenarios-imagem").appendChild(criar(x, "src/imagens/goku2/93-1.png"));
                            }
                            adiciona.style.left = (x - 1) + "%";
                            document.querySelector(".cenarios-imagem").appendChild(adiciona);
                        } else if (index == 6) {
                            let x = 72;

                            document.querySelector(".cenarios-imagem").appendChild(criar(x, "src/imagens/effects/23.png"));
                        };

                        index > 5 ? index = 0 : index++;
                    } else {
                        clearInterval(timer);
                    }
                }, 200);

            },
            2: function () {
                limpa();
                let images = ["src/imagens/goku2/75.png", "src/imagens/goku2/74.png", "src/imagens/goku2/9.png", "src/imagens/goku2/31.png", "src/imagens/goku2/32.png", "src/imagens/goku2/33.png"];
                const mudar = document.querySelector(".cenario-personagem");
                let index = 0;
                mudar.src = images[0];

                var timer = setInterval(function () {
                    if (images.includes("src" + mudar.src.split("src")[1])) {

                        mudar.src = images[index];
                        index > 4 ? index = 3 : index++;

                    } else {
                        clearInterval(timer);
                    }



                }, 200);
            },
            3: function () {
                limpa();
                let dist = ["48%", "48%", "32%", "32%", "70%", "70%", "50%", "50%", "65%", "65%", "36%", "36%", "55%", "55%", "43%", "43%", "68%", "68%", "33%", "33%",
                    "30%", "30%", "70%", "70%"];
                let images = ["src/imagens/goku2/79.png", "src/imagens/goku2/1-1.png"];
                let index = 0;
                let max = dist.length - 2;
                const mudar = document.querySelector(".cenario-personagem");
                mudar.src = images[0];


                var timer = setInterval(function () {
                    mudar.style.left = dist[index];
                    if (images.includes("src" + mudar.src.split("src")[1])) {
                        if (index % 2 == 0) {
                            mudar.src = images[0];
                        } else {
                            mudar.src = images[1];
                        }

                        index > max ? index = 0 : index++;


                    } else {
                        clearInterval(timer);
                    }
                }, 100);
            },
            4: function () {
                limpa();
                let images = ["src/imagens/goku2/95.png", "src/imagens/goku2/95.png", "src/imagens/goku2/95.png", "src/imagens/goku2/95.png", "src/imagens/goku2/95.png",
                    "src/imagens/goku2/96.png", "src/imagens/goku2/96.png", "src/imagens/goku2/96.png", "src/imagens/goku2/96.png", "src/imagens/goku2/96.png",
                    "src/imagens/goku2/96.png", "src/imagens/goku2/96.png"];
                let index = 0;
                const mudar = document.querySelector(".cenario-personagem");
                let ima = document.createElement('img');
                ima.style.height = "0px";
                ima.style.position = "absolute";
                ima.style.top = "30%";
                ima.style.left = mudar.style.left;
                ima.src = "src/imagens/goku2/324.png";
                ima.classList = "imagem adicionada";
                mudar.src = images[0];
                document.querySelector(".cenarios-imagem").appendChild(ima);
                const bola = document.querySelector(".imagem.adicionada");
                var esquerda;

                var timer = setInterval(function () {
                    if (images.includes("src" + mudar.src.split("src")[1])) {
                        mudar.src = images[index];
                        if (index == 0) {
                            bola.style.height = "0px";
                            bola.style.left = mudar.style.left;
                            bola.style.top = "30%";
                            bola.src = "src/imagens/goku2/324.png";
                        }
                        else if (index == 1) {
                            bola.style.height = "10px";
                        } else if (index == 2) {
                            bola.style.height = "50px";
                            esquerda = parseInt(mudar.style.left, 10);
                            bola.style.left = (esquerda - 1) + "%";
                        } else if (index == 3) {
                            bola.style.height = "150px";
                            esquerda = parseInt(mudar.style.left);
                            bola.style.left = (esquerda - 3) + "%";
                        } else if (index == 5) {
                            bola.src = "src/imagens/goku2/332.png";
                        } else if (index == 6) {
                            esquerda = parseInt(mudar.style.left) + 10;
                            bola.style.left = esquerda + "%";
                            bola.style.top = "40%";
                        } else if (index == 7) {
                            esquerda = parseInt(mudar.style.left) + 20;
                            bola.style.left = esquerda + "%";
                            bola.style.top = "50%";
                        } else if (index == 8) {
                            bola.src = "src/imagens/effects/23.png";
                        } else if (index == 9) {
                            bola.src = "src/imagens/effects/33.png";
                        } else if (index == 10) {
                            bola.src = "src/imagens/effects/32.png";
                        } else if (index == 11) {
                            bola.src = "src/imagens/effects/31.png";
                        }

                        index > 10 ? index = 0 : index++;

                    } else {
                        clearInterval(timer);
                    }
                }, 250);

            },
            5: function () {
                limpa();
                let images = ["src/imagens/goku/0.png", "src/imagens/goku/1.png", "src/imagens/goku/2.png", "src/imagens/goku/3.png", "src/imagens/goku/4.png",
                    "src/imagens/goku/5.png", "src/imagens/goku/6.png", "src/imagens/goku/7.png", "src/imagens/goku/8.png", "src/imagens/goku2/156.png", "src/imagens/goku2/1-1.png"];

                let mudar = document.querySelector(".cenario-personagem");
                mudar.style.height = "130px";
                mudar.src = images[0];

                let index = 0;

                var timer = setInterval(function () {
                    if (images.includes("src" + mudar.src.split("src")[1]) && index < 11) {
                        if (index > 8) {
                            if (mudar.style.left != "48%") {
                                mudar.src = images[index];
                            } else {
                                index += 15;
                            }
                        } else {
                            mudar.src = images[index];
                        }
                        index++;
                    } else {
                        mudarPersonagem(["Personagem", "id4"]);
                        clearInterval(timer);
                    }
                }, 150);
            }
        },
        tamanho: function (mudar) {
            mudar.style.height = "100px";
            mudar.style.top = "53%";
            mudar.style.left = "48%";
        }
    },
    2: {
        nome: "Vegeta IV",
        descricao: ["Vegeta"],
        img: "src/imagens/vegetaBase.png",
        rosto: "#",
        mudarImagem: async function () {
            let images = ["src/imagens/goku2/34.png", "src/imagens/goku2/35.png", "src/imagens/goku2/36.png", "src/imagens/goku2/35.png", "src/imagens/goku2/40.png"];
            let index = 0;

            const mudar = document.querySelector(".cenario-personagem");

            function change() {
                if (images.includes("src" + mudar.src.split("src")[1])) {
                    mudar.src = images[index];
                    index > 3 ? index = 0 : index++;
                } else {
                    clearInterval(change);
                }
            };

            setInterval(change, 109);
        },
        habilidades: {
            1: "",
            2: "",
            3: "",
            4: ""
        },
        transformacao: "Super Saiyajin src/imagens/ssj.gif",
        habilidadeUsar: {
            1: function () {
                return "Test0";
            },
            2: function () {
                return "Test1";
            },
            3: function () {
                return "Test2";
            },
            4: function () {
                return "Test3";
            },
            5: function () {
                mudarPersonagem();
            }
        },
        tamanho: function (mudar) {
            mudar.style.height = "100px";
            mudar.style.top = "50%";
            mudar.style.left = "48%";
        }
    },
    3: {
        nome: "Son Gohan",
        descricao: ["Gohan"],
        img: "src/imagens/gohan.png",
        habilidades: {
            1: "",
            2: "",
            3: "",
            4: ""
        },
        transformacao: "",
        habilidadeUsar: {
            1: function () {
                return "Test0";
            },
            2: function () {
                return "Test1";
            },
            3: function () {
                return "Test2";
            },
            4: function () {
                return "Test3";
            },
            5: function () {
                mudarPersonagem();
            }
        },
        tamanho: function (mudar) {
            mudar.style.height = "100px";
            mudar.style.top = "50%";
            mudar.style.left = "48%";
        }
    },
    4: {
        nome: "SSJ Goku",
        descricao: ["SSJ Goku"],
        img: "src/imagens/goku2/110.png",
        rosto: "src/imagens/goku/9.png",
        habilidades: {
            1: "Kienzan src/imagens/goku2/330.png",
            2: "Instant-Kamehameha src/imagens/instant.webp",
            3: "Meteor-Combo src/imagens/goku2/339.png",
            4: ""
        },
        mudarImagem: function () {
            let images = ["src/imagens/goku2/110.png", "src/imagens/goku2/111.png", "src/imagens/goku2/112.png"];
            let index = 0;

            let max = images.length - 2;

            const mudar = document.querySelector(".cenario-personagem");

            var change = setInterval(function () {
                if (images.includes("src" + mudar.src.split("src")[1])) {
                    mudar.src = images[index];
                    index > max ? index = 0 : index++;
                } else {
                    clearInterval(change);
                }
            }, 110);
        },
        transformacao: "SSJ 3 src/imagens/ssj.gif",
        habilidadeUsar: {
            1: function () {
                limpa();
                let images = ["src/imagens/goku2/171-1.png", "src/imagens/goku2/171.png", "src/imagens/goku2/177.png", "src/imagens/goku2/156.png", "src/imagens/goku2/1-1.png",
                    "src/imagens/goku2/113.png"];
                let index = 0;
                let qtd = 0;

                const mudar = document.querySelector(".cenario-personagem");
                mudar.src = images[0];
                mudar.style.left = "25%";

                function atualizar() {
                    const atua = document.querySelectorAll(".imagem.adicionada");
                    atua.forEach(element => {
                        if (parseInt(element.style.left, 10) < 55) {
                            element.style.left = (parseInt(element.style.left, 10) + 15) + "%";
                            if (element.style.left == "65%") {
                                element.src = "src/imagens/effects/23.png";
                                element.style.height = "100px";
                                element.style.top = "50%";
                            }
                        }
                    });
                }

                function criar(num, imag) {
                    let ima = document.createElement('img');
                    ima.style.height = "20px";
                    ima.style.position = "absolute";
                    ima.style.top = "53%";
                    ima.style.left = num + "%";
                    ima.src = imag;
                    ima.classList = "imagem adicionada";
                    return ima;
                }

                var timer = setInterval(function () {
                    if (images.includes("src" + mudar.src.split("src")[1])) {
                        if (qtd < 4) {
                            mudar.src = images[index];
                            if (index == 2) {
                                qtd++;
                                atualizar();
                                document.querySelector(".cenarios-imagem").appendChild(criar(35, "src/imagens/goku2/330.png"))
                            } else {
                                atualizar();
                            }
                            index > 1 ? index = 0 : index++;
                        } else if (qtd > 3 && qtd < 7) {
                            atualizar();
                            qtd++;
                        } else if (qtd == 7) {
                            limpa()
                            document.querySelector(".cenarios-imagem").appendChild(criar(65, "src/imagens/effects/33.png"));
                            const im = document.querySelector(".imagem.adicionada");
                            im.style.height = "100px";
                            im.style.top = "50%";
                            mudar.src = "src/imagens/goku2/156.png";
                            qtd++;
                        } else if (qtd == 8) {
                            document.querySelector(".imagem.adicionada").src = "src/imagens/effects/32.png";
                            mudar.src = "src/imagens/goku2/1-1.png";
                            qtd++;
                        } else if (qtd == 9) {
                            document.querySelector(".imagem.adicionada").src = "src/imagens/effects/31.png";
                            mudar.style.left = "48%";
                            qtd++;
                        } else if (qtd == 10) {
                            limpa();
                            mudar.src = "src/imagens/goku2/113.png";
                            qtd++;
                        } else if (qtd == 11) {
                            mudar.src = "src/imagens/goku2/156.png";
                            qtd++;
                        } else if (qtd == 12) {
                            mudar.src = "src/imagens/goku2/1-1.png";
                            qtd++;
                        } else if (qtd == 13) {
                            mudar.src = images[0];
                            mudar.style.left = "25%";
                            qtd = 0;
                        }
                    } else {
                        clearInterval(timer);
                    }
                }, 150);
            },
            2: function () {
                limpa();
                return "Test1";
            },
            3: function () {
                limpa();
                return "Test2";
            },
            4: function () {
                limpa();
                return "Test3";
            },
            5: function () {
                mudarPersonagem(["Personagem", "id5"]);
            }
        },
        tamanho: function (mudar) {
            mudar.style.height = "100px";
            mudar.style.top = "53%";
            mudar.style.left = "48%";
        }
    },
    5: {
        nome: "SSJ3 Goku",
        descricao: ["SSJ3 Goku"],
        img: "src/imagens/goku2/275.png",
        rosto: "src/imagens/goku2/4.png",
        habilidades: {
            1: "",
            2: "",
            3: "",
            4: ""
        },
        transformacao: "",
        habilidadeUsar: {
            1: function () {
                return "Test0";
            },
            2: function () {
                return "Test1";
            },
            3: function () {
                return "Test2";
            },
            4: function () {
                return "Test3";
            },
            5: function () {
                mudarPersonagem();
            }
        },
        tamanho: function (mudar) {
            mudar.style.height = "100px";
            mudar.style.top = "50%";
            mudar.style.left = "48%";
        }
    }
};



function mudarPersonagem(elemento) {
    limpa();
    document.querySelector(".habilidades-diversos").style.visibility = "hidden";

    var mudar = document.querySelector(".personagem." + elemento[1]);

    if (mudar != null) {
        mudar.classList = elemento + " ativo";
        mudar = document.querySelector(".personagem.ativo:not(." + elemento[1] + ")");
        if (mudar != null) {
            var test = mudar.classList;
            mudar.classList = test[0] + " " + test[1];
        };
    };

    mudar = document.querySelector(".diverso.ativo");
    if (mudar != null) {
        var test = mudar.classList;
        mudar.classList = test[0] + " " + test[1];
    }

    var num = elemento[1].split("id")[1];

    document.querySelector('.nome').innerText = personagens[num].nome;
    document.querySelector('.descricao').innerText = personagens[num].descricao;
    document.querySelector('.rosto').src = personagens[num].rosto;
    var escrita = document.querySelectorAll('.escrita');
    escrita[0].style.visibility = 'visible';
    escrita[1].style.visibility = 'visible';

    escrita = document.querySelector('.cenario-personagem');
    escrita.src = personagens[num].img;
    escrita.style.visibility = 'visible';
    personagens[num].tamanho(escrita);

    escrita = document.querySelector('.habilidades')
    escrita.style.visibility = 'visible';
    escrita.style.maxHeight = "";

    const poderes = document.querySelectorAll(".habilidade");
    var i = 1;
    const botoes = document.querySelectorAll(".btn-habilidade");
    poderes.forEach(element => {
        var pod = personagens[num].habilidades[i].split(" ");
        if (pod != "") {
            element.src = pod[1];
            element.title = pod[0];
            botoes[i - 1].classList = "btn-habilidade " + i + " " + num;
        } else {
            element.src = "src/imagens/inativo.png";
            element.title = "";
            botoes[i - 1].classList = "btn-habilidade " + i + " vazio";
        }
        i += 1;
    });

    if (personagens[num].transformacao == "") {
        document.querySelector(".transformacao").src = "src/imagens/inativo.png";
        botoes[4].classList = "btn-habilidade 5 vazio";
    } else {
        const transform = document.querySelector(".transformacao");
        const nome = personagens[num].transformacao.split(" ");
        transform.src = nome[2];
        transform.title = nome[0] + " " + nome[1]
        botoes[4].classList = "btn-habilidade 5 " + num;
    }

    personagens[num].mudarImagem();
}

function ativarAbilidade(elemento) {
    const botao = document.querySelector(".btn-habilidade.disable");

    if (botao != null) {
        var classe = botao.classList;
        var adicionar = classe[2];
        if (classe[2] == "disable") {
            adicionar = classe[1];
        }
        botao.classList = classe[0] + " " + classe[1] + " " + adicionar;
    }

    elemento.classList = elemento.classList + " disable";
    elemento = elemento.classList;

    var person = elemento[2];
    if (elemento[2] == "disable")
        person = elemento[1];
    var habilidade = elemento[1];
    personagens[person].habilidadeUsar[habilidade]();
}