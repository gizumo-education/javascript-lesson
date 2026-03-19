// section5 Q1
let nikname = 'セイレン'

let age = '29'

let birth = '年齢は'+ age +'です。'

let self = '私のニックネームは'+ nikname +'です。'+ birth
console.log(self);

// Q2
let languages = ['Javascript', 'PHP', 'Ruby', 'Python' , 'Go'];

let templateText =`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強したいです。`;
console.log(templateText);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  birthday: '2000-09-27',
  greet: function(){
    console.log('Hello!');
  }
};
console.log(user.age);

// Q4
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

// Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age)/3);

// Q6
function sayHallo() {
  let Hi ='Hello';
  console.log(Hi);
}
sayHallo();

// Q7
let sayWorld = function () {
  console.log('World');
};

sayWorld();

// Q8
user.greet();

// Q9
let calc = {
  add: function(x,y){
    console.log(x+y);
  },
  subtract: function(x,y){
    console.log(x-y);
  },
  multiply: function(x,y){
    console.log(x*y);
  },
  divide: function(x,y){
    console.log(x/y)
  },
};

calc.add(3,4);
calc.subtract(15,5);
calc.multiply(7,7);
calc.divide(25,5);

// Q10
function remainder(x, y) {
  return x % y;
}
console.log('5 を 3 で割った余りは ' + remainder(5, 3) + ' です。');

// function foo() {
  // let x = 1;
// }
// console.log(x);
// x is not defined（変数 x が定義されていない）というエラーが出力される理由としては、スコープ外、変数の有効範囲の外だからです。
// つまり関数内の変数は関数内でしか呼び出すせない。こういった場合は、グローバル変数は関数内で参照できるので先に変数を関数の前に定義するのがいいじゃないでしょうか。

// section6 Q1

let random = Math.floor(Math.random() * 10);
console.log(random);

// Q2

setTimeout(() => {
  console.log('Hello World!');
}, 3000);

// Q3

let num = '0';

if (num === '0') {
  console.log('num is 0');
} else if (num > '0') {
  console.log('num is greater than 0');
} else if (num < '0') {
  console.log('num is less than 0');
}

// Q4

let numbers = [];

for(let i = 0; i < 100; i++){
  console.log(i+numbers);
}

// Q5

let mixed = [4, '2', 5, '8', '9', 0, 1];


for (let i = 0; i < mixed.length; i++) {
  if (mixed[i] === numbers&&num % 2 == 0) {
    console.log('even');
  } else if (typeof mixed[i] === numbers&&num % 2 == 1) {
    console.log('odd');
  }else if (mixed[i] != numbers){
    console.log('not number');
  }
}
// first commit 作成していなかったため同じ内容でのPUSH

