// Chiedi all'utente la sua email
const user = prompt("inserisci la tua email");
// Controllare che sia nella lista di accesso
const email = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com", "email5@gmail.com", "email6@gmail.com", ]
let result = false;

for(let i = 0;i < email.length; i++){
 // 1.se è sulla, stampa messaggio accesso
// 2.se non è sulla lista, stampa messaggio di negazione
    if(user === email[i]){
        result = true
    }
}

if(result){
    console.log("accesso garantito")}
else{
        console.log("accesso negato");
    };



