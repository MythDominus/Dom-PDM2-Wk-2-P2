function setup() {
    createCanvas(600, 600);

    // Test your code by creating objects, calling their methods, and printing the output to the console
    const brian = new Animal("Brian", 95, 10);
    console.log(brian.call());

    const pete = new FurryAnimal("Peter", 50, 3, color(255, 0, 0));
    console.log(pete.call());

    // TEST BIRD
    const pedro = new Bird('Pedro', 60, 2, 'short');
    console.log('Bird call:', pedro.call());
    console.log('Bird beak:', pedro.getBeakType());

        // TEST CAT
    const whiskers = new Cat('Whiskers', 80, 4, color(200, 200, 200));
    console.log('Cat call:', whiskers.call());

        // TEST DOG
    const rex = new Dog('Rex', 90, 5, color(150, 75, 0));
    console.log('Dog call:', rex.call());
    console.log('Dog fur color:', rex.getFurColour());
}

function draw() {
    background(255);
    
}

/**
 * Represents an Animal
 */
class Animal {
    #name;
    #healthLevel;
    #age;
    #posX;
    #posY;


    /**
     * Creates a new Animal
     * @param {string} name 
     * @param {number} health A number between 0 and 100
     * @param {number} age 
     */
    constructor(name, health, age) {
        this.#name = name;
        this.#healthLevel = health;
        this.#age = age;
        // This line uses JavaScript methods in place of p5.js round() and random()
        this.#posX = Math.round(Math.random() * 600);
        this.#posY = Math.round(Math.random() * 500);
    }


    /**
     * Gets the animal's x coordinate
     * @returns {number}
     */
    getX() {
        return this.#posX;
    }


    /**
     * Gets the animal's y coordinate
     * @returns {number}
     */
    getY() {
        return this.#posY;
    }


    /**
     * Returns the animal's health level.
     * @returns {number}
     */
    getHealthLevel() {
        return this.#healthLevel;
    }


    /**
     * Decreases the animal's health. The health level cannot fall below 0.
     */
    decreaseHealth() {
        this.#healthLevel = Math.max(0, this.#healthLevel - 1);
    }


    /**
     * Gets the animal's age
     * @returns {number}
     */
    getAge() {
        return this.#age;
    }


    /**
     * Returns a message from the animal
     * @returns {string}
     */
    call() {
        return `Hello, my name is ${this.#name}`;
    }


    /**
     * Move the animal to the given x position
     * @param {number} newPosX The new x position
     */
    moveX(newPosX) {
        this.#posX = newPosX;
    }


    /**
     * Move the animal to the given y position
     * @param {number} newPosY The new y position
     */
    moveY(newPosY) {
        this.#posY = newPosY;
    }
}


/**
 * A subclass representing animals with fur
 */
class FurryAnimal extends Animal {
    #furColour;

    constructor(name, health, age, colour) {
        super(name, health, age);
        this.#furColour = colour;
    }


    /**
     * Gets the animal's fur colour.
     * @returns {color}
     */
    getFurColour() {
        return this.#furColour;
    }
}

class Bird extends Animal {
    #beakType

    constructor(name, health, age, beakType) {
        super(name, health, age);
        this.#beakType = beakType;
    }

    getBeakType() {
        return this.#beakType
    }

    decreaseHealth() {
        for (let i = 0; i < 5; i++) {
            super.decreaseHealth();
        }
    }
}

class Cat extends FurryAnimal {

    jumpAt(bird) {
        this.moveX(bird.getX());
        this.moveY(bird.getY());
        bird.DecreaseHealth();
    }

    call() {
        return 'meow'; 
    }
}

class Dog extends FurryAnimal {
    barkAt(cat) {
        const dx = cat.getX() - this.getX();
        const dy = cat.getY() - this.getY();
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) {
            console.log('Woof!');
        }
    }
}