// dichiarazione variabili
const userName = prompt('inserisci il tuo nome:');
const userLastName = prompt('inserisci il tuo cognome:');
const userColor = prompt('inserisci il tuo colore preferito:');
// esecuzione 
const psw = userName + userLastName + userColor + '21';
// output
document.getElementById('user-password').innerHTML = psw;