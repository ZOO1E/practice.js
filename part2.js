/*
//32.Activating strict mode
'use strict' ; //secure code (to avoid error)

let hasDriversLicense = false;
const passTest =true;

if (passTest) hasDriversLicense =true; 
if(hasDriversLicense) console.log('i can drive :D')
//const interface ='audio';
//const private = 534 ; 
//const if = 'ddf';  이런거 안됨 선택자는 변수가 될 수 없음!

//33.함수
function logger () {
    console.log('My name is Juwon');
}
//calling / runnning /invoke function
logger();
logger();
logger();

function fruitProcessor(apples , oranges){
    const juice = 'Juice with ' + apples + ' apples and ' + oranges +' oranges.';
    return juice; 
    
}

 const applesJuice = fruitProcessor(5 , 0);
console.log(applesJuice);//console.log(fruitProcessor(5,0))

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);


//34.declaration,Expression

// dunction declaration
const age1 = calcAge1(1991);//expression과의 차이 변수정의가 선행해도 상관X

function calcAge1(birthYear){
    return 2037 - birthYear;
}
console.log(age1); 

//Fuction expression = value!!!!!!!!!!!!!!!!
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1,age2); 


//35.Function Arrow
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const calcage3 = birthYear => 2037 - birthYear; //we don't need to assign return
const age3 = calcage3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear , firsname) => { // Arrow는 한 함수에 return을 해야하는게 2개 있을때
    const age = 2037 - birthYear;
    const retirement = 65 - age ; 
    return firsname + 'retires in ' + retirement + 'years';
   //return retirement;
}

console.log(yearsUntilRetirement(1991 , 'Juwon'));
console.log(yearsUntilRetirement(1980 , 'Bob')); 

//36.calling one function other
function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples , oranges){
    const  applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = 'Juice with ' + applePieces+ ' applesPices and ' + orangePieces +' orangesPieces.';
    return juice;    
}
console.log(fruitProcessor(2,3));
const calcAge = function(birthYear){ //간단한 변수로 바꿔도 상관 X
    return 2037 -birthYear;
}

const yearsUntilRetirement = function(birthYear , firstname)  { // Arrow는 한 함수에 return을 해야하는게 2개 있을때
    const age = calcAge(birthYear);
    const retirement = 65 - age ; 
    if(retirement > 0 ){
        console.log(firstname + 'retires in ' + retirement + 'years');
        return retirement;// console같은 명령어는 return의 앞에 있어야 효력이 있음
        
    }else{
        console.log(firstname+'has already retired');
        return -1 ; // 
       
    }
   // return firsname + 'retires in ' + retirement + 'years';
   //return retirement;
}
console.log(yearsUntilRetirement(1991,'Juwon'));
console.log(yearsUntilRetirement(1950,'Mike')); 

//introduction to Arrays
const friend1 = 'michel';
const frined2 = 'steven';
const freind3 ='Peter';

const freinds = ['Michael','Steven' ,'Peter'];
console.log(freinds);

const Years = new Array(1991 ,1983 ,2000 ,2020);//Array function

console.log(freinds[0]) //pick Michael
console.log(freinds[2])

 console.log(freinds.length);
 console.log(freinds[freinds.length-1])

freinds[2] = 'Jay'; // Array is not a primitive value so we can change Peter to Jay
console.log(freinds);
//freinds =['Bob','Alice']

const firstname = 'jonas';
const jonas  = [firstname,'jonas','schmedman',2037-1991]


//Exercise
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const years =[1990,1967,2010,2002,2018];

calcAge(years);
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1])
console.log(age1,age2,age3);

const ages =[calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);

//40 Array operation
const friends = ['Michael','Steven' ,'Peter'];
//Add element
const newLength = friends.push('jay');// ["Michael", "Steven", "Peter", "jay"]
console.log(newLength); //3 -> 4
console.log(friends); 

friends.unshift('John');//앞쪽에 위치하게 함["John", "Michael", "Steven", "Peter", "jay"]
console.log(friends);

//remove element
friends.pop(); //remove Last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven')); //steven이 있어? 일치 :1
console.log(friends.indexOf('Bob'));//불일치 :-1

friends.push(23);
console.log(friends.includes('Steven')); //true false
console.log(friends.includes('Bob'));
console.log(friends.includes(23)); //number is not string

if(friends.includes('Steven')){
    console.log('Fuck you!!')
} 

// intro
const jarray =[
    'jona',
    'ssdssds',
    '2037-1991',
    'teacher',
    ['ses','holy' ,'shit']
];

const jonas = {//five keys
    firstName :'jona',
    lastName : 'ssdssds',
    age :2037-1991 ,
    job: 'teacher',
    friends:['ses','holy' ,'shit']
};//objects의 순서는 중요치 않아요 -> unstructure data
//but array에서는 순서가 중요합니다!
 
//Dot 
'use strict';
const jonas = { //five keys
    firstName :'jonas',
    lastName : 'ssdssds',
    age :2037-1991 ,
    job: 'teacher',
    friends:['ses','holy' ,'Michael']
};
console.log(jonas); 

console.log(jonas.lastName);//Dot!
 console.log(jonas['lastName']);//put any expression that we'd like

const nameKey = 'Name';
console.log(jonas['first' +nameKey]); // = jona 
console.log(jonas['last' +nameKey]); //이렇게 표현해도 됨! lastName

//console.log(jonas.'last' + namekey)//so we need brekets property
//Recap: brakets need compute the property name  

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstname ,lastname ,age ,job and friends');
//console.log(jonas.interestedIn);// jonas does not have property
  

if (jonas[interestedIn]){ //undefined value is falsy
    console.log(jonas[interestedIn]);
}else {
    console.log('Wrong request!Choose between firstname ,lastname ,age ,job and friends')
}

jonas.location = 'Portugal';
jonas['twitter']='@jonaschecthmen';
console.log(jonas);

//Challenge
//"jonas has 3 friends , and his best friend is called Michael"
console.log(jonas.firstName + 'has' +  jonas.friends.length + 'friends, and his best friend is called' +  jonas.friends[2]);
//중요한건 브라켓을 쓸때 object안에 있는 것들은 전부  string이기에 무조건 ''를 붙혀줘야환다!
*/
//Object methods
const jonas = { //five keys
    firstName :'jonas',
    lastName : 'ssdssds',
    birthYear : 1991 ,
    job: 'teacher', //string value
    friends:['ses','holy' ,'Michael'], //array vallue
    hasDriver: true, // boolean value

    // calcAge : function(birthYear){
    //     return 2037 - birthYear; // function value
    //}
    calcAge : function(){
        this.age = 2037 - this.birthYear; //위에서 배웠듯이 key추가
        return this.age;   // function value
    }  ,
    getSummary : function(){ 
        return jonas.firstName + 'is a ' 
        + jonas.age +'- years old '
         + jonas.job + ' and he has'
          + (jonas.hasDriver ? ' a':' no') 
          + ' diver license' }
    
                                    //this를 미리 쓰면은 key의 이름을 바꿨을때 전체를 다 수정해 줄 필요가 없다는 것.
};                                  // function declaration은 안됭ㅓ


console.log(jonas.calcAge());
//console.log(jonas['calcAge'](1991));

console.log(this.age); // this 는 key박스 안에서 적용가능!
console.log(jonas.age);
console.log(jonas.age);

//Challenge
//"jonas is a 46-years old teacher and he ahs a/no driver's license "
console.log(jonas.getSummary());



