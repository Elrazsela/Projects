
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
        15,
        'Yellow cheese',
        '2016/03/05/19/24/cheese-1238395_960_720.jpg',
        'Great Picture really!'
    ),
    new Picture(
        3,
        'Ice cream',
        '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        'Very nice Picture'
    ),
    new Picture(
        55,
        'aaa',
        '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        'Another Great Picture',
    ),
    new Picture(
        55,
        'aaa',
        '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        'Another Great Picture',
    ),
];

export { pictures };