//Q1

let nickname = 'ごっしー';
let age = 28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age +'です。');


//Q2

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を挑戦してみたいです。`);


//Q3

let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
};

console.log(user.age);

//Q4

let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    },
];

console.log(playerList[1].favorites[1]);


//Q5
 
let sum = 0;
let count = 0;

for(let i=0; i<=2; i++) {
    sum += playerList[i].age;
    if(i == 0){
        sum = playerList[i].age;
    }
    count++;
}

function average(sum, count){
   return sum / count;
}

console.log(average(sum, count));

//Q6

function sayHello(){
    console.log('Hello');
}
sayHello();

let sayWorld = function(){
   console.log('World'); 
}
sayWorld();


//Q7


user.birthday = '2009-09-27';
user.sayHello = function(){
    console.log('Hello!');
}

user.sayHello();


//Q8

let calc = {};

calc.add = function(x, y){
    console.log(x + y);
}
calc.substract = function(x, y){
    console.log(x - y);
}
calc.multiply = function(x, y){
    console.log(x * y);
}
calc.divide = function(x, y){
    console.log(x / y);
}


calc.add(3, 4);
calc.substract(12, 2);
calc.multiply(7, 7);
calc.divide(25, 5);


//Q9
let x = 5;
let y = 3;

function remainder(x, y){
    return x % y;
}

console.log(`${x}を${y}で割った余りは${remainder(5,3)}です。`);


//Q10

//変数xは、console.log()のスコープ外で定義されているので参照できない。



//応用編

//Q1

console.log(Math.floor(Math.random() * 10));

//Q2

function sayHi(){
    console.log('Hello World');
}
setTimeout(sayHi, 3000);

//Q3
let num =9;

if(num>0){
    console.log('num is greater than 0');
}else if(num<0){
    console.log('num is less than 0');
}else{
    console.log('num is 0');
}

//Q4


function increment(){
    let numbers = [];
    for(let i=0; i<=99; i++){
    numbers.push(i);
    }
    return numbers;
}

console.log(increment());


//Q5



let mixed = [4, '2', 5, '8', '9', 0, 1];

for(let i=0; i<=6; i++){
    if(typeof mixed[i] === "number" && mixed[i] % 2 == 0){
        console.log('even');
    }else if(typeof mixed[i] === "number" && mixed[i] % 2 != 0){
        console.log('odd');
    }else{
        console.log('not number');
    }
}

