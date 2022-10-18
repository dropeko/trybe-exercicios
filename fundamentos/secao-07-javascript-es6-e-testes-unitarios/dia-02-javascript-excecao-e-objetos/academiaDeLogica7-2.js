const verificaPar = (num) => num % 2 === 0 && console.log(`o valor ${num} é par!`);

verificaPar(5);

// ---------------------------------------------------------------------------------------

const array = [7, 8, 6, 4, 3, 2, 1, 77, 88]

const somaPar = (array) => {
  let somador = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0 ){
      somador += array[index];
    }    
  }
  return somador
}

console.log(somaPar(array));