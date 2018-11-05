
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

let bucky = newPerson('bucky', 87, 6650);
let sally = newPerson('sally', 21, 89);

bucky.displayWeight();