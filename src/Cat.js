import Animal from "./Animal.js";

export default class Cat extends Animal {
    constructor() {
        super("Cat");
    }
    walk() {
        super.walk();
        alert(`${this.name} meows!`);
    }
}

// new Cat().walk();