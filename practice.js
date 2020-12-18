/*
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
//part2-1
function describeCountry(country,population,capitalCity) {
    return  country + 'has' + population + ' millions people and its capital city is' + capitalCity ;
}

describeKorea = describeCountry ('Korea' , 3 , 'seoul');
describeUSA = describeCountry('usa' , 15 , 'washington' );
describeJAPAN = describeCountry('japan' , 3 ,'tokyo');
console.log(describeKorea,describeUSA,describeJAPAN);

//part2-2 Declaration
function percentageOfWorld(population){ //Declaration은 시작을 function의 정의로 시작!
   return (population/7900) * 100
} 
percentOfKorea = percentageOfWorld(500);
percentageOfUSA = percentageOfWorld(2000);
percentageOfJapan = percentageOfWorld(1000);
console.log(percentOfKorea,percentageOfUSA,percentageOfJapan);

//expression
const percentageOfWorld2 = function (population){ //기본적으로 const로 함수를 정의함
    return (population/7900) * 100
} 


const percentOfSwiss = percentageOfWorld2(300); 
const percentOfEgypt = percentageOfWorld2(1350);
const percentOfEngland = percentageOfWorld2(1035);
 console.log(percentOfSwiss ,percentOfEgypt , percentOfEngland);

 //Arrow
const percentageOfWorld3 = population => (population/7900) * 100;
const percentageOfyou = percentageOfWorld3(3000);
console.log(percentageOfyou);

//LECTURE: Functions Calling Other Functions
function percentageOfIt(population){ //2개의 함수를 활용함!
    return (population/7900) * 100;
}

function describePopulation(country , population) {
    return country + 'has' + population + 'million people ,which is about ' + percentageOfIt + 'of the world';
}
percentOfKorea = percentageOfIt(500);
percentageOfUSA = percentageOfIt(2000);
percentageOfJapan = percentageOfIt(1000);
console.log(percentOfKorea,percentageOfUSA,percentageOfJapan);*/

// Introduction to Arrays
const populations = [200,400,1200,35];
console.log(populations.length === 4);

function percentageOfWorld1 (a){
    return (a/7900) * 100;
}

const percentages = [percentageOfWorld1(populations[0] ), percentageOfWorld1(populations[1] ), percentageOfWorld1(populations[2] ) ,percentageOfWorld1(populations [3])];
console.log(percentages);

//LECTURE: Basic Array Operations (Methods)
const neighbours =['Seoul','Pusan','Namji' ,'chanhneung' ];
neighbours.push ('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
console.log(neighbours.includes('Germany'))

if(neighbours.includes('Germany')){
    console.log('yes it is');
}else{
console.log('Probably not a central European country :D');
}

neighbours[3] = 'kimhae'; //neighbours [neighbours.indexOf('Seoul')] ='Republic of Sweden')
console.log(neighbours);

