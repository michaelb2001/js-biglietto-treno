
/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km) .
va applicato uno sconto del 20% per i minorenni.
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). 
*/


let km = parseFloat( prompt("inserire numero di km da percorrere : ") );

console.log(km);

let etaPassegero = parseInt( prompt("inserire età passegero : ") );

console.log(etaPassegero);

const prezzoAlKm = 0.21;

let spesaKm = (parseFloat(prezzoAlKm * km)).toFixed(2);

let prezzoFinale = 0 ;

console.log(spesaKm);

if( etaPassegero < 18 ){

    let sconto = parseFloat((spesaKm * 20)/100);

    prezzoFinale = spesaKm - sconto;

} else if ( etaPassegero > 65 ){

    let sconto = (spesaKm * 40)/100;

    prezzoFinale = spesaKm - sconto;
    
} else {

    prezzoFinale = spesaKm;
}

let prezzoFinaleDueCifre = prezzoFinale.toFixed(2);

console.log(prezzoFinaleDueCifre);

document.write("un viaggio di "+ km + " Km con un passeggero di età pari a " + etaPassegero + " anni ha un costo complessivo di " +prezzoFinaleDueCifre +"€");





 



