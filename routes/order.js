var express = require('express');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('order/order',{ title: 'Order'});
});

router.get('/noodles', function (req, res, next) {
    res.render('order/noodles',{ title: 'Noodles'});
});

router.get('/meat', function (req, res, next) {
    res.render('order/meat',{ title: 'Meat'});
});

router.get('/topping', function (req, res, next) {
    res.render('order/topping',{ title: 'Topping'});
});

router.get('/add-on', function (req, res, next) {
    res.render('order/add-on',{ title: 'Add-on'});
});

module.exports = router;