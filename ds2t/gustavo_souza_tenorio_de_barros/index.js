'use strict'

import{contatos} from "./contatos.js"


const criaCard = (contatos,indice) =>{
    const card = document.createElement("div")
    card.classList.add ('card')
    card.setAttribute('id','id-' + indice)

    card.addEventListener('click',(event)=>{
        carregarContatos(indice)
    })

    const foto = document.createElement('img')
    foto.classList.add('card_img')
    foto.src = contatos.image

    const nome = document.createElement('p')
    nome.classList.add('card_nome')
    nome.textContent = contatos.name

    const descricao = document.createElement('a')
    descricao.classList.add('card_description')
    descricao.textContent = contatos.description

    
    card.append(foto, nome , descricao)
    return card
}
const carregarContatos = ()=> {
    const container = document.getElementById('container_contatos')
    const cards = contatos.map(criaCard)

    container.replaceChildren(...cards)
}

carregarContatos()