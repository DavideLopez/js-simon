console.log('simon')
 // genera 5 numeri random compresi tra 1 e 100
let numberGenerator = Array.from({length:5}, () => Math.floor(Math.random()* 100) + 1)

console.log(numberGenerator)

alert(numberGenerator)


setTimeout(() => {
    let userNumbers = []
    //chiedi all'utente 5 numeri da pushare in un array
    while (userNumbers.length < 5 ) {
        i = parseInt(prompt('Ora prova a inserire uno dei numeri visualizzati!'))
        userNumbers.push(i)
    }
    console.log(userNumbers)

   //metti a confronto i risultati
   for ( i = 0; i < userNumbers.length; i++) {

    if (userNumbers[i] === numberGenerator[i]) {
        console.log(userNumbers[i] + 'Hai indovinato i seguenti numeri: ')
    } else {
        console.log(userNumbers[i] + 'non hai indovinato i seguenti numeri..... ')
    }
   }
 
}, 5000)