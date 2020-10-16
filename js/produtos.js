var lista = data
console.log(lista.length)

var bigbox = document.querySelector('#container-prod')

console.log(bigbox)


for(i=0;i<lista.length;i++) {
    console.log("Etapa " + i)
    bigbox.innerHTML += `
        <span class="prod" id="${lista[i].categoria}">
        <img src="${lista[i].img}" class="item-prod" >
        <p class="item-prod nome-prod">${lista[i].nome}</p>
        <p class="item-prod"><strike>${lista[i].valorTotal}</strike></p>
        <p class="item-prod valor-prod">${lista[i].valorReal}</p>
        <p class="item-prod">Categoria: <span class="valor-procurado">${lista[i].categoria}</span></p>
    </span>`
}