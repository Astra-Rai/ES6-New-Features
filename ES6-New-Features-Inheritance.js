
class Person{
	constructor(name, age, weight){
		this.name = name;
		this.age = age;
		this.weight = weight;
}
	displayWeight(){
	console.log(this.weight);
	}

	displayName(){
	console.log(this.name);
	}	
	displayAge(){
	console.log(this.age);
  }
}

class Programmer extends Person{
	constructor(name, age, weight, language){
		super(name, age, weight);
		this.language = language;

	}
}
let sally = newPerson('Sally', 21, 89);
sally.displayName();
sally.displayAge();
sally.displayWeight();

console.log('---------------');

let bucky = new Programmer('Bucky Robers', 87, 987, 'JavaScript');

bucky.displayName();
bucky.displayAge();