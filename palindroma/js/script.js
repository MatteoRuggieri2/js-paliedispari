// ESERCIZIO - Palindroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Chiedo all'utente di inserire una parola
let userWord = palindromeWord('ciao');


// Creo la funzione che mi permette di capire se la parola è palindroma

function palindromeWord(word) {

    // Leggo la parola all'incontrario
    let singleLetter;
    for (let i = word.length - 1; i >= 0; i--) {
        singleLetter = word[i];
        console.log(word[i]);

    }
    

    return singleLetter;
    
}
