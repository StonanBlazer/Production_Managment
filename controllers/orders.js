const Order = require('../models/order');
const path = require('path');

exports.home = function (req, res) {
    res.sendFile(path.resolve('views/orders.html'));
};

exports.create = function (req, res, next) {
    var newOrder = new Order(req.body);
    newOrder.save(function (err) {
        if (err) {
            res.status(400).send('Unable to save order to database' + ' ERROR: ' + err);
        } else {
            Order.create(req.body).then(function (order) {
                res.send(order);
            }).catch(next);
        }
    })
};

exports.index = function (req, res, next) {
    Order.find({}).then(function (orders) {
        res.send(orders);
    }).catch(next);
};
