"use strict"

const botaoTrocarImagem = document.getElementById('trocar-imagem')

const imagens = [
    'imagem1.jpg',
    'imagem2.jpg',
    'imagem3.avif',
    'imagem4.jpg',
    'imagem5.webp'
]

let contador = 0
function trocarImagem(){
    contador = (contador + 1) % imagens.length /* % para voltar ao 0 quando atingir o max, pq 5/5 é 0 */
    const imagem = imagens[contador] /*pega a imagem correspondente ao indicce do array */
    document.documentElement.style.setProperty('--imagem-de-fundo', `url(${imagem})`)
}

botaoTrocarImagem.addEventListener('click', trocarImagem) /*ao clicar, chama a função trocar imagemS */