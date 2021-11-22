// ESERCIZIO - Palindroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Chiedo all'utente di inserire una parola
let userWord = prompt(`Per vedere se una parola è polindroma inseriscila qui sotto e premi ok.`);
let wordResult = palindromeWord(userWord);
alert(wordResult);


// Creo la funzione che mi permette di capire se la parola è palindroma

// FUNCTION
// Questa funzione permette di capire se la parola è palindroma oppure no con un risultato booleano.
// Se è palindroma, avrà come risultato 'true', altrimenti 'false'.

// word --> E' la parola da analizzare

// return: 'true' se è palindroma, altrimenti 'false'.

function palindromeWord(word) {

    // Leggo la parola al contrario
    let invertedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        invertedWord += word[i];
    }


    let result;
    if (invertedWord === userWord) {
        result = 'Questa parola è palindroma!'
    } else {
        result = 'Questa parola non è palindroma!'
    }
    
    return result;

}
