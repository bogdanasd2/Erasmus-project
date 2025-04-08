/*different types of commands*/
/*var means variable*/
/*let means variable,no use */
/*dont name a command a variable */
/*number= number 
let number=2;
let numer2=3.14;
let chain= chain of charcaters;
let chain2 = chain of characters;
string=chain of characters
boolean=true or false
null
undefinned
object=object
let alumo{
'name':'luna',
'call':'masa';
'hobby':'playing'}*/

var means = 'antonio';
let  call = 'Masa';  

console.log(means);
console.log(call);

var means = 'luna';
console.log('luna');

//types of data in javascript
let number=10;
console.log("the variable number " + "is " + typeof number);
console.log("the content is:" + number);
let baoolean = true;
console.log(typeof boolean);
let chain
let alumo = {
    'name':'luna',
    'call':'Masa',
    'hobby':'playing'
}
console.log(typeof chain);
//arithmetic =asign a value to a value
//sum and equal
//divide and equal
//rest and equal
/*arithmetic
sum +
rest -
multiplication *
division /
module %
*/
let number1 =10;
let number2 =5;
console.log(number1+number2)
console.log(number1%number2)
console.log(number1/number2)
/*Operators of logic and comparasion
equal ==
strictly equal ===
distinct !=
strictly distinct !==
greater than >
greater or equal t0 >=
lesser than <
lesser or equal to =<
*/
console.log(number1=number2);
number1=10;
chain= '10';
console.log(number == chain) //true
console.log(number1 == chain) //false
/*
 quantification
 
 joins two strings 
 syntax
 "Hola"+"Mundo
 "Mola Mundo""*/
 /*Operator termination
 syntax
 codition ?
 value1:value2
 if the condition is true and returns value 1 or value 2 */
 console.log(number1===number2? "are inequal":"are differences")
 /*Conditionals
 if...else
 syntax
 if(condition){
 
 code blonde and green
}else\
{
code block is false
}
value fakes :
false
underlead
nul
0
nun
'' = empty string


sqitch...case
syntax:
switch (expression)
case value1:
    code the block and value1
    break;
case value1:
    code the block and value2

default:
    default code block if no previous value

if(condition1){
code
}else if(condition2){
code2
}else if (condition3){
code3
}else{
default code
}
*/
number = 'Luna';
switch(number){
    case'Luna':
    console.log("Hi i'm luna");
    break;
    case'antonio':
    console.log("hi i'm antonio")
    break;

    default:
        console.log("hi i can't say")

}
/*for
syntax
for(leti=0;i<10;i++)
reapeats for up to  10 times


while
syntax:
while(condition)
coding blocks


do...while
syntax:
do{
blocks of coding
}while(condition)*/

/* 
functions
syntax:
function functionnumber(optional parameters)
{
coding blocks
return optional if it returns value
}
*/
function Arithmeticoperation(operator,value1,value2){
    if(operator === '*'){
        return value1 * value2;

    }else if(operator === '+'){
        return value1 + value2;
    }else if(operator ==='-'){
        return value1 - value2;
    }else if(operator === '/'){
        return value1 / value2;
    }
}
Arithmeticoperation('*',number1,number2);
console.log("the result is:" + result)
Arithmeticoperation('+',number1,number2);
console.log("the result is:" + result)
Arithmeticoperation('-',number1,number2);
console.log("the result is:" + result)
Arithmeticoperation('/',number1,number2);
console.log("the result is:" + result)
/*Arrays/Lists
let fruit = {'apple','banana','orange'}
*/
let fruit = {'apple', 'banana': 'orange'};
console.log(typeof fruit);
/*  object flow
properties equal attributes
methods equal an action that can carry out (function)
*/

console.log(fruit(0));
/* iterate through elements of a list*/
fruit.array.forEach(element => {
    console.log(element);
});
//add an element to the list
fruit.push('Kiwi');
console.log(fruit);
/*remove an element from the list */
fruit.pop();
console.log(fruit);
//array size
console.log(fruit.length)
//Orientative programationn of objects
//create an object
let person = nav object();
let car={};
person = {
    "name":"luna",
    "age"='4' ,
    "profession":"salahor",
    'laugh':function(){
        console.log("I'm laughing 😂");
    }
}
console.log(person);
//acces data of the object
console.log(personalbar.name)
console.log(person['ended']);
//add programs
person.pais = 'Spanish';
console.log(person)

person.laugh()

/*classes
an improvement towards objetcs
The classes are like fabrics of objects
syntax:
*/
class Robot{
    constructor(name){
        this.name= name;
    }
    talk(){
        console.log('hell i am' (this.name), 'your robot friend');
    }
}
robot.talk();
      move(){
    console.log('$(this.name) is moving');
}
let robot1 = new Robot('Atibot');
robot1.talk();
robot1.move();
let robot2 = new Robot('Atibot');
robot2.talk();
robot2.move();

class Dancerrobot extends Robot{
    dance(){
        console.log('$(this.name) is dancing');  
    }
}
let Dancerrobot = new Dancerrobot
    ('DancerBot','Green');
    Dancerrobot.talk();
    Dancerrobot.dance();
    robot1.dance();
    
function greet(name){
    console.log('Hi',$(name));
}
function enterName(callback){
    let name = prompt("Write your name");
    
    callback(name);
}