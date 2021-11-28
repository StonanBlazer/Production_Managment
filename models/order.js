const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema ({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    ground: {type: String, required: true},
    bag: {type: String, required: true},
    quantity: {type: String, required: true},
});

module.exports = mongoose.model('Order', Order)