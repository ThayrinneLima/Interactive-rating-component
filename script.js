var numeros = document.querySelectorAll('.rating')
var escolhido = 0
var exibeEscolhido = document.getElementById('escolhido')

function ativa(n){
    escolhido = n

    n = n-1
    for(let i=0;i<numeros.length;i++)
    {
        if(numeros[i].classList.contains('active')){
            numeros[i].classList.remove('active')
        }
    }
    numeros[n].classList.add('active')
}


function enviar(){
    var card1 = document.getElementById('card1')
    var card2 = document.getElementById('card2')

  
    card1.style.display = 'none'
    card2.style.display = 'flex'
    exibeEscolhido.innerText = escolhido
}