let cards = document.querySelectorAll(".card")


for(let card of cards) {card.addEventListener ("click",() => {
    let couleur = '#'+Math.floor(Math.random()*16777215).toString(16);
    card.style.backgroundColor = couleur
})}


