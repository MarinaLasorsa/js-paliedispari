/*ESERCIZIO:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


//
// FUNZIONI
//

//Creare funzione che ritorni un numero a caso da 1 a 5

function numberGenerator () {
    return Math.floor(Math.random() * 5) + 1;
}

//Creare funzione isEven con un numero in ingresso:
//SE numero è divisibile per due, ritorna true
//ALTRIMENTI ritorna false

function isEven (number) {

    if (number % 2 === 0) {
        return "la somma è pari. Hai vinto!"
    } else {
        return "la somma è dispari. Hai perso!"
    }
}


//
// MAIN
//

//Dichiarare variabile per prompt in cui chiediamo numero all'utente e variabile computer

let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5")); //number

console.log("il tuo numero: ", userNumber);

let computerNumber = numberGenerator();

console.log("il numero del computer: ", computerNumber);

//Dichiarare variabile che somma i due numeri

let numbersSum = userNumber + computerNumber;

console.log("la loro somma: ", numbersSum);

//stampare funzione applicata a somma

console.log(isEven(numbersSum))