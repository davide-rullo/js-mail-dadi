
let dadoUtente = Math.floor(Math.random() * 6) + 1;
let dadoCPU = Math.floor(Math.random() * 6) + 1;

console.log("L'utente ha fatto " + dadoUtente);
console.log("La CPU ha fatto " + dadoCPU);

if (dadoUtente > dadoCPU){
    console.log("Hai vinto!");
} else if (dadoUtente < dadoCPU) {
    console.log("Mi dispiace, vince la CPU!");
} else {
    console.log("Pareggio!");
}