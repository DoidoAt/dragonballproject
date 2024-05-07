function limpa() {
    const remo = document.querySelectorAll(".imagem.adicionada");
    remo.forEach(element => {
        document.querySelector(".cenarios-imagem").removeChild(element)
    });
}


const personagens = {
    1: {
        nome: "Son Goku",
        descricao: ["Son Goku, nascido Kakarotto, é o protagonista das franquias Dragon Ball.\n Ele é neto adotivo de Vovô Gohan, filho de Bardock e Gine, o irmão mais novo de Raditz, o marido de Chichi, pai de Gohan e Goten, avô de Pan e mais tarde tataravô de Goku Jr. \n Alegre, corajoso, e também um pouco ingênuo, Goku é um Saiyajin originalmente enviado à Terra quando criança com a missão de destruí-la. Porém, um acidente altera sua memória, fazendo-o crescer com um coração puro e depois se torna o maior defensor da Terra, e também o líder informal dos Guerreiros Z. \n Seguindo os ensinamentos de seus mestres, ele treina duro e deseja ser sua melhor versão possível."],
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
            mudar.style.transform = "scaleX(1)";

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
                mudarUm.style.zIndex = 1;
                let index = 0;

                function criar(num, imag) {
                    let ima = document.createElement('img');
                    ima.style.height = "100px";
                    ima.style.position = "absolute";
                    ima.style.top = "53%";
                    ima.style.left = num + "%";
                    ima.src = imag;
                    ima.classList = "imagem adicionada";
                    ima.style.zIndex = 0;
                    return ima;
                }


                var timer = setInterval(function () {

                    if (images.includes("src" + mudarUm.src.split("src")[1])) {
                        limpa();
                        mudarUm.src = images[index];
                        if (index == 1) {
                            let x = parseInt(mudarUm.style.left, 10) + 6;
                            const adiciona = criar(x, "src/imagens/goku2/90.png");
                            for (x; x < 40; x++) {
                                document.querySelector(".cenarios-imagem").appendChild(criar(x, "src/imagens/goku2/88-1.png"));
                            };
                        
                            adiciona.style.left = x + "%";
                            adiciona.style.zIndex = 2;
                            document.querySelector(".cenarios-imagem").appendChild(adiciona);

                        } else if (index == 2) {
                            let x = parseInt(mudarUm.style.left, 10) + 6;
                            const adiciona = criar(x, "src/imagens/goku2/90.png");
                            for (x; x < 50; x++) {
                                document.querySelector(".cenarios-imagem").appendChild(criar(x, "src/imagens/goku2/88-1.png"));
                            };
                        
                            adiciona.style.left = x + "%";
                            adiciona.style.zIndex = 2;
                            document.querySelector(".cenarios-imagem").appendChild(adiciona);
                        } else if (index == 3) {
                            let x = parseInt(mudarUm.style.left, 10) + 6;
                            const adiciona = criar(x, "src/imagens/goku2/90.png");
                            for (x; x < 58; x++) {
                                document.querySelector(".cenarios-imagem").appendChild(criar(x, "src/imagens/goku2/88-1.png"));
                            };
                            adiciona.style.left = x + "%";
                            adiciona.style.zIndex = 2;
                            document.querySelector(".cenarios-imagem").appendChild(adiciona);
                        } else if (index == 4) {

                            let x = parseInt(mudarUm.style.left, 10) + 6;

                            const adiciona = criar(x, "src/imagens/goku2/94.png");

                            for (x; x < 65; x++) {
                                document.querySelector(".cenarios-imagem").appendChild(criar(x, "src/imagens/goku2/93-1.png"));
                            }
                            adiciona.style.left = (x - 1) + "%";
                            adiciona.style.zIndex = 2;
                            document.querySelector(".cenarios-imagem").appendChild(adiciona);

                        } else if (index == 5) {
                            let x = parseInt(mudarUm.style.left, 10) + 6;

                            const adiciona = criar(x, "src/imagens/goku2/94.png");

                            for (x; x < 70; x++) {
                                document.querySelector(".cenarios-imagem").appendChild(criar(x, "src/imagens/goku2/93-1.png"));
                            }
                            adiciona.style.left = (x - 1) + "%";
                            adiciona.style.zIndex = 2;
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
                let images = ["src/imagens/goku2/79.png", "src/imagens/goku/0-1.png"];
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

                if (parseInt(mudar.style.left, 10) > 60) {
                    mudar.style.left = "60%";
                }

                ima.style.height = "0px";
                ima.style.position = "absolute";
                ima.style.top = "30%";
                ima.style.left = (parseInt(mudar.style.left, 10) + 3) + "%";
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
                            if (esquerda > 70)
                                esquerda = 70;
                            bola.style.left = esquerda + "%";
                            bola.style.top = "40%";
                        } else if (index == 7) {
                            esquerda = parseInt(mudar.style.left) + 20;
                            if (esquerda > 70)
                                esquerda = 70;
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
                    "src/imagens/goku/5.png", "src/imagens/goku/6.png", "src/imagens/goku2/110.png", "src/imagens/goku2/111.png", "src/imagens/goku2/156.png", "src/imagens/goku2/1-1.png"];

                let mudar = document.querySelector(".cenario-personagem");
                mudar.style.height = "130px";
                mudar.src = images[0];

                let index = 0;

                var timer = setInterval(function () {
                    if (images.includes("src" + mudar.src.split("src")[1]) && index < 11) {
                        if (index == 7)
                            mudar.style.height = "100px";
                        else if (index > 8) {
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
                        mudarPersonagem(["Personagem", "id2"]);
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
        transformacao: "SSJ 2 src/imagens/ssj.gif",
        habilidadeUsar: {
            1: function () {
                limpa();
                let images = ["src/imagens/goku2/171-1.png", "src/imagens/goku2/171.png", "src/imagens/goku2/177.png", "src/imagens/goku2/156.png", "src/imagens/goku/0-1.png",
                    "src/imagens/goku2/194.png"];
                let index = 0;
                let qtd = 0;

                const mudar = document.querySelector(".cenario-personagem");
                mudar.src = images[3];

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
                        if (qtd == 0) {
                            mudar.src = images[4];
                            qtd++;
                        } else if (qtd == 1) {
                            mudar.src = images[0];
                            mudar.style.left = "25%";
                            mudar.style.top = "53%";
                            qtd++;
                        } else if (qtd < 6) {
                            mudar.src = images[index];
                            if (index == 2) {
                                qtd++;
                                atualizar();
                                document.querySelector(".cenarios-imagem").appendChild(criar(35, "src/imagens/goku2/330.png"))
                            } else {
                                atualizar();
                            }
                            index > 1 ? index = 0 : index++;
                        } else if (qtd > 5 && qtd < 9) {
                            atualizar();
                            qtd++;
                        } else if (qtd == 9) {
                            limpa()
                            document.querySelector(".cenarios-imagem").appendChild(criar(65, "src/imagens/effects/33.png"));
                            const im = document.querySelector(".imagem.adicionada");
                            im.style.height = "100px";
                            im.style.top = "50%";
                            mudar.src = images[3];
                            qtd++;
                        } else if (qtd == 10) {
                            document.querySelector(".imagem.adicionada").src = "src/imagens/effects/32.png";
                            mudar.src = images[4];
                            qtd++;
                        } else if (qtd == 11) {
                            document.querySelector(".imagem.adicionada").src = "src/imagens/effects/31.png";
                            mudar.style.left = "48%";
                            qtd++;
                        } else if (qtd == 12) {
                            limpa();
                            mudar.src = images[5];
                            qtd++;
                        } else if (qtd == 13) {
                            mudar.src = images[3];
                            qtd++;
                        } else if (qtd == 14) {
                            mudar.src = images[4];
                            qtd++;
                        } else if (qtd == 15) {
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
                let images = ["src/imagens/goku2/236.png", "src/imagens/goku/0-1.png", "src/imagens/goku2/194.png", "src/imagens/goku/0-2.png", "src/imagens/goku/1-2.png",
                    "src/imagens/goku/2-2.png", "src/imagens/goku/3-2.png", "src/imagens/goku/4-2.png", "src/imagens/goku/5-2.png", "src/imagens/goku/0-1.png",
                    "src/imagens/goku/6-2.png", "src/imagens/goku/6-2.png", "src/imagens/goku/6-2.png", "src/imagens/goku/6-2.png", "src/imagens/goku/0-2.png"];
                const mudar = document.querySelector(".cenario-personagem");
                mudar.src = images[0];
                let positions = ["48%", "30%", "59%"];
                let index = 0;
                let atual = parseInt(mudar.style.left, 10);

                function aleatorio(max, atual) {
                    let constant = Math.floor(Math.random() * max);
                    while (constant == atual) {
                        constant = Math.floor(Math.random() * max);
                    }
                    return constant;
                }

                function criar(num, imag, num2) {
                    let ima = document.createElement('img');
                    ima.style.height = "150px";
                    ima.style.position = "absolute";
                    ima.style.top = num2 + "%";
                    ima.style.left = num + "%";
                    ima.src = imag;
                    ima.classList = "imagem adicionada";
                    ima.style.transform = "scaleX(-1)";
                    return ima;
                }

                var timer = setInterval(function () {
                    if (images.includes("src" + mudar.src.split("src")[1])) {
                        limpa();
                        if (index == 0) {
                            limpa();
                        }
                        else if (index == 2) {
                            atual = aleatorio(3, atual);
                            mudar.style.left = positions[atual];
                            mudar.style.top = "20%";
                            mudar.style.transform = "scaleX(1)";
                        } else if (index == 10) {
                            mudar.style.height = "170px";
                            mudar.style.top = "50%";
                            mudar.style.transform = "scaleX(-1)";
                            mudar.style.left = (parseInt(mudar.style.left, 10) + 9) + "%";
                            if (parseInt(mudar.style.left, 10) > 65) {
                                mudar.style.top = "32%";
                            }
                            let dist = parseInt(mudar.style.left, 10) - 5.7;
                            let dist2 = parseInt(mudar.style.top, 10) + 1.3;
                            document.querySelector(".cenarios-imagem").appendChild(criar(dist, "src/imagens/goku/7-2.png", dist2));
                        } else if (index == 11) {
                            let x;
                            let dist = parseInt(mudar.style.left, 10) - 5.7;
                            let dist2 = parseInt(mudar.style.top, 10) + 1.3;
                            while (dist > 50) {
                                x = criar(dist, "src/imagens/goku/6-3.png", dist2);
                                document.querySelector(".cenarios-imagem").appendChild(x);
                                dist -= 5.5;
                            }
                            document.querySelector(".cenarios-imagem").appendChild(criar(dist, "src/imagens/goku/7-2.png", dist2));
                        } else if (index == 12) {
                            let x;
                            let dist = parseInt(mudar.style.left, 10) - 5.7;
                            let dist2 = parseInt(mudar.style.top, 10) + 1.3;
                            while (dist > 35) {
                                x = criar(dist, "src/imagens/goku/6-3.png", dist2);
                                document.querySelector(".cenarios-imagem").appendChild(x);
                                dist -= 5.5;
                            }
                            document.querySelector(".cenarios-imagem").appendChild(criar(dist, "src/imagens/goku/7-2.png", dist2));
                        } else if (index == 13) {
                            let x;
                            let dist = parseInt(mudar.style.left, 10) - 5.7;
                            let dist2 = parseInt(mudar.style.top, 10) + 1.3;
                            while (dist > 25) {
                                x = criar(dist, "src/imagens/goku/6-3.png", dist2);
                                document.querySelector(".cenarios-imagem").appendChild(x);
                                dist -= 5.5;
                            }
                            document.querySelector(".cenarios-imagem").appendChild(criar(dist, "src/imagens/goku/7-2.png", dist2));
                        } else if (index == 14) {
                            mudar.style.height = "100px";
                            mudar.style.left = (parseInt(mudar.style.left, 10) + 5) + "%";
                        };

                        mudar.src = images[index];
                        index > 13 ? index = 0 : index++;

                    } else {
                        mudar.style.height = "100px";
                        mudar.style.transform = "scaleX(1)";
                        clearInterval(timer);
                    }
                }, 120);
            },
            3: function () {
                limpa();
                let imagens = ["src/imagens/goku2/114.png", "src/imagens/goku2/116.png", "src/imagens/goku2/115.png",
                    "src/imagens/goku2/141.png", "src/imagens/goku2/142.png", "src/imagens/goku2/138.png", "src/imagens/goku2/143.png",
                    "src/imagens/goku/0-1.png", "src/imagens/goku2/139.png", "src/imagens/goku2/150.png", "src/imagens/goku/0-1.png",
                    "src/imagens/goku2/144.png", "src/imagens/goku2/147.png", "src/imagens/goku2/148.png", "src/imagens/goku2/149.png",
                    "src/imagens/goku2/156-1.png", "src/imagens/goku/0-1.png"];

                let index = 0;
                let positions = ["48%", "30%", "59%"];
                let lado = 0;

                const mudar = document.querySelector(".cenario-personagem");
                mudar.src = imagens[0];

                function aleatorio(max, atual) {
                    let constant = Math.floor(Math.random() * max);
                    while (constant == atual) {
                        constant = Math.floor(Math.random() * max);
                    }
                    return constant;
                }

                var timer = setInterval(function () {
                    if (imagens.includes("src" + mudar.src.split("src")[1])) {
                        mudar.src = imagens[index]
                        console.log(index);
                        if (index == 0) {
                            let num = parseInt(mudar.style.left, 10);
                            if (num > 50) {
                                index++;
                            }
                        } else if (index == 1) {
                            let num = parseInt(mudar.style.left, 10);
                            mudar.style.left = (num + 10) + "%";
                            index++;
                        } else if (index == 2) {
                            let num = parseInt(mudar.style.left, 10);
                            mudar.style.left = (num - 10) + "%";
                            mudar.style.transform = "scaleX(-1)";
                            lado = 1;
                        } else if (index == 7) {
                            mudar.style.top = "20%";
                        } else if (index == 10) {
                            mudar.style.top = "53%";
                            let num = parseInt(mudar.style.left, 10);
                            if (lado == 0)
                                mudar.style.left = (num + 10) + "%";
                            else
                                mudar.style.left = (num - 10) + "%";
                        } else if (index == 16) {
                            let atual = parseInt(mudar.style.left, 10);
                            atual = aleatorio(3, atual);
                            mudar.style.left = positions[atual];
                            mudar.style.transform = "scaleX(1)";
                            lado = 0;
                        }
                        index > 15 ? index = 0 : index++;
                    } else {
                        mudar.style.transform = "scaleX(1)";
                        clearInterval(timer);
                    }
                }, 120);
            },
            4: function () {
                limpa();
            },
            5: function () {
                let images = ["src/imagens/goku/8.png", "src/imagens/goku/4-3.png", "src/imagens/goku/5-3.png", "src/imagens/goku/4-3.png",
                    "src/imagens/goku/5-3.png", "src/imagens/goku/6.png", "src/imagens/goku/3-3.png", "src/imagens/goku/3-3.png", "src/imagens/goku2/236.png", "src/imagens/goku/0-1.png",
                    "src/imagens/goku2/190.png", "src/imagens/goku2/191.png", "src/imagens/goku2/192.png"];

                let index = 1;
                const mudar = document.querySelector(".cenario-personagem");
                mudar.src = "src/imagens/goku/8.png";
                let esquerda = parseInt(mudar.style.left, 10);

                var timer = setInterval(function () {
                    if (images.includes("src" + mudar.src.split("src")[1]) && index < 13) {
                        mudar.src = images[index];
                        if (index == 7 && esquerda == 48) {
                            index += 3;
                        } else if (index == 8) {
                            mudar.style.height = "100px";
                        } else if (index == 9) {
                            mudar.style.left = "48%";
                            mudar.style.top = "53%";
                            mudar.style.height = "130px";
                        }
                        index++;
                    } else {
                        mudarPersonagem(["Personagem", "id3"]);
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
    3: {
        nome: "SSJ2 Goku",
        descricao: ["SSJ2 Goku"],
        img: "src/imagens/goku2/190.png",
        rosto: "src/imagens/goku/0-3.png",
        mudarImagem: function () {
            let images = ["src/imagens/goku2/190.png", "src/imagens/goku2/191.png", "src/imagens/goku2/192.png"];
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
            }, 150);
        },
        habilidades: {
            1: "",
            2: "",
            3: "",
            4: ""
        },
        transformacao: "SSJ 3 src/imagens/ssj.gif",
        habilidadeUsar: {
            1: "",
            2: "",
            3: "",
            4: "",
            5: function () {
                let images = ["src/imagens/goku/4-3.png", "src/imagens/goku/5-3.png", "src/imagens/goku/4-3.png", "src/imagens/goku/5-3.png", "src/imagens/goku/5.png",
                    "src/imagens/goku/6.png", "src/imagens/goku/7-3.png", "src/imagens/goku/8-2.png", "src/imagens/goku/8-2.png", "src/imagens/goku/9-2.png", "src/imagens/goku/10.png",
                    "src/imagens/goku/0-4.png"];

                let index = 0;

                const mudar = document.querySelector(".cenario-personagem");
                mudar.src = images[0];

                var timer = setInterval(function () {
                    if (images.includes("src" + mudar.src.split("src")[1]) && index < 12) {
                        mudar.src = images[index];
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
    4: {
        nome: "SSJ3 Goku",
        descricao: ["SSJ3 Goku"],
        img: "src/imagens/goku/10.png",
        rosto: "src/imagens/goku/1-3.png",
        mudarImagem: function () {
            let auras = ["src/imagens/effects/18-1.png", "src/imagens/effects/19-1.png"];

            function criar(imag, z, tamanho, op) {
                let ima = document.createElement('img');
                ima.style.height = tamanho + "px";
                ima.style.position = "absolute";
                ima.style.top = "48%";
                ima.style.left = "44.2%";
                ima.src = imag;
                ima.classList = "imagem adicionada";
                ima.style.opacity = op + "%";
                ima.style.zIndex = z;
                return ima;
            }

            function atualizar(mudar) {
                let tam = parseInt(mudar.style.top, 10);
                if (tam > 50) {
                    mudar.style.top = (tam - 5) + "%";
                } else {
                    mudar.style.top = "60%";
                }
            }

            document.querySelector(".cenario-personagem").style.zIndex = 1;

            document.querySelector(".cenarios-imagem").appendChild(criar(auras[0], 0, 150, 78));
            document.querySelector(".cenarios-imagem").appendChild(criar("src/imagens/effects/17-1.png", 2, 50, 50));
            document.querySelector(".cenarios-imagem").appendChild(criar("src/imagens/effects/52.png", 3, 12, 60));

            const mudar = document.querySelectorAll(".imagem.adicionada");
            let mudar1 = mudar[0];
            let mudar2 = mudar[1];
            mudar2.style.top = "60%";
            mudar2.style.left = "45.5%";
            let mudar3 = mudar[2];
            mudar3.style.top = "59%";
            mudar3.style.left = "46.5%";

            let index = 0;

            var timer = setInterval(function () {
                if (auras.includes("src" + mudar1.src.split("src")[1])) {
                    mudar1.src = auras[index];
                    atualizar(mudar2);
                    atualizar(mudar3);
                    index > 0 ? index = 0 : index++;
                } else {
                    clearInterval(timer);
                }
            }, 150);

        },
        habilidades: {
            1: "Dragon-Punch src/imagens/goku/5-5.png",
            2: "Genki-Dama src/imagens/energy.gif",
            3: "",
            4: ""
        },
        transformacao: "",
        habilidadeUsar: {
            1: function () {
                limpa();
                let images = ["src/imagens/goku/0-4.png", "src/imagens/goku/9-2.png", "src/imagens/goku/1-4.png", "src/imagens/goku/3-4.png", "src/imagens/goku/3-4.png",
                    "src/imagens/goku/2-4.png", "src/imagens/goku/3-4.png", "src/imagens/goku/3-4.png", "src/imagens/goku/3-4.png", "src/imagens/goku/2-4.png",
                    "src/imagens/goku/4-4.png", "src/imagens/goku/5-4.png", "src/imagens/goku/0-1.png"];

                let index = 0;

                const mudar = document.querySelector(".cenario-personagem");
                mudar.src = images[0];

                var timer = setInterval(function () {
                    if (images.includes("src" + mudar.src.split("src")[1])) {
                        mudar.src = images[index];

                        if (index == 0) {
                            mudar.style.top = "53%";
                            mudar.style.left = "48%";
                        } else if (index == 2) {
                            mudar.style.transform = "scaleX(-1)";
                        } else if (index == 3) {
                            mudar.style.left = "35%";
                        } else if (index == 4) {
                            mudar.style.left = "25%";
                        } else if (index == 5) {
                            mudar.style.transform = "scaleX(1)";
                        } else if (index == 6) {
                            mudar.style.left = "35%";
                        } else if (index == 7) {
                            mudar.style.left = "45%";
                        } else if (index == 8) {
                            mudar.style.left = "55%";
                        } else if (index == 10) {
                            mudar.style.left = "60%";
                            mudar.style.top = "40%";
                        }
                        else if (index == 11) {
                            mudar.style.height = "280px";
                            mudar.style.left = "60%";
                            mudar.style.top = "20%";
                        } else if (index == 12) {
                            mudar.style.height = "100px";
                            mudar.style.top = "40%";
                        }

                        index > 11 ? index = 0 : index++;
                    } else {
                        clearInterval(timer);
                    }
                }, 150);

            },
            2: function () {
                limpa();

                let imagens = ["src/imagens/goku/6.png", "src/imagens/goku/1-1.png", "src/imagens/goku/0-1.png", "src/imagens/goku/3-5.png", "src/imagens/goku/2-5.png",
                    "src/imagens/goku/0-1.png", "src/imagens/goku/1-6.png", "src/imagens/goku/1-5.png", "src/imagens/goku/1-5.png", "src/imagens/goku/1-5.png",
                    "src/imagens/goku/1-6.png", "src/imagens/goku/0-6.png", "src/imagens/goku/4-5.png", "src/imagens/goku/4-5.png", "src/imagens/goku/5-8.png",
                    "src/imagens/goku/8-4.png", "src/imagens/goku/7-4.png", "src/imagens/goku/7-4.png", "src/imagens/goku/7-4.png",
                    "src/imagens/goku/6-4.png", "src/imagens/goku/6-4.png", "src/imagens/goku/6-4.png"];


                const mudar = document.querySelector(".cenario-personagem");
                mudar.src = imagens[0];

                let index = 0;
                let max = imagens.length - 2;
                let lado = -1;

                let ima = document.createElement('img');
                ima.src = "src/imagens/goku/0-5.png";
                ima.classList = "imagem adicionada";
                ima.style.height = "0px";
                ima.style.position = "absolute";
                ima.style.top = (parseInt(mudar.style.top, 10) - 30) + "%";
                ima.style.left = (parseInt(mudar.style.left, 10) - 2) + "%";
                document.querySelector(".cenarios-imagem").appendChild(ima);

                var timer = setInterval(function () {
                    if (imagens.includes("src" + mudar.src.split("src")[1])) {
                        mudar.src = imagens[index];
                        if (index == 2) {
                            mudar.style.top = "53%";
                            if (mudar.style.transform == "scaleX(-1)") {
                                lado = 1;
                                mudar.style.left = "65%";
                            } else {
                                lado = -1;
                                mudar.style.left = "25%";
                            }
                        } else if (index == 5) {
                            mudar.style.top = "35%";
                        } else if (index == 7) {
                            ima.style.height = "100px";
                            ima.style.left = (parseInt(mudar.style.left, 10) - 2) + "%";
                            ima.style.top = (parseInt(mudar.style.top, 10) - 15) + "%";
                        } else if (index == 8) {
                            ima.style.height = "150px";
                            ima.style.left = (parseInt(mudar.style.left, 10) - 3) + "%";
                            ima.style.top = (parseInt(mudar.style.top, 10) - 20) + "%";
                        } else if (index == 9) {
                            ima.src = "src/imagens/goku/9-3.png";
                            ima.style.height = "200px";
                            ima.style.left = (parseInt(mudar.style.left, 10) - 5) + "%";
                            ima.style.top = (parseInt(mudar.style.top, 10) - 25) + "%";
                        } else if (index == 11) {
                            ima.style.left = (parseInt(ima.style.left, 10) - (lado * 15)) + "%";
                            ima.style.top = (parseInt(ima.style.top, 10) + 25) + "%";
                        } else if (index == 12) {
                            ima.style.left = (parseInt(ima.style.left, 10) - (lado * 15)) + "%";
                            ima.style.top = (parseInt(ima.style.top, 10) + 20) + "%";
                        } else if (index == 16) {
                            ima.src = "src/imagens/goku/10-2.png";
                        } else if(index == 19){
                            ima.src = "src/imagens/effects/23.png";
                            ima.style.height = "150px";
                        } else if(index == 21){
                            ima.src = "src/imagens/goku/0-5.png";
                            ima.style.height = "0px";
                        }

                        index > max ? index = 0 : index++;
                    } else {
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
    5: {
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
    6: {
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