import Animal from "./Animal.js";

export default class Dog extends Animal {
    constructor() {
        super("Dog");
    }
    walk() {
        super.walk();
        alert(`${this.name} barks!`);
    }
}

// new Dog().walk();