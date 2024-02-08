var lista = document.querySelectorAll('.lista li')
var animais = document.querySelectorAll('.c32 p')
var animaisInteiro = document.querySelectorAll('.c32 div')
lista.forEach(function(conteudo, index){
    conteudo.addEventListener('mouseover', function(){
        criarEvento(index)
    } )
    conteudo.addEventListener('mouseout', function(){
        remove()
    } )
})
function remove(){
    animais.forEach(function(conteudo2){
        conteudo2.classList.remove('color')
    })
}
function criarEvento(index2){
    animais.forEach(function(conteudo, index){
        if(index == index2){
            conteudo.classList.add('color')
        } else {
            conteudo.classList.remove('color')
        }
    })
}

lista.forEach(function(conteudo, index6){
    conteudo.addEventListener('click', function(){
        click(index6)
    } )
})


var remover2 = document.querySelectorAll('.remover')
function click(index6){
        remover2.forEach(function(conteudo){
            conteudo.style.display = 'inline-block'
        })
        animaisInteiro.forEach(function(conteudo, index3){
            conteudo.classList.remove('animacao')
            if(index6 != index3){
                conteudo.style.display = 'none'
                
            } else {
                conteudo.style.display = 'block'
                conteudo.classList.add('animacao')
                conteudo.children[0].classList.remove('laranja')
                conteudo.children[0].classList.add('azul')
                animais.forEach(function(conteudo4){
                    conteudo4.classList.remove('color')
                   
                })
            }
            
            
        })
}
function remover(conteudo){
    remover2.forEach(function(conteudo){
        conteudo.style.display = 'none'
    })
    animaisInteiro.forEach(function(conteudo, index){
        conteudo.children[0].classList.remove('azul')
        conteudo.children[0].classList.add('laranja')
        conteudo.style.display = 'block'
    })
}