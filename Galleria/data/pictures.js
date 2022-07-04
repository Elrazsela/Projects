
function addTax(price) {
    if (!price || price <= 0 || typeof (price) === 'string') {
        throw Error('Nothing is for free! please supply a price');
    }

    const vat = 1.17; // = maam
    const total = (price * vat).toFixed(2);
    return total;
}

class Picture {
    constructor(picturePrice, pictureName, pictureImage, pictureDescription) {
        this.price = picturePrice;
        this.name = pictureName;
        this.image = pictureImage;
        this.description = pictureDescription;
        this.id = this.generateId();
    }

    // for inner use - inside the class
    generateId() {
        const time = new Date().getTime();
        return Math.floor(Math.random() * time);
    }

    // for outer user - outside the class
    getPrice() {
        const totalPrice = addTax(this.price);
        return `$${totalPrice}`;
    }

    getName() {
        return this.name;
    }

    getImage() {
        const IMG_PATH = 'https://cdn.pixabay.com/photo/'; // configuration of the project
        return `${IMG_PATH}${this.image}`;
    }

    getDescription() {
        return this.description;
    }

    getId() {
        return this.id;
    }
}

const pictures = [
    new Picture(
        100,
        'Beutiful Flower',
        '2015/04/19/08/32/rose-729509_960_720.jpg',
        'Great Picture really!',
    ),
    new Picture(
        150,
        'Amazing Flower',
        '2022/06/28/19/39/flower-7290436_960_720.jpg',
        'Very nice Picture'
    ),
    new Picture(
        200,
        'Purple Rose',
        '2013/07/21/13/00/rose-165819_960_720.jpg',
        'Another Great Picture',
    ),
    new Picture(
        150,
        'Red Rose',
        '2014/04/10/11/35/red-320891_960_720.jpg',
        'Another Great Picture',
    ),
];

export { pictures };