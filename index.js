fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e5d5e76a384982ee821b0e6f08df8e9b&hash=d94e58d231a0f76f3552dc0bba4bc479")
.then((response) => {
    return response.json();
}).then ((respostajson) =>{
    const divHeroi = document.querySelector('#herois');
    
    respostajson.data.results.forEach(element => {
    let srcimagem = element.thumbnail.path + '.' + element.thumbnail.extension 
    let nomeHeroi = element.name

    criaDivheroi(srcimagem, nomeHeroi, divHeroi)
 
})
console.log(respostajson);
});

function criaDivheroi(srcimagem, nomeHeroi, divHeroi){
    let divPai = document.createElement('div')
    let divFilho = document.createElement('div')
    let textName = document.createElement('text')
    let img = document.createElement('img')

    textName.textContent = nomeHeroi
    img.src = srcimagem

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divHeroi.appendChild(divPai)

    divPai.classList.add('personagem');

}