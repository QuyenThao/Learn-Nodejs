var express = require('express');

var controller = require('../controllers/user.controller');
var validate = require('../validate/users.validate');

var router = express.Router();

router.get('/', controller.index);

router.get('/cookie', function(req, res, next) {
    res.cookie('user-id', 12345);
    res.send('Hello. Testing...........');
});

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.getId);

router.post('/create',validate.postCreate, controller.postCreate);

module.exports = router;

