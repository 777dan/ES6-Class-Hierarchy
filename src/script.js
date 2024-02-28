import Dog from "./Dog.js";
import Cat from "./Cat.js";
import Rabbit from "./Rabbit.js";

const {setAge, getAge} = new Dog();
setAge(3);
alert(getAge());

new Dog().walk();
new Cat().walk();
new Rabbit().walk();