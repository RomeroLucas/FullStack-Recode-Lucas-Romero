var produtos = document.querySelectorAll('.prod')



for(i=0;i<produtos.length;i++) {
    produtos[i].addEventListener('click', function (){
        if(this.classList == 'prod') {
            this.classList.remove('prod')
            this.classList.add('popup')
            console.log(this.classList)
        } else {
            this.classList.remove('popup')
            this.classList.add('prod')
        }
    })
}