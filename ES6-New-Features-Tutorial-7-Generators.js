//generator allow for function to be created with "checkpoints" 
//function*, *, lets JavaScript know this is a genertor 
//yield, keyword means pause
//The yield keyword is used to pause and resume a generator function (function* or legacy generator function).
function* sampleGenerator(){
  yield 'apples';//return apple then pause
  yield 'bacon'; //return bacon then pause
  console.log('okay this is the line after bacon....');
  yield 'corn';  
}
//create a reference to sampleGenerator function
 let sample = sampleGenerator();

//console.log(sample.next().value);//run generator until you get to next statment
//when generator gets to the end, no more yield statements, done: true
//when generator has more goes to go, done: false
//next runs code until it gets to the next yield statment
//console.log(sample.next().value);
//console.log(sample.next().value);
//console.log(sample.next().value);
//if you use next(), and there isn't a next, the return is undefinded

//console.log('------------------');

//How is this even useful, think about this example
//Program to create new users for a website
//each time new user is created, a new ID is needed
function* getNextId(){
  let id = 0;
  while(id < 3)//only want 2 users, small server, lol, only a max number of users
     yield id++;//this is what yield does, every time we call the generator, return the next user ID and then pause and wait until I ask for the next user ID 
}

let createUser = getNextId();

console.log(createUser.next().value);
console.log(createUser.next().value);
console.log(createUser.next().value);
console.log('okay, i have something else to do....')
console.log(createUser().nex.value);