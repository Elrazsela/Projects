/* const cat = {
    color: 'brown',

    printColor() {
        return `Hello! My cat is ${this.color}`;
    }
};
console.log(cat.printColor());
 */


/* class Cat {
    constructor(colorOfCat, age){
        this.color = colorOfCat;
        this.age = age;
    }

    printColor(){
        return `Hello! My cat is ${this.color}.`;
    }
}
const brownCat = new Cat('brown', 2);
console.log(brownCat.printColor());

const yellowCat = new Cat('yellow', 2);
console.log(yellowCat.printColor()); */


//  exercise #1
/* class Vegetable {
    constructor(kindOfVegetable){
        this.kindOfVegetable = kindOfVegetable;

    }
    printMe(){
    return `Vegetable name is: ${this.kindOfVegetable}`;

    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.printMe()); */

//exercise #2

class Color {
    constructor(color){
        this.colorName = color;
        
    }

    printColor(){
        return `Hello! My color is ${this.colorName}.`;
    }
}

const blue = new Color('blue');
console.log(blue.printColor());