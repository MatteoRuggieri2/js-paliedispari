// ESERCIZIO - Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// chiedo all'utente se sceglie pari o dispari
const userChoice = prompt('Cosa scegli? Pari o Dispari?');

// chiedo all'utente che numero sceglie da 1 a 5
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

// il pc sceglie un numero da 1 a 5
const pcNumber = casualNumber1To5()
alert(`Il numero scelto dal computer è ${pcNumber}`);

// sommo il numero dell'utente a quello del pc
const somma = userNumber + pcNumber


// Vedo se il numero è pari o dispari
let evenOrOddResult = evenOrOdd(somma)

if (evenOrOddResult) {
    gameResult = 'pari';
} else {
    gameResult = 'dispari';
}

// dichiaro il vincitore
if (userChoice === gameResult) {
    alert(`E' ${gameResult}, hai vinto!`);
} else {
    alert(`E' ${gameResult}, hai perso!`);
}




// FUNCTION
// creo una funzione per generare un numero casuale da 1 a 5
// da utilizzare senza inserire alcun argomento
// return: fornisce un numero compreso tra 1 e 5 inclusi 1 e 5.
function casualNumber1To5() {
    const result = Math.floor(Math.random() * 5) + 1;

    return result;
}


// FUNCTION
// creo una funzione che mi dice se il numero è pari o dispari, fornendomi un risultato booleano.
// number --> Numero da valutare
// result: 'true' se è pari oppure 'false' se è dispari
function evenOrOdd(number) {
    let result = '';
    if (number % 2 == 0) {
        result = true
    } else {
        result = false
    }

    return result;
}