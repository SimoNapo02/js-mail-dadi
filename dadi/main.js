// Generare un numero random da 1 a 6 per l'utente
const random = Math.floor(Math.random() * 6)+1
console.log(random)
// Generare un numero random da 1 a 6 per il computer
const randompc = Math.floor(Math.random() * 6)+1
console.log(randompc)
// stabilire il vincitore tramite numero più alto
    // se user>pc allora vince,
    //  altrimenti perde se minore, 
    // altrimenti pareggio se uguale

if(random>randompc){
    console.log("user ha vinto!")
} else if(random === randompc){
    console.log("pareggio!")
} else {
    console.log("pc ha vinto!")
}
