/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore
sia per il computer.Stabilire il vincitore, in base a chi
 fa il punteggio più alto. */

let dadoUtente = Math.floor(Math.random() * 6) + 1;
let dadoCPU = Math.floor(Math.random() * 6) + 1;

console.log("L'utente ha fatto " + dadoUtente);
console.log("La CPU ha fatto " + dadoCPU);

if (dadoUtente > dadoCPU) {
    console.log("Hai vinto!");
} else if (dadoUtente < dadoCPU) {
    console.log("Mi dispiace, vince la CPU!");
} else {
    console.log("Pareggio!");
}


/*Mail
Chiedi all'utente la sua email, controlla che sia nella lista
di chi può accedere, stampa un messaggio appropriato sull’esito 
del controllo.*/

/*const userEmail = prompt("Inserisci la tua email")

const allowedEmails = ['andrea@gmail.com', 'gianni@gmail.com', 'luca@libero.it', 'sara@yahoo.it'];


    if (allowedEmails.includes(userEmail)){
        console.log("Benvenuto/a," + userEmail);
    } else {
        console.log("La tua email non risulta registrata");
    }
*/
   
// bottone e input

const confirmBtn = document.getElementById('confirm');
let userEmail = document.getElementById('emailDOM');
const allowedEmails = ['andrea@gmail.com', 'gianni@gmail.com', 'luca@libero.it', 'sara@yahoo.it'];

confirmBtn.addEventListener("click", function () {
    userEmail = userEmail.value;

    if (allowedEmails.includes(userEmail)){
        console.log("Benvenuto/a," + userEmail);
    } else {
        console.log("La tua email non risulta registrata");
    }
})


