//complete this code
class Animal {
	constructor(species);
	get makeSound(){
		console.log("animals make sound");
	}
	
}

class Dog extends Animal {
	super(species)
	bark()
	{
		console.log("bark");
	}
	
}

class Cat extends Animal {
	super(species)
	bark(){
		console.log("woof");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
