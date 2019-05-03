
var positions = document.querySelectorAll('.position');
for(var i= 0; i < positions.length; i++){
    positions[i].addEventListener( 'click', function() {
     this.classList.toggle('draw');
    });
}
//SUPER MARIO BROS
var superMarioBros = document.getElementById('superMarioBros');
superMarioBros.addEventListener('click', function(){
    var cards = document.querySelectorAll('.card')
    for(var i= 0; i < cards.length; i++){
        cards[i].style.display="block"
        }
    var notA = []
    for(var i= 0; i < cards.length; i++){
        var down =  cards[i].getElementsByClassName('face down')[0].innerText
        if(down!=="Super Mario Bros") {
            notA.push(cards[i])
        }   
    } 
    for(var i= 0; i < notA.length; i++){
        notA[i].style.display="none"
    }
})
//LEGEND OF ZELDA
var legendOfZelda = document.getElementById('legendOfZelda');
legendOfZelda.addEventListener('click', function(){
    var cards = document.querySelectorAll('.card')
    for(var i= 0; i < cards.length; i++){
        cards[i].style.display="block"
        }
    var notB = []
    for(var i= 0; i < cards.length; i++){
        var down =  cards[i].getElementsByClassName('face down')[0].innerText
        if(down!=="Legend of Zelda") {
            notB.push(cards[i])
        }   
    } 
    for(var i= 0; i < notB.length; i++){
        notB[i].style.display="none"
    }
})

//POKEMON
var pokemon = document.getElementById('pokemon');
pokemon.addEventListener('click', function(){
    var cards = document.querySelectorAll('.card')
    for(var i= 0; i < cards.length; i++){
        cards[i].style.display="block"
        }
    var notB = []
    for(var i= 0; i < cards.length; i++){
        var down =  cards[i].getElementsByClassName('face down')[0].innerText
        if(down!=="Pokemon") {
            notB.push(cards[i])
        }   
    } 
    for(var i= 0; i < notB.length; i++){
        notB[i].style.display="none"
    }
})

//FIRE EMBLEM
var fireEmblem = document.getElementById('fireEmblem');
fireEmblem.addEventListener('click', function(){
    var cards = document.querySelectorAll('.card')
    for(var i= 0; i < cards.length; i++){
        cards[i].style.display="block"
        }
    var notB = []
    for(var i= 0; i < cards.length; i++){
        var down =  cards[i].getElementsByClassName('face down')[0].innerText
        if(down!=="Fire Emblem") {
            notB.push(cards[i])
        }   
    } 
    for(var i= 0; i < notB.length; i++){
        notB[i].style.display="none"
    }
})