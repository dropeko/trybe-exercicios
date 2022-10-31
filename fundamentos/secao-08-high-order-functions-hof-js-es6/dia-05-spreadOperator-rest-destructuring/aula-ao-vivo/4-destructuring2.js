// Faça uma função que receba um objeto representando um animal e retorne sua massa.



/* 
const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg'
  }
};
*/

// Formato: Lion (Panthera leo) weights around 186.55-225 kg

const animalDescription = ({ commonName, name, weightRange }) => { 
  const { min, max, measurementUnit = 'kg' } = weightRange;
  return `${commonName} (${name}) weights around ${min}-${max} ${measurementUnit}`;
};

module.exports = { animalDescription };