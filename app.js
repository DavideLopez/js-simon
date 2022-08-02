console.log('simon')
 // genera 5 numeri random compresi tra 1 e 100
const numberGenerator = Array.from({length:5}, () => Math.floor(Math.random()* 100) + 1)

console.log(numberGenerator)

