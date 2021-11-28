const express = require('express');
const router = express.Router();
const order = require('../controllers/orders');

router.get('/orderIndex', function(req, res, next) {
    order.home(req,res);
});

router.get('/', function(req, res, next) {
    order.index(req,res);
});

router.post('/', function(req, res) {
    order.create(req,res);
});

router.put('/:id', function(req, res) {
    order.update(req,res)
});

router.delete('/:id', function(req, res) {
    order.delete(req,res)
});

module.exports = router;