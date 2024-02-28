export default class Animal {
    #age;

    constructor(name) {
        this.name = name;
        // this.age = age;
    }

    getName = () => {
        return this.name;
    }

    setName = (newName) => {
        this.name = newName;
    }

    getAge = () => {
        return this.#age;
    }

    setAge = (newAge) => {
        this.#age = newAge;
    }

    walk() {
        alert(`${this.name} run!`);
    }
}