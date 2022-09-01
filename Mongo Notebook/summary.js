// create database:
use demoDb;

// add collection + documents + fields into the DB:
db.products.insertMany([
    {
        name: 'aaa',
        description: '...',
        price: 15
    },
    {
        name: 'bbb',
        description: '...',
        price: 36
    }
]);

// mark field that must have a unique value in a collection:
db.users.createIndex({ email: 1 }, { unique: true })

// update field in a document with specific id:
db.products.updateOne({ _id: ObjectId('62c6c279e4086f757e7b442e') }, { $set: { name: 'Great product' } });

// update multiple documents with the same value:
db.posts.updateMany(
    {
        _id: {
            $in: [
                ObjectId('62c97bd19f2e7617f7a57885'),
                ObjectId('62c97bd19f2e7617f7a57886')
            ]
        }
    },
    { $set: { description: 'I have nothing to describe' } }
);

// delete document by id:
db.products.deleteOne({ _id: ObjectId('62c6c279e4086f757e7b442e') });

// remove a field from a document:
db.products.updateMany(
    { barcode: "unknown" },
    { $unset: { quantity: "", instock: "" } }
);


/* ~~~~~~~~~~~~~~~ FIND ~~~~~~~~~~~~~~~~~~ */

// find all documents in a collection:
db.products.find();

// find document using a query with a certain criteria to search:
db.products.find({ name: 'aaa' });

// search in documents using the $or operator
db.posts.find({
    $or: [
        { body: 'yet another body of something' },
        { description: 'update this!' }
    ]
});

// find all documents that answering both conditions (and):
db.posts.find({ isPopular: true, title: 'first title' })

// find document using query operators
db.products.find({ $and: [{ price: { $gte: 10 } }, { price: { $lte: 20 } }] });

// search inside document with field of type array:
db.suppliers.find({ paymentMethods: { $in: ['cache'] } });

// find all documents, return just specific fields:
db.ads.find({}, { "title": 1, _id: 0 })

// find documents using an operator, return just specific fields:
db.ads.find({ "ticketPrice": { $gte: 52 } }, { "title": 1, "ticketPrice": 1, _id: 0 })

// find all documents, skip the first one, return just 2:
db.ads.find().limit(2).skip(1)

// find all documents, sort in ascending order (A-Z):
db.ads.find().sort({ "ticketPrice": 1 })

// find documents using an operator, return just specific fields and only the first 2, sort in descending order (Z-A):
db.ads.find({ "ticketPrice": { $gte: 20 } }, { "title": 1, "ticketPrice": 1, _id: 0 }).limit(2).sort({ "ticketPrice": -1 })