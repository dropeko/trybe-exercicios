// Una os dois arrays de duas formas diferentes! Com loops e com spread operators!

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

let awesomeBooks = []; // ???

// Com FOREACH
// horrorBooks.forEach((horrorBook) => awesomeBooks.push(horrorBook));
// scifiBooks.forEach((scifiBook) => awesomeBooks.push(scifiBook));

// console.log(awesomeBooks);
















// Com SPREAD
awesomeBooks = [ ...horrorBooks, ...scifiBooks ];
console.log(awesomeBooks);







module.exports = { awesomeBooks }

