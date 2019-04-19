// choose player: X & O
// select location on board
// append x or o to location
// change player

var player
var prevPlayer

function selectX () {
    player= 'X'
    console.log('player1:', player1)
}
function selectO () {
    player= "O"
}

function setValue(element) {
    //console.log('player', player)
    if (!player) {
        alert('select a player')
    } else if (prevPlayer === player) {
        alert('cheater. It is not your turn')
    } else {
        element.innerText = player
        prevPlayer = player
    }
}