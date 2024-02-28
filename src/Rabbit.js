import Animal from "./Animal.js";

export default class Rabbit extends Animal {
    constructor() {
        super("Rabbit");
    }
    walk() {
        super.walk();
        alert(`${this.name} jumps!`);
    }
}

// new Rabbit().walk();