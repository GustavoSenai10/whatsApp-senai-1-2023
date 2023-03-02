'use strict'

import{contatos} from "./contatos.js"


const criaCard = (contatos) =>{
    const card = document.createElement("div")
    card.classList.add ('card')

    const foto = document.createElement('img')
    foto.classList.add('card_image')
    foto.src = contatos.image

    const nome = document.createElement('h5')
    nome.classList.add('card_nome')
    nome.textContent = contatos.nome

    const descricao = document.createElement('a')
    descricao.classList.add('card_description')
    descricao.textContent = contatos.descricao

    card.append(foto, nome , descricao)
    return card
}
const carregarContatos = ()=> {
    const container = document.getElementById('container_contatos')
    const cards = contatos.map(criaCard)

    container.replaceChildren(...cards)
}
carregarContatos()