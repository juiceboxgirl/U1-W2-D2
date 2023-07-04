/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log(12 > 8);
console.log(8 > 12);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const x = 5;
const y = 7;

if (x !== y) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const a = 25;
const b = 5;

if (a % b === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile");
}

// -------------------------------------------

console.log("Divisibile per 5", 25 % 5 === 0);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const alpha = 16;
const beta = 8;

if (alpha === 8) {
  console.log("Yes");
} else {
  console.log("No");
}

if (alpha - beta === 8) {
  console.log("True");
} else {
  console.log("False");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 75;

if (totalShoppingCart > 50) {
  console.log("Your total is 75€. Congratulations! Your shipping fee is on us :)");
} else {
  console.log("Oh no! Your shopping cart is less than 50€. Unlock 50€ of great stuff to get free shipping! :)");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

if (totalShoppingCart > 50) {
  console.log("Your total is 75€. Congratulations! Your shipping fee is on us :)");
} else {
  console.log("Oh no! Your shopping cart is less than 50€. Unlock 50€ of shopping to get free shipping! :)");
}
if (totalShoppingCart > 1) {
  console.log("BLACK FRIDAY PROMO: insert code BLKFRD23 for 20% OFF!");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const p = 44;
const r = 11;
const s = 9;

if (r < p && s < r) {
  if (r < s) {
    console.log(p, r, s);
  } else {
    console.log(s, r, p);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log(typeof 67);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (12 % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else if (val === 10) {
  console.log("Uguale a 10");
} else {
  console.log("Maggiore di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
};

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2];
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const math = [];
console.log(math);

const math2 = new Array(10);

for (let i = 0; i < math2.length; i++) {
  math2[i] = i + 1;
}

console.log(math2);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

math2.pop([9]);
console.log(math2);

math2.push(100);
console.log(math2);
