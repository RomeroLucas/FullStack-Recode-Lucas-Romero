var filtros = document.querySelectorAll('.itemFiltro')
var produtos = document.querySelectorAll('.prod')

console.log(filtros)
console.log(produtos)

function filtrar(categoria) {
    for(i=0; i<produtos.length; i++) {
        if(categoria == produtos[i].id) {
            produtos[i].style.display = 'inline-block'
        } else {
            produtos[i].style.display = 'none'
        }
    }
}

function limpar() {
    for(i=0; i<produtos.length; i++) {
        produtos[i].style.display = 'inline-block'
    }
}




