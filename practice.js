const country = 'korea';
const continent = 'Asia';
const population = '70';
console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
 language = 'korean';
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);

console.log(population/2);
console.log(population > 6);
console.log(population < 33);

const description = 
country +
 'is in ' +
continent +
 ', and its ' +
  population + 
  'million people speak' + 
  language;
  console.log(description);

  //Lecture:Conversion and Coercion
const first ='9'-'5'; //4
const second  = '19' - '13' + '17'; //617
const third = '19' - '13' + 17; //23
const forth = '123' < 57; //false
const fifth = 5 + 6 + '4' + 9 - 4 - 2; // 1143
console.log(first , second , third , forth , fifth);
 
//Lecture :Equality Operators: == vs ===
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1) { //cuz === accept 1 to string so we must use number func!
    console.log('Only 1 border!');
}else if (numNeighbours > 1){
    console.log('More than 1 border in case');
}else{
    console.log('No borders');
}





