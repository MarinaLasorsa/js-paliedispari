/* ESERCIZIO:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma:
la funzione deve ritornare true se la parola è palindroma
deve ritornare false se la parola non è palindroma
alla fine stampate in console un messaggio per dire all’utente il risultato del controllo.*/


//
// FUNZIONI
//

//Creare funzione con 1 parola in ingresso:
//SE la variabile parola invertita è uguale alla parola immessa dall'utente, allora ritorna true
//ALTRIMENTI ritorna false

function isPalindrome (word) {
    let invertedWord = "";

    //con ciclo for, passare ogni lettera della parola partendo dalla fine (length-1) e arrivando all'inizio (indice è >=0). 
    //Ciclo deve essere inverso, quindi i--.
    //creare variabile in cui concateno ogni lettera durante il ciclo, creando la parola invertita

    for (let i = userWord.length-1; i >= 0; i--) {
        let letter = userWord[i];
        invertedWord += letter;
    }
    
    if (word === invertedWord) {
        return true
    } else {
        return false
    }
}

//
// MAIN
//

//Dichiarare variabile per prompt in cui chiediamo parola ad utente

let userWord = prompt("Inserisci una parola"); //string


console.log(isPalindrome(userWord));
