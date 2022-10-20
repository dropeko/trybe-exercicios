function techList(arrayTech, name){
  if (arrayTech.length === 0){
    return 'Vazio!'
  }
  let newArray = [];
  for (let index = 0; index < arrayTech.length; index += 1) {
    newArray.push({tech: arrayTech.sort()[index], name: name});
  }
  return newArray;
};






module.exports = techList;